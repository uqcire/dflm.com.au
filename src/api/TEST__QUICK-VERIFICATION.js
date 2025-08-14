/**
 * Quick Verification Test
 * 
 * This file provides a quick test to verify that the API system
 * is working correctly after fixing the export issues.
 */

import { 
  getSiteSettings, 
  getPages, 
  getServices, 
  getProducts, 
  getPosts 
} from './index.js';

import { 
  useSiteSettings, 
  usePages, 
  useServices, 
  useProducts, 
  usePosts 
} from '../composables/useDataFetching.js';

/**
 * Test basic API functions
 */
export async function testBasicApiFunctions() {
  console.log('🧪 Testing Basic API Functions...');
  
  try {
    // Test site settings
    console.log('  🔄 Testing getSiteSettings...');
    const siteSettings = await getSiteSettings();
    console.log('    ✅ Site settings loaded:', !!siteSettings);
    
    // Test pages
    console.log('  🔄 Testing getPages...');
    const pages = await getPages({ page: 1, pageSize: 5 });
    console.log('    ✅ Pages loaded:', pages.data?.length || 0, 'items');
    
    // Test services
    console.log('  🔄 Testing getServices...');
    const services = await getServices({ page: 1, pageSize: 5 });
    console.log('    ✅ Services loaded:', services.data?.length || 0, 'items');
    
    // Test products
    console.log('  🔄 Testing getProducts...');
    const products = await getProducts({ page: 1, pageSize: 5 });
    console.log('    ✅ Products loaded:', products.data?.length || 0, 'items');
    
    // Test posts
    console.log('  🔄 Testing getPosts...');
    const posts = await getPosts({ page: 1, pageSize: 5 });
    console.log('    ✅ Posts loaded:', posts.data?.length || 0, 'items');
    
    console.log('🎉 All basic API functions working correctly!');
    return true;
    
  } catch (error) {
    console.error('❌ API function test failed:', error);
    return false;
  }
}

/**
 * Test composables
 */
export function testComposables() {
  console.log('🧪 Testing Composables...');
  
  try {
    // Test site settings composable
    console.log('  🔄 Testing useSiteSettings...');
    const siteSettingsComposable = useSiteSettings();
    console.log('    ✅ useSiteSettings created successfully');
    
    // Test pages composable
    console.log('  🔄 Testing usePages...');
    const pagesComposable = usePages();
    console.log('    ✅ usePages created successfully');
    
    // Test services composable
    console.log('  🔄 Testing useServices...');
    const servicesComposable = useServices();
    console.log('    ✅ useServices created successfully');
    
    // Test products composable
    console.log('  🔄 Testing useProducts...');
    const productsComposable = useProducts();
    console.log('    ✅ useProducts created successfully');
    
    // Test posts composable
    console.log('  🔄 Testing usePosts...');
    const postsComposable = usePosts();
    console.log('    ✅ usePosts created successfully');
    
    console.log('🎉 All composables created successfully!');
    return true;
    
  } catch (error) {
    console.error('❌ Composable test failed:', error);
    return false;
  }
}

/**
 * Run all verification tests
 */
export async function runVerificationTests() {
  console.log('🚀 Starting Quick Verification Tests...\n');
  
  const apiTestPassed = await testBasicApiFunctions();
  console.log('');
  
  const composableTestPassed = testComposables();
  console.log('');
  
  if (apiTestPassed && composableTestPassed) {
    console.log('✅ All verification tests passed! The API system is working correctly.');
  } else {
    console.log('❌ Some verification tests failed. Please check the errors above.');
  }
  
  return apiTestPassed && composableTestPassed;
}

// Auto-run in development
if (import.meta.env.DEV) {
  // Uncomment to run verification tests
  // runVerificationTests();
}

export default {
  testBasicApiFunctions,
  testComposables,
  runVerificationTests
}; 