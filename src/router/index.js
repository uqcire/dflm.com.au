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
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | E-Sunrise Australia`
  next()
})

export function setupRouter(app) {
  app.use(router)
}
