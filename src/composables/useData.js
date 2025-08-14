import { ref } from 'vue'
import { mockSiteData } from '@/data/mockData'

export function useData() {
  const data = ref(mockSiteData)
  const isLoading = ref(false)
  const error = ref(null)
  
  // This will eventually fetch from Strapi API
  const fetchData = async () => {
    isLoading.value = true
    try {
      // const response = await fetch('/api/pages')
      // data.value = await response.json()
      // For now, just use mock data
      data.value = mockSiteData
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }
  
  // Get specific page data
  const getPage = (pageSlug) => {
    return data.value.pages[pageSlug] || null
  }
  
  // Get all services
  const getServices = () => {
    return data.value.services || []
  }
  
  // Get specific service by slug
  const getService = (slug) => {
    return data.value.services?.find(service => service.slug === slug) || null
  }
  
  // Get all products
  const getProducts = () => {
    return data.value.products || []
  }
  
  // Get specific product by slug
  const getProduct = (slug) => {
    return data.value.products?.find(product => product.slug === slug) || null
  }
  
  // Get site settings
  const getSiteSettings = () => {
    return data.value.siteSettings || {}
  }
  
  return {
    data,
    isLoading,
    error,
    fetchData,
    getPage,
    getServices,
    getService,
    getProducts,
    getProduct,
    getSiteSettings
  }
} 