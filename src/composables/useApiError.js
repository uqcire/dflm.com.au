/**
 * API Error Handling Composable
 * 
 * This composable provides reactive error handling for API calls in Vue components.
 * It includes error states, user-friendly error display, and recovery strategies.
 */

import { ref, computed, readonly } from 'vue';
import { 
  handleApiError, 
  ApiError, 
  errorMonitor, 
  isCriticalError,
  formatErrorForDisplay,
  executeRecoveryStrategy
} from '../api/errorHandler.js';

// =============================================================================
// COMPOSABLE
// =============================================================================

/**
 * API Error Handling Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Error handling utilities
 */
export function useApiError(options = {}) {
  // Reactive error state
  const error = ref(null);
  const isLoading = ref(false);
  const retryCount = ref(0);
  
  // Configuration
  const config = {
    showAlerts: options.showAlerts !== false,
    maxRetries: options.maxRetries || 3,
    autoRetry: options.autoRetry !== false,
    ...options
  };
  
  // Computed properties
  const hasError = computed(() => error.value !== null);
  const isCritical = computed(() => error.value && isCriticalError(error.value));
  const canRetry = computed(() => error.value && error.value.isRetryable() && retryCount.value < config.maxRetries);
  const requiresUserAction = computed(() => error.value && error.value.requiresUserAction());
  
  // Error display information
  const errorDisplay = computed(() => {
    if (!error.value) return null;
    return formatErrorForDisplay(error.value);
  });
  
  // =============================================================================
  // ERROR HANDLING METHODS
  // =============================================================================
  
  /**
   * Handle API error
   * @param {Error} originalError - Original error
   * @param {Object} context - Error context
   * @param {Object} options - Handling options
   */
  function handleError(originalError, context = {}, options = {}) {
    const apiError = handleApiError(originalError, context, {
      showAlert: config.showAlerts && options.showAlert !== false,
      reportError: options.reportError !== false
    });
    
    // Set reactive error state
    error.value = apiError;
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    // Auto-retry if enabled and error is retryable
    if (config.autoRetry && apiError.isRetryable() && retryCount.value < config.maxRetries) {
      setTimeout(() => {
        retry();
      }, 1000);
    }
    
    return apiError;
  }
  
  /**
   * Clear error state
   */
  function clearError() {
    error.value = null;
    retryCount.value = 0;
  }
  
  /**
   * Retry the last failed operation
   * @param {Function} retryFunction - Function to retry
   */
  async function retry(retryFunction = null) {
    if (!canRetry.value || !retryFunction) {
      return;
    }
    
    retryCount.value++;
    clearError();
    
    try {
      isLoading.value = true;
      const result = await retryFunction();
      return result;
    } catch (err) {
      handleError(err, { operation: 'retry', attempt: retryCount.value });
      throw err;
    } finally {
      isLoading.value = false;
    }
  }
  
  /**
   * Execute API call with error handling
   * @param {Function} apiCall - API function to execute
   * @param {Object} context - Error context
   * @returns {Promise<any>} API result
   */
  async function executeWithErrorHandling(apiCall, context = {}) {
    try {
      isLoading.value = true;
      clearError();
      
      const result = await apiCall();
      return result;
    } catch (err) {
      handleError(err, context);
      throw err;
    } finally {
      isLoading.value = false;
    }
  }
  
  /**
   * Execute API call with retry logic
   * @param {Function} apiCall - API function to execute
   * @param {Object} context - Error context
   * @returns {Promise<any>} API result
   */
  async function executeWithRetry(apiCall, context = {}) {
    try {
      return await executeWithErrorHandling(apiCall, context);
    } catch (err) {
      if (err instanceof ApiError && err.isRetryable()) {
        return await executeRecoveryStrategy(err, () => apiCall());
      }
      throw err;
    }
  }
  
  // =============================================================================
  // UTILITY METHODS
  // =============================================================================
  
  /**
   * Get error summary for logging
   * @returns {string} Error summary
   */
  function getErrorSummary() {
    if (!error.value) return '';
    return `[${error.value.type}] ${error.value.message}`;
  }
  
  /**
   * Check if error is of specific type
   * @param {string} errorType - Error type to check
   * @returns {boolean} True if error matches type
   */
  function isErrorType(errorType) {
    return error.value && error.value.type === errorType;
  }
  
  /**
   * Get error statistics
   * @returns {Object} Error statistics
   */
  function getErrorStats() {
    return errorMonitor.getErrorStats();
  }
  
  // =============================================================================
  // REACTIVE HELPERS
  // =============================================================================
  
  /**
   * Create reactive API call wrapper
   * @param {Function} apiCall - API function
   * @param {Object} context - Error context
   * @returns {Function} Wrapped API function
   */
  function createApiCall(apiCall, context = {}) {
    return async (...args) => {
      try {
        isLoading.value = true;
        clearError();
        
        const result = await apiCall(...args);
        return result;
      } catch (err) {
        handleError(err, {
          ...context,
          args,
          functionName: apiCall.name
        });
        throw err;
      } finally {
        isLoading.value = false;
      }
    };
  }
  
  /**
   * Create reactive API call with retry
   * @param {Function} apiCall - API function
   * @param {Object} context - Error context
   * @returns {Function} Wrapped API function with retry
   */
  function createApiCallWithRetry(apiCall, context = {}) {
    return async (...args) => {
      try {
        return await createApiCall(apiCall, context)(...args);
      } catch (err) {
        if (err instanceof ApiError && err.isRetryable()) {
          return await executeRecoveryStrategy(err, () => apiCall(...args));
        }
        throw err;
      }
    };
  }
  
  // =============================================================================
  // RETURN OBJECT
  // =============================================================================
  
  return {
    // Reactive state
    error: readonly(error),
    isLoading: readonly(isLoading),
    retryCount: readonly(retryCount),
    
    // Computed properties
    hasError,
    isCritical,
    canRetry,
    requiresUserAction,
    errorDisplay,
    
    // Methods
    handleError,
    clearError,
    retry,
    executeWithErrorHandling,
    executeWithRetry,
    getErrorSummary,
    isErrorType,
    getErrorStats,
    
    // Reactive helpers
    createApiCall,
    createApiCallWithRetry
  };
}

// =============================================================================
// SPECIALIZED COMPOSABLES
// =============================================================================

/**
 * Composable for content loading with error handling
 * @param {Object} options - Configuration options
 * @returns {Object} Content loading utilities
 */
export function useContentLoader(options = {}) {
  const {
    error,
    isLoading,
    hasError,
    errorDisplay,
    handleError,
    clearError,
    executeWithErrorHandling
  } = useApiError(options);
  
  // Content state
  const content = ref(null);
  const isEmpty = computed(() => !isLoading.value && !hasError.value && !content.value);
  
  /**
   * Load content with error handling
   * @param {Function} loader - Content loading function
   * @param {Object} context - Error context
   * @returns {Promise<any>} Loaded content
   */
  async function loadContent(loader, context = {}) {
    try {
      const result = await executeWithErrorHandling(loader, context);
      content.value = result;
      return result;
    } catch (err) {
      content.value = null;
      throw err;
    }
  }
  
  /**
   * Refresh content
   * @param {Function} loader - Content loading function
   * @param {Object} context - Error context
   * @returns {Promise<any>} Refreshed content
   */
  async function refreshContent(loader, context = {}) {
    clearError();
    return await loadContent(loader, context);
  }
  
  return {
    // State
    content: readonly(content),
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    
    // Methods
    loadContent,
    refreshContent,
    clearError
  };
}

/**
 * Composable for form submission with error handling
 * @param {Object} options - Configuration options
 * @returns {Object} Form submission utilities
 */
export function useFormSubmission(options = {}) {
  const {
    error,
    isLoading,
    hasError,
    errorDisplay,
    handleError,
    clearError,
    executeWithErrorHandling
  } = useApiError(options);
  
  // Form state
  const isSubmitted = ref(false);
  const isSuccess = ref(false);
  
  /**
   * Submit form with error handling
   * @param {Function} submitter - Form submission function
   * @param {Object} context - Error context
   * @returns {Promise<any>} Submission result
   */
  async function submitForm(submitter, context = {}) {
    try {
      isSubmitted.value = true;
      isSuccess.value = false;
      
      const result = await executeWithErrorHandling(submitter, context);
      
      isSuccess.value = true;
      return result;
    } catch (err) {
      isSuccess.value = false;
      throw err;
    }
  }
  
  /**
   * Reset form state
   */
  function resetForm() {
    clearError();
    isSubmitted.value = false;
    isSuccess.value = false;
  }
  
  return {
    // State
    isLoading,
    hasError,
    errorDisplay,
    isSubmitted: readonly(isSubmitted),
    isSuccess: readonly(isSuccess),
    
    // Methods
    submitForm,
    resetForm,
    clearError
  };
}

// =============================================================================
// ERROR BOUNDARY COMPOSABLE
// =============================================================================

/**
 * Composable for error boundary functionality
 * @param {Object} options - Configuration options
 * @returns {Object} Error boundary utilities
 */
export function useErrorBoundary(options = {}) {
  const {
    error,
    hasError,
    errorDisplay,
    handleError,
    clearError
  } = useApiError(options);
  
  /**
   * Handle component error
   * @param {Error} err - Error object
   * @param {Object} context - Error context
   */
  function handleComponentError(err, context = {}) {
    handleError(err, {
      ...context,
      component: 'ErrorBoundary',
      location: window.location.href
    });
  }
  
  /**
   * Reset error boundary
   */
  function resetErrorBoundary() {
    clearError();
  }
  
  return {
    // State
    hasError,
    errorDisplay,
    
    // Methods
    handleComponentError,
    resetErrorBoundary
  };
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  useApiError,
  useContentLoader,
  useFormSubmission,
  useErrorBoundary
}; 