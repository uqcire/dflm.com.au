import { getProducts as getProductsFromMock, getProductBySlug as getProductBySlugFromMock, getProductById as getProductByIdFromMock } from './mockApiClient.js';
import { Product } from '../models/ContentModels.js';
import { handleApiError, ApiError, errorMonitor } from './errorHandler.js';

/**
 * Get all products
 * @param {Object} params - Query parameters (pagination, sorting, filters, etc.)
 * @returns {Promise<{data: Product[], meta: Object}>} Products data with pagination info
 */
export async function getProducts(params = {}) {
  try {
    const response = await getProductsFromMock(params);
    return {
      data: response.data.map(product => Product.fromApiResponse(product)),
      meta: response.meta || {}
    };
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getProducts',
      params,
      contentType: 'product'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Get product by slug
 * @param {string} slug - Product slug
 * @returns {Promise<Product>} Product data
 */
export async function getProductBySlug(slug) {
  try {
    const response = await getProductBySlugFromMock(slug);
    return Product.fromApiResponse(response.data);
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getProductBySlug',
      slug,
      contentType: 'product'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Get product by ID
 * @param {number|string} id - Product ID
 * @returns {Promise<Product>} Product data
 */
export async function getProductById(id) {
  try {
    const response = await getProductByIdFromMock(id);
    return Product.fromApiResponse(response.data);
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getProductById',
      id,
      contentType: 'product'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Create a new product
 * @param {Product} product - Product data to create
 * @returns {Promise<Product>} Created product data
 */
export async function createProduct(product) {
  try {
    // For mock data, we'll just return the input data since we can't actually create
    // In a real implementation, this would make a POST request to the API
    console.warn('createProduct called with mock data - no actual creation performed');
    return product;
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'createProduct',
      contentType: 'product'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Update a product
 * @param {number|string} id - Product ID
 * @param {Product} product - Product data to update
 * @returns {Promise<Product>} Updated product data
 */
export async function updateProduct(id, product) {
  try {
    // For mock data, we'll just return the input data since we can't actually update
    // In a real implementation, this would make a PUT request to the API
    console.warn('updateProduct called with mock data - no actual update performed');
    return product;
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'updateProduct',
      id,
      contentType: 'product'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Delete a product
 * @param {number|string} id - Product ID
 * @returns {Promise<void>}
 */
export async function deleteProduct(id) {
  try {
    // For mock data, we'll just log the action since we can't actually delete
    // In a real implementation, this would make a DELETE request to the API
    console.warn('deleteProduct called with mock data - no actual deletion performed');
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'deleteProduct',
      id,
      contentType: 'product'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
} 