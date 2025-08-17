/**
 * Production Configuration
 * 
 * This file contains production-specific configuration for the application.
 * Update these values based on your production environment.
 */

export const productionConfig = {
  // Strapi API Configuration
      strapi: {
      // Update this to your production Strapi URL
      apiUrl: 'https://cms-fklk.onrender.com',
      mediaUrl: 'https://cms-fklk.onrender.com',
      enabled: true,
    },
  
  // API Settings
  api: {
    timeout: 30000,
    retryAttempts: 3,
    useMockData: false,
  },
  
  // Environment
  environment: 'production',
  
  // Features
  features: {
    analytics: true,
    errorReporting: true,
    performanceMonitoring: true,
  }
};

/**
 * Get production API configuration
 * @returns {Object} Production API config
 */
export function getProductionApiConfig() {
  return {
    useMockApi: false,
    strapiEnabled: productionConfig.strapi.enabled,
    strapiApiUrl: productionConfig.strapi.apiUrl,
    strapiMediaUrl: productionConfig.strapi.mediaUrl,
    apiTimeout: productionConfig.api.timeout,
    apiRetryAttempts: productionConfig.api.retryAttempts,
    environment: productionConfig.environment
  };
}

/**
 * Check if running in production
 * @returns {boolean} True if in production
 */
export function isProduction() {
  return import.meta.env.PROD;
}

/**
 * Get the appropriate API configuration based on environment
 * @returns {Object} API configuration
 */
export function getApiConfig() {
  if (isProduction()) {
    return getProductionApiConfig();
  }
  
  // Development configuration
  return {
    useMockApi: import.meta.env.VITE_USE_MOCK_API === 'true',
    strapiEnabled: import.meta.env.VITE_STRAPI_ENABLED === 'true',
    strapiApiUrl: import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337',
    strapiMediaUrl: import.meta.env.VITE_STRAPI_MEDIA_URL || '',
    apiTimeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000,
    apiRetryAttempts: parseInt(import.meta.env.VITE_API_RETRY_ATTEMPTS) || 3,
    environment: import.meta.env.MODE
  };
} 