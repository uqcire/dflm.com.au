/**
 * Production Configuration
 * 
 * This file contains production-specific configuration for the application.
 * Update these values based on your production environment.
 */

export const productionConfig = {
  // Supabase Configuration
  supabase: {
    enabled: true,
    timeout: 30000,
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
    supabaseEnabled: productionConfig.supabase.enabled,
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
    supabaseEnabled: import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY,
    apiTimeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 30000,
    apiRetryAttempts: parseInt(import.meta.env.VITE_API_RETRY_ATTEMPTS) || 3,
    environment: import.meta.env.MODE
  };
} 