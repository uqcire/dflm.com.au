/**
 * Strapi Config Verification Test
 * 
 * This file tests that the strapiApiConfig exports are working correctly
 * without any duplicate export errors.
 */

// Test importing from strapiApiConfig
try {
  console.log('🧪 Testing Strapi Config Imports...');
  
  // Test importing specific functions
  const { 
    strapiClient, 
    buildStrapiUrl, 
    formatStrapiParams, 
    parseStrapiResponse,
    formatStrapiData,
    getMediaUrl,
    getStrapiToken,
    setStrapiToken,
    removeStrapiToken,
    isStrapiTokenValid,
    getStrapiTokenExpiry,
    getContentTypeEndpoint,
    isSingleType,
    isCollectionType,
    isDevelopment,
    isProduction,
    getEnvironment,
    updateStrapiConfig,
    getStrapiConfig,
    validateStrapiConfig
  } = await import('./strapiApiConfig.js');
  
  console.log('  ✅ All named imports successful');
  console.log('    - strapiClient:', typeof strapiClient);
  console.log('    - buildStrapiUrl:', typeof buildStrapiUrl);
  console.log('    - formatStrapiParams:', typeof formatStrapiParams);
  console.log('    - parseStrapiResponse:', typeof parseStrapiResponse);
  console.log('    - formatStrapiData:', typeof formatStrapiData);
  console.log('    - getMediaUrl:', typeof getMediaUrl);
  console.log('    - getStrapiToken:', typeof getStrapiToken);
  console.log('    - setStrapiToken:', typeof setStrapiToken);
  console.log('    - removeStrapiToken:', typeof removeStrapiToken);
  console.log('    - isStrapiTokenValid:', typeof isStrapiTokenValid);
  console.log('    - getStrapiTokenExpiry:', typeof getStrapiTokenExpiry);
  console.log('    - getContentTypeEndpoint:', typeof getContentTypeEndpoint);
  console.log('    - isSingleType:', typeof isSingleType);
  console.log('    - isCollectionType:', typeof isCollectionType);
  console.log('    - isDevelopment:', typeof isDevelopment);
  console.log('    - isProduction:', typeof isProduction);
  console.log('    - getEnvironment:', typeof getEnvironment);
  console.log('    - updateStrapiConfig:', typeof updateStrapiConfig);
  console.log('    - getStrapiConfig:', typeof getStrapiConfig);
  console.log('    - validateStrapiConfig:', typeof validateStrapiConfig);
  
  // Test importing default export
  const strapiConfig = await import('./strapiApiConfig.js');
  console.log('  ✅ Default import successful');
  console.log('    - Default export keys:', Object.keys(strapiConfig.default));
  
  console.log('🎉 Strapi config imports working correctly!');
  
} catch (error) {
  console.error('❌ Strapi config import test failed:', error);
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
    apiConfig, 
    getSiteSettings, 
    getPages, 
    getServices 
  } = await import('./mockApiClient.js');
  
  console.log('  ✅ Mock API client imports successful');
  console.log('    - apiConfig:', typeof apiConfig);
  console.log('    - getSiteSettings:', typeof getSiteSettings);
  console.log('    - getPages:', typeof getPages);
  console.log('    - getServices:', typeof getServices);
  
  console.log('🎉 Mock API client imports working correctly!');
  
} catch (error) {
  console.error('❌ Mock API client import test failed:', error);
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    name: error.name
  });
}

// Test importing from index
try {
  console.log('🧪 Testing API Index Imports...');
  
  const { 
    getSiteSettings, 
    getPages, 
    getServices, 
    getProducts, 
    getPosts 
  } = await import('./index.js');
  
  console.log('  ✅ API index imports successful');
  console.log('    - getSiteSettings:', typeof getSiteSettings);
  console.log('    - getPages:', typeof getPages);
  console.log('    - getServices:', typeof getServices);
  console.log('    - getProducts:', typeof getProducts);
  console.log('    - getPosts:', typeof getPosts);
  
  console.log('🎉 API index imports working correctly!');
  
} catch (error) {
  console.error('❌ API index import test failed:', error);
  console.error('Error details:', {
    message: error.message,
    stack: error.stack,
    name: error.name
  });
}

console.log('✅ All import tests completed!'); 