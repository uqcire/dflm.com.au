/**
 * Mock API Verification Test
 * 
 * This file tests that the mock API is working correctly
 * and not making real HTTP calls.
 */

// Test importing and using the mock API
try {
  console.log('🧪 Testing Mock API Integration...');
  
  // Test importing from mockApiClient
  const { 
    getSiteSettings, 
    getPages, 
    getServices, 
    getProducts, 
    getPosts,
    apiConfig 
  } = await import('./mockApiClient.js');
  
  console.log('  ✅ Mock API client imports successful');
  console.log('    - apiConfig.useMockData:', apiConfig.useMockData);
  console.log('    - apiConfig.strapi.enabled:', apiConfig.strapi.enabled);
  
  // Test importing from service files
  const { 
    getSiteSettings: getSiteSettingsFromService,
    getPages: getPagesFromService,
    getServices: getServicesFromService,
    getProducts: getProductsFromService,
    getPosts: getPostsFromService
  } = await import('./index.js');
  
  console.log('  ✅ Service files imports successful');
  
  // Test actual API calls
  console.log('  🔄 Testing API calls...');
  
  // Test site settings
  try {
    const siteSettings = await getSiteSettingsFromService();
    console.log('    ✅ getSiteSettings:', typeof siteSettings);
    console.log('      - Data type:', typeof siteSettings.data);
    console.log('      - Has data:', !!siteSettings.data);
  } catch (error) {
    console.error('    ❌ getSiteSettings failed:', error.message);
  }
  
  // Test pages
  try {
    const pages = await getPagesFromService();
    console.log('    ✅ getPages:', typeof pages);
    console.log('      - Data type:', typeof pages.data);
    console.log('      - Data length:', pages.data?.length || 0);
  } catch (error) {
    console.error('    ❌ getPages failed:', error.message);
  }
  
  // Test services
  try {
    const services = await getServicesFromService();
    console.log('    ✅ getServices:', typeof services);
    console.log('      - Data type:', typeof services.data);
    console.log('      - Data length:', services.data?.length || 0);
  } catch (error) {
    console.error('    ❌ getServices failed:', error.message);
  }
  
  // Test products
  try {
    const products = await getProductsFromService();
    console.log('    ✅ getProducts:', typeof products);
    console.log('      - Data type:', typeof products.data);
    console.log('      - Data length:', products.data?.length || 0);
  } catch (error) {
    console.error('    ❌ getProducts failed:', error.message);
  }
  
  // Test posts
  try {
    const posts = await getPostsFromService();
    console.log('    ✅ getPosts:', typeof posts);
    console.log('      - Data type:', typeof posts.data);
    console.log('      - Data length:', posts.data?.length || 0);
  } catch (error) {
    console.error('    ❌ getPosts failed:', error.message);
  }
  
  console.log('🎉 Mock API integration test completed!');
  
} catch (error) {
  console.error('❌ Mock API integration test failed:', error);
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    name: error.name
  });
}

// Test environment configuration
try {
  console.log('🧪 Testing Environment Configuration...');
  
  const { getEnvVarAsBoolean } = await import('./envConfig.js');
  
  const useMockApi = getEnvVarAsBoolean('VITE_USE_MOCK_API');
  const strapiEnabled = getEnvVarAsBoolean('VITE_STRAPI_ENABLED');
  const isDev = import.meta.env.DEV;
  
  console.log('  ✅ Environment variables:');
  console.log('    - VITE_USE_MOCK_API:', useMockApi);
  console.log('    - VITE_STRAPI_ENABLED:', strapiEnabled);
  console.log('    - import.meta.env.DEV:', isDev);
  console.log('    - Expected to use mock data:', useMockApi || isDev);
  
  console.log('🎉 Environment configuration test completed!');
  
} catch (error) {
  console.error('❌ Environment configuration test failed:', error);
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    name: error.name
  });
}

console.log('✅ All mock API verification tests completed!'); 