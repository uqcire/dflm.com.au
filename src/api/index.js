/**
 * API Services Index
 * 
 * This file exports all API service methods for Supabase integration.
 */

// Supabase Content Services
export {
  fetchPosts as getPosts,
  fetchPosts as getPostsSupabase,
  fetchPostBySlug as getPostBySlug,
  fetchPostBySlug as getPostBySlugSupabase
} from './postsSupabase.js';

// Fallback data services
export {
  getMockPosts,
  getMockPostBySlug,
  getMockCategories,
  getMockTags,
  shouldUseMockData
} from './fallbackData.js'; 