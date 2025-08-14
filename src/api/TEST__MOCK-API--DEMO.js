/**
 * Test Mock API Demo
 * 
 * This file demonstrates how to use the mock API client
 * and verifies that it's working correctly.
 */

import mockApiClient from './mockApiClient.js';
import { logApiConfig, testApiConnectivity } from './mockApiClient.js';

// =============================================================================
// TEST FUNCTIONS
// =============================================================================

/**
 * Test site settings API
 */
async function testSiteSettings() {
  console.log('🧪 Testing Site Settings API...');
  
  try {
    const response = await mockApiClient.getSiteSettings();
    console.log('✅ Site Settings Response:', response);
    
    // Verify response structure
    if (response.data && response.data.siteName) {
      console.log('✅ Site Settings structure is correct');
    } else {
      console.log('❌ Site Settings structure is incorrect');
    }
  } catch (error) {
    console.error('❌ Site Settings test failed:', error);
  }
}

/**
 * Test pages API
 */
async function testPages() {
  console.log('🧪 Testing Pages API...');
  
  try {
    // Test get all pages
    const pagesResponse = await mockApiClient.getPages();
    console.log('✅ Pages Response:', pagesResponse);
    
    // Test get page by slug
    const pageResponse = await mockApiClient.getPageBySlug('home');
    console.log('✅ Single Page Response:', pageResponse);
    
    // Verify pagination
    if (pagesResponse.meta && pagesResponse.meta.pagination) {
      console.log('✅ Pagination metadata is present');
    } else {
      console.log('❌ Pagination metadata is missing');
    }
  } catch (error) {
    console.error('❌ Pages test failed:', error);
  }
}

/**
 * Test services API
 */
async function testServices() {
  console.log('🧪 Testing Services API...');
  
  try {
    const response = await mockApiClient.getServices();
    console.log('✅ Services Response:', response);
    
    // Test service by slug
    const serviceResponse = await mockApiClient.getServiceBySlug('import-distribution');
    console.log('✅ Single Service Response:', serviceResponse);
  } catch (error) {
    console.error('❌ Services test failed:', error);
  }
}

/**
 * Test products API
 */
async function testProducts() {
  console.log('🧪 Testing Products API...');
  
  try {
    const response = await mockApiClient.getProducts();
    console.log('✅ Products Response:', response);
    
    // Test product by slug
    const productResponse = await mockApiClient.getProductBySlug('premium-garlic');
    console.log('✅ Single Product Response:', productResponse);
  } catch (error) {
    console.error('❌ Products test failed:', error);
  }
}

/**
 * Test blog posts API
 */
async function testBlogPosts() {
  console.log('🧪 Testing Blog Posts API...');
  
  try {
    const response = await mockApiClient.getPosts();
    console.log('✅ Blog Posts Response:', response);
    
    // Test post by slug
    const postResponse = await mockApiClient.getPostBySlug('future-food-import-australia');
    console.log('✅ Single Post Response:', postResponse);
  } catch (error) {
    console.error('❌ Blog Posts test failed:', error);
  }
}

/**
 * Test error handling
 */
async function testErrorHandling() {
  console.log('🧪 Testing Error Handling...');
  
  try {
    // Test not found error
    await mockApiClient.getPageBySlug('non-existent-page');
    console.log('❌ Should have thrown not found error');
  } catch (error) {
    console.log('✅ Not found error handled correctly:', error.message);
  }
  
  try {
    // Test invalid ID
    await mockApiClient.getPageById(999);
    console.log('❌ Should have thrown not found error');
  } catch (error) {
    console.log('✅ Invalid ID error handled correctly:', error.message);
  }
}

/**
 * Test API configuration
 */
function testApiConfiguration() {
  console.log('🧪 Testing API Configuration...');
  
  // Log current configuration
  logApiConfig();
  
  // Test mode switching
  const currentMode = mockApiClient.getApiMode();
  console.log(`✅ Current API mode: ${currentMode}`);
  
  // Test configuration update
  mockApiClient.updateApiConfig({
    mockDelay: { min: 200, max: 800 }
  });
  console.log('✅ Configuration updated');
}

/**
 * Test API connectivity
 */
async function testConnectivity() {
  console.log('🧪 Testing API Connectivity...');
  
  const isConnected = await testApiConnectivity();
  if (isConnected) {
    console.log('✅ API connectivity test passed');
  } else {
    console.log('❌ API connectivity test failed');
  }
}

// =============================================================================
// MAIN TEST RUNNER
// =============================================================================

/**
 * Run all tests
 */
export async function runAllTests() {
  console.log('🚀 Starting Mock API Tests...\n');
  
  // Test configuration first
  testApiConfiguration();
  console.log('');
  
  // Test connectivity
  await testConnectivity();
  console.log('');
  
  // Test all API endpoints
  await testSiteSettings();
  console.log('');
  
  await testPages();
  console.log('');
  
  await testServices();
  console.log('');
  
  await testProducts();
  console.log('');
  
  await testBlogPosts();
  console.log('');
  
  await testErrorHandling();
  console.log('');
  
  console.log('🎉 All tests completed!');
}

/**
 * Run specific test
 * @param {string} testName - Name of test to run
 */
export async function runTest(testName) {
  const tests = {
    'site-settings': testSiteSettings,
    'pages': testPages,
    'services': testServices,
    'products': testProducts,
    'blog-posts': testBlogPosts,
    'error-handling': testErrorHandling,
    'configuration': testApiConfiguration,
    'connectivity': testConnectivity
  };
  
  if (tests[testName]) {
    console.log(`🧪 Running ${testName} test...`);
    await tests[testName]();
  } else {
    console.error(`❌ Test '${testName}' not found. Available tests:`, Object.keys(tests));
  }
}

// =============================================================================
// USAGE EXAMPLES
// =============================================================================

/**
 * Example: How to use the mock API in components
 */
export function usageExamples() {
  console.log('📖 Usage Examples:');
  
  console.log(`
// In a Vue component:
import { getSiteSettings, getPages, getServices } from '@/api/mockApiClient.js';

export default {
  async mounted() {
    try {
      // Get site settings
      const siteSettings = await getSiteSettings();
      this.siteName = siteSettings.data.siteName;
      
      // Get pages with pagination
      const pages = await getPages({ page: 1, pageSize: 10 });
      this.pages = pages.data;
      
      // Get services
      const services = await getServices();
      this.services = services.data;
      
    } catch (error) {
      console.error('Error loading data:', error);
    }
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
  // runAllTests();
  
  // Or run a specific test
  // runTest('pages');
}

export default {
  runAllTests,
  runTest,
  usageExamples
}; 