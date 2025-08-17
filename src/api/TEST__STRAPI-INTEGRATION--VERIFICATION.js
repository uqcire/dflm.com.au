/**
 * Test Strapi API Integration
 * 
 * This file tests the integration with the live Strapi CMS
 * to verify that all API calls are working correctly.
 */

import { strapiClient, strapiConfig } from './strapiApiConfig.js';
import { getSiteSettings } from './siteSettingsService.js';
import { getProducts } from './productService.js';
import { getPosts } from './postService.js';
import { getServices } from './serviceService.js';

console.log('🧪 Testing Strapi API Integration...');
console.log('📍 Strapi URL:', strapiConfig.baseUrl);

/**
 * Test basic Strapi connectivity
 */
async function testStrapiConnectivity() {
  console.log('\n🔗 Testing Strapi connectivity...');
  
  try {
    // Test basic health check
    const healthResponse = await fetch(`${strapiConfig.baseUrl}/_health`);
    console.log('✅ Health check status:', healthResponse.status);
    
    // Test API endpoint
    const apiResponse = await fetch(`${strapiConfig.baseUrl}/api`);
    console.log('✅ API endpoint status:', apiResponse.status);
    
    return true;
  } catch (error) {
    console.error('❌ Connectivity test failed:', error.message);
    return false;
  }
}

/**
 * Test site settings API
 */
async function testSiteSettings() {
  console.log('\n⚙️ Testing site settings API...');
  
  try {
    const settings = await getSiteSettings();
    console.log('✅ Site settings loaded:', settings ? 'Success' : 'Failed');
    console.log('📋 Settings data:', settings);
    return true;
  } catch (error) {
    console.error('❌ Site settings test failed:', error.message);
    return false;
  }
}

/**
 * Test products API
 */
async function testProducts() {
  console.log('\n📦 Testing products API...');
  
  try {
    const products = await getProducts();
    console.log('✅ Products loaded:', products.data ? `${products.data.length} products` : 'Failed');
    console.log('📋 Products meta:', products.meta);
    return true;
  } catch (error) {
    console.error('❌ Products test failed:', error.message);
    return false;
  }
}

/**
 * Test posts API
 */
async function testPosts() {
  console.log('\n📝 Testing posts API...');
  
  try {
    const posts = await getPosts();
    console.log('✅ Posts loaded:', posts.data ? `${posts.data.length} posts` : 'Failed');
    console.log('📋 Posts meta:', posts.meta);
    return true;
  } catch (error) {
    console.error('❌ Posts test failed:', error.message);
    return false;
  }
}

/**
 * Test services API
 */
async function testServices() {
  console.log('\n🔧 Testing services API...');
  
  try {
    const services = await getServices();
    console.log('✅ Services loaded:', services.data ? `${services.data.length} services` : 'Failed');
    console.log('📋 Services meta:', services.meta);
    return true;
  } catch (error) {
    console.error('❌ Services test failed:', error.message);
    return false;
  }
}

/**
 * Run all tests
 */
async function runAllTests() {
  console.log('🚀 Starting Strapi API integration tests...\n');
  
  const tests = [
    { name: 'Connectivity', fn: testStrapiConnectivity },
    { name: 'Site Settings', fn: testSiteSettings },
    { name: 'Products', fn: testProducts },
    { name: 'Posts', fn: testPosts },
    { name: 'Services', fn: testServices }
  ];
  
  const results = [];
  
  for (const test of tests) {
    try {
      const result = await test.fn();
      results.push({ name: test.name, passed: result });
    } catch (error) {
      console.error(`❌ ${test.name} test error:`, error);
      results.push({ name: test.name, passed: false });
    }
  }
  
  // Summary
  console.log('\n📊 Test Results Summary:');
  console.log('========================');
  
  const passed = results.filter(r => r.passed).length;
  const total = results.length;
  
  results.forEach(result => {
    const status = result.passed ? '✅ PASS' : '❌ FAIL';
    console.log(`${status} ${result.name}`);
  });
  
  console.log(`\n🎯 Overall: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! Strapi integration is working correctly.');
  } else {
    console.log('⚠️ Some tests failed. Check the errors above.');
  }
  
  return passed === total;
}

// Run tests if this file is executed directly
if (typeof window !== 'undefined') {
  // Browser environment
  window.testStrapiIntegration = runAllTests;
  console.log('🧪 Strapi integration tests loaded. Run window.testStrapiIntegration() to test.');
} else {
  // Node.js environment
  runAllTests().then(success => {
    process.exit(success ? 0 : 1);
  });
}

export { runAllTests, testStrapiConnectivity, testSiteSettings, testProducts, testPosts, testServices }; 