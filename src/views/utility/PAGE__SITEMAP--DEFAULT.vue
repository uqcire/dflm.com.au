<script setup>
import { ref, computed } from 'vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentStack from '@/components/layout/COMPONENT__STACK.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'

/**
 * Site Map Data Configuration
 * 
 * This data defines the complete structure of the E-Sunrise Australia website.
 * It's kept inline for SEO purposes to ensure search engines can directly
 * crawl and index all page information.
 * 
 * Structure:
 * - category: Logical grouping of related pages
 * - routes: Array of pages within each category
 *   - path: URL path for the page
 *   - title: Display title for the page
 *   - description: SEO-friendly description
 */
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

</script>

<template>
    <!-- Page Header -->
    <ComponentSection spacing="lg" :fullWidth="true" background="primary" class="font-body">
        <header class="text-center text-white">
            <h1 class="text-4xl md:text-6xl font-bold font-heading mb-4 pb-4">
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
    <ComponentSection spacing="sm">
        <ComponentContainer padding="sm">
            <!-- Introduction -->
            <componentContainer padding="responsive" style="padding-top: 0px;"
                class="text-center max-w-3xl mx-auto pb-4">
                <h2 class="text-2xl font-body font-semibold text-gray-800 mb-4 pb-4">
                    Complete Website Navigation
                </h2>
                <p class="text-gray-600 leading-relaxed">
                    This sitemap provides a comprehensive overview of all pages available on the E-Sunrise Australia
                    website.
                    Use this page to quickly find and navigate to any section of our site.
                </p>
            </componentContainer>

            <!-- Sitemap Categories -->
            <ComponentGrid columns="1" gap="lg" class="lg:grid-cols-2">
                <div v-for="(category, categoryIndex) in siteRoutes" :key="categoryIndex"
                    class="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out">
                    <h3 class="text-xl font-body font-semibold text-gray-800 mb-4 pb-4 border-b border-monza-200">
                        {{ category.category }}
                    </h3>

                    <ul class="space-y-3 pt-2">
                        <li v-for="(route, routeIndex) in category.routes" :key="routeIndex">
                            <router-link :to="route.path"
                                class="group flex flex-col p-3 rounded-lg border border-transparent hover:border-monza-200 hover:bg-monza-50 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-monza-500 focus:ring-offset-2">
                                <span
                                    class="font-medium text-gray-800 group-hover:text-monza-600 transition-colors duration-200">
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
        </ComponentContainer>
    </ComponentSection>
</template>
