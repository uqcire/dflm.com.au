/**
 * Data Fetching Composables Test Demo
 * 
 * This file demonstrates how the data fetching composables work
 * and provides tests for different scenarios and features.
 */

import { 
  useSiteSettings,
  usePages,
  useServices,
  useProducts,
  usePosts,
  usePagination,
  useSearchAndFilter,
  useCacheManagement
} from './useDataFetching.js';

// =============================================================================
// TEST FUNCTIONS
// =============================================================================

/**
 * Test site settings composable
 */
async function testSiteSettings() {
  console.log('🧪 Testing Site Settings Composable...');
  
  const {
    siteSettings,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    loadSiteSettings,
    refreshSiteSettings,
    getSetting
  } = useSiteSettings();
  
  console.log('  📊 Initial state:');
  console.log(`    Loading: ${isLoading.value}`);
  console.log(`    Has Error: ${hasError.value}`);
  console.log(`    Is Empty: ${isEmpty.value}`);
  console.log(`    Data: ${siteSettings.value ? 'Loaded' : 'Not loaded'}`);
  
  // Load site settings
  console.log('  🔄 Loading site settings...');
  try {
    const result = await loadSiteSettings();
    console.log('    ✅ Site settings loaded successfully');
    console.log(`    📝 Site name: ${getSetting('siteName')}`);
    console.log(`    📧 Email: ${getSetting('email')}`);
  } catch (error) {
    console.log('    ❌ Failed to load site settings:', error.message);
  }
  
  console.log('  📊 Final state:');
  console.log(`    Loading: ${isLoading.value}`);
  console.log(`    Has Error: ${hasError.value}`);
  console.log(`    Is Empty: ${isEmpty.value}`);
  console.log(`    Data: ${siteSettings.value ? 'Loaded' : 'Not loaded'}`);
}

/**
 * Test pages composable
 */
async function testPages() {
  console.log('🧪 Testing Pages Composable...');
  
  const {
    pages,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    loadPages,
    loadPageBySlug
  } = usePages();
  
  // Load all pages
  console.log('  🔄 Loading all pages...');
  try {
    const result = await loadPages({ page: 1, pageSize: 5 });
    console.log('    ✅ Pages loaded successfully');
    console.log(`    📄 Total pages: ${result.data?.length || 0}`);
  } catch (error) {
    console.log('    ❌ Failed to load pages:', error.message);
  }
  
  // Load specific page by slug
  console.log('  🔄 Loading page by slug...');
  try {
    const result = await loadPageBySlug('home');
    console.log('    ✅ Page loaded successfully');
    console.log(`    📄 Page title: ${result.data?.title || 'N/A'}`);
  } catch (error) {
    console.log('    ❌ Failed to load page:', error.message);
  }
}

/**
 * Test services composable
 */
async function testServices() {
  console.log('🧪 Testing Services Composable...');
  
  const {
    services,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    loadServices,
    loadServiceBySlug
  } = useServices();
  
  // Load all services
  console.log('  🔄 Loading all services...');
  try {
    const result = await loadServices({ page: 1, pageSize: 5 });
    console.log('    ✅ Services loaded successfully');
    console.log(`    🔧 Total services: ${result.data?.length || 0}`);
  } catch (error) {
    console.log('    ❌ Failed to load services:', error.message);
  }
  
  // Load specific service by slug
  console.log('  🔄 Loading service by slug...');
  try {
    const result = await loadServiceBySlug('import-distribution');
    console.log('    ✅ Service loaded successfully');
    console.log(`    🔧 Service title: ${result.data?.title || 'N/A'}`);
  } catch (error) {
    console.log('    ❌ Failed to load service:', error.message);
  }
}

/**
 * Test products composable
 */
async function testProducts() {
  console.log('🧪 Testing Products Composable...');
  
  const {
    products,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    loadProducts,
    loadProductBySlug
  } = useProducts();
  
  // Load all products
  console.log('  🔄 Loading all products...');
  try {
    const result = await loadProducts({ page: 1, pageSize: 5 });
    console.log('    ✅ Products loaded successfully');
    console.log(`    📦 Total products: ${result.data?.length || 0}`);
  } catch (error) {
    console.log('    ❌ Failed to load products:', error.message);
  }
  
  // Load specific product by slug
  console.log('  🔄 Loading product by slug...');
  try {
    const result = await loadProductBySlug('solar-panels');
    console.log('    ✅ Product loaded successfully');
    console.log(`    📦 Product title: ${result.data?.title || 'N/A'}`);
  } catch (error) {
    console.log('    ❌ Failed to load product:', error.message);
  }
}

/**
 * Test posts composable
 */
async function testPosts() {
  console.log('🧪 Testing Posts Composable...');
  
  const {
    posts,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    loadPosts,
    loadPostBySlug
  } = usePosts();
  
  // Load all posts
  console.log('  🔄 Loading all posts...');
  try {
    const result = await loadPosts({ page: 1, pageSize: 5 });
    console.log('    ✅ Posts loaded successfully');
    console.log(`    📝 Total posts: ${result.data?.length || 0}`);
  } catch (error) {
    console.log('    ❌ Failed to load posts:', error.message);
  }
  
  // Load specific post by slug
  console.log('  🔄 Loading post by slug...');
  try {
    const result = await loadPostBySlug('welcome-to-e-sunrise');
    console.log('    ✅ Post loaded successfully');
    console.log(`    📝 Post title: ${result.data?.title || 'N/A'}`);
  } catch (error) {
    console.log('    ❌ Failed to load post:', error.message);
  }
}

/**
 * Test pagination composable
 */
async function testPagination() {
  console.log('🧪 Testing Pagination Composable...');
  
  const {
    paginatedData,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    currentPage,
    pageSize,
    totalItems,
    totalPages,
    hasNextPage,
    hasPrevPage,
    loadPaginatedData,
    nextPage,
    prevPage,
    goToPage
  } = usePagination({ pageSize: 3 });
  
  // Load first page
  console.log('  🔄 Loading first page...');
  try {
    const result = await loadPaginatedData(
      async (params) => {
        // Simulate API call
        const { getPosts } = await import('../api/index.js');
        return await getPosts(params);
      },
      {},
      { operation: 'loadPaginatedPosts', contentType: 'post' }
    );
    
    console.log('    ✅ First page loaded successfully');
    console.log(`    📄 Current page: ${currentPage.value}`);
    console.log(`    📄 Page size: ${pageSize.value}`);
    console.log(`    📄 Total items: ${totalItems.value}`);
    console.log(`    📄 Total pages: ${totalPages.value}`);
    console.log(`    📄 Has next: ${hasNextPage.value}`);
    console.log(`    📄 Has prev: ${hasPrevPage.value}`);
  } catch (error) {
    console.log('    ❌ Failed to load first page:', error.message);
  }
  
  // Go to next page
  if (hasNextPage.value) {
    console.log('  🔄 Going to next page...');
    try {
      const result = await nextPage(
        async (params) => {
          const { getPosts } = await import('../api/index.js');
          return await getPosts(params);
        },
        {},
        { operation: 'loadNextPage', contentType: 'post' }
      );
      
      console.log('    ✅ Next page loaded successfully');
      console.log(`    📄 Current page: ${currentPage.value}`);
    } catch (error) {
      console.log('    ❌ Failed to load next page:', error.message);
    }
  }
  
  // Go to previous page
  if (hasPrevPage.value) {
    console.log('  🔄 Going to previous page...');
    try {
      const result = await prevPage(
        async (params) => {
          const { getPosts } = await import('../api/index.js');
          return await getPosts(params);
        },
        {},
        { operation: 'loadPrevPage', contentType: 'post' }
      );
      
      console.log('    ✅ Previous page loaded successfully');
      console.log(`    📄 Current page: ${currentPage.value}`);
    } catch (error) {
      console.log('    ❌ Failed to load previous page:', error.message);
    }
  }
}

/**
 * Test search and filter composable
 */
async function testSearchAndFilter() {
  console.log('🧪 Testing Search and Filter Composable...');
  
  const {
    filteredData,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    searchQuery,
    filters,
    sortBy,
    sortOrder,
    applyFilters,
    setSearchQuery,
    setFilter,
    clearFilter,
    clearAllFilters,
    setSort
  } = useSearchAndFilter({
    defaultSort: 'title',
    defaultSortOrder: 'asc'
  });
  
  // Apply initial filters
  console.log('  🔄 Applying initial filters...');
  try {
    const result = await applyFilters(
      async (params) => {
        const { getPosts } = await import('../api/index.js');
        return await getPosts(params);
      },
      {},
      { operation: 'applyFilters', contentType: 'post' }
    );
    
    console.log('    ✅ Initial filters applied successfully');
    console.log(`    🔍 Search query: "${searchQuery.value}"`);
    console.log(`    🔧 Filters:`, filters.value);
    console.log(`    📊 Sort: ${sortBy.value} ${sortOrder.value}`);
  } catch (error) {
    console.log('    ❌ Failed to apply filters:', error.message);
  }
  
  // Set search query
  console.log('  🔄 Setting search query...');
  try {
    await setSearchQuery(
      'solar',
      async (params) => {
        const { getPosts } = await import('../api/index.js');
        return await getPosts(params);
      },
      {},
      { operation: 'setSearchQuery', contentType: 'post' },
      100 // Short delay for testing
    );
    
    console.log('    ✅ Search query set successfully');
    console.log(`    🔍 Search query: "${searchQuery.value}"`);
  } catch (error) {
    console.log('    ❌ Failed to set search query:', error.message);
  }
  
  // Set filter
  console.log('  🔄 Setting filter...');
  try {
    const result = await setFilter(
      'category',
      'solar',
      async (params) => {
        const { getPosts } = await import('../api/index.js');
        return await getPosts(params);
      },
      {},
      { operation: 'setFilter', contentType: 'post' }
    );
    
    console.log('    ✅ Filter set successfully');
    console.log(`    🔧 Filters:`, filters.value);
  } catch (error) {
    console.log('    ❌ Failed to set filter:', error.message);
  }
  
  // Set sort
  console.log('  🔄 Setting sort...');
  try {
    const result = await setSort(
      'createdAt',
      'desc',
      async (params) => {
        const { getPosts } = await import('../api/index.js');
        return await getPosts(params);
      },
      {},
      { operation: 'setSort', contentType: 'post' }
    );
    
    console.log('    ✅ Sort set successfully');
    console.log(`    📊 Sort: ${sortBy.value} ${sortOrder.value}`);
  } catch (error) {
    console.log('    ❌ Failed to set sort:', error.message);
  }
}

/**
 * Test cache management
 */
function testCacheManagement() {
  console.log('🧪 Testing Cache Management...');
  
  const {
    clearAllCache,
    clearCacheByPattern,
    getCacheStats
  } = useCacheManagement();
  
  // Get cache stats
  console.log('  📊 Cache statistics:');
  const stats = getCacheStats();
  console.log(`    📦 Cache size: ${stats.size}`);
  console.log(`    📦 Max size: ${stats.maxSize}`);
  console.log(`    ⏰ TTL: ${stats.ttl}ms`);
  
  // Clear cache by pattern
  console.log('  🧹 Clearing cache by pattern...');
  clearCacheByPattern('getPages');
  console.log('    ✅ Cache cleared for pages pattern');
  
  // Get updated stats
  const updatedStats = getCacheStats();
  console.log(`    📦 Updated cache size: ${updatedStats.size}`);
  
  // Clear all cache
  console.log('  🧹 Clearing all cache...');
  clearAllCache();
  console.log('    ✅ All cache cleared');
  
  const finalStats = getCacheStats();
  console.log(`    📦 Final cache size: ${finalStats.size}`);
}

/**
 * Test error handling in composables
 */
async function testErrorHandling() {
  console.log('🧪 Testing Error Handling in Composables...');
  
  const {
    siteSettings,
    isLoading,
    hasError,
    errorDisplay,
    isEmpty,
    loadSiteSettings
  } = useSiteSettings({ useCache: false });
  
  // Test with invalid parameters to trigger error
  console.log('  🔄 Testing error handling...');
  try {
    await loadSiteSettings({ invalid: 'params' });
    console.log('    ✅ Loaded successfully (unexpected)');
  } catch (error) {
    console.log('    ❌ Error caught as expected');
    console.log(`    📝 Error type: ${error.type}`);
    console.log(`    📝 Error message: ${error.message}`);
    console.log(`    📝 User message: ${error.getUserFriendlyError().message}`);
  }
  
  console.log('  📊 Error state:');
  console.log(`    Loading: ${isLoading.value}`);
  console.log(`    Has Error: ${hasError.value}`);
  console.log(`    Is Empty: ${isEmpty.value}`);
  console.log(`    Error Display:`, errorDisplay.value);
}

/**
 * Test composable integration
 */
async function testComposableIntegration() {
  console.log('🧪 Testing Composable Integration...');
  
  // Test multiple composables working together
  const siteSettings = useSiteSettings();
  const pages = usePages();
  const services = useServices();
  
  console.log('  🔄 Loading data with multiple composables...');
  
  try {
    // Load all data concurrently
    const [siteResult, pagesResult, servicesResult] = await Promise.all([
      siteSettings.loadSiteSettings(),
      pages.loadPages({ page: 1, pageSize: 3 }),
      services.loadServices({ page: 1, pageSize: 3 })
    ]);
    
    console.log('    ✅ All data loaded successfully');
    console.log(`    🏠 Site settings: ${siteResult.data ? 'Loaded' : 'Not loaded'}`);
    console.log(`    📄 Pages: ${pagesResult.data?.length || 0} items`);
    console.log(`    🔧 Services: ${servicesResult.data?.length || 0} items`);
    
    // Test cache effectiveness
    console.log('  🔄 Testing cache effectiveness...');
    const startTime = Date.now();
    await siteSettings.loadSiteSettings(); // Should use cache
    const endTime = Date.now();
    console.log(`    ⚡ Cache response time: ${endTime - startTime}ms`);
    
  } catch (error) {
    console.log('    ❌ Failed to load data:', error.message);
  }
}

// =============================================================================
// MAIN TEST RUNNER
// =============================================================================

/**
 * Run all data fetching tests
 */
export async function runDataFetchingTests() {
  console.log('🚀 Starting Data Fetching Tests...\n');
  
  // Test basic composables
  await testSiteSettings();
  console.log('');
  
  await testPages();
  console.log('');
  
  await testServices();
  console.log('');
  
  await testProducts();
  console.log('');
  
  await testPosts();
  console.log('');
  
  // Test advanced composables
  await testPagination();
  console.log('');
  
  await testSearchAndFilter();
  console.log('');
  
  // Test utilities
  testCacheManagement();
  console.log('');
  
  await testErrorHandling();
  console.log('');
  
  await testComposableIntegration();
  console.log('');
  
  console.log('🎉 All data fetching tests completed!');
}

/**
 * Run specific test
 * @param {string} testName - Name of test to run
 */
export function runDataFetchingTest(testName) {
  const tests = {
    'siteSettings': testSiteSettings,
    'pages': testPages,
    'services': testServices,
    'products': testProducts,
    'posts': testPosts,
    'pagination': testPagination,
    'searchAndFilter': testSearchAndFilter,
    'cacheManagement': testCacheManagement,
    'errorHandling': testErrorHandling,
    'integration': testComposableIntegration
  };
  
  if (tests[testName]) {
    console.log(`🧪 Running ${testName} test...`);
    return tests[testName]();
  } else {
    console.error(`❌ Test '${testName}' not found. Available tests:`, Object.keys(tests));
  }
}

// =============================================================================
// USAGE EXAMPLES
// =============================================================================

/**
 * Example: How to use data fetching composables in components
 */
export function usageExamples() {
  console.log('📖 Data Fetching Usage Examples:');
  
  console.log(`
// Basic usage in a Vue component:
import { useSiteSettings, usePages } from '@/composables/useDataFetching.js';

export default {
  setup() {
    // Site settings
    const {
      siteSettings,
      isLoading: siteLoading,
      hasError: siteError,
      loadSiteSettings
    } = useSiteSettings();
    
    // Pages
    const {
      pages,
      isLoading: pagesLoading,
      hasError: pagesError,
      loadPages
    } = usePages();
    
    // Load data on mount
    onMounted(async () => {
      await Promise.all([
        loadSiteSettings(),
        loadPages({ page: 1, pageSize: 10 })
      ]);
    });
    
    return {
      siteSettings,
      siteLoading,
      siteError,
      pages,
      pagesLoading,
      pagesError
    };
  }
}

// Advanced usage with pagination:
import { usePagination } from '@/composables/useDataFetching.js';
import { getPosts } from '@/api/index.js';

export default {
  setup() {
    const {
      paginatedData,
      isLoading,
      currentPage,
      totalPages,
      hasNextPage,
      hasPrevPage,
      loadPaginatedData,
      nextPage,
      prevPage
    } = usePagination({ pageSize: 5 });
    
    // Load first page
    onMounted(async () => {
      await loadPaginatedData(
        getPosts,
        {},
        { operation: 'loadBlogPosts', contentType: 'post' }
      );
    });
    
    // Navigation methods
    const goNext = async () => {
      await nextPage(getPosts, {}, { operation: 'nextPage', contentType: 'post' });
    };
    
    const goPrev = async () => {
      await prevPage(getPosts, {}, { operation: 'prevPage', contentType: 'post' });
    };
    
    return {
      paginatedData,
      isLoading,
      currentPage,
      totalPages,
      hasNextPage,
      hasPrevPage,
      goNext,
      goPrev
    };
  }
}

// Search and filter usage:
import { useSearchAndFilter } from '@/composables/useDataFetching.js';
import { getPosts } from '@/api/index.js';

export default {
  setup() {
    const {
      filteredData,
      isLoading,
      searchQuery,
      filters,
      setSearchQuery,
      setFilter,
      clearAllFilters,
      applyFilters
    } = useSearchAndFilter({
      defaultSort: 'createdAt',
      defaultSortOrder: 'desc'
    });
    
    // Apply initial filters
    onMounted(async () => {
      await applyFilters(
        getPosts,
        {},
        { operation: 'loadFilteredPosts', contentType: 'post' }
      );
    });
    
    // Search handler
    const handleSearch = async (query) => {
      await setSearchQuery(
        query,
        getPosts,
        {},
        { operation: 'searchPosts', contentType: 'post' }
      );
    };
    
    // Filter handler
    const handleFilter = async (key, value) => {
      await setFilter(
        key,
        value,
        getPosts,
        {},
        { operation: 'filterPosts', contentType: 'post' }
      );
    };
    
    return {
      filteredData,
      isLoading,
      searchQuery,
      filters,
      handleSearch,
      handleFilter,
      clearAllFilters
    };
  }
}
  `);
}

// =============================================================================
// AUTO-RUN IN DEVELOPMENT
// =============================================================================

// Only run tests automatically in development mode
if (import.meta.env.DEV) {
  // Uncomment the line below to run tests automatically
  // runDataFetchingTests();
  
  // Or run a specific test
  // runDataFetchingTest('siteSettings');
}

export default {
  runDataFetchingTests,
  runDataFetchingTest,
  usageExamples
}; 