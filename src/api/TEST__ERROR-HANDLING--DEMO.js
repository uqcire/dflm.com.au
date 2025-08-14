/**
 * Error Handling Test Demo
 * 
 * This file demonstrates how the error handling system works
 * and provides tests for different error scenarios.
 */

import { 
  handleApiError, 
  ApiError, 
  errorMonitor, 
  categorizeError,
  isCriticalError,
  formatErrorForDisplay,
  executeRecoveryStrategy,
  API_ERROR_TYPES
} from './errorHandler.js';

// =============================================================================
// TEST ERROR SCENARIOS
// =============================================================================

/**
 * Test network error
 */
function createNetworkError() {
  const error = new Error('Network Error');
  error.code = 'NETWORK_ERROR';
  return error;
}

/**
 * Test timeout error
 */
function createTimeoutError() {
  const error = new Error('timeout of 5000ms exceeded');
  error.code = 'ECONNABORTED';
  return error;
}

/**
 * Test HTTP 404 error
 */
function createNotFoundError() {
  const error = new Error('Request failed with status code 404');
  error.response = {
    status: 404,
    data: { message: 'Not Found' }
  };
  return error;
}

/**
 * Test HTTP 500 error
 */
function createServerError() {
  const error = new Error('Request failed with status code 500');
  error.response = {
    status: 500,
    data: { message: 'Internal Server Error' }
  };
  return error;
}

/**
 * Test Strapi validation error
 */
function createStrapiValidationError() {
  const error = new Error('Validation failed');
  error.response = {
    status: 400,
    data: {
      error: {
        name: 'ValidationError',
        message: 'Validation failed',
        details: {
          errors: [
            { path: ['title'], message: 'Title is required' }
          ]
        }
      }
    }
  };
  return error;
}

/**
 * Test unauthorized error
 */
function createUnauthorizedError() {
  const error = new Error('Request failed with status code 401');
  error.response = {
    status: 401,
    data: { message: 'Unauthorized' }
  };
  return error;
}

// =============================================================================
// TEST FUNCTIONS
// =============================================================================

/**
 * Test error categorization
 */
function testErrorCategorization() {
  console.log('🧪 Testing Error Categorization...');
  
  const testCases = [
    { name: 'Network Error', error: createNetworkError(), expected: API_ERROR_TYPES.NETWORK_ERROR },
    { name: 'Timeout Error', error: createTimeoutError(), expected: API_ERROR_TYPES.TIMEOUT_ERROR },
    { name: 'Not Found Error', error: createNotFoundError(), expected: API_ERROR_TYPES.NOT_FOUND },
    { name: 'Server Error', error: createServerError(), expected: API_ERROR_TYPES.INTERNAL_SERVER_ERROR },
    { name: 'Strapi Validation Error', error: createStrapiValidationError(), expected: API_ERROR_TYPES.STRAPI_VALIDATION_ERROR },
    { name: 'Unauthorized Error', error: createUnauthorizedError(), expected: API_ERROR_TYPES.UNAUTHORIZED }
  ];
  
  testCases.forEach(testCase => {
    const actual = categorizeError(testCase.error);
    const passed = actual === testCase.expected;
    
    console.log(`  ${passed ? '✅' : '❌'} ${testCase.name}: ${actual} ${passed ? '' : `(expected ${testCase.expected})`}`);
  });
}

/**
 * Test API error creation
 */
function testApiErrorCreation() {
  console.log('🧪 Testing API Error Creation...');
  
  const originalError = createServerError();
  const context = { operation: 'test', userId: 123 };
  
  const apiError = new ApiError(originalError, context);
  
  console.log('  ✅ Error type:', apiError.type);
  console.log('  ✅ Error message:', apiError.message);
  console.log('  ✅ Error status:', apiError.status);
  console.log('  ✅ Error context:', apiError.context);
  console.log('  ✅ Is retryable:', apiError.isRetryable());
  console.log('  ✅ Requires user action:', apiError.requiresUserAction());
}

/**
 * Test user-friendly error messages
 */
function testUserFriendlyMessages() {
  console.log('🧪 Testing User-Friendly Messages...');
  
  const testErrors = [
    createNetworkError(),
    createNotFoundError(),
    createServerError(),
    createStrapiValidationError()
  ];
  
  testErrors.forEach(error => {
    const apiError = new ApiError(error);
    const userError = apiError.getUserFriendlyError();
    
    console.log(`  📝 ${apiError.type}:`);
    console.log(`    Title: ${userError.title}`);
    console.log(`    Message: ${userError.message}`);
    console.log(`    Action: ${userError.userAction}`);
    console.log(`    Severity: ${userError.severity}`);
  });
}

/**
 * Test error handling with alerts
 */
function testErrorHandling() {
  console.log('🧪 Testing Error Handling...');
  
  const testErrors = [
    createNetworkError(),
    createNotFoundError(),
    createServerError()
  ];
  
  testErrors.forEach((error, index) => {
    console.log(`  🔄 Testing error ${index + 1}: ${error.message}`);
    
    const apiError = handleApiError(error, {
      operation: 'test',
      testIndex: index
    }, {
      showAlert: false // Don't show alerts during testing
    });
    
    console.log(`    ✅ Handled as: ${apiError.type}`);
    console.log(`    ✅ User message: ${apiError.getUserFriendlyError().message}`);
  });
}

/**
 * Test error monitoring
 */
function testErrorMonitoring() {
  console.log('🧪 Testing Error Monitoring...');
  
  // Clear previous errors
  errorMonitor.clearErrors();
  
  // Record some test errors
  const testErrors = [
    createNetworkError(),
    createNotFoundError(),
    createServerError(),
    createNetworkError() // Duplicate to test counting
  ];
  
  testErrors.forEach(error => {
    const apiError = new ApiError(error);
    errorMonitor.recordError(apiError);
  });
  
  // Get error statistics
  const stats = errorMonitor.getErrorStats();
  console.log('  📊 Error Statistics:', stats);
  
  // Test error count
  const totalErrors = Object.values(stats).reduce((sum, count) => sum + count, 0);
  console.log(`  ✅ Total errors recorded: ${totalErrors}`);
}

/**
 * Test critical error detection
 */
function testCriticalErrorDetection() {
  console.log('🧪 Testing Critical Error Detection...');
  
  const testCases = [
    { error: createNetworkError(), expected: false },
    { error: createNotFoundError(), expected: false },
    { error: createServerError(), expected: true },
    { error: createStrapiValidationError(), expected: false }
  ];
  
  testCases.forEach(testCase => {
    const apiError = new ApiError(testCase.error);
    const isCritical = isCriticalError(apiError);
    const passed = isCritical === testCase.expected;
    
    console.log(`  ${passed ? '✅' : '❌'} ${apiError.type}: ${isCritical} ${passed ? '' : `(expected ${testCase.expected})`}`);
  });
}

/**
 * Test error formatting for display
 */
function testErrorFormatting() {
  console.log('🧪 Testing Error Formatting...');
  
  const error = createServerError();
  const apiError = new ApiError(error);
  const formatted = formatErrorForDisplay(apiError);
  
  console.log('  📋 Formatted Error:');
  console.log(`    Title: ${formatted.title}`);
  console.log(`    Message: ${formatted.message}`);
  console.log(`    Action: ${formatted.action}`);
  console.log(`    Severity: ${formatted.severity}`);
  console.log(`    Retryable: ${formatted.retryable}`);
  console.log(`    Requires User Action: ${formatted.requiresUserAction}`);
}

/**
 * Test recovery strategies
 */
async function testRecoveryStrategies() {
  console.log('🧪 Testing Recovery Strategies...');
  
  const testCases = [
    { error: createNetworkError(), shouldRetry: true },
    { error: createNotFoundError(), shouldRetry: false },
    { error: createServerError(), shouldRetry: true }
  ];
  
  for (const testCase of testCases) {
    const apiError = new ApiError(testCase.error);
    console.log(`  🔄 Testing ${apiError.type}:`);
    
    try {
      await executeRecoveryStrategy(apiError, async () => {
        // Simulate successful retry
        if (testCase.shouldRetry) {
          return 'Success after retry';
        } else {
          throw new Error('Should not retry');
        }
      });
      console.log(`    ✅ Recovery successful`);
    } catch (error) {
      console.log(`    ❌ Recovery failed: ${error.message}`);
    }
  }
}

/**
 * Test error context and debugging
 */
function testErrorContext() {
  console.log('🧪 Testing Error Context and Debugging...');
  
  const error = createServerError();
  const context = {
    operation: 'loadUserProfile',
    userId: 123,
    page: 'dashboard',
    timestamp: new Date().toISOString()
  };
  
  const apiError = new ApiError(error, context);
  const debugInfo = apiError.getDebugInfo();
  
  console.log('  🔍 Debug Information:');
  console.log(`    Type: ${debugInfo.type}`);
  console.log(`    Message: ${debugInfo.message}`);
  console.log(`    Status: ${debugInfo.status}`);
  console.log(`    Context:`, debugInfo.context);
  console.log(`    Timestamp: ${debugInfo.timestamp}`);
}

// =============================================================================
// MAIN TEST RUNNER
// =============================================================================

/**
 * Run all error handling tests
 */
export async function runErrorHandlingTests() {
  console.log('🚀 Starting Error Handling Tests...\n');
  
  // Test error categorization
  testErrorCategorization();
  console.log('');
  
  // Test API error creation
  testApiErrorCreation();
  console.log('');
  
  // Test user-friendly messages
  testUserFriendlyMessages();
  console.log('');
  
  // Test error handling
  testErrorHandling();
  console.log('');
  
  // Test error monitoring
  testErrorMonitoring();
  console.log('');
  
  // Test critical error detection
  testCriticalErrorDetection();
  console.log('');
  
  // Test error formatting
  testErrorFormatting();
  console.log('');
  
  // Test recovery strategies
  await testRecoveryStrategies();
  console.log('');
  
  // Test error context
  testErrorContext();
  console.log('');
  
  console.log('🎉 All error handling tests completed!');
}

/**
 * Run specific test
 * @param {string} testName - Name of test to run
 */
export function runErrorTest(testName) {
  const tests = {
    'categorization': testErrorCategorization,
    'creation': testApiErrorCreation,
    'messages': testUserFriendlyMessages,
    'handling': testErrorHandling,
    'monitoring': testErrorMonitoring,
    'critical': testCriticalErrorDetection,
    'formatting': testErrorFormatting,
    'recovery': testRecoveryStrategies,
    'context': testErrorContext
  };
  
  if (tests[testName]) {
    console.log(`🧪 Running ${testName} test...`);
    return tests[testName]();
  } else {
    console.error(`❌ Test '${testName}' not found. Available tests:`, Object.keys(tests));
  }
}

// =============================================================================
// USAGE EXAMPLES
// =============================================================================

/**
 * Example: How to use error handling in components
 */
export function usageExamples() {
  console.log('📖 Error Handling Usage Examples:');
  
  console.log(`
// In a Vue component:
import { useApiError } from '@/composables/useApiError.js';
import { getPages } from '@/api/mockApiClient.js';

export default {
  setup() {
    const { 
      error, 
      isLoading, 
      hasError, 
      errorDisplay, 
      clearError,
      executeWithErrorHandling 
    } = useApiError();
    
    const pages = ref([]);
    
    async function loadPages() {
      try {
        const result = await executeWithErrorHandling(
          () => getPages({ page: 1, pageSize: 10 }),
          { operation: 'loadPages', component: 'PageList' }
        );
        pages.value = result.data;
      } catch (err) {
        // Error is already handled by the composable
        console.log('Error loading pages:', err.getUserFriendlyError());
      }
    }
    
    return {
      pages,
      error,
      isLoading,
      hasError,
      errorDisplay,
      clearError,
      loadPages
    };
  }
}
  `);
}

// =============================================================================
// AUTO-RUN IN DEVELOPMENT
// =============================================================================

// Only run tests automatically in development mode
if (import.meta.env.DEV) {
  // Uncomment the line below to run tests automatically
  // runErrorHandlingTests();
  
  // Or run a specific test
  // runErrorTest('categorization');
}

export default {
  runErrorHandlingTests,
  runErrorTest,
  usageExamples
}; 