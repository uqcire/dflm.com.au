import { getPosts as getPostsFromMock, getPostBySlug as getPostBySlugFromMock, getPostById as getPostByIdFromMock } from './mockApiClient.js';
import { Post } from '../models/ContentModels.js';
import { handleApiError, ApiError, errorMonitor } from './errorHandler.js';

/**
 * Get all posts
 * @param {Object} params - Query parameters (pagination, sorting, filters, etc.)
 * @returns {Promise<{data: Post[], meta: Object}>} Posts data with pagination info
 */
export async function getPosts(params = {}) {
  try {
    const response = await getPostsFromMock(params);
    return {
      data: response.data.map(post => Post.fromApiResponse(post)),
      meta: response.meta || {}
    };
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getPosts',
      params,
      contentType: 'post'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Get post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Post>} Post data
 */
export async function getPostBySlug(slug) {
  try {
    const response = await getPostBySlugFromMock(slug);
    return Post.fromApiResponse(response.data);
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getPostBySlug',
      slug,
      contentType: 'post'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Get post by ID
 * @param {number|string} id - Post ID
 * @returns {Promise<Post>} Post data
 */
export async function getPostById(id) {
  try {
    const response = await getPostByIdFromMock(id);
    return Post.fromApiResponse(response.data);
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getPostById',
      id,
      contentType: 'post'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Create a new post
 * @param {Post} post - Post data to create
 * @returns {Promise<Post>} Created post data
 */
export async function createPost(post) {
  try {
    // For mock data, we'll just return the input data since we can't actually create
    // In a real implementation, this would make a POST request to the API
    console.warn('createPost called with mock data - no actual creation performed');
    return post;
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'createPost',
      contentType: 'post'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Update a post
 * @param {number|string} id - Post ID
 * @param {Post} post - Post data to update
 * @returns {Promise<Post>} Updated post data
 */
export async function updatePost(id, post) {
  try {
    // For mock data, we'll just return the input data since we can't actually update
    // In a real implementation, this would make a PUT request to the API
    console.warn('updatePost called with mock data - no actual update performed');
    return post;
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'updatePost',
      id,
      contentType: 'post'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
}

/**
 * Delete a post
 * @param {number|string} id - Post ID
 * @returns {Promise<void>}
 */
export async function deletePost(id) {
  try {
    // For mock data, we'll just log the action since we can't actually delete
    // In a real implementation, this would make a DELETE request to the API
    console.warn('deletePost called with mock data - no actual deletion performed');
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'deletePost',
      id,
      contentType: 'post'
    });
    errorMonitor.recordError(apiError);
    throw apiError;
  }
} 