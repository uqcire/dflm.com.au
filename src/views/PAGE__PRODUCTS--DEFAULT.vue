<script setup>
import { onMounted, computed } from 'vue'
import { useProducts, useSiteSettings } from '@/composables/useDataFetching.js'
import ComponentLoadingState from '@/components/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/COMPONENT__ERROR--STATE.vue'
import ComponentProductCard from '@/components/COMPONENT__PRODUCT--CARD.vue'

// Site settings
const {
  siteSettings,
  isLoading: siteLoading,
  hasError: siteError,
  errorDisplay: siteErrorDisplay,
  loadSiteSettings
} = useSiteSettings()

// Products data
const {
  products,
  isLoading: productsLoading,
  hasError: productsError,
  errorDisplay: productsErrorDisplay,
  loadProducts
} = useProducts()

// Computed properties
const isLoading = computed(() => siteLoading.value || productsLoading.value)
const hasError = computed(() => siteError.value || productsError.value)
const errorDisplay = computed(() => siteErrorDisplay.value || productsErrorDisplay.value)

// Load data on mount
onMounted(async () => {
  try {
    await Promise.all([
      loadSiteSettings(),
      loadProducts({ page: 1, pageSize: 12 })
    ])
  } catch (error) {
    console.error('Error loading products page data:', error)
  }
})

// Get products list
const productsList = computed(() => products.value?.data || [])
</script>

<template>
  <ComponentLoadingState v-if="isLoading" />
  <ComponentErrorState v-else-if="hasError"
    :message="errorDisplay?.message || 'An error occurred while loading products.'" />



  <section v-else class="page-products">
    <header class="page-products__header">
      <h1 class="page-products__title">Products</h1>
    </header>
    <div class="page-products__content">
      <div v-if="productsList.length > 0" class="page-products__grid">
        <ComponentProductCard v-for="product in productsList" :key="product.id" :product="product" />
      </div>
      <div v-else class="page-products__empty">
        <p class="page-products__text">Product catalog coming soon.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-products {
  padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-products__title {
  margin: 0 0 var(--space-4, 1rem) 0;
  font-size: var(--font-size-2xl, 1.5rem);
  font-weight: 600;
}

.page-products__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6, 1.5rem);
  margin-top: var(--space-6, 1.5rem);
}

.page-products__empty {
  text-align: center;
  padding: var(--space-8, 2rem);
}

.page-products__text {
  color: var(--color-text-secondary, #6b7280);
  font-size: var(--font-size-lg, 1.125rem);
}
</style>