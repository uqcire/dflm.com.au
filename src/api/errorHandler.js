/**
 * API Error Handler
 * 
 * This file provides comprehensive error handling specific to API responses,
 * including error categorization, user-friendly messages, and recovery strategies.
 */

import { showAlert } from '../utils/HTTP-CLIENT__API--UNIFIED.js';

// =============================================================================
// ERROR TYPES
// =============================================================================

/**
 * API Error Types
 */
export const API_ERROR_TYPES = {
  // Network errors
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  CONNECTION_ERROR: 'CONNECTION_ERROR',
  
  // HTTP status errors
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  UNPROCESSABLE_ENTITY: 'UNPROCESSABLE_ENTITY',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  
  // Strapi-specific errors
  STRAPI_ERROR: 'STRAPI_ERROR',
  STRAPI_VALIDATION_ERROR: 'STRAPI_VALIDATION_ERROR',
  STRAPI_AUTH_ERROR: 'STRAPI_AUTH_ERROR',
  
  // Content errors
  CONTENT_NOT_FOUND: 'CONTENT_NOT_FOUND',
  CONTENT_UNAVAILABLE: 'CONTENT_UNAVAILABLE',
  CONTENT_INVALID: 'CONTENT_INVALID',
  
  // Data errors
  DATA_PARSE_ERROR: 'DATA_PARSE_ERROR',
  DATA_VALIDATION_ERROR: 'DATA_VALIDATION_ERROR',
  DATA_TRANSFORM_ERROR: 'DATA_TRANSFORM_ERROR',
  
  // Configuration errors
  CONFIG_ERROR: 'CONFIG_ERROR',
  ENV_ERROR: 'ENV_ERROR',
  
  // Unknown errors
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

// =============================================================================
// ERROR MESSAGES
// =============================================================================

/**
 * User-friendly error messages
 */
export const ERROR_MESSAGES = {
  // Network errors
  [API_ERROR_TYPES.NETWORK_ERROR]: {
    title: 'Connection Error',
    message: 'Unable to connect to the server. Please check your internet connection and try again.',
    userAction: 'Check your internet connection and refresh the page.',
    severity: 'high'
  },
  
  [API_ERROR_TYPES.TIMEOUT_ERROR]: {
    title: 'Request Timeout',
    message: 'The request took too long to complete. Please try again.',
    userAction: 'Try refreshing the page or check your connection speed.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.CONNECTION_ERROR]: {
    title: 'Server Unreachable',
    message: 'Unable to reach the server. The service may be temporarily unavailable.',
    userAction: 'Please try again in a few minutes.',
    severity: 'high'
  },
  
  // HTTP status errors
  [API_ERROR_TYPES.BAD_REQUEST]: {
    title: 'Invalid Request',
    message: 'The request was invalid. Please check your input and try again.',
    userAction: 'Review your input and try again.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.UNAUTHORIZED]: {
    title: 'Authentication Required',
    message: 'You need to be logged in to access this content.',
    userAction: 'Please log in and try again.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.FORBIDDEN]: {
    title: 'Access Denied',
    message: 'You don\'t have permission to access this content.',
    userAction: 'Contact support if you believe this is an error.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.NOT_FOUND]: {
    title: 'Content Not Found',
    message: 'The requested content could not be found.',
    userAction: 'Check the URL or try navigating to a different page.',
    severity: 'low'
  },
  
  [API_ERROR_TYPES.CONFLICT]: {
    title: 'Conflict',
    message: 'There was a conflict with the current state of the resource.',
    userAction: 'Please refresh the page and try again.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.UNPROCESSABLE_ENTITY]: {
    title: 'Validation Error',
    message: 'The provided data is invalid. Please check your input.',
    userAction: 'Review and correct the information you entered.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.INTERNAL_SERVER_ERROR]: {
    title: 'Server Error',
    message: 'An internal server error occurred. Please try again later.',
    userAction: 'Please try again in a few minutes.',
    severity: 'high'
  },
  
  [API_ERROR_TYPES.SERVICE_UNAVAILABLE]: {
    title: 'Service Unavailable',
    message: 'The service is temporarily unavailable. Please try again later.',
    userAction: 'Please try again in a few minutes.',
    severity: 'high'
  },
  
  // Strapi-specific errors
  [API_ERROR_TYPES.STRAPI_ERROR]: {
    title: 'CMS Error',
    message: 'There was an error with the content management system.',
    userAction: 'Please try again or contact support if the problem persists.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.STRAPI_VALIDATION_ERROR]: {
    title: 'Data Validation Error',
    message: 'The data provided doesn\'t meet the required format.',
    userAction: 'Please check your input and try again.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.STRAPI_AUTH_ERROR]: {
    title: 'Authentication Error',
    message: 'There was an authentication error with the CMS.',
    userAction: 'Please refresh the page and try again.',
    severity: 'medium'
  },
  
  // Content errors
  [API_ERROR_TYPES.CONTENT_NOT_FOUND]: {
    title: 'Content Not Found',
    message: 'The requested content could not be found in the system.',
    userAction: 'Try navigating to a different page or contact support.',
    severity: 'low'
  },
  
  [API_ERROR_TYPES.CONTENT_UNAVAILABLE]: {
    title: 'Content Unavailable',
    message: 'This content is currently unavailable.',
    userAction: 'Please try again later or contact support.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.CONTENT_INVALID]: {
    title: 'Invalid Content',
    message: 'The content format is invalid or corrupted.',
    userAction: 'Please refresh the page or contact support.',
    severity: 'medium'
  },
  
  // Data errors
  [API_ERROR_TYPES.DATA_PARSE_ERROR]: {
    title: 'Data Error',
    message: 'There was an error processing the data.',
    userAction: 'Please refresh the page and try again.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.DATA_VALIDATION_ERROR]: {
    title: 'Data Validation Error',
    message: 'The data received is not in the expected format.',
    userAction: 'Please refresh the page or contact support.',
    severity: 'medium'
  },
  
  [API_ERROR_TYPES.DATA_TRANSFORM_ERROR]: {
    title: 'Data Processing Error',
    message: 'There was an error processing the data for display.',
    userAction: 'Please refresh the page and try again.',
    severity: 'medium'
  },
  
  // Configuration errors
  [API_ERROR_TYPES.CONFIG_ERROR]: {
    title: 'Configuration Error',
    message: 'There is a configuration error with the application.',
    userAction: 'Please contact support for assistance.',
    severity: 'high'
  },
  
  [API_ERROR_TYPES.ENV_ERROR]: {
    title: 'Environment Error',
    message: 'There is an environment configuration error.',
    userAction: 'Please contact support for assistance.',
    severity: 'high'
  },
  
  // Unknown errors
  [API_ERROR_TYPES.UNKNOWN_ERROR]: {
    title: 'Unexpected Error',
    message: 'An unexpected error occurred. Please try again.',
    userAction: 'Please refresh the page or contact support if the problem persists.',
    severity: 'medium'
  }
};

// =============================================================================
// ERROR CATEGORIZATION
// =============================================================================

/**
 * Categorize error based on error object
 * @param {Error} error - Error object
 * @returns {string} Error type
 */
export function categorizeError(error) {
  // Check for network errors
  if (error.code === 'ECONNABORTED' || error.message.includes('timeout')) {
    return API_ERROR_TYPES.TIMEOUT_ERROR;
  }
  
  if (error.message.includes('Network Error') || error.message.includes('connection')) {
    return API_ERROR_TYPES.NETWORK_ERROR;
  }
  
  // Check for HTTP status errors
  if (error.response) {
    const status = error.response.status;
    
    switch (status) {
      case 400:
        return API_ERROR_TYPES.BAD_REQUEST;
      case 401:
        return API_ERROR_TYPES.UNAUTHORIZED;
      case 403:
        return API_ERROR_TYPES.FORBIDDEN;
      case 404:
        return API_ERROR_TYPES.NOT_FOUND;
      case 409:
        return API_ERROR_TYPES.CONFLICT;
      case 422:
        return API_ERROR_TYPES.UNPROCESSABLE_ENTITY;
      case 500:
        return API_ERROR_TYPES.INTERNAL_SERVER_ERROR;
      case 503:
        return API_ERROR_TYPES.SERVICE_UNAVAILABLE;
      default:
        if (status >= 500) {
          return API_ERROR_TYPES.INTERNAL_SERVER_ERROR;
        } else if (status >= 400) {
          return API_ERROR_TYPES.BAD_REQUEST;
        }
    }
  }
  
  // Check for Strapi-specific errors
  if (error.response?.data?.error) {
    const strapiError = error.response.data.error;
    
    if (strapiError.name === 'ValidationError') {
      return API_ERROR_TYPES.STRAPI_VALIDATION_ERROR;
    }
    
    if (strapiError.name === 'UnauthorizedError') {
      return API_ERROR_TYPES.STRAPI_AUTH_ERROR;
    }
    
    return API_ERROR_TYPES.STRAPI_ERROR;
  }
  
  // Check for content-specific errors
  if (error.message.includes('not found') || error.message.includes('Not Found')) {
    return API_ERROR_TYPES.CONTENT_NOT_FOUND;
  }
  
  if (error.message.includes('unavailable') || error.message.includes('Unavailable')) {
    return API_ERROR_TYPES.CONTENT_UNAVAILABLE;
  }
  
  if (error.message.includes('invalid') || error.message.includes('Invalid')) {
    return API_ERROR_TYPES.CONTENT_INVALID;
  }
  
  // Check for data processing errors
  if (error.message.includes('parse') || error.message.includes('JSON')) {
    return API_ERROR_TYPES.DATA_PARSE_ERROR;
  }
  
  if (error.message.includes('validation') || error.message.includes('Validation')) {
    return API_ERROR_TYPES.DATA_VALIDATION_ERROR;
  }
  
  if (error.message.includes('transform') || error.message.includes('Transform')) {
    return API_ERROR_TYPES.DATA_TRANSFORM_ERROR;
  }
  
  // Check for configuration errors
  if (error.message.includes('config') || error.message.includes('Config')) {
    return API_ERROR_TYPES.CONFIG_ERROR;
  }
  
  if (error.message.includes('environment') || error.message.includes('env')) {
    return API_ERROR_TYPES.ENV_ERROR;
  }
  
  // Default to unknown error
  return API_ERROR_TYPES.UNKNOWN_ERROR;
}

// =============================================================================
// ERROR HANDLING
// =============================================================================

/**
 * Enhanced error information
 */
export class ApiError extends Error {
  constructor(error, context = {}) {
    super(error.message || 'API Error');
    
    this.originalError = error;
    this.type = categorizeError(error);
    this.context = context;
    this.timestamp = new Date();
    this.userFriendly = ERROR_MESSAGES[this.type] || ERROR_MESSAGES[API_ERROR_TYPES.UNKNOWN_ERROR];
    
    // Copy properties from original error
    this.status = error.status || error.response?.status;
    this.code = error.code;
    this.response = error.response;
    this.request = error.request;
    this.config = error.config;
    
    // Add stack trace
    this.stack = error.stack;
  }
  
  /**
   * Get user-friendly error message
   * @returns {Object} User-friendly error information
   */
  getUserFriendlyError() {
    return {
      type: this.type,
      title: this.userFriendly.title,
      message: this.userFriendly.message,
      userAction: this.userFriendly.userAction,
      severity: this.userFriendly.severity,
      timestamp: this.timestamp
    };
  }
  
  /**
   * Get detailed error information for debugging
   * @returns {Object} Detailed error information
   */
  getDebugInfo() {
    return {
      type: this.type,
      message: this.message,
      status: this.status,
      code: this.code,
      context: this.context,
      timestamp: this.timestamp,
      originalError: this.originalError,
      response: this.response,
      request: this.request,
      config: this.config
    };
  }
  
  /**
   * Check if error is retryable
   * @returns {boolean} True if error can be retried
   */
  isRetryable() {
    const retryableTypes = [
      API_ERROR_TYPES.NETWORK_ERROR,
      API_ERROR_TYPES.TIMEOUT_ERROR,
      API_ERROR_TYPES.CONNECTION_ERROR,
      API_ERROR_TYPES.INTERNAL_SERVER_ERROR,
      API_ERROR_TYPES.SERVICE_UNAVAILABLE
    ];
    
    return retryableTypes.includes(this.type);
  }
  
  /**
   * Check if error requires user action
   * @returns {boolean} True if user action is required
   */
  requiresUserAction() {
    const userActionTypes = [
      API_ERROR_TYPES.UNAUTHORIZED,
      API_ERROR_TYPES.FORBIDDEN,
      API_ERROR_TYPES.BAD_REQUEST,
      API_ERROR_TYPES.UNPROCESSABLE_ENTITY,
      API_ERROR_TYPES.STRAPI_VALIDATION_ERROR
    ];
    
    return userActionTypes.includes(this.type);
  }
}

/**
 * Handle API error with user-friendly messaging
 * @param {Error} error - Original error
 * @param {Object} context - Error context
 * @param {Object} options - Handling options
 * @returns {ApiError} Processed error
 */
export function handleApiError(error, context = {}, options = {}) {
  const apiError = new ApiError(error, context);
  
  // Log error for debugging
  console.error('API Error:', apiError.getDebugInfo());
  
  // Show user-friendly message
  if (options.showAlert !== false) {
    const userError = apiError.getUserFriendlyError();
    
    showAlert({
      text: userError.message,
      type: userError.severity === 'high' ? 'error' : 'warning',
      title: userError.title,
      duration: userError.severity === 'high' ? 0 : 5000
    });
  }
  
  // Report to error tracking service if available
  if (options.reportError !== false && window.globalErrorHandler) {
    window.globalErrorHandler.processError(
      window.globalErrorHandler.createErrorInfo(apiError, {
        type: 'api_error',
        severity: apiError.userFriendly.severity,
        context: context
      })
    );
  }
  
  return apiError;
}

// =============================================================================
// ERROR RECOVERY
// =============================================================================

/**
 * Error recovery strategies
 */
export const RECOVERY_STRATEGIES = {
  [API_ERROR_TYPES.NETWORK_ERROR]: {
    action: 'retry',
    maxAttempts: 3,
    delay: 1000,
    backoff: 'exponential'
  },
  
  [API_ERROR_TYPES.TIMEOUT_ERROR]: {
    action: 'retry',
    maxAttempts: 2,
    delay: 2000,
    backoff: 'linear'
  },
  
  [API_ERROR_TYPES.UNAUTHORIZED]: {
    action: 'redirect',
    target: '/login',
    message: 'Please log in to continue'
  },
  
  [API_ERROR_TYPES.FORBIDDEN]: {
    action: 'redirect',
    target: '/',
    message: 'Access denied. Redirecting to home page.'
  },
  
  [API_ERROR_TYPES.NOT_FOUND]: {
    action: 'redirect',
    target: '/404',
    message: 'Page not found. Redirecting to error page.'
  },
  
  [API_ERROR_TYPES.INTERNAL_SERVER_ERROR]: {
    action: 'retry',
    maxAttempts: 2,
    delay: 5000,
    backoff: 'exponential'
  },
  
  [API_ERROR_TYPES.SERVICE_UNAVAILABLE]: {
    action: 'retry',
    maxAttempts: 3,
    delay: 10000,
    backoff: 'exponential'
  }
};

/**
 * Execute error recovery strategy
 * @param {ApiError} apiError - API error
 * @param {Function} retryFunction - Function to retry
 * @returns {Promise<any>} Recovery result
 */
export async function executeRecoveryStrategy(apiError, retryFunction = null) {
  const strategy = RECOVERY_STRATEGIES[apiError.type];
  
  if (!strategy) {
    throw apiError;
  }
  
  switch (strategy.action) {
    case 'retry':
      if (retryFunction && apiError.isRetryable()) {
        return await retryWithBackoff(retryFunction, strategy);
      }
      break;
      
    case 'redirect':
      if (typeof window !== 'undefined') {
        showAlert({
          text: strategy.message,
          type: 'info',
          title: 'Redirecting',
          duration: 3000
        });
        
        setTimeout(() => {
          window.location.href = strategy.target;
        }, 1000);
      }
      break;
  }
  
  throw apiError;
}

/**
 * Retry function with exponential backoff
 * @param {Function} fn - Function to retry
 * @param {Object} strategy - Retry strategy
 * @returns {Promise<any>} Function result
 */
async function retryWithBackoff(fn, strategy) {
  let lastError;
  
  for (let attempt = 1; attempt <= strategy.maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = new ApiError(error);
      
      if (attempt === strategy.maxAttempts) {
        break;
      }
      
      // Calculate delay with backoff
      let delay = strategy.delay;
      if (strategy.backoff === 'exponential') {
        delay *= Math.pow(2, attempt - 1);
      } else if (strategy.backoff === 'linear') {
        delay *= attempt;
      }
      
      console.log(`Retry attempt ${attempt}/${strategy.maxAttempts} in ${delay}ms`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  throw lastError;
}

// =============================================================================
// ERROR MONITORING
// =============================================================================

/**
 * Error monitoring and analytics
 */
export class ErrorMonitor {
  constructor() {
    this.errors = [];
    this.maxErrors = 100;
  }
  
  /**
   * Record an error
   * @param {ApiError} apiError - API error
   */
  recordError(apiError) {
    this.errors.push({
      type: apiError.type,
      message: apiError.message,
      status: apiError.status,
      timestamp: apiError.timestamp,
      context: apiError.context
    });
    
    // Keep only recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors.shift();
    }
    
    // Send to analytics if available
    this.sendToAnalytics(apiError);
  }
  
  /**
   * Send error to analytics
   * @param {ApiError} apiError - API error
   */
  sendToAnalytics(apiError) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'api_error', {
        error_type: apiError.type,
        error_message: apiError.message,
        error_status: apiError.status,
        page_location: window.location.href
      });
    }
  }
  
  /**
   * Get error statistics
   * @returns {Object} Error statistics
   */
  getErrorStats() {
    const stats = {};
    
    this.errors.forEach(error => {
      if (!stats[error.type]) {
        stats[error.type] = 0;
      }
      stats[error.type]++;
    });
    
    return stats;
  }
  
  /**
   * Clear error history
   */
  clearErrors() {
    this.errors = [];
  }
}

// Create global error monitor instance
export const errorMonitor = new ErrorMonitor();

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Check if error is critical
 * @param {ApiError} apiError - API error
 * @returns {boolean} True if error is critical
 */
export function isCriticalError(apiError) {
  const criticalTypes = [
    API_ERROR_TYPES.CONFIG_ERROR,
    API_ERROR_TYPES.ENV_ERROR,
    API_ERROR_TYPES.INTERNAL_SERVER_ERROR
  ];
  
  return criticalTypes.includes(apiError.type) || apiError.userFriendly.severity === 'high';
}

/**
 * Get error summary for logging
 * @param {ApiError} apiError - API error
 * @returns {string} Error summary
 */
export function getErrorSummary(apiError) {
  return `[${apiError.type}] ${apiError.message} (Status: ${apiError.status || 'N/A'})`;
}

/**
 * Format error for display
 * @param {ApiError} apiError - API error
 * @returns {Object} Formatted error
 */
export function formatErrorForDisplay(apiError) {
  const userError = apiError.getUserFriendlyError();
  
  return {
    title: userError.title,
    message: userError.message,
    action: userError.userAction,
    severity: userError.severity,
    retryable: apiError.isRetryable(),
    requiresUserAction: apiError.requiresUserAction()
  };
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  API_ERROR_TYPES,
  ERROR_MESSAGES,
  categorizeError,
  ApiError,
  handleApiError,
  RECOVERY_STRATEGIES,
  executeRecoveryStrategy,
  ErrorMonitor,
  errorMonitor,
  isCriticalError,
  getErrorSummary,
  formatErrorForDisplay
}; 