import { Page } from '../models/ContentModels.js';
import { strapiClient } from './strapiApiConfig.js';
import { handleApiError } from './errorHandler.js';

export async function getPages(params = {}) {
  try {
    const response = await strapiClient.get('/static-pages', { params });
    return { data: response.data.map(page => Page.fromApiResponse(page)), meta: response.meta || {} };
  } catch (error) {
    throw handleApiError(error, { operation: 'getPages', contentType: 'page' });
  }
}

export async function getPageBySlug(slug) {
  try {
    // First try to get all pages and filter client-side
    const response = await strapiClient.get('/static-pages', {
      params: { 
        'populate[0]': 'Hero',
        'populate[1]': 'Blocks',
        'populate[2]': 'Blocks.features',
        'populate[3]': 'Blocks.features.features',
        'populate[4]': 'SEO',
        '_t': Date.now() // Cache buster
      }
    });
    
    // Find the page with matching slug or title
    const page = response.data.find(page => {
      const matchesSlug = page.Slug === slug;
      const matchesTitle = page.Title?.toLowerCase() === slug.toLowerCase();
      
      return matchesSlug || matchesTitle;
    });
    
    if (!page) {
      throw new Error(`Page with slug/title '${slug}' not found`);
    }
    
    console.log('🔍 Raw page data from Strapi:', JSON.stringify(page, null, 2));
    
    // Log the blocks structure specifically
    if (page.Blocks) {
      console.log('🔍 Blocks structure:', JSON.stringify(page.Blocks, null, 2));
      page.Blocks.forEach((block, index) => {
        console.log(`🔍 Block ${index} details:`, JSON.stringify(block, null, 2));
      });
    }
    
    const processedPage = Page.fromApiResponse(page);
    console.log('🔍 Processed page data:', processedPage);
    return processedPage;
  } catch (error) {
    throw handleApiError(error, { operation: 'getPageBySlug', slug, contentType: 'page' });
  }
}

export async function getPageById(id) {
  try {
    const response = await strapiClient.get('/pages/' + id);
    return Page.fromApiResponse(response.data);
  } catch (error) {
    throw handleApiError(error, { operation: 'getPageById', id, contentType: 'page' });
  }
}

export async function createPage(page) {
  try {
    const response = await strapiClient.post('/pages', page);
    return Page.fromApiResponse(response.data);
  } catch (error) {
    throw handleApiError(error, { operation: 'createPage', contentType: 'page' });
  }
}

export async function updatePage(id, page) {
  try {
    const response = await strapiClient.put('/pages/' + id, page);
    return Page.fromApiResponse(response.data);
  } catch (error) {
    throw handleApiError(error, { operation: 'updatePage', id, contentType: 'page' });
  }
}

export async function deletePage(id) {
  try {
    await strapiClient.delete('/pages/' + id);
    return true;
  } catch (error) {
    throw handleApiError(error, { operation: 'deletePage', id, contentType: 'page' });
  }
}
