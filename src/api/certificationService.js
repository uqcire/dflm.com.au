import { get, post, put, del } from '../utils/HTTP-CLIENT__API--UNIFIED.js';
import { Certification } from '../models/ContentModels.js';

/**
 * Get all certifications
 * @param {Object} params - Query parameters (pagination, sorting, filters, etc.)
 * @returns {Promise<{data: Certification[], meta: Object}>} Certifications data with pagination info
 */
export async function getCertifications(params = {}) {
  try {
    const response = await get('/certifications', { params });
    return {
      data: response.data.map(certification => Certification.fromApiResponse(certification)),
      meta: response.meta || {}
    };
  } catch (error) {
    console.error('Error fetching certifications:', error);
    throw error;
  }
}

/**
 * Get certification by ID
 * @param {number|string} id - Certification ID
 * @returns {Promise<Certification>} Certification data
 */
export async function getCertificationById(id) {
  try {
    const response = await get(`/certifications/${id}`);
    return Certification.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error fetching certification with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Create a new certification
 * @param {Certification} certification - Certification data to create
 * @returns {Promise<Certification>} Created certification data
 */
export async function createCertification(certification) {
  try {
    const response = await post('/certifications', certification.toApiFormat());
    return Certification.fromApiResponse(response.data);
  } catch (error) {
    console.error('Error creating certification:', error);
    throw error;
  }
}

/**
 * Update a certification
 * @param {number|string} id - Certification ID
 * @param {Certification} certification - Certification data to update
 * @returns {Promise<Certification>} Updated certification data
 */
export async function updateCertification(id, certification) {
  try {
    const response = await put(`/certifications/${id}`, certification.toApiFormat());
    return Certification.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error updating certification with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a certification
 * @param {number|string} id - Certification ID
 * @returns {Promise<void>}
 */
export async function deleteCertification(id) {
  try {
    await del(`/certifications/${id}`);
  } catch (error) {
    console.error(`Error deleting certification with ID ${id}:`, error);
    throw error;
  }
} 