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
  getPostsSupabase,
  getPostBySlugSupabase
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
   * Load posts (Supabase-first)
   * @param {Object} params - Fetch parameters
   * @returns {Promise<any>} Posts data
   */
  async function loadPosts(params = {}) {
    // Switch to Supabase implementation
    return await fetchData(getPostsSupabase, params, {
      operation: 'loadPosts',
      contentType: 'post'
    });
  }

  /**
   * Get post by slug (Supabase-first)
   * @param {string} slug - Post slug
   * @returns {Promise<any>} Post data
   */
  async function loadPostBySlug(slug) {
    // Switch to Supabase implementation
    return await fetchData(getPostBySlugSupabase, slug, {
      operation: 'loadPostBySlug',
      contentType: 'post',
      slug
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
    refreshPosts: () => refreshData(getPostsSupabase),
    clearPosts: clearData
  };
}

/**
 * Blog Categories Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Blog categories utilities
 * 
 * NOTE: Categories are currently fetched from Supabase as part of posts data
 * This composable is kept for future implementation if needed
 */
export function useCategories(options = {}) {
  const {
    data: categories,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    clearData
  } = useDataFetching(options);

  return {
    // State
    categories,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,

    // Methods
    clearCategories: clearData
  };
}

/**
 * Blog Tags Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Blog tags utilities
 * 
 * NOTE: Tags are currently fetched from Supabase as part of posts data
 * This composable is kept for future implementation if needed
 */
export function useTags(options = {}) {
  const {
    data: tags,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    clearData
  } = useDataFetching(options);

  return {
    // State
    tags,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,

    // Methods
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