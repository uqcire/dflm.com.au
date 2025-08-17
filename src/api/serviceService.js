import { strapiClient, buildStrapiUrl, formatStrapiParams } from './strapiApiConfig.js';
import { Service } from '../models/ContentModels.js';
import { handleApiError, ApiError, errorMonitor } from './errorHandler.js';

/**
 * Get all services
 * @param {Object} params - Query parameters (pagination, sorting, etc.)
 * @returns {Promise<{data: Service[], meta: Object}>} Services data with pagination info
 */
export async function getServices(params = {}) {
  try {
    // Format parameters for Strapi v5
    const formattedParams = formatStrapiParams(params);
    const response = await strapiClient.get('/services', { params: formattedParams });
    return {
      data: response.data.map(service => Service.fromApiResponse(service)),
      meta: response.meta || {}
    };
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getServices',
      params,
      contentType: 'service'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Get service by slug
 * @param {string} slug - Service slug
 * @returns {Promise<Service>} Service data
 */
export async function getServiceBySlug(slug) {
  try {
    const response = await strapiClient.get('/services', { 
      params: { 
        'filters[slug][$eq]': slug,
        'populate': '*'
      } 
    });
    
    if (response.data && response.data.length > 0) {
      return Service.fromApiResponse(response.data[0]);
    }
    
    throw new Error(`Service with slug '${slug}' not found`);
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getServiceBySlug',
      slug,
      contentType: 'service'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Get service by ID
 * @param {number|string} id - Service ID
 * @returns {Promise<Service>} Service data
 */
export async function getServiceById(id) {
  try {
    const response = await strapiClient.get(`/services/${id}`);
    return Service.fromApiResponse(response.data);
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getServiceById',
      id,
      contentType: 'service'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Create a new service
 * @param {Service} service - Service data to create
 * @returns {Promise<Service>} Created service data
 */
export async function createService(service) {
  try {
    // For mock data, we'll just return the input data since we can't actually create
    // In a real implementation, this would make a POST request to the API
    console.warn('createService called with mock data - no actual creation performed');
    return service;
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'createService',
      contentType: 'service'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Update a service
 * @param {number|string} id - Service ID
 * @param {Service} service - Service data to update
 * @returns {Promise<Service>} Updated service data
 */
export async function updateService(id, service) {
  try {
    // For mock data, we'll just return the input data since we can't actually update
    // In a real implementation, this would make a PUT request to the API
    console.warn('updateService called with mock data - no actual update performed');
    return service;
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'updateService',
      id,
      contentType: 'service'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Delete a service
 * @param {number|string} id - Service ID
 * @returns {Promise<void>}
 */
export async function deleteService(id) {
  try {
    // For mock data, we'll just log the action since we can't actually delete
    // In a real implementation, this would make a DELETE request to the API
    console.warn('deleteService called with mock data - no actual deletion performed');
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'deleteService',
      id,
      contentType: 'service'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
} 