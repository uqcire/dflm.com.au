<script setup>
import { ref, computed } from 'vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentStack from '@/components/layout/COMPONENT__STACK.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'

// Define all site routes with their metadata
const siteRoutes = ref([
  // Main Pages
  {
    category: 'Main',
    routes: [
      { path: '/', title: 'Home', description: 'E-Sunrise Australia homepage' },
    ]
  },
  
  // Company Pages
  {
    category: 'Our Company',
    routes: [
      { path: '/our-company', title: 'Our Company', description: 'Learn about E-Sunrise Australia' },
      { path: '/our-company/mission-and-vision', title: 'Mission & Vision', description: 'Our company mission and vision' },
      { path: '/our-company/history', title: 'Our History', description: 'Company history and milestones' },
    ]
  },
  
  // Business Pages
  {
    category: 'Our Businesses',
    routes: [
      { path: '/our-businesses', title: 'Our Businesses', description: 'Overview of our business services' },
      { path: '/our-businesses/import-and-distribution', title: 'Import & Distribution', description: 'Import and distribution services' },
      { path: '/our-businesses/oem-and-private-label', title: 'OEM / Private Label', description: 'OEM and private label services' },
      { path: '/our-businesses/industries', title: 'Industries', description: 'Industries we serve' },
    ]
  },
  
  // Industry-Specific Services
  {
    category: 'Industry Services',
    routes: [
      { path: '/our-businesses/industries/food-manufacturers-and-processors', title: 'Food Manufacturers & Processors', description: 'Services for food manufacturers' },
      { path: '/our-businesses/industries/food-service-and-distribution', title: 'Food Service & Distribution', description: 'Food service and distribution solutions' },
      { path: '/our-businesses/industries/supermarkets-and-custom-brands', title: 'Supermarkets & Custom Brands', description: 'Supermarket and custom brand services' },
      { path: '/our-businesses/industries/ingredient-and-bulk-suppliers', title: 'Ingredient & Bulk Suppliers', description: 'Ingredient and bulk supply solutions' },
      { path: '/our-businesses/industries/importers-and-trade-partners', title: 'Importers & Trade Partners', description: 'Import and trade partner services' },
    ]
  },
  
  // Product Pages
  {
    category: 'Products',
    routes: [
      { path: '/products', title: 'Products', description: 'Our product portfolio' },
      { path: '/products/fresh-produce', title: 'Fresh Produce', description: 'Fresh vegetables and produce' },
      { path: '/products/processed-garlic', title: 'Processed Garlic', description: 'Processed garlic products' },
      { path: '/products/condiments-sauces', title: 'Condiments & Sauces', description: 'Condiments and sauce products' },
      { path: '/products/snacks-consumer', title: 'Snacks & Consumer Products', description: 'Snacks and consumer goods' },
      { path: '/products/broader-agriculture', title: 'Broader Agriculture', description: 'Agricultural products and solutions' },
    ]
  },
  
  // Contact & Support
  {
    category: 'Contact & Support',
    routes: [
      { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team' },
    ]
  },
  
  // Legal Pages
  {
    category: 'Legal',
    routes: [
      { path: '/privacy-policy', title: 'Privacy Policy', description: 'Our privacy policy and data protection' },
      { path: '/terms-of-service', title: 'Terms of Service', description: 'Terms and conditions of service' },
      { path: '/cookie-policy', title: 'Cookie Policy', description: 'Cookie usage and preferences' },
    ]
  }
])

// Computed property for total page count
const totalPages = computed(() => {
  return siteRoutes.value.reduce((total, category) => total + category.routes.length, 0)
})

// Function to get current year
const currentYear = ref(new Date().getFullYear())
</script>

<template>
  <ComponentContainer tag="main" size="xl" class="sitemap-page">
    <!-- Page Header -->
    <ComponentSection spacing="lg" background="primary">
      <header class="text-center text-white">
        <h1 class="text-4xl md:text-6xl font-bold font-heading mb-4">
          Site Map
        </h1>
        <p class="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
          Navigate through all pages and sections of the E-Sunrise Australia website
        </p>
        <div class="mt-6 text-sm opacity-90">
          <span class="bg-white/20 px-4 py-2 rounded-full">
            {{ totalPages }} pages available
          </span>
        </div>
      </header>
    </ComponentSection>

    <!-- Sitemap Content -->
    <ComponentSection spacing="lg">
      <ComponentStack space="xl">
        
        <!-- Introduction -->
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            Complete Website Navigation
          </h2>
          <p class="text-gray-600 leading-relaxed">
            This sitemap provides a comprehensive overview of all pages available on the E-Sunrise Australia website. 
            Use this page to quickly find and navigate to any section of our site.
          </p>
        </div>

        <!-- Sitemap Categories -->
        <ComponentGrid columns="1" gap="lg" class="lg:grid-cols-2">
          <div 
            v-for="(category, categoryIndex) in siteRoutes" 
            :key="categoryIndex"
            class="sitemap-category bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h3 class="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
              {{ category.category }}
            </h3>
            
            <ul class="space-y-3">
              <li v-for="(route, routeIndex) in category.routes" :key="routeIndex">
                <router-link 
                  :to="route.path"
                  class="sitemap-link group flex flex-col p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <span class="font-medium text-gray-800 group-hover:text-monza-600 transition-colors duration-200">
                    {{ route.title }}
                  </span>
                  <span class="text-sm text-gray-500 mt-1">
                    {{ route.description }}
                  </span>
                  <span class="text-xs text-gray-400 mt-1 font-mono">
                    {{ route.path }}
                  </span>
                </router-link>
              </li>
            </ul>
          </div>
        </ComponentGrid>

        <!-- Quick Navigation -->
        <div class="bg-gray-50 rounded-xl p-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-6 text-center">
            Quick Navigation
          </h3>
          
          <ComponentGrid columns="2" gap="md" class="md:grid-cols-4">
            <router-link 
              to="/"
              class="quick-nav-link group flex flex-col items-center p-4 bg-white rounded-lg hover:bg-monza-50 transition-colors duration-200"
            >
              <div class="w-12 h-12 bg-monza-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-monza-200 transition-colors duration-200">
                <svg class="w-6 h-6 text-monza-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700 group-hover:text-monza-600">Home</span>
            </router-link>

            <router-link 
              to="/products"
              class="quick-nav-link group flex flex-col items-center p-4 bg-white rounded-lg hover:bg-monza-50 transition-colors duration-200"
            >
              <div class="w-12 h-12 bg-tree-poppy-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-tree-poppy-200 transition-colors duration-200">
                <svg class="w-6 h-6 text-tree-poppy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700 group-hover:text-tree-poppy-600">Products</span>
            </router-link>

            <router-link 
              to="/our-businesses"
              class="quick-nav-link group flex flex-col items-center p-4 bg-white rounded-lg hover:bg-monza-50 transition-colors duration-200"
            >
              <div class="w-12 h-12 bg-pickled-bluewood-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-pickled-bluewood-200 transition-colors duration-200">
                <svg class="w-6 h-6 text-pickled-bluewood-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700 group-hover:text-pickled-bluewood-600">Businesses</span>
            </router-link>

            <router-link 
              to="/contact"
              class="quick-nav-link group flex flex-col items-center p-4 bg-white rounded-lg hover:bg-monza-50 transition-colors duration-200"
            >
              <div class="w-12 h-12 bg-cello-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-cello-200 transition-colors duration-200">
                <svg class="w-6 h-6 text-cello-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span class="text-sm font-medium text-gray-700 group-hover:text-cello-600">Contact</span>
            </router-link>
          </ComponentGrid>
        </div>

        <!-- Footer Note -->
        <div class="text-center text-gray-500 text-sm">
          <p>
            Last updated: {{ currentYear }} | 
            <router-link to="/contact" class="text-monza-600 hover:text-monza-700 transition-colors duration-200">
              Report broken links
            </router-link>
          </p>
        </div>

      </ComponentStack>
    </ComponentSection>
  </ComponentContainer>
</template>

<style scoped>
.sitemap-page {
  min-height: 100vh;
  font-family: var(--font-family-body);
}

.sitemap-category {
  transition: all 0.2s ease-in-out;
}

.sitemap-category:hover {
  transform: translateY(-2px);
}

.sitemap-link {
  text-decoration: none;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

.sitemap-link:hover {
  border-color: var(--color-monza-200);
  background-color: var(--color-monza-50);
}

.quick-nav-link {
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.quick-nav-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .sitemap-page h1 {
    font-size: 2.5rem;
  }
  
  .sitemap-page .text-xl {
    font-size: 1.125rem;
  }
}

/* Focus states for accessibility */
.sitemap-link:focus,
.quick-nav-link:focus {
  outline: 3px solid var(--color-border-focus);
  outline-offset: 2px;
}
</style>
