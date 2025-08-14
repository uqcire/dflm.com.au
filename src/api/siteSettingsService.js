import { SiteSettings } from '../models/ContentModels.js';
import { getSiteSettings as mockGetSiteSettings } from './mockApiClient.js';
import { handleApiError, ApiError, errorMonitor } from './errorHandler.js';

/**
 * Get site settings
 * @returns {Promise<SiteSettings>} Site settings data
 */
export async function getSiteSettings() {
  try {
    const response = await mockGetSiteSettings();
    return SiteSettings.fromApiResponse(response.data);
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'getSiteSettings',
      contentType: 'site-settings'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
}

/**
 * Update site settings
 * @param {SiteSettings} siteSettings - Site settings to update
 * @returns {Promise<SiteSettings>} Updated site settings
 */
export async function updateSiteSettings(siteSettings) {
  try {
    // For mock data, we'll just return the input data since we can't actually update
    // In a real implementation, this would make a PUT request to the API
    console.warn('updateSiteSettings called with mock data - no actual update performed');
    return siteSettings;
  } catch (error) {
    const apiError = handleApiError(error, {
      operation: 'updateSiteSettings',
      contentType: 'site-settings'
    });
    
    // Record error for monitoring
    errorMonitor.recordError(apiError);
    
    throw apiError;
  }
} 