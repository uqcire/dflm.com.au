/**
 * Environment Configuration for Blog API Integration
 * 
 * This file defines and validates environment variables needed
 * for blog Strapi CMS integration only.
 */

// =============================================================================
// ENVIRONMENT VARIABLES
// =============================================================================

/**
 * Environment variables configuration for blog CMS
 */
export const envConfig = {
  // Strapi Blog API Configuration
  VITE_STRAPI_API_URL: {
    description: 'Strapi blog API base URL',
    default: 'http://localhost:1337',
    type: 'string',
    required: true
  },
  
  VITE_STRAPI_MEDIA_URL: {
    description: 'Strapi media base URL for blog images',
    default: '',
    type: 'string',
    required: false
  },
  
  // Authentication (optional for public blog content)
  VITE_STRAPI_TOKEN: {
    description: 'Strapi API token for authenticated requests',
    default: '',
    type: 'string',
    required: false
  },
  
  // Performance settings
  VITE_API_TIMEOUT: {
    description: 'Blog API request timeout in milliseconds',
    default: '10000',
    type: 'number',
    required: false
  }
};

// =============================================================================
// VALIDATION FUNCTIONS
// =============================================================================

/**
 * Get environment variable value
 * @param {string} key - Environment variable key
 * @returns {string} Environment variable value
 */
export function getEnvVar(key) {
  return import.meta.env[key] || envConfig[key]?.default || '';
}

/**
 * Get environment variable as boolean
 * @param {string} key - Environment variable key
 * @returns {boolean} Boolean value
 */
export function getEnvVarAsBoolean(key) {
  const value = getEnvVar(key);
  return value === 'true' || value === true;
}

/**
 * Get environment variable as number
 * @param {string} key - Environment variable key
 * @returns {number} Number value
 */
export function getEnvVarAsNumber(key) {
  const value = getEnvVar(key);
  return parseInt(value, 10) || 0;
}

/**
 * Validate environment configuration
 * @returns {Object} Validation result
 */
export function validateEnvConfig() {
  const result = {
    valid: true,
    errors: [],
    warnings: [],
    config: {}
  };
  
  // Check required variables
  Object.entries(envConfig).forEach(([key, config]) => {
    const value = getEnvVar(key);
    
    if (config.required && !value) {
      result.valid = false;
      result.errors.push(`Missing required environment variable: ${key}`);
    }
    
    // Type validation
    if (value) {
      switch (config.type) {
        case 'boolean':
          if (!['true', 'false', true, false].includes(value)) {
            result.warnings.push(`Invalid boolean value for ${key}: ${value}`);
          }
          break;
        case 'number':
          if (isNaN(parseInt(value, 10))) {
            result.warnings.push(`Invalid number value for ${key}: ${value}`);
          }
          break;
        case 'url':
          try {
            new URL(value);
          } catch {
            result.warnings.push(`Invalid URL for ${key}: ${value}`);
          }
          break;
      }
    }
    
    // Store validated value
    result.config[key] = value;
  });
  
  return result;
}

/**
 * Get current blog API configuration
 * @returns {Object} Current blog API configuration
 */
export function getCurrentApiConfig() {
  return {
    strapiApiUrl: getEnvVar('VITE_STRAPI_API_URL'),
    strapiMediaUrl: getEnvVar('VITE_STRAPI_MEDIA_URL'),
    strapiToken: getEnvVar('VITE_STRAPI_TOKEN'),
    apiTimeout: getEnvVarAsNumber('VITE_API_TIMEOUT'),
    environment: import.meta.env.MODE
  };
}

// =============================================================================
// CONFIGURATION HELPERS
// =============================================================================

/**
 * Check if running in development mode
 * @returns {boolean} True if in development
 */
export function isDevelopment() {
  return import.meta.env.DEV;
}

/**
 * Check if running in production mode
 * @returns {boolean} True if in production
 */
export function isProduction() {
  return import.meta.env.PROD;
}

/**
 * Check if Strapi blog integration is configured
 * @returns {boolean} True if Strapi blog is configured
 */
export function isBlogApiConfigured() {
  const apiUrl = getEnvVar('VITE_STRAPI_API_URL');
  return apiUrl && apiUrl !== '';
}

// =============================================================================
// ENVIRONMENT SETUP
// =============================================================================

/**
 * Setup environment for blog API integration
 * @returns {Object} Setup result
 */
export function setupBlogApiEnvironment() {
  const validation = validateEnvConfig();
  const config = getCurrentApiConfig();
  const isConfigured = isBlogApiConfigured();
  
  console.log('🔧 Blog API Environment Setup:');
  console.log(`  Environment: ${config.environment}`);
  console.log(`  Blog API: ${isConfigured ? 'configured' : 'not configured'}`);
  
  if (isConfigured) {
    console.log(`  Strapi URL: ${config.strapiApiUrl}`);
  }
  
  if (validation.errors.length > 0) {
    console.error('❌ Environment validation errors:', validation.errors);
  }
  
  if (validation.warnings.length > 0) {
    console.warn('⚠️ Environment validation warnings:', validation.warnings);
  }
  
  return {
    valid: validation.valid,
    configured: isConfigured,
    config,
    validation
  };
}

/**
 * Generate environment file template for blog API
 * @returns {string} Environment file content
 */
export function generateEnvTemplate() {
  let template = `# Blog API Configuration
# Copy this file to .env.local and update values as needed

# Strapi Blog CMS Configuration
VITE_STRAPI_API_URL=http://localhost:1337
VITE_STRAPI_MEDIA_URL=

# Authentication (optional for public blog content)
VITE_STRAPI_TOKEN=

# Performance settings
VITE_API_TIMEOUT=10000
`;

  return template;
}

/**
 * Get environment documentation for blog API
 * @returns {string} Documentation
 */
export function getEnvDocumentation() {
  let docs = `# Blog API Environment Variables Documentation

## Strapi Blog CMS Configuration

### Required Variables
- \`VITE_STRAPI_API_URL\`: Strapi blog API base URL
  - Development: http://localhost:1337
  - Production: https://your-strapi-instance.com

### Optional Variables
- \`VITE_STRAPI_MEDIA_URL\`: Strapi media base URL for blog images
  - Used for serving blog media files from Strapi
  - If not set, will use VITE_STRAPI_API_URL

- \`VITE_STRAPI_TOKEN\`: Strapi API token for authenticated requests
  - Optional for public blog content
  - Required for creating/updating blog posts via admin

### Performance Settings
- \`VITE_API_TIMEOUT\`: Blog API request timeout in milliseconds (default: 10000)

## Usage Examples

### Development
\`\`\`
VITE_STRAPI_API_URL=http://localhost:1337
VITE_API_TIMEOUT=10000
\`\`\`

### Production
\`\`\`
VITE_STRAPI_API_URL=https://cms-fklk.onrender.com
VITE_STRAPI_MEDIA_URL=https://cms-fklk.onrender.com
VITE_API_TIMEOUT=10000
\`\`\`
`;

  return docs;
}

// =============================================================================
// AUTO-SETUP IN DEVELOPMENT
// =============================================================================

// Automatically setup blog environment in development
if (import.meta.env.DEV) {
  setupBlogApiEnvironment();
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  envConfig,
  getEnvVar,
  getEnvVarAsBoolean,
  getEnvVarAsNumber,
  validateEnvConfig,
  getCurrentApiConfig,
  isDevelopment,
  isProduction,
  isBlogApiConfigured,
  setupBlogApiEnvironment,
  generateEnvTemplate,
  getEnvDocumentation
}; 