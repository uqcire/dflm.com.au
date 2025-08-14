import { createRouter, createWebHistory } from 'vue-router'
import { useData } from '@/composables/useData'
import { updateRouteSEO } from '@/utils/SEO-MANAGER__DYNAMIC'

// Routes configuration
const routes = [
  {
    path: '/',
    name: 'under-construction',
    component: () => import('@/views/PAGE__LANDING--UNDER-CONSTRUCTION.vue'),
    meta: {
      title: 'Under Construction',
      preload: true, // Preload critical routes
      transition: 'fade',
      keepAlive: true, // Cache component
      layout: '' // Different layout
    },
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/PAGE__HOME--DEFAULT.vue'),
    meta: {
      title: 'Home',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/PAGE__ABOUT--DEFAULT.vue'),
    meta: {
      title: 'About',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/PAGE__SERVICES--DEFAULT.vue'),
    meta: {
      title: 'Services',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/services/import-distribution',
    name: 'service-import-distribution',
    component: () => import('@/views/PAGE__SERVICES-IMPORT-DISTRIBUTION--DEFAULT.vue'),
    meta: {
      title: 'Import & Distribution',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/services/oem',
    name: 'service-oem',
    component: () => import('@/views/PAGE__SERVICES-OEM--DEFAULT.vue'),
    meta: {
      title: 'OEM / Private Label',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/PAGE__PRODUCTS--DEFAULT.vue'),
    meta: {
      title: 'Products',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/products/:slug',
    name: 'product-detail',
    component: () => import('@/views/PAGE__PRODUCT--DEMO.vue'),
    meta: {
      title: 'Product',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/industries',
    name: 'industries',
    component: () => import('@/views/PAGE__INDUSTRIES--DEFAULT.vue'),
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
    component: () => import('@/views/PAGE__INDUSTRIES--DEFAULT.vue'),
    meta: {
      title: 'Industry',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/certifications',
    name: 'certifications',
    component: () => import('@/views/PAGE__CERTIFICATIONS--DEFAULT.vue'),
    meta: {
      title: 'Certifications & Quality',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/PAGE__BLOG--LIST.vue'),
    meta: {
      title: 'Blog',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/blog/:slug',
    name: 'post-detail',
    component: () => import('@/views/PAGE__BLOG--DETAIL.vue'),
    meta: {
      title: 'Post',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/PAGE__CONTACT--DEFAULT.vue'),
    meta: {
      title: 'Contact',
      preload: false,
      transition: 'fade',
      keepAlive: true,
      layout: ''
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/PAGE__NOT-FOUND--404.vue'),
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
  // Get data composable for dynamic content
  const { getSiteSettings } = useData()
  const siteSettings = getSiteSettings()
  
  // Prepare SEO data
  const seoData = {
    title: to.meta?.title,
    description: to.meta?.description,
    image: to.meta?.image,
    organization: siteSettings
  }

  // Add specific data based on route
  if (to.name === 'post-detail') {
    seoData.publishedAt = to.meta?.publishedAt
    seoData.updatedAt = to.meta?.updatedAt
    seoData.author = to.meta?.author
  }

  // Add breadcrumbs for detail pages
  if (to.name === 'product-detail' || to.name === 'industry-detail' || to.name === 'post-detail') {
    seoData.breadcrumbs = [
      { name: 'Home', url: '/home' },
      { name: to.meta?.title, url: to.fullPath }
    ]
  }

  // Update SEO using the utility
  updateRouteSEO(to, seoData)

  next()
})

export function setupRouter(app) {
  app.use(router)
}
