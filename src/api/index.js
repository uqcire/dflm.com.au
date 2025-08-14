/**
 * API Services Index
 * 
 * This file exports all API service methods for content types
 * for easy importing throughout the application.
 */

// Content Type Services
export {
  getSiteSettings,
  updateSiteSettings
} from './siteSettingsService.js';

export {
  getPages,
  getPageBySlug,
  getPageById,
  createPage,
  updatePage,
  deletePage
} from './pageService.js';

export {
  getServices,
  getServiceBySlug,
  getServiceById,
  createService,
  updateService,
  deleteService
} from './serviceService.js';

export {
  getProducts,
  getProductBySlug,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from './productService.js';

export {
  getIndustries,
  getIndustryBySlug,
  getIndustryById,
  createIndustry,
  updateIndustry,
  deleteIndustry
} from './industryService.js';

export {
  getCertifications,
  getCertificationById,
  createCertification,
  updateCertification,
  deleteCertification
} from './certificationService.js';

export {
  getPartners,
  getPartnerById,
  createPartner,
  updatePartner,
  deletePartner
} from './partnerService.js';

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