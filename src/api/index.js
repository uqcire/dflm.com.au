/**
 * Blog API Services Index
 * 
 * This file exports blog-related API service methods for the
 * Strapi CMS integration (posts, categories, tags only).
 */

// Blog Content Services
export {
  getPosts,
  getPostBySlug,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from './postService.js';

export {
  getCategories,
  getCategoryBySlug,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from './categoryService.js';

export {
  getTags,
  getTagBySlug,
  getTagById,
  createTag,
  updateTag,
  deleteTag
} from './tagService.js'; 