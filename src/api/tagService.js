import { get, post, put, del } from '../utils/HTTP-CLIENT__API--UNIFIED.js';
import { Tag } from '../models/ContentModels.js';

/**
 * Get all tags
 * @param {Object} params - Query parameters (pagination, sorting, etc.)
 * @returns {Promise<{data: Tag[], meta: Object}>} Tags data with pagination info
 */
export async function getTags(params = {}) {
  try {
    const response = await get('/tags', { params });
    return {
      data: response.data.map(tag => Tag.fromApiResponse(tag)),
      meta: response.meta || {}
    };
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
}

/**
 * Get tag by slug
 * @param {string} slug - Tag slug
 * @returns {Promise<Tag>} Tag data
 */
export async function getTagBySlug(slug) {
  try {
    const response = await get(`/tags/slug/${slug}`);
    return Tag.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error fetching tag with slug ${slug}:`, error);
    throw error;
  }
}

/**
 * Get tag by ID
 * @param {number|string} id - Tag ID
 * @returns {Promise<Tag>} Tag data
 */
export async function getTagById(id) {
  try {
    const response = await get(`/tags/${id}`);
    return Tag.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error fetching tag with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Create a new tag
 * @param {Tag} tag - Tag data to create
 * @returns {Promise<Tag>} Created tag data
 */
export async function createTag(tag) {
  try {
    const response = await post('/tags', tag.toApiFormat());
    return Tag.fromApiResponse(response.data);
  } catch (error) {
    console.error('Error creating tag:', error);
    throw error;
  }
}

/**
 * Update a tag
 * @param {number|string} id - Tag ID
 * @param {Tag} tag - Tag data to update
 * @returns {Promise<Tag>} Updated tag data
 */
export async function updateTag(id, tag) {
  try {
    const response = await put(`/tags/${id}`, tag.toApiFormat());
    return Tag.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error updating tag with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a tag
 * @param {number|string} id - Tag ID
 * @returns {Promise<void>}
 */
export async function deleteTag(id) {
  try {
    await del(`/tags/${id}`);
  } catch (error) {
    console.error(`Error deleting tag with ID ${id}:`, error);
    throw error;
  }
} 