/**
 * API Services Index
 * 
 * This file exports all API service methods for Supabase integration.
 */

// Supabase Content Services
export {
  fetchPosts as getPosts,
  fetchPostBySlug as getPostBySlug
} from './postsSupabase.js';

// Fallback data services
export {
  getMockPosts,
  getMockPostBySlug,
  getMockCategories,
  getMockTags,
  shouldUseMockData
} from './fallbackData.js'; 