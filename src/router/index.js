import { createRouter, createWebHistory } from 'vue-router'
import { updateRouteSEO } from '@/utils/SEO-MANAGER__DYNAMIC'

// 将耗时操作延后到空闲时执行，避免在导航钩子中产生长任务
const runWhenIdle = (callback) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => callback(), { timeout: 1500 })
  } else {
    setTimeout(() => callback(), 0)
  }
}

// Routes configuration organized by category
const routes = [
  // ========================================
  // MAIN PAGES
  // ========================================
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/main/PAGE__HOME--DEFAULT.vue'),
    meta: {
      title: 'Home',
      preload: true, // Preload critical routes
      transition: 'fade',
      keepAlive: true, // Cache component
      layout: ''
    },
  },

  // ========================================
  // ABOUT / COMPANY PAGES
  // ========================================
  {
    path: '/our-company',
    name: 'our-company',
    component: () => import('@/views/our-company/PAGE__ABOUT--DEFAULT.vue'),
    meta: {
      title: 'Our Company',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/our-company/mission-and-vision',
    name: 'our-company-mission-vision',
    component: () => import('@/views/our-company/PAGE__ABOUT--MISSION-AND-VISION.vue'),
    meta: {
      title: 'Mission & Vision',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/our-company/history',
    name: 'our-company-history',
    component: () => import('@/views/our-company/PAGE__ABOUT--OUR-HISTORY.vue'),
    meta: {
      title: 'Our History',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },

  // ========================================
  // SERVICES / BUSINESSES PAGES
  // ========================================
  {
    path: '/our-businesses',
    name: 'our-businesses',
    component: () => import('@/views/our-business/PAGE__SERVICES--DEFAULT.vue'),
    meta: {
      title: 'Our Businesses',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/our-businesses/import-and-distribution',
    name: 'service-import-distribution',
    component: () => import('@/views/our-business/PAGE__SERVICES-IMPORT-DISTRIBUTION--DEFAULT.vue'),
    meta: {
      title: 'Import & Distribution',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/our-businesses/oem-and-private-label',
    name: 'service-oem',
    component: () => import('@/views/our-business/PAGE__SERVICES-OEM--DEFAULT.vue'),
    meta: {
      title: 'OEM / Private Label',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },

  // ========================================
  // PRODUCTS PAGES
  // ========================================
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/products/PAGE__PRODUCTS--DEFAULT.vue'),
    meta: {
      title: 'Products',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/products/fresh-produce',
    name: 'products-fresh-produce',
    component: () => import('@/views/products/PAGE__PRODUCTS--FRESH-PRODUCE.vue'),
    meta: {
      title: 'Fresh Produce',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/products/processed-garlic',
    name: 'products-processed-garlic',
    component: () => import('@/views/products/PAGE__PRODUCTS--PROCESSED-GARLIC.vue'),
    meta: {
      title: 'Processed Garlic',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/products/condiments-sauces',
    name: 'products-condiments-sauces',
    component: () => import('@/views/products/PAGE__PRODUCTS--CONDIMENTS-SAUCES.vue'),
    meta: {
      title: 'Condiments & Sauces',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/products/snacks-consumer',
    name: 'products-snacks-consumer',
    component: () => import('@/views/products/PAGE__PRODUCTS--SNACKS-CONSUMER.vue'),
    meta: {
      title: 'Snacks & Consumer Products',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/products/broader-agriculture',
    name: 'products-broader-agriculture',
    component: () => import('@/views/products/PAGE__PRODUCTS--BROADER-AGRICULTURE.vue'),
    meta: {
      title: 'Broader Agriculture',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/products/:slug',
    name: 'product-detail',
    component: () => import('@/views/products/PAGE__PRODUCTS--DEFAULT.vue'),
    meta: {
      title: 'Product',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },

  // ========================================
  // INDUSTRIES PAGES
  // ========================================
  {
    path: '/our-businesses/industries',
    name: 'our-businesses-industries',
    component: () => import('@/views/our-business/PAGE__SERVICES-INDUSTRIES--DEFAULT.vue'),
    meta: {
      title: 'Industries',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/industries/:slug',
    name: 'industry-detail',
    component: () => import('@/views/our-business/PAGE__SERVICES-INDUSTRIES--DEFAULT.vue'),
    meta: {
      title: 'Industry',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },

  // ========================================
  // INDUSTRY-SPECIFIC SERVICE PAGES
  // ========================================
  {
    path: '/our-businesses/industries/food-manufacturers-and-processors',
    name: 'services-industries-food-manufacturers',
    component: () => import('@/views/our-business/PAGE__SERVICES-INDUSTRIES--FOOD-MANUFACTURERS-AND-PROCESSORS.vue'),
    meta: {
      title: 'Food Manufacturers & Processors',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/our-businesses/industries/food-service-and-distribution',
    name: 'services-industries-food-service',
    component: () => import('@/views/our-business/PAGE__SERVICES-INDUSTRIES--FOOD-SERVICE-AND-DISTRIBUTION.vue'),
    meta: {
      title: 'Food Service & Distribution',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/our-businesses/industries/supermarkets-and-custom-brands',
    name: 'services-industries-supermarkets',
    component: () => import('@/views/our-business/PAGE__SERVICES-INDUSTRIES--SUPERMARKETS-AND-CUSTOM-BRANDS.vue'),
    meta: {
      title: 'Supermarkets & Custom Brands',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/our-businesses/industries/ingredient-and-bulk-suppliers',
    name: 'services-industries-ingredient-suppliers',
    component: () => import('@/views/our-business/PAGE__SERVICES-INDUSTRIES--INGREDIENT-AND-BULK-SUPPLIERS.vue'),
    meta: {
      title: 'Ingredient & Bulk Suppliers',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/our-businesses/industries/importers-and-trade-partners',
    name: 'services-industries-importers',
    component: () => import('@/views/our-business/PAGE__SERVICES-INDUSTRIES--IMPORTERS-AND-TRADE-PARTNERS.vue'),
    meta: {
      title: 'Importers & Trade Partners',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },

  // ========================================
  // BLOG / NEWS PAGES (Redirected to Under Construction)
  // ========================================
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/error/PAGE__LANDING--UNDER-CONSTRUCTION.vue'),
    meta: {
      title: 'News - Under Construction',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: '',
      noindex: true
    },
  },
  {
    path: '/news/:slug',
    name: 'news-detail',
    component: () => import('@/views/error/PAGE__LANDING--UNDER-CONSTRUCTION.vue'),
    meta: {
      title: 'News - Under Construction',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: '',
      noindex: true
    },
  },

  // ========================================
  // CONTACT PAGES
  // ========================================
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact/PAGE__CONTACT--DEFAULT.vue'),
    meta: {
      title: 'Contact',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },

  {
    path: '/contact/success',
    name: 'contact-success',
    component: () => import('@/views/contact/PAGE__CONTACT--SUCCESS.vue'),
    meta: {
      title: 'Thank you for contacting us',
      preload: false,
      transition: 'fade',
      keepAlive: false,
      layout: ''
    },
  },

  // ========================================
  // DEVELOPMENT / UTILITY PAGES
  // ========================================
  {
    path: '/design-system',
    name: 'design-system',
    component: () => import('@/views/development/PAGE__DESIGN-SYSTEM--DEFAULT.vue'),
    meta: {
      title: 'Design System',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },

  // ========================================
  // UTILITY PAGES
  // ========================================
  {
    path: '/sitemap',
    name: 'sitemap',
    component: () => import('@/views/utility/PAGE__SITEMAP--DEFAULT.vue'),
    meta: {
      title: 'Site Map',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },

  // ========================================
  // LEGAL PAGES (Redirected to Under Construction)
  // ========================================
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('@/views/legal/PAGE__PRIVACY-POLICY--DEFAULT.vue'),
    meta: {
      title: 'Privacy Policy',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: '',
      noindex: true
    },
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: () => import('@/views/legal/PAGE__TERMS-OF-SERVICE--DEFAULT.vue'),
    meta: {
      title: 'Terms of Service',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: '',
      noindex: true
    },
  },
  {
    path: '/cookie-policy',
    name: 'cookie-policy',
    component: () => import('@/views/legal/PAGE__COOKIE-POLICY--DEFAULT.vue'),
    meta: {
      title: 'Cookie Policy',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: '',
      noindex: true
    },
  },


  // ========================================
  // ERROR PAGES
  // ========================================
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/error/PAGE__NOT-FOUND--404.vue'),
    meta: {
      title: 'Not Found',
      preload: false,
      transition: 'fade'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

// Dynamic meta tag management
router.beforeEach(async (to, from, next) => {
  // Prepare SEO data
  const seoData = {
    title: to.meta?.title,
    description: to.meta?.description,
    image: to.meta?.image
  }

  // Add specific data based on route
  if (to.name === 'news-detail') {
    seoData.publishedAt = to.meta?.publishedAt
    seoData.updatedAt = to.meta?.updatedAt
    seoData.author = to.meta?.author
  }

  // Add breadcrumbs for detail pages
  if (to.name === 'product-detail' || to.name === 'industry-detail' || to.name === 'news-detail') {
    seoData.breadcrumbs = [
      { name: 'Home', url: '/', path: '/' },
      { name: to.meta?.title, url: to.fullPath, path: to.fullPath }
    ]
  }

  // Add breadcrumbs for product detail pages
  if (to.name && to.name.startsWith('products-') && to.name !== 'products') {
    seoData.breadcrumbs = [
      { name: 'Home', url: '/', path: '/' },
      { name: 'Products', url: '/products', path: '/products' },
      { name: to.meta?.title, url: to.fullPath, path: to.fullPath }
    ]
  }

  // Add breadcrumbs for about sub-pages
  if (to.name === 'our-company-mission-vision') {
    seoData.breadcrumbs = [
      { name: 'Home', url: '/', path: '/' },
      { name: 'Our Company', url: '/our-company', path: '/our-company' },
      { name: to.meta?.title, url: to.fullPath, path: to.fullPath }
    ]
  }

  // Add breadcrumbs for business sub-pages
  if (to.name && to.name.startsWith('our-business-') && to.name !== 'our-business') {
    seoData.breadcrumbs = [
      { name: 'Home', url: '/', path: '/' },
      { name: 'Our Business', url: '/our-business', path: '/our-business' },
      { name: to.meta?.title, url: to.fullPath, path: to.fullPath }
    ]
  }

  // Add breadcrumbs for company sub-pages
  if (to.name && to.name.startsWith('our-company-') && to.name !== 'our-company') {
    seoData.breadcrumbs = [
      { name: 'Home', url: '/', path: '/' },
      { name: 'Our Company', url: '/our-company', path: '/our-company' },
      { name: to.meta?.title, url: to.fullPath, path: to.fullPath }
    ]
  }

  // Add breadcrumbs for news sub-pages
  if (to.name && to.name.startsWith('news-') && to.name !== 'news') {
    seoData.breadcrumbs = [
      { name: 'Home', url: '/', path: '/' },
      { name: 'News', url: '/news', path: '/news' },
      { name: to.meta?.title, url: to.fullPath, path: to.fullPath }
    ]
  }

  // Update SEO using the utility（延后执行以避免阻塞导航）
  runWhenIdle(() => updateRouteSEO(to, seoData))

  next()
})

// Scroll to top on navigation
router.afterEach((to, from) => {
  // Scroll to top when navigating to a different page（避免 smooth 带来的额外主线程工作）
  if (to.path !== from.path) {
    window.scrollTo(0, 0)
  }
})

export function setupRouter(app) {
  app.use(router)
}
