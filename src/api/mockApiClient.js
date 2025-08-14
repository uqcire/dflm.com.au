/**
 * Mock API Client Configuration
 * 
 * This file provides a configurable API client that can switch between
 * mock data (for development) and real API calls (for production).
 * It maintains the same interface as the real API client for seamless switching.
 */

import { mockApiResponses } from './mockApiResponses.js';
import { get, post, put, del } from '../utils/HTTP-CLIENT__API--UNIFIED.js';
import { strapiClient, buildStrapiUrl, formatStrapiParams, parseStrapiResponse, getContentTypeEndpoint } from './strapiApiConfig.js';

// =============================================================================
// CONFIGURATION
// =============================================================================

/**
 * API Client Configuration
 * Controls whether to use mock data or real API calls
 */
export const apiConfig = {
  // Set to true to use mock data, false for real API calls
  useMockData: import.meta.env.VITE_USE_MOCK_API === 'true' || import.meta.env.DEV,
  
  // Base URL for real API calls (now uses Strapi config)
  baseUrl: import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337',
  
  // Mock data delay simulation (ms)
  mockDelay: {
    min: 100,
    max: 500
  },
  
  // Error simulation probability (0-1)
  errorSimulation: {
    networkError: 0.05,    // 5% chance of network error
    serverError: 0.02,     // 2% chance of server error
    notFoundError: 0.03    // 3% chance of not found error
  },
  
  // Strapi integration settings
  strapi: {
    // Enable Strapi integration
    enabled: import.meta.env.VITE_STRAPI_ENABLED === 'true',
    
    // Content type mapping for Strapi endpoints
    contentTypes: {
      'site-settings': 'site-settings',
      'page': 'page',
      'service': 'service',
      'product': 'product',
      'industry': 'industry',
      'certification': 'certification',
      'partner': 'partner',
      'post': 'post',
      'category': 'category',
      'tag': 'tag'
    }
  }
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Simulate random errors based on configuration
 */
function simulateRandomErrors() {
  const random = Math.random();
  
  if (random < apiConfig.errorSimulation.networkError) {
    throw new Error('Network error - please check your connection');
  }
  
  if (random < apiConfig.errorSimulation.serverError) {
    throw new Error('Server error - please try again later');
  }
  
  if (random < apiConfig.errorSimulation.notFoundError) {
    throw new Error('Resource not found');
  }
}

/**
 * Execute API call with proper error handling
 * @param {Function} mockFn - Mock function to call
 * @param {Function} realFn - Real API function to call
 * @param {Array} args - Arguments to pass to the function
 * @returns {Promise<any>} API response
 */
async function executeApiCall(mockFn, realFn, args = []) {
  try {
    // Check if Strapi integration is enabled and we're not using mock data
    if (apiConfig.strapi.enabled && !apiConfig.useMockData) {
      return await realFn(...args);
    } else {
      // Use mock data
      simulateRandomErrors();
      return await mockFn(...args);
    }
  } catch (error) {
    // Log error for debugging
    console.error('API call error:', {
      function: mockFn.name,
      args,
      error: error.message,
      useMockData: apiConfig.useMockData,
      strapiEnabled: apiConfig.strapi.enabled
    });
    
    // Re-throw the error for the calling code to handle
    throw error;
  }
}

// =============================================================================
// MOCK API CLIENT METHODS
// =============================================================================

/**
 * Get site settings
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Site settings response
 */
export async function getSiteSettings(params = {}) {
  const realFn = async () => {
    const endpoint = getContentTypeEndpoint('site-settings');
    const formattedParams = formatStrapiParams(params);
    const response = await strapiClient.get(endpoint, { params: formattedParams });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getSiteSettings, realFn, [params]);
}

/**
 * Get all pages
 * @param {Object} params - Query parameters (pagination, sorting, etc.)
 * @returns {Promise<Object>} Pages response with pagination
 */
export async function getPages(params = {}) {
  const realFn = async () => {
    const endpoint = getContentTypeEndpoint('page');
    const formattedParams = formatStrapiParams(params);
    const response = await strapiClient.get(endpoint, { params: formattedParams });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getPages, realFn, [params]);
}

/**
 * Get page by slug
 * @param {string} slug - Page slug
 * @returns {Promise<Object>} Page response
 */
export async function getPageBySlug(slug) {
  const realFn = async () => {
    const endpoint = getContentTypeEndpoint('page');
    const params = formatStrapiParams({
      filters: { slug }
    });
    const response = await strapiClient.get(endpoint, { params });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getPageBySlug, realFn, [slug]);
}

/**
 * Get page by ID
 * @param {number|string} id - Page ID
 * @returns {Promise<Object>} Page response
 */
export async function getPageById(id) {
  const realFn = async () => {
    const response = await get(`/pages/${id}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getPageById, realFn, [id]);
}

/**
 * Get all services
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Services response with pagination
 */
export async function getServices(params = {}) {
  const realFn = async () => {
    const response = await get('/services', { params });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getServices, realFn, [params]);
}

/**
 * Get service by slug
 * @param {string} slug - Service slug
 * @returns {Promise<Object>} Service response
 */
export async function getServiceBySlug(slug) {
  const realFn = async () => {
    const response = await get(`/services/slug/${slug}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getServiceBySlug, realFn, [slug]);
}

/**
 * Get service by ID
 * @param {number|string} id - Service ID
 * @returns {Promise<Object>} Service response
 */
export async function getServiceById(id) {
  const realFn = async () => {
    const response = await get(`/services/${id}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getServiceById, realFn, [id]);
}

/**
 * Get all products
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Products response with pagination
 */
export async function getProducts(params = {}) {
  const realFn = async () => {
    const response = await get('/products', { params });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getProducts, realFn, [params]);
}

/**
 * Get product by slug
 * @param {string} slug - Product slug
 * @returns {Promise<Object>} Product response
 */
export async function getProductBySlug(slug) {
  const realFn = async () => {
    const response = await get(`/products/slug/${slug}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getProductBySlug, realFn, [slug]);
}

/**
 * Get product by ID
 * @param {number|string} id - Product ID
 * @returns {Promise<Object>} Product response
 */
export async function getProductById(id) {
  const realFn = async () => {
    const response = await get(`/products/${id}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getProductById, realFn, [id]);
}

/**
 * Get all industries
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Industries response with pagination
 */
export async function getIndustries(params = {}) {
  const realFn = async () => {
    const response = await get('/industries', { params });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getIndustries, realFn, [params]);
}

/**
 * Get industry by slug
 * @param {string} slug - Industry slug
 * @returns {Promise<Object>} Industry response
 */
export async function getIndustryBySlug(slug) {
  const realFn = async () => {
    const response = await get(`/industries/slug/${slug}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getIndustryBySlug, realFn, [slug]);
}

/**
 * Get industry by ID
 * @param {number|string} id - Industry ID
 * @returns {Promise<Object>} Industry response
 */
export async function getIndustryById(id) {
  const realFn = async () => {
    const response = await get(`/industries/${id}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getIndustryById, realFn, [id]);
}

/**
 * Get all certifications
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Certifications response with pagination
 */
export async function getCertifications(params = {}) {
  const realFn = async () => {
    const response = await get('/certifications', { params });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getCertifications, realFn, [params]);
}

/**
 * Get certification by ID
 * @param {number|string} id - Certification ID
 * @returns {Promise<Object>} Certification response
 */
export async function getCertificationById(id) {
  const realFn = async () => {
    const response = await get(`/certifications/${id}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getCertificationById, realFn, [id]);
}

/**
 * Get all partners
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Partners response with pagination
 */
export async function getPartners(params = {}) {
  const realFn = async () => {
    const response = await get('/partners', { params });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getPartners, realFn, [params]);
}

/**
 * Get partner by ID
 * @param {number|string} id - Partner ID
 * @returns {Promise<Object>} Partner response
 */
export async function getPartnerById(id) {
  const realFn = async () => {
    const response = await get(`/partners/${id}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getPartnerById, realFn, [id]);
}

/**
 * Get all blog posts
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Posts response with pagination
 */
export async function getPosts(params = {}) {
  const realFn = async () => {
    const response = await get('/posts', { params });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getPosts, realFn, [params]);
}

/**
 * Get post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object>} Post response
 */
export async function getPostBySlug(slug) {
  const realFn = async () => {
    const response = await get(`/posts/slug/${slug}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getPostBySlug, realFn, [slug]);
}

/**
 * Get post by ID
 * @param {number|string} id - Post ID
 * @returns {Promise<Object>} Post response
 */
export async function getPostById(id) {
  const realFn = async () => {
    const response = await get(`/posts/${id}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getPostById, realFn, [id]);
}

/**
 * Get all categories
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Categories response with pagination
 */
export async function getCategories(params = {}) {
  const realFn = async () => {
    const response = await get('/categories', { params });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getCategories, realFn, [params]);
}

/**
 * Get category by slug
 * @param {string} slug - Category slug
 * @returns {Promise<Object>} Category response
 */
export async function getCategoryBySlug(slug) {
  const realFn = async () => {
    const response = await get(`/categories/slug/${slug}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getCategoryBySlug, realFn, [slug]);
}

/**
 * Get category by ID
 * @param {number|string} id - Category ID
 * @returns {Promise<Object>} Category response
 */
export async function getCategoryById(id) {
  const realFn = async () => {
    const response = await get(`/categories/${id}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getCategoryById, realFn, [id]);
}

/**
 * Get all tags
 * @param {Object} params - Query parameters
 * @returns {Promise<Object>} Tags response with pagination
 */
export async function getTags(params = {}) {
  const realFn = async () => {
    const response = await get('/tags', { params });
    return response;
  };
  
  return executeApiCall(mockApiResponses.getTags, realFn, [params]);
}

/**
 * Get tag by slug
 * @param {string} slug - Tag slug
 * @returns {Promise<Object>} Tag response
 */
export async function getTagBySlug(slug) {
  const realFn = async () => {
    const response = await get(`/tags/slug/${slug}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getTagBySlug, realFn, [slug]);
}

/**
 * Get tag by ID
 * @param {number|string} id - Tag ID
 * @returns {Promise<Object>} Tag response
 */
export async function getTagById(id) {
  const realFn = async () => {
    const response = await get(`/tags/${id}`);
    return response;
  };
  
  return executeApiCall(mockApiResponses.getTagById, realFn, [id]);
}

// =============================================================================
// CONFIGURATION HELPERS
// =============================================================================

/**
 * Enable mock data mode
 */
export function enableMockData() {
  apiConfig.useMockData = true;
  console.log('Mock API data enabled');
}

/**
 * Disable mock data mode (use real API)
 */
export function disableMockData() {
  apiConfig.useMockData = false;
  console.log('Real API enabled');
}

/**
 * Toggle mock data mode
 */
export function toggleMockData() {
  apiConfig.useMockData = !apiConfig.useMockData;
  console.log(`Mock API data ${apiConfig.useMockData ? 'enabled' : 'disabled'}`);
}

/**
 * Get current API mode
 * @returns {string} Current mode ('mock' or 'real')
 */
export function getApiMode() {
  return apiConfig.useMockData ? 'mock' : 'real';
}

/**
 * Update API configuration
 * @param {Object} config - Configuration updates
 */
export function updateApiConfig(config) {
  Object.assign(apiConfig, config);
  console.log('API configuration updated:', apiConfig);
}

// =============================================================================
// DEBUGGING HELPERS
// =============================================================================

/**
 * Log current API configuration
 */
export function logApiConfig() {
  console.log('API Configuration:', {
    mode: getApiMode(),
    baseUrl: apiConfig.baseUrl,
    useMockData: apiConfig.useMockData,
    mockDelay: apiConfig.mockDelay,
    errorSimulation: apiConfig.errorSimulation
  });
}

/**
 * Test API connectivity
 * @returns {Promise<boolean>} True if API is accessible
 */
export async function testApiConnectivity() {
  try {
    if (apiConfig.useMockData) {
      await mockApiResponses.getSiteSettings();
      return true;
    } else {
      await get('/health');
      return true;
    }
  } catch (error) {
    console.error('API connectivity test failed:', error);
    return false;
  }
}

// =============================================================================
// EXPORT DEFAULT
// =============================================================================

export default {
  // Configuration
  config: apiConfig,
  enableMockData,
  disableMockData,
  toggleMockData,
  getApiMode,
  updateApiConfig,
  
  // Debugging
  logApiConfig,
  testApiConnectivity,
  
  // API Methods
  getSiteSettings,
  getPages,
  getPageBySlug,
  getPageById,
  getServices,
  getServiceBySlug,
  getServiceById,
  getProducts,
  getProductBySlug,
  getProductById,
  getIndustries,
  getIndustryBySlug,
  getIndustryById,
  getCertifications,
  getCertificationById,
  getPartners,
  getPartnerById,
  getPosts,
  getPostBySlug,
  getPostById,
  getCategories,
  getCategoryBySlug,
  getCategoryById,
  getTags,
  getTagBySlug,
  getTagById
}; 