/**
 * Environment Configuration for API Integration
 * 
 * This file defines and validates all environment variables needed
 * for the API integration (mock data and Strapi).
 */

// =============================================================================
// ENVIRONMENT VARIABLES
// =============================================================================

/**
 * Environment variables configuration
 */
export const envConfig = {
  // Mock API Configuration
  VITE_USE_MOCK_API: {
    description: 'Enable mock API data (true/false)',
    default: 'true',
    type: 'boolean',
    required: false
  },
  
  // Strapi API Configuration
  VITE_STRAPI_API_URL: {
    description: 'Strapi API base URL',
    default: 'http://localhost:1337',
    type: 'string',
    required: false
  },
  
  VITE_STRAPI_ENABLED: {
    description: 'Enable Strapi integration (true/false)',
    default: 'false',
    type: 'boolean',
    required: false
  },
  
  VITE_STRAPI_MEDIA_URL: {
    description: 'Strapi media base URL',
    default: '',
    type: 'string',
    required: false
  },
  
  // Authentication
  VITE_STRAPI_TOKEN: {
    description: 'Strapi API token for authentication',
    default: '',
    type: 'string',
    required: false
  },
  
  // Development settings
  VITE_API_TIMEOUT: {
    description: 'API request timeout in milliseconds',
    default: '30000',
    type: 'number',
    required: false
  },
  
  VITE_API_RETRY_ATTEMPTS: {
    description: 'Number of API retry attempts',
    default: '3',
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
 * Get current API configuration
 * @returns {Object} Current API configuration
 */
export function getCurrentApiConfig() {
  return {
    useMockApi: getEnvVarAsBoolean('VITE_USE_MOCK_API'),
    strapiEnabled: getEnvVarAsBoolean('VITE_STRAPI_ENABLED'),
    strapiApiUrl: getEnvVar('VITE_STRAPI_API_URL'),
    strapiMediaUrl: getEnvVar('VITE_STRAPI_MEDIA_URL'),
    apiTimeout: getEnvVarAsNumber('VITE_API_TIMEOUT'),
    apiRetryAttempts: getEnvVarAsNumber('VITE_API_RETRY_ATTEMPTS'),
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
 * Check if mock API is enabled
 * @returns {boolean} True if mock API is enabled
 */
export function isMockApiEnabled() {
  return getEnvVarAsBoolean('VITE_USE_MOCK_API');
}

/**
 * Check if Strapi integration is enabled
 * @returns {boolean} True if Strapi is enabled
 */
export function isStrapiEnabled() {
  return getEnvVarAsBoolean('VITE_STRAPI_ENABLED');
}

/**
 * Get API mode (mock, strapi, or hybrid)
 * @returns {string} API mode
 */
export function getApiMode() {
  const mockEnabled = isMockApiEnabled();
  const strapiEnabled = isStrapiEnabled();
  
  if (mockEnabled && strapiEnabled) {
    return 'hybrid';
  } else if (strapiEnabled) {
    return 'strapi';
  } else {
    return 'mock';
  }
}

// =============================================================================
// ENVIRONMENT SETUP
// =============================================================================

/**
 * Setup environment for API integration
 * @returns {Object} Setup result
 */
export function setupApiEnvironment() {
  const validation = validateEnvConfig();
  const config = getCurrentApiConfig();
  const mode = getApiMode();
  
  console.log('🔧 API Environment Setup:');
  console.log(`  Mode: ${mode}`);
  console.log(`  Environment: ${config.environment}`);
  console.log(`  Mock API: ${config.useMockApi ? 'enabled' : 'disabled'}`);
  console.log(`  Strapi: ${config.strapiEnabled ? 'enabled' : 'disabled'}`);
  
  if (config.strapiEnabled) {
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
    mode,
    config,
    validation
  };
}

/**
 * Generate environment file template
 * @returns {string} Environment file content
 */
export function generateEnvTemplate() {
  let template = `# API Configuration
# Copy this file to .env.local and update values as needed

# Mock API Configuration
VITE_USE_MOCK_API=true

# Strapi API Configuration
VITE_STRAPI_API_URL=http://localhost:1337
VITE_STRAPI_ENABLED=false
VITE_STRAPI_MEDIA_URL=

# Authentication (optional)
VITE_STRAPI_TOKEN=

# Development settings
VITE_API_TIMEOUT=30000
VITE_API_RETRY_ATTEMPTS=3
`;

  return template;
}

/**
 * Get environment documentation
 * @returns {string} Documentation
 */
export function getEnvDocumentation() {
  let docs = `# Environment Variables Documentation

## API Configuration

### Mock API
- \`VITE_USE_MOCK_API\`: Enable mock API data (default: true)
  - Set to 'true' to use mock data during development
  - Set to 'false' to use real API calls

### Strapi Integration
- \`VITE_STRAPI_API_URL\`: Strapi API base URL (default: http://localhost:1337)
  - Development: http://localhost:1337
  - Production: https://your-strapi-instance.com

- \`VITE_STRAPI_ENABLED\`: Enable Strapi integration (default: false)
  - Set to 'true' to use Strapi API
  - Set to 'false' to use mock data

- \`VITE_STRAPI_MEDIA_URL\`: Strapi media base URL (optional)
  - Used for serving media files from Strapi

### Authentication
- \`VITE_STRAPI_TOKEN\`: Strapi API token (optional)
  - Required for authenticated requests
  - Can be set at runtime for security

### Development Settings
- \`VITE_API_TIMEOUT\`: API request timeout in milliseconds (default: 30000)
- \`VITE_API_RETRY_ATTEMPTS\`: Number of API retry attempts (default: 3)

## Usage Examples

### Development with Mock Data
\`\`\`
VITE_USE_MOCK_API=true
VITE_STRAPI_ENABLED=false
\`\`\`

### Development with Strapi
\`\`\`
VITE_USE_MOCK_API=false
VITE_STRAPI_ENABLED=true
VITE_STRAPI_API_URL=http://localhost:1337
\`\`\`

### Production
\`\`\`
VITE_USE_MOCK_API=false
VITE_STRAPI_ENABLED=true
VITE_STRAPI_API_URL=https://your-strapi-instance.com
VITE_STRAPI_MEDIA_URL=https://your-strapi-instance.com
\`\`\`
`;

  return docs;
}

// =============================================================================
// AUTO-SETUP IN DEVELOPMENT
// =============================================================================

// Automatically setup environment in development
if (import.meta.env.DEV) {
  setupApiEnvironment();
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
  isMockApiEnabled,
  isStrapiEnabled,
  getApiMode,
  setupApiEnvironment,
  generateEnvTemplate,
  getEnvDocumentation
}; 