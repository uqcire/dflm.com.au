import { Page } from '../models/ContentModels.js';
import { getPages as mockGetPages, getPageBySlug as mockGetPageBySlug, getPageById as mockGetPageById } from './mockApiClient.js';
import { handleApiError, ApiError, errorMonitor } from './errorHandler.js';

/**
 * Get all pages
 * @param {Object} params - Query parameters (pagination, sorting, etc.)
 * @returns {Promise<{data: Page[], meta: Object}>} Pages data with pagination info
 */
export async function getPages(params = {}) {
  try {
    const response = await mockGetPages(params);
    return {
      data: response.data.map(page => Page.fromApiResponse(page)),
      meta: response.meta || {}
    };
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getPages',
      params,
      contentType: 'page'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Get page by slug
 * @param {string} slug - Page slug
 * @returns {Promise<Page>} Page data
 */
export async function getPageBySlug(slug) {
  try {
    const response = await mockGetPageBySlug(slug);
    return Page.fromApiResponse(response.data);
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getPageBySlug',
      slug,
      contentType: 'page'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Get page by ID
 * @param {number|string} id - Page ID
 * @returns {Promise<Page>} Page data
 */
export async function getPageById(id) {
  try {
    const response = await mockGetPageById(id);
    return Page.fromApiResponse(response.data);
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getPageById',
      id,
      contentType: 'page'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Create a new page
 * @param {Page} page - Page data to create
 * @returns {Promise<Page>} Created page data
 */
export async function createPage(page) {
  try {
    // For mock data, we'll just return the input data since we can't actually create
    // In a real implementation, this would make a POST request to the API
    console.warn('createPage called with mock data - no actual creation performed');
    return page;
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'createPage',
      contentType: 'page'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Update a page
 * @param {number|string} id - Page ID
 * @param {Page} page - Page data to update
 * @returns {Promise<Page>} Updated page data
 */
export async function updatePage(id, page) {
  try {
    // For mock data, we'll just return the input data since we can't actually update
    // In a real implementation, this would make a PUT request to the API
    console.warn('updatePage called with mock data - no actual update performed');
    return page;
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'updatePage',
      id,
      contentType: 'page'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Delete a page
 * @param {number|string} id - Page ID
 * @returns {Promise<void>}
 */
export async function deletePage(id) {
  try {
    // For mock data, we'll just log the action since we can't actually delete
    // In a real implementation, this would make a DELETE request to the API
    console.warn('deletePage called with mock data - no actual deletion performed');
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'deletePage',
      id,
      contentType: 'page'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
} 