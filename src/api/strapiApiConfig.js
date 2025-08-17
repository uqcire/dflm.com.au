/**
 * Strapi API Configuration
 * 
 * This file provides configuration and utilities for integrating with
 * the Strapi CMS API. It handles authentication, request formatting,
 * response parsing, and environment-specific settings.
 */

import { get, post, put, del } from '../utils/HTTP-CLIENT__API--UNIFIED.js';
import { getApiConfig } from '../config/production.js';

// =============================================================================
// CONFIGURATION
// =============================================================================

/**
 * Strapi API Configuration
 */
export const strapiConfig = {
  // Base URL for Strapi API - uses production config when available
  baseUrl: getApiConfig().strapiApiUrl,
  
  // API version and endpoints
  apiVersion: '', // Strapi v5 doesn't use version prefixes
  apiPath: '/api',
  
  // Authentication
  auth: {
    tokenKey: 'strapi_token',
    refreshTokenKey: 'strapi_refresh_token',
    autoRefresh: true,
    refreshThreshold: 5 * 60 * 1000, // 5 minutes before expiry
  },
  
  // Request configuration
  request: {
    timeout: 30000, // 30 seconds
    retryAttempts: 3,
    retryDelay: 1000, // 1 second
  },
  
  // Response handling
  response: {
    // Strapi v5 response structure (flattened)
    dataKey: 'data',
    metaKey: 'meta',
    errorKey: 'error',
    
    // Pagination
    pagination: {
      pageKey: 'page',
      pageSizeKey: 'pageSize',
      totalKey: 'total',
      pageCountKey: 'pageCount',
    },
    
    // Media handling
    media: {
      baseUrl: import.meta.env.VITE_STRAPI_MEDIA_URL || '',
      formats: ['thumbnail', 'small', 'medium', 'large'],
    },
    
    // Strapi v5 specific
    v5: {
      // Use documentId instead of id for individual documents
      useDocumentId: true,
      // Flattened response structure (no data.attributes nesting)
      flattenedResponse: true,
    },
  },
  
  // Content types configuration
  contentTypes: {
    // Single types (global settings)
    singleTypes: ['site-settings'],
    
    // Collection types
    collectionTypes: [
      'page',
      'service', 
      'product',
      'industry',
      'certification',
      'partner',
      'post',
      'category',
      'tag'
    ],
    
    // API endpoints mapping
    endpoints: {
      'site-settings': '/page', // Single type - uses singular name
      'page': '/static-pages', // Updated to use static-pages endpoint
      'service': '/services',
      'product': '/products',
      'industry': '/industries',
      'certification': '/certifications',
      'partner': '/partners',
      'post': '/posts',
      'category': '/categories',
      'tag': '/tags'
    }
  },
  
  // Query parameters
  query: {
    // Default parameters for all requests
    defaults: {
      populate: '*',
      publicationState: 'live',
    },
    
    // Available filters
    filters: {
      slug: 'filters[slug][$eq]',
      category: 'filters[category][slug][$eq]',
      tag: 'filters[tags][slug][$eq]',
      published: 'filters[publishedAt][$notNull]',
      dateRange: 'filters[publishedAt][$gte]',
    },
    
    // Available sorts
    sorts: {
      createdAt: 'sort[0]=createdAt:desc',
      updatedAt: 'sort[0]=updatedAt:desc',
      title: 'sort[0]=title:asc',
      publishedAt: 'sort[0]=publishedAt:desc',
    },
    
    // Pagination
    pagination: {
      page: 'pagination[page]',
      pageSize: 'pagination[pageSize]',
      limit: 'pagination[limit]',
    },
    
    // Fields selection
    fields: 'fields',
    
    // Population
    populate: 'populate',
  }
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Build Strapi API URL
 * @param {string} endpoint - API endpoint
 * @param {Object} params - Query parameters
 * @returns {string} Full API URL
 */
export function buildStrapiUrl(endpoint, params = {}) {
  const baseUrl = strapiConfig.baseUrl;
  const apiPath = strapiConfig.apiPath;
  const apiVersion = strapiConfig.apiVersion;
  
  // Build URL without version prefix for Strapi v5
  let url = `${baseUrl}${apiPath}${endpoint}`;
  
  // Add query parameters
  const queryParams = new URLSearchParams();
  
  // Start with default parameters
  const allParams = { ...strapiConfig.query.defaults, ...params };
  
  // Add all parameters
  Object.entries(allParams).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      // Handle nested objects (like pagination)
      if (typeof value === 'object' && !Array.isArray(value)) {
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          if (nestedValue !== undefined && nestedValue !== null) {
            queryParams.append(`${key}[${nestedKey}]`, nestedValue);
          }
        });
      } else {
        queryParams.append(key, value);
      }
    }
  });
  
  const queryString = queryParams.toString();
  if (queryString) {
    url += `?${queryString}`;
  }
  
  return url;
}

/**
 * Format Strapi query parameters
 * @param {Object} params - Raw parameters
 * @returns {Object} Formatted parameters
 */
export function formatStrapiParams(params = {}) {
  const formatted = {};
  
  // Handle filters
  if (params.filters) {
    Object.entries(params.filters).forEach(([key, value]) => {
      const filterKey = strapiConfig.query.filters[key] || `filters[${key}][$eq]`;
      formatted[filterKey] = value;
    });
  }
  
  // Handle sorts
  if (params.sort) {
    const sortKey = strapiConfig.query.sorts[params.sort] || `sort[0]=${params.sort}:desc`;
    formatted[sortKey] = '';
  }
  
  // Handle pagination - Strapi v5 expects nested pagination object
  if (params.page || params.pageSize) {
    formatted.pagination = {};
    if (params.page) {
      formatted.pagination.page = params.page;
    }
    if (params.pageSize) {
      formatted.pagination.pageSize = params.pageSize;
    }
  }
  
  // Handle fields
  if (params.fields) {
    formatted[strapiConfig.query.fields] = params.fields.join(',');
  }
  
  // Handle populate
  if (params.populate) {
    formatted[strapiConfig.query.populate] = params.populate;
  }
  
  return formatted;
}

/**
 * Parse Strapi response (v5 compatible)
 * @param {Object} response - Raw Strapi response
 * @returns {Object} Parsed response
 */
export function parseStrapiResponse(response) {
  const { data, meta, error } = response;
  
  if (error) {
    throw new Error(error.message || 'Strapi API error');
  }
  
  // Handle single item response (v5 flattened structure)
  if (data && !Array.isArray(data)) {
    return {
      data: data, // v5: data is already flattened, no data.attributes
      meta: meta || {},
      id: data.id,
      documentId: data.documentId // v5: use documentId for individual documents
    };
  }
  
  // Handle collection response (v5 flattened structure)
  if (Array.isArray(data)) {
    return {
      data: data.map(item => ({
        ...item, // v5: item is already flattened, no item.attributes
        id: item.id,
        documentId: item.documentId // v5: include documentId
      })),
      meta: meta || {}
    };
  }
  
  return response;
}

/**
 * Format data for Strapi API (v5 compatible)
 * @param {Object} data - Raw data
 * @returns {Object} Formatted data for Strapi
 */
export function formatStrapiData(data) {
  return {
    data: data // v5: no need for attributes wrapper
  };
}

/**
 * Handle Strapi media URLs
 * @param {string} url - Media URL
 * @param {string} format - Image format (thumbnail, small, medium, large)
 * @returns {string} Full media URL
 */
export function getMediaUrl(url, format = null) {
  if (!url) return '';
  
  // If URL is already absolute, return as is
  if (url.startsWith('http')) {
    return url;
  }
  
  // If URL is relative, prepend base URL
  const baseUrl = strapiConfig.response.media.baseUrl || strapiConfig.baseUrl;
  
  if (format && strapiConfig.response.media.formats.includes(format)) {
    // Add format to URL
    const urlParts = url.split('.');
    const extension = urlParts.pop();
    return `${baseUrl}${urlParts.join('.')}_${format}.${extension}`;
  }
  
  return `${baseUrl}${url}`;
}

// =============================================================================
// AUTHENTICATION HELPERS
// =============================================================================

/**
 * Get Strapi authentication token
 * @returns {string|null} Authentication token
 */
export function getStrapiToken() {
  try {
    return localStorage.getItem(strapiConfig.auth.tokenKey) || 
           sessionStorage.getItem(strapiConfig.auth.tokenKey);
  } catch (error) {
    console.error('Error getting Strapi token:', error);
    return null;
  }
}

/**
 * Set Strapi authentication token
 * @param {string} token - JWT token
 * @param {boolean} remember - Whether to use localStorage
 */
export function setStrapiToken(token, remember = false) {
  try {
    if (remember) {
      localStorage.setItem(strapiConfig.auth.tokenKey, token);
      sessionStorage.removeItem(strapiConfig.auth.tokenKey);
    } else {
      sessionStorage.setItem(strapiConfig.auth.tokenKey, token);
      localStorage.removeItem(strapiConfig.auth.tokenKey);
    }
  } catch (error) {
    console.error('Error setting Strapi token:', error);
  }
}

/**
 * Remove Strapi authentication token
 */
export function removeStrapiToken() {
  try {
    localStorage.removeItem(strapiConfig.auth.tokenKey);
    sessionStorage.removeItem(strapiConfig.auth.tokenKey);
    localStorage.removeItem(strapiConfig.auth.refreshTokenKey);
    sessionStorage.removeItem(strapiConfig.auth.refreshTokenKey);
  } catch (error) {
    console.error('Error removing Strapi token:', error);
  }
}

/**
 * Check if Strapi token is valid
 * @param {string} token - JWT token
 * @returns {boolean} True if token is valid
 */
export function isStrapiTokenValid(token) {
  if (!token) return false;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp * 1000; // Convert to milliseconds
    const now = Date.now();
    
    return now < expiry;
  } catch (error) {
    console.error('Error validating Strapi token:', error);
    return false;
  }
}

/**
 * Get Strapi token expiry time
 * @param {string} token - JWT token
 * @returns {Date|null} Token expiry date
 */
export function getStrapiTokenExpiry(token) {
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return new Date(payload.exp * 1000);
  } catch (error) {
    console.error('Error getting Strapi token expiry:', error);
    return null;
  }
}

// =============================================================================
// STRAPI API CLIENT
// =============================================================================

/**
 * Strapi API client with authentication and error handling
 */
class StrapiApiClient {
  constructor() {
    this.baseUrl = strapiConfig.baseUrl;
    this.apiPath = strapiConfig.apiPath;
    this.apiVersion = strapiConfig.apiVersion;
  }
  
  /**
   * Make authenticated request to Strapi
   * @param {string} method - HTTP method
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request data
   * @param {Object} config - Request config
   * @returns {Promise<Object>} API response
   */
  async request(method, endpoint, data = null, config = {}) {
    // Build URL - if params are provided, let the HTTP client handle them
    const baseUrl = `${this.baseUrl}${this.apiPath}${endpoint}`;
    const url = config.params ? baseUrl : buildStrapiUrl(endpoint, {});
    
    // Add authentication header
    const token = getStrapiToken();
    const headers = {
      'Content-Type': 'application/json',
      ...config.headers
    };
    
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    
    const requestConfig = {
      method,
      url,
      headers,
      timeout: strapiConfig.request.timeout,
      ...config
    };
    
    if (data) {
      requestConfig.data = formatStrapiData(data);
    }
    
    try {
      const response = await this.makeRequest(requestConfig);
      return parseStrapiResponse(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }
  
  /**
   * Make HTTP request with retry logic
   * @param {Object} config - Request config
   * @returns {Promise<Object>} Response
   */
  async makeRequest(config) {
    let lastError;
    
    for (let attempt = 1; attempt <= strapiConfig.request.retryAttempts; attempt++) {
      try {
        const response = await this.executeRequest(config);
        return response;
      } catch (error) {
        lastError = error;
        
        // Don't retry on authentication errors
        if (error.status === 401 || error.status === 403) {
          break;
        }
        
        // Wait before retry
        if (attempt < strapiConfig.request.retryAttempts) {
          await new Promise(resolve => 
            setTimeout(resolve, strapiConfig.request.retryDelay * attempt)
          );
        }
      }
    }
    
    throw lastError;
  }
  
  /**
   * Execute single HTTP request
   * @param {Object} config - Request config
   * @returns {Promise<Object>} Response
   */
  async executeRequest(config) {
    switch (config.method.toLowerCase()) {
      case 'get':
        return await get(config.url, config);
      case 'post':
        return await post(config.url, config.data, config);
      case 'put':
        return await put(config.url, config.data, config);
      case 'delete':
        return await del(config.url, config);
      default:
        throw new Error(`Unsupported HTTP method: ${config.method}`);
    }
  }
  
  /**
   * Handle Strapi API errors
   * @param {Error} error - Error object
   * @returns {Error} Formatted error
   */
  handleError(error) {
    // Handle authentication errors
    if (error.status === 401) {
      removeStrapiToken();
      throw new Error('Authentication failed. Please log in again.');
    }
    
    // Handle Strapi-specific errors
    if (error.response && error.response.data) {
      const strapiError = error.response.data.error;
      if (strapiError) {
        throw new Error(strapiError.message || 'Strapi API error');
      }
    }
    
    return error;
  }
  
  // Convenience methods
  async get(endpoint, config = {}) {
    return this.request('GET', endpoint, null, config);
  }
  
  async post(endpoint, data, config = {}) {
    return this.request('POST', endpoint, data, config);
  }
  
  async put(endpoint, data, config = {}) {
    return this.request('PUT', endpoint, data, config);
  }
  
  async delete(endpoint, config = {}) {
    return this.request('DELETE', endpoint, null, config);
  }
}

// =============================================================================
// CONTENT TYPE HELPERS
// =============================================================================

/**
 * Get endpoint for content type
 * @param {string} contentType - Content type name
 * @returns {string} API endpoint
 */
export function getContentTypeEndpoint(contentType) {
  return strapiConfig.contentTypes.endpoints[contentType] || `/${contentType}s`;
}

/**
 * Check if content type is single type
 * @param {string} contentType - Content type name
 * @returns {boolean} True if single type
 */
export function isSingleType(contentType) {
  return strapiConfig.contentTypes.singleTypes.includes(contentType);
}

/**
 * Check if content type is collection type
 * @param {string} contentType - Content type name
 * @returns {boolean} True if collection type
 */
export function isCollectionType(contentType) {
  return strapiConfig.contentTypes.collectionTypes.includes(contentType);
}

// =============================================================================
// ENVIRONMENT DETECTION
// =============================================================================

/**
 * Check if running in development
 * @returns {boolean} True if in development
 */
export function isDevelopment() {
  return import.meta.env.DEV;
}

/**
 * Check if running in production
 * @returns {boolean} True if in production
 */
export function isProduction() {
  return import.meta.env.PROD;
}

/**
 * Get current environment
 * @returns {string} Environment name
 */
export function getEnvironment() {
  return import.meta.env.MODE;
}

// =============================================================================
// CONFIGURATION HELPERS
// =============================================================================

/**
 * Update Strapi configuration
 * @param {Object} updates - Configuration updates
 */
export function updateStrapiConfig(updates) {
  Object.assign(strapiConfig, updates);
  console.log('Strapi configuration updated:', strapiConfig);
}

/**
 * Get current Strapi configuration
 * @returns {Object} Current configuration
 */
export function getStrapiConfig() {
  return { ...strapiConfig };
}

/**
 * Validate Strapi configuration
 * @returns {boolean} True if configuration is valid
 */
export function validateStrapiConfig() {
  const required = ['baseUrl', 'apiVersion', 'apiPath'];
  
  for (const field of required) {
    if (!strapiConfig[field]) {
      console.error(`Missing required Strapi config: ${field}`);
      return false;
    }
  }
  
  return true;
}

// =============================================================================
// EXPORTS
// =============================================================================

// Create and export Strapi API client instance
export const strapiClient = new StrapiApiClient();

// Export configuration
export { strapiConfig as config };

// Export utility functions
export {
  // All functions are already exported above as individual exports
};

// Export default
export default {
  client: strapiClient,
  config: strapiConfig
}; 