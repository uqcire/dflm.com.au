import { get, post, put, del } from '../utils/HTTP-CLIENT__API--UNIFIED.js';
import { Industry } from '../models/ContentModels.js';

/**
 * Get all industries
 * @param {Object} params - Query parameters (pagination, sorting, etc.)
 * @returns {Promise<{data: Industry[], meta: Object}>} Industries data with pagination info
 */
export async function getIndustries(params = {}) {
  try {
    const response = await get('/industries', { params });
    return {
      data: response.data.map(industry => Industry.fromApiResponse(industry)),
      meta: response.meta || {}
    };
  } catch (error) {
    console.error('Error fetching industries:', error);
    throw error;
  }
}

/**
 * Get industry by slug
 * @param {string} slug - Industry slug
 * @returns {Promise<Industry>} Industry data
 */
export async function getIndustryBySlug(slug) {
  try {
    const response = await get(`/industries/slug/${slug}`);
    return Industry.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error fetching industry with slug ${slug}:`, error);
    throw error;
  }
}

/**
 * Get industry by ID
 * @param {number|string} id - Industry ID
 * @returns {Promise<Industry>} Industry data
 */
export async function getIndustryById(id) {
  try {
    const response = await get(`/industries/${id}`);
    return Industry.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error fetching industry with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Create a new industry
 * @param {Industry} industry - Industry data to create
 * @returns {Promise<Industry>} Created industry data
 */
export async function createIndustry(industry) {
  try {
    const response = await post('/industries', industry.toApiFormat());
    return Industry.fromApiResponse(response.data);
  } catch (error) {
    console.error('Error creating industry:', error);
    throw error;
  }
}

/**
 * Update an industry
 * @param {number|string} id - Industry ID
 * @param {Industry} industry - Industry data to update
 * @returns {Promise<Industry>} Updated industry data
 */
export async function updateIndustry(id, industry) {
  try {
    const response = await put(`/industries/${id}`, industry.toApiFormat());
    return Industry.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error updating industry with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Delete an industry
 * @param {number|string} id - Industry ID
 * @returns {Promise<void>}
 */
export async function deleteIndustry(id) {
  try {
    await del(`/industries/${id}`);
  } catch (error) {
    console.error(`Error deleting industry with ID ${id}:`, error);
    throw error;
  }
} 