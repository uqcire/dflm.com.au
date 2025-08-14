import { get, post, put, del } from '../utils/HTTP-CLIENT__API--UNIFIED.js';
import { Partner } from '../models/ContentModels.js';

/**
 * Get all partners
 * @param {Object} params - Query parameters (pagination, sorting, filters, etc.)
 * @returns {Promise<{data: Partner[], meta: Object}>} Partners data with pagination info
 */
export async function getPartners(params = {}) {
  try {
    const response = await get('/partners', { params });
    return {
      data: response.data.map(partner => Partner.fromApiResponse(partner)),
      meta: response.meta || {}
    };
  } catch (error) {
    console.error('Error fetching partners:', error);
    throw error;
  }
}

/**
 * Get partner by ID
 * @param {number|string} id - Partner ID
 * @returns {Promise<Partner>} Partner data
 */
export async function getPartnerById(id) {
  try {
    const response = await get(`/partners/${id}`);
    return Partner.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error fetching partner with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Create a new partner
 * @param {Partner} partner - Partner data to create
 * @returns {Promise<Partner>} Created partner data
 */
export async function createPartner(partner) {
  try {
    const response = await post('/partners', partner.toApiFormat());
    return Partner.fromApiResponse(response.data);
  } catch (error) {
    console.error('Error creating partner:', error);
    throw error;
  }
}

/**
 * Update a partner
 * @param {number|string} id - Partner ID
 * @param {Partner} partner - Partner data to update
 * @returns {Promise<Partner>} Updated partner data
 */
export async function updatePartner(id, partner) {
  try {
    const response = await put(`/partners/${id}`, partner.toApiFormat());
    return Partner.fromApiResponse(response.data);
  } catch (error) {
    console.error(`Error updating partner with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a partner
 * @param {number|string} id - Partner ID
 * @returns {Promise<void>}
 */
export async function deletePartner(id) {
  try {
    await del(`/partners/${id}`);
  } catch (error) {
    console.error(`Error deleting partner with ID ${id}:`, error);
    throw error;
  }
} 