/**
 * Data Fetching Composables for Vue Components
 * 
 * This file provides composables for fetching data from the API
 * with reactive state management, caching, and error handling.
 */

import { ref, computed, readonly, watch, nextTick } from 'vue';
import { useApiError } from './useApiError.js';
import { 
  getSiteSettings, 
  getPages, 
  getPageBySlug, 
  getPageById,
  getServices,
  getServiceBySlug,
  getServiceById,
  getProducts,
  getProductBySlug,
  getProductById,
  getIndustries,
  getIndustryBySlug,
  getIndustryById,
  getCertifications,
  getCertificationById,
  getPartners,
  getPartnerById,
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
 * Simple in-memory cache for API responses
 */
class DataCache {
  constructor() {
    this.cache = new Map();
    this.maxSize = 100;
    this.ttl = 5 * 60 * 1000; // 5 minutes
  }
  
  /**
   * Generate cache key
   * @param {string} operation - API operation
   * @param {Object} params - Parameters
   * @returns {string} Cache key
   */
  generateKey(operation, params = {}) {
    return `${operation}:${JSON.stringify(params)}`;
  }
  
  /**
   * Get cached data
   * @param {string} key - Cache key
   * @returns {any} Cached data or null
   */
  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    // Check if expired
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data;
  }
  
  /**
   * Set cached data
   * @param {string} key - Cache key
   * @param {any} data - Data to cache
   */
  set(key, data) {
    // Remove oldest items if cache is full
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
   * Clear cache
   * @param {string} pattern - Pattern to match keys (optional)
   */
  clear(pattern = null) {
    if (pattern) {
      for (const key of this.cache.keys()) {
        if (key.includes(pattern)) {
          this.cache.delete(key);
        }
      }
    } else {
      this.cache.clear();
    }
  }
  
  /**
   * Get cache statistics
   * @returns {Object} Cache stats
   */
  getStats() {
    return {
      size: this.cache.size,
      maxSize: this.maxSize,
      ttl: this.ttl
    };
  }
}

// Global cache instance
const dataCache = new DataCache();

// =============================================================================
// BASE DATA FETCHING COMPOSABLE
// =============================================================================

/**
 * Base data fetching composable
 * @param {Object} options - Configuration options
 * @returns {Object} Data fetching utilities
 */
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
// CONTENT-SPECIFIC COMPOSABLES
// =============================================================================

/**
 * Site Settings Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Site settings utilities
 */
export function useSiteSettings(options = {}) {
  const {
    data: siteSettings,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    fetchData,
    refreshData,
    clearData
  } = useDataFetching(options);
  
  /**
   * Load site settings
   * @param {Object} params - Fetch parameters
   * @returns {Promise<any>} Site settings
   */
  async function loadSiteSettings(params = {}) {
    return await fetchData(getSiteSettings, params, {
      operation: 'loadSiteSettings',
      contentType: 'site-settings'
    });
  }
  
  /**
   * Get specific site setting
   * @param {string} key - Setting key
   * @returns {any} Setting value
   */
  function getSetting(key) {
    if (!siteSettings.value?.data) return null;
    return siteSettings.value.data[key];
  }
  
  return {
    // State
    siteSettings,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    
    // Methods
    loadSiteSettings,
    refreshSiteSettings: () => refreshData(getSiteSettings),
    clearSiteSettings: clearData,
    getSetting
  };
}

/**
 * Pages Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Pages utilities
 */
export function usePages(options = {}) {
  const {
    data: pages,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    fetchData,
    refreshData,
    clearData
  } = useDataFetching(options);
  
  /**
   * Load pages
   * @param {Object} params - Fetch parameters
   * @returns {Promise<any>} Pages data
   */
  async function loadPages(params = {}) {
    return await fetchData(getPages, params, {
      operation: 'loadPages',
      contentType: 'page'
    });
  }
  
  /**
   * Get page by slug
   * @param {string} slug - Page slug
   * @returns {Promise<any>} Page data
   */
  async function loadPageBySlug(slug) {
    return await fetchData(getPageBySlug, slug, {
      operation: 'loadPageBySlug',
      contentType: 'page',
      slug
    });
  }
  
  /**
   * Get page by ID
   * @param {number|string} id - Page ID
   * @returns {Promise<any>} Page data
   */
  async function loadPageById(id) {
    return await fetchData(getPageById, id, {
      operation: 'loadPageById',
      contentType: 'page',
      id
    });
  }
  
  return {
    // State
    pages,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    
    // Methods
    loadPages,
    loadPageBySlug,
    loadPageById,
    refreshPages: () => refreshData(getPages),
    clearPages: clearData
  };
}

/**
 * Services Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Services utilities
 */
export function useServices(options = {}) {
  const {
    data: services,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    fetchData,
    refreshData,
    clearData
  } = useDataFetching(options);
  
  /**
   * Load services
   * @param {Object} params - Fetch parameters
   * @returns {Promise<any>} Services data
   */
  async function loadServices(params = {}) {
    return await fetchData(getServices, params, {
      operation: 'loadServices',
      contentType: 'service'
    });
  }
  
  /**
   * Get service by slug
   * @param {string} slug - Service slug
   * @returns {Promise<any>} Service data
   */
  async function loadServiceBySlug(slug) {
    return await fetchData(getServiceBySlug, slug, {
      operation: 'loadServiceBySlug',
      contentType: 'service',
      slug
    });
  }
  
  /**
   * Get service by ID
   * @param {number|string} id - Service ID
   * @returns {Promise<any>} Service data
   */
  async function loadServiceById(id) {
    return await fetchData(getServiceById, id, {
      operation: 'loadServiceById',
      contentType: 'service',
      id
    });
  }
  
  return {
    // State
    services,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    
    // Methods
    loadServices,
    loadServiceBySlug,
    loadServiceById,
    refreshServices: () => refreshData(getServices),
    clearServices: clearData
  };
}

/**
 * Products Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Products utilities
 */
export function useProducts(options = {}) {
  const {
    data: products,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    fetchData,
    refreshData,
    clearData
  } = useDataFetching(options);
  
  /**
   * Load products
   * @param {Object} params - Fetch parameters
   * @returns {Promise<any>} Products data
   */
  async function loadProducts(params = {}) {
    return await fetchData(getProducts, params, {
      operation: 'loadProducts',
      contentType: 'product'
    });
  }
  
  /**
   * Get product by slug
   * @param {string} slug - Product slug
   * @returns {Promise<any>} Product data
   */
  async function loadProductBySlug(slug) {
    return await fetchData(getProductBySlug, slug, {
      operation: 'loadProductBySlug',
      contentType: 'product',
      slug
    });
  }
  
  /**
   * Get product by ID
   * @param {number|string} id - Product ID
   * @returns {Promise<any>} Product data
   */
  async function loadProductById(id) {
    return await fetchData(getProductById, id, {
      operation: 'loadProductById',
      contentType: 'product',
      id
    });
  }
  
  return {
    // State
    products,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    
    // Methods
    loadProducts,
    loadProductBySlug,
    loadProductById,
    refreshProducts: () => refreshData(getProducts),
    clearProducts: clearData
  };
}

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

// =============================================================================
// PAGINATION COMPOSABLE
// =============================================================================

/**
 * Pagination Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Pagination utilities
 */
export function usePagination(options = {}) {
  const {
    data: paginatedData,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    fetchData,
    refreshData,
    clearData
  } = useDataFetching(options);
  
  // Pagination state
  const currentPage = ref(1);
  const pageSize = ref(options.pageSize || 10);
  const totalItems = ref(0);
  const totalPages = ref(0);
  
  // Computed properties
  const hasNextPage = computed(() => currentPage.value < totalPages.value);
  const hasPrevPage = computed(() => currentPage.value > 1);
  const isFirstPage = computed(() => currentPage.value === 1);
  const isLastPage = computed(() => currentPage.value === totalPages.value);
  
  /**
   * Load paginated data
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Paginated data
   */
  async function loadPaginatedData(fetcher, params = {}, context = {}) {
    const paginationParams = {
      page: currentPage.value,
      pageSize: pageSize.value,
      ...params
    };
    
    const result = await fetchData(fetcher, paginationParams, context);
    
    // Update pagination info
    if (result?.meta?.pagination) {
      const pagination = result.meta.pagination;
      totalItems.value = pagination.total || 0;
      totalPages.value = pagination.pageCount || 0;
      currentPage.value = pagination.page || 1;
    }
    
    return result;
  }
  
  /**
   * Go to next page
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Next page data
   */
  async function nextPage(fetcher, params = {}, context = {}) {
    if (hasNextPage.value) {
      currentPage.value++;
      return await loadPaginatedData(fetcher, params, context);
    }
    return null;
  }
  
  /**
   * Go to previous page
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Previous page data
   */
  async function prevPage(fetcher, params = {}, context = {}) {
    if (hasPrevPage.value) {
      currentPage.value--;
      return await loadPaginatedData(fetcher, params, context);
    }
    return null;
  }
  
  /**
   * Go to specific page
   * @param {number} page - Page number
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Page data
   */
  async function goToPage(page, fetcher, params = {}, context = {}) {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
      return await loadPaginatedData(fetcher, params, context);
    }
    return null;
  }
  
  /**
   * Reset pagination
   */
  function resetPagination() {
    currentPage.value = 1;
    totalItems.value = 0;
    totalPages.value = 0;
    clearData();
  }
  
  return {
    // State
    paginatedData,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    currentPage: readonly(currentPage),
    pageSize: readonly(pageSize),
    totalItems: readonly(totalItems),
    totalPages: readonly(totalPages),
    
    // Computed
    hasNextPage,
    hasPrevPage,
    isFirstPage,
    isLastPage,
    
    // Methods
    loadPaginatedData,
    nextPage,
    prevPage,
    goToPage,
    resetPagination,
    refreshData,
    clearData
  };
}

// =============================================================================
// SEARCH AND FILTER COMPOSABLE
// =============================================================================

/**
 * Search and Filter Composable
 * @param {Object} options - Configuration options
 * @returns {Object} Search and filter utilities
 */
export function useSearchAndFilter(options = {}) {
  const {
    data: filteredData,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    fetchData,
    refreshData,
    clearData
  } = useDataFetching(options);
  
  // Search and filter state
  const searchQuery = ref('');
  const filters = ref({});
  const sortBy = ref(options.defaultSort || 'createdAt');
  const sortOrder = ref(options.defaultSortOrder || 'desc');
  
  // Debounced search
  let searchTimeout = null;
  
  /**
   * Apply search and filters
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Filtered data
   */
  async function applyFilters(fetcher, params = {}, context = {}) {
    const filterParams = {
      ...params,
      filters: {
        ...filters.value
      },
      sort: `${sortBy.value}:${sortOrder.value}`
    };
    
    // Add search query if provided
    if (searchQuery.value.trim()) {
      filterParams.search = searchQuery.value.trim();
    }
    
    return await fetchData(fetcher, filterParams, context);
  }
  
  /**
   * Set search query with debouncing
   * @param {string} query - Search query
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @param {number} delay - Debounce delay in ms
   */
  async function setSearchQuery(query, fetcher, params = {}, context = {}, delay = 300) {
    searchQuery.value = query;
    
    // Clear existing timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    
    // Debounce search
    searchTimeout = setTimeout(async () => {
      await applyFilters(fetcher, params, context);
    }, delay);
  }
  
  /**
   * Set filter
   * @param {string} key - Filter key
   * @param {any} value - Filter value
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Filtered data
   */
  async function setFilter(key, value, fetcher, params = {}, context = {}) {
    filters.value[key] = value;
    return await applyFilters(fetcher, params, context);
  }
  
  /**
   * Clear filter
   * @param {string} key - Filter key
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Filtered data
   */
  async function clearFilter(key, fetcher, params = {}, context = {}) {
    delete filters.value[key];
    return await applyFilters(fetcher, params, context);
  }
  
  /**
   * Clear all filters
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Filtered data
   */
  async function clearAllFilters(fetcher, params = {}, context = {}) {
    filters.value = {};
    searchQuery.value = '';
    return await applyFilters(fetcher, params, context);
  }
  
  /**
   * Set sort
   * @param {string} field - Sort field
   * @param {string} order - Sort order (asc/desc)
   * @param {Function} fetcher - Data fetching function
   * @param {Object} params - Additional parameters
   * @param {Object} context - Error context
   * @returns {Promise<any>} Sorted data
   */
  async function setSort(field, order, fetcher, params = {}, context = {}) {
    sortBy.value = field;
    sortOrder.value = order;
    return await applyFilters(fetcher, params, context);
  }
  
  /**
   * Reset search and filters
   */
  function resetSearchAndFilter() {
    searchQuery.value = '';
    filters.value = {};
    sortBy.value = options.defaultSort || 'createdAt';
    sortOrder.value = options.defaultSortOrder || 'desc';
    clearData();
  }
  
  return {
    // State
    filteredData,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    searchQuery: readonly(searchQuery),
    filters: readonly(filters),
    sortBy: readonly(sortBy),
    sortOrder: readonly(sortOrder),
    
    // Methods
    applyFilters,
    setSearchQuery,
    setFilter,
    clearFilter,
    clearAllFilters,
    setSort,
    resetSearchAndFilter,
    refreshData,
    clearData
  };
}

// =============================================================================
// CACHE MANAGEMENT COMPOSABLE
// =============================================================================

/**
 * Cache Management Composable
 * @returns {Object} Cache management utilities
 */
export function useCacheManagement() {
  /**
   * Clear all cache
   */
  function clearAllCache() {
    dataCache.clear();
  }
  
  /**
   * Clear cache by pattern
   * @param {string} pattern - Pattern to match
   */
  function clearCacheByPattern(pattern) {
    dataCache.clear(pattern);
  }
  
  /**
   * Get cache statistics
   * @returns {Object} Cache stats
   */
  function getCacheStats() {
    return dataCache.getStats();
  }
  
  return {
    clearAllCache,
    clearCacheByPattern,
    getCacheStats
  };
}

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  // Base composables
  useDataFetching,
  useSiteSettings,
  usePages,
  useServices,
  useProducts,
  usePosts,
  
  // Advanced composables
  usePagination,
  useSearchAndFilter,
  useCacheManagement,
  
  // Cache instance (for advanced usage)
  dataCache
}; 