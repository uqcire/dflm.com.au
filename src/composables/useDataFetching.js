/**
 * Blog Data Fetching Composables for Vue Components
 * 
 * This file provides composables for fetching blog data from the Strapi API
 * with reactive state management, caching, and error handling.
 */

import { ref, computed, readonly } from 'vue';
import { useApiError } from './useApiError.js';
import { 
  getPosts,
  getPostBySlug,
  getPostById,
  getCategories,
  getCategoryBySlug,
  getCategoryById,
  getTags,
  getTagBySlug,
  getTagById
} from '../api/index.js';

// =============================================================================
// CACHE MANAGEMENT
// =============================================================================

/**
 * Simple in-memory cache for blog API responses
 */
class DataCache {
  constructor() {
    this.cache = new Map();
    this.maxSize = 50; // Smaller cache for blog only
    this.ttl = 5 * 60 * 1000; // 5 minutes
  }
  
  /**
   * Generate cache key
   * @param {string} operation - API operation
   * @param {Object} params - Parameters
   * @returns {string} Cache key
   */
  generateKey(operation, params = {}) {
    return `${operation}_${JSON.stringify(params)}`;
  }
  
  /**
   * Get cached data
   * @param {string} key - Cache key
   * @returns {any|null} Cached data or null
   */
  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }
  
  /**
   * Set cache data
   * @param {string} key - Cache key
   * @param {any} data - Data to cache
   */
  set(key, data) {
    // Manage cache size
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }
  
  /**
   * Clear specific cache entry
   * @param {string} key - Cache key
   */
  clear(key) {
    this.cache.delete(key);
  }
  
  /**
   * Clear all cache
   */
  clearAll() {
    this.cache.clear();
  }
}

// Global cache instance
const dataCache = new DataCache();

// =============================================================================
// BASE DATA FETCHING COMPOSABLE
// =============================================================================

export function useDataFetching(options = {}) {
  const {
    error,
    isLoading,
    hasError,
    errorDisplay,
    clearError,
    executeWithErrorHandling
  } = useApiError(options);
  
  // Data state
  const data = ref(null);
  const lastFetched = ref(null);
  const cacheKey = ref(null);
  
  // Computed properties
  const isEmpty = computed(() => !isLoading.value && !hasError.value && !data.value);
  const isStale = computed(() => {
    if (!lastFetched.value) return true;
    const staleThreshold = options.staleThreshold || 5 * 60 * 1000; // 5 minutes
    return Date.now() - lastFetched.value > staleThreshold;
  });
  
  /**
   * Fetch data with caching
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Fetch parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Fetched data
   */
  async function fetchData(fetcher, params = {}, context = {}) {
    const key = dataCache.generateKey(fetcher.name, params);
    cacheKey.value = key;
    
    // Check cache first
    if (options.useCache !== false) {
      const cached = dataCache.get(key);
      if (cached) {
        data.value = cached;
        lastFetched.value = Date.now();
        return cached;
      }
    }
    
    try {
      const result = await executeWithErrorHandling(
        () => fetcher(params),
        context
      );
      
      data.value = result;
      lastFetched.value = Date.now();
      
      // Cache the result
      if (options.useCache !== false) {
        dataCache.set(key, result);
      }
      
      return result;
    } catch (err) {
      data.value = null;
      throw err;
    }
  }
  
  /**
   * Refresh data (ignore cache)
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Fetch parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Refreshed data
   */
  async function refreshData(fetcher, params = {}, context = {}) {
    clearError();
    
    // Clear cache for this key
    if (cacheKey.value) {
      dataCache.clear(cacheKey.value);
    }
    
    return await fetchData(fetcher, params, context);
  }
  
  /**
   * Clear current data
   */
  function clearData() {
    data.value = null;
    lastFetched.value = null;
    cacheKey.value = null;
    clearError();
  }
  
  return {
    // State
    data: readonly(data),
    isLoading,
    hasError,
    errorDisplay,
    lastFetched: readonly(lastFetched),
    isEmpty,
    isStale,
    
    // Methods
    fetchData,
    refreshData,
    clearData,
    clearError
  };
}

// =============================================================================
// BLOG-SPECIFIC COMPOSABLES
// =============================================================================

/**
 * Blog Posts Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Blog posts utilities
 */
export function usePosts(options = {}) {
  const {
    data: posts,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    fetchData,
    refreshData,
    clearData
  } = useDataFetching(options);
  
  /**
   * Load posts
   * @param {Object} params - Fetch parameters
   * @returns {Promise<any>} Posts data
   */
  async function loadPosts(params = {}) {
    return await fetchData(getPosts, params, {
      operation: 'loadPosts',
      contentType: 'post'
    });
  }
  
  /**
   * Get post by slug
   * @param {string} slug - Post slug
   * @returns {Promise<any>} Post data
   */
  async function loadPostBySlug(slug) {
    return await fetchData(getPostBySlug, slug, {
      operation: 'loadPostBySlug',
      contentType: 'post',
      slug
    });
  }
  
  /**
   * Get post by ID
   * @param {number|string} id - Post ID
   * @returns {Promise<any>} Post data
   */
  async function loadPostById(id) {
    return await fetchData(getPostById, id, {
      operation: 'loadPostById',
      contentType: 'post',
      id
    });
  }
  
  return {
    // State
    posts,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    
    // Methods
    loadPosts,
    loadPostBySlug,
    loadPostById,
    refreshPosts: () => refreshData(getPosts),
    clearPosts: clearData
  };
}

/**
 * Blog Categories Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Blog categories utilities
 */
export function useCategories(options = {}) {
  const {
    data: categories,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    fetchData,
    refreshData,
    clearData
  } = useDataFetching(options);
  
  /**
   * Load categories
   * @param {Object} params - Fetch parameters
   * @returns {Promise<any>} Categories data
   */
  async function loadCategories(params = {}) {
    return await fetchData(getCategories, params, {
      operation: 'loadCategories',
      contentType: 'category'
    });
  }
  
  /**
   * Get category by slug
   * @param {string} slug - Category slug
   * @returns {Promise<any>} Category data
   */
  async function loadCategoryBySlug(slug) {
    return await fetchData(getCategoryBySlug, slug, {
      operation: 'loadCategoryBySlug',
      contentType: 'category',
      slug
    });
  }
  
  /**
   * Get category by ID
   * @param {number|string} id - Category ID
   * @returns {Promise<any>} Category data
   */
  async function loadCategoryById(id) {
    return await fetchData(getCategoryById, id, {
      operation: 'loadCategoryById',
      contentType: 'category',
      id
    });
  }
  
  return {
    // State
    categories,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    
    // Methods
    loadCategories,
    loadCategoryBySlug,
    loadCategoryById,
    refreshCategories: () => refreshData(getCategories),
    clearCategories: clearData
  };
}

/**
 * Blog Tags Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Blog tags utilities
 */
export function useTags(options = {}) {
  const {
    data: tags,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    fetchData,
    refreshData,
    clearData
  } = useDataFetching(options);
  
  /**
   * Load tags
   * @param {Object} params - Fetch parameters
   * @returns {Promise<any>} Tags data
   */
  async function loadTags(params = {}) {
    return await fetchData(getTags, params, {
      operation: 'loadTags',
      contentType: 'tag'
    });
  }
  
  /**
   * Get tag by slug
   * @param {string} slug - Tag slug
   * @returns {Promise<any>} Tag data
   */
  async function loadTagBySlug(slug) {
    return await fetchData(getTagBySlug, slug, {
      operation: 'loadTagBySlug',
      contentType: 'tag',
      slug
    });
  }
  
  /**
   * Get tag by ID
   * @param {number|string} id - Tag ID
   * @returns {Promise<any>} Tag data
   */
  async function loadTagById(id) {
    return await fetchData(getTagById, id, {
      operation: 'loadTagById',
      contentType: 'tag',
      id
    });
  }
  
  return {
    // State
    tags,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    
    // Methods
    loadTags,
    loadTagBySlug,
    loadTagById,
    refreshTags: () => refreshData(getTags),
    clearTags: clearData
  };
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  // Core composables
  useDataFetching,
  
  // Blog composables
  usePosts,
  useCategories,
  useTags,
  
  // Cache instance (for advanced usage)
  dataCache
}; 