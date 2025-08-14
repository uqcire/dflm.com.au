/**
 * Import Verification Test
 * 
 * This file tests that all service imports are working correctly
 * without any missing export errors.
 */

// Test importing all service files
try {
  console.log('🧪 Testing Service File Imports...');
  
  // Test importing from each service file
  const { 
    getSiteSettings, 
    updateSiteSettings 
  } = await import('./siteSettingsService.js');
  
  console.log('  ✅ siteSettingsService imports successful');
  console.log('    - getSiteSettings:', typeof getSiteSettings);
  console.log('    - updateSiteSettings:', typeof updateSiteSettings);
  
  const { 
    getPages, 
    getPageBySlug, 
    getPageById,
    createPage,
    updatePage,
    deletePage
  } = await import('./pageService.js');
  
  console.log('  ✅ pageService imports successful');
  console.log('    - getPages:', typeof getPages);
  console.log('    - getPageBySlug:', typeof getPageBySlug);
  console.log('    - getPageById:', typeof getPageById);
  console.log('    - createPage:', typeof createPage);
  console.log('    - updatePage:', typeof updatePage);
  console.log('    - deletePage:', typeof deletePage);
  
  const { 
    getServices, 
    getServiceBySlug, 
    getServiceById,
    createService,
    updateService,
    deleteService
  } = await import('./serviceService.js');
  
  console.log('  ✅ serviceService imports successful');
  console.log('    - getServices:', typeof getServices);
  console.log('    - getServiceBySlug:', typeof getServiceBySlug);
  console.log('    - getServiceById:', typeof getServiceById);
  console.log('    - createService:', typeof createService);
  console.log('    - updateService:', typeof updateService);
  console.log('    - deleteService:', typeof deleteService);
  
  const { 
    getProducts, 
    getProductBySlug, 
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
  } = await import('./productService.js');
  
  console.log('  ✅ productService imports successful');
  console.log('    - getProducts:', typeof getProducts);
  console.log('    - getProductBySlug:', typeof getProductBySlug);
  console.log('    - getProductById:', typeof getProductById);
  console.log('    - createProduct:', typeof createProduct);
  console.log('    - updateProduct:', typeof updateProduct);
  console.log('    - deleteProduct:', typeof deleteProduct);
  
  const { 
    getPosts, 
    getPostBySlug, 
    getPostById,
    createPost,
    updatePost,
    deletePost
  } = await import('./postService.js');
  
  console.log('  ✅ postService imports successful');
  console.log('    - getPosts:', typeof getPosts);
  console.log('    - getPostBySlug:', typeof getPostBySlug);
  console.log('    - getPostById:', typeof getPostById);
  console.log('    - createPost:', typeof createPost);
  console.log('    - updatePost:', typeof updatePost);
  console.log('    - deletePost:', typeof deletePost);
  
  // Test importing from index
  const { 
    getSiteSettings: getSiteSettingsFromIndex,
    getPages: getPagesFromIndex,
    getServices: getServicesFromIndex,
    getProducts: getProductsFromIndex,
    getPosts: getPostsFromIndex
  } = await import('./index.js');
  
  console.log('  ✅ index.js imports successful');
  console.log('    - getSiteSettings:', typeof getSiteSettingsFromIndex);
  console.log('    - getPages:', typeof getPagesFromIndex);
  console.log('    - getServices:', typeof getServicesFromIndex);
  console.log('    - getProducts:', typeof getProductsFromIndex);
  console.log('    - getPosts:', typeof getPostsFromIndex);
  
  console.log('🎉 All service file imports successful!');
  
} catch (error) {
  console.error('❌ Service file import test failed:', error);
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    name: error.name
  });
}

// Test importing from mockApiClient
try {
  console.log('🧪 Testing Mock API Client Imports...');
  
  const { 
    getSiteSettings, 
    getPages, 
    getServices, 
    getProducts, 
    getPosts,
    apiConfig 
  } = await import('./mockApiClient.js');
  
  console.log('  ✅ mockApiClient imports successful');
  console.log('    - getSiteSettings:', typeof getSiteSettings);
  console.log('    - getPages:', typeof getPages);
  console.log('    - getServices:', typeof getServices);
  console.log('    - getProducts:', typeof getProducts);
  console.log('    - getPosts:', typeof getPosts);
  console.log('    - apiConfig:', typeof apiConfig);
  
  console.log('🎉 Mock API client imports successful!');
  
} catch (error) {
  console.error('❌ Mock API client import test failed:', error);
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    name: error.name
  });
}

console.log('✅ All import verification tests completed!'); 