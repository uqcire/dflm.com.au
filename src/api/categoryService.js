import { get, post, put, del } from '../utils/HTTP-CLIENT__API--UNIFIED.js';
import { Category } from '../models/ContentModels.js';

/**
 * Get all categories
 * @param {Object} params - Query parameters (pagination, sorting, etc.)
 * @returns {Promise<{data: Category[], meta: Object}>} Categories data with pagination info
 */
export async function getCategories(params = {}) {
  try {
    const response = await get('/categories', { params });
    return {
      data: response.data.map(category => Category.fromApiResponse(category)),
      meta: response.meta || {}
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

/**
 * Get category by slug
 * @param {string} slug - Category slug
 * @returns {Promise<Category>} Category data
 */
export async function getCategoryBySlug(slug) {
  try {
    const response = await get(`/categories/slug/${slug}`);
    return Category.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error fetching category with slug ${slug}:`, error);
    throw error;
  }
}

/**
 * Get category by ID
 * @param {number|string} id - Category ID
 * @returns {Promise<Category>} Category data
 */
export async function getCategoryById(id) {
  try {
    const response = await get(`/categories/${id}`);
    return Category.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Create a new category
 * @param {Category} category - Category data to create
 * @returns {Promise<Category>} Created category data
 */
export async function createCategory(category) {
  try {
    const response = await post('/categories', category.toApiFormat());
    return Category.fromApiResponse(response.data);
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
}

/**
 * Update a category
 * @param {number|string} id - Category ID
 * @param {Category} category - Category data to update
 * @returns {Promise<Category>} Updated category data
 */
export async function updateCategory(id, category) {
  try {
    const response = await put(`/categories/${id}`, category.toApiFormat());
    return Category.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error updating category with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a category
 * @param {number|string} id - Category ID
 * @returns {Promise<void>}
 */
export async function deleteCategory(id) {
  try {
    await del(`/categories/${id}`);
  } catch (error) {
    console.error(`Error deleting category with ID ${id}:`, error);
    throw error;
  }
} 