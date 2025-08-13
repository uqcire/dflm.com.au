import { createRouter, createWebHistory } from 'vue-router'

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
      title: 'Homepage',
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

const SITE_NAME = 'E-Sunrise Australia'
const DEFAULT_DESCRIPTION = 'E‑Sunrise Australia — B2B Agricultural Import & Distribution in Melbourne.'

function setOrCreateMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setOrCreateCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

router.beforeEach((to, from, next) => {
  const titleText = to.meta?.title ? `${to.meta.title} | ${SITE_NAME}` : SITE_NAME
  document.title = titleText

  const description = to.meta?.description || DEFAULT_DESCRIPTION
  const url = window.location.origin + to.fullPath

  setOrCreateMeta('name', 'description', description)
  setOrCreateMeta('property', 'og:title', titleText)
  setOrCreateMeta('property', 'og:description', description)
  setOrCreateMeta('property', 'og:url', url)
  setOrCreateCanonical(url)

  next()
})

export function setupRouter(app) {
  app.use(router)
}
