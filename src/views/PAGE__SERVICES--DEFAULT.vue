<script setup>
import { onMounted, computed } from 'vue'
import { useServices, useSiteSettings } from '@/composables/useDataFetching.js'
import ComponentLoadingState from '@/components/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/COMPONENT__ERROR--STATE.vue'
import ComponentServiceCard from '@/components/COMPONENT__SERVICE--CARD.vue'

// Site settings
const {
  siteSettings,
  isLoading: siteLoading,
  hasError: siteError,
  errorDisplay: siteErrorDisplay,
  loadSiteSettings
} = useSiteSettings()

// Services data
const {
  services,
  isLoading: servicesLoading,
  hasError: servicesError,
  errorDisplay: servicesErrorDisplay,
  loadServices
} = useServices()

// Computed properties
const isLoading = computed(() => siteLoading.value || servicesLoading.value)
const hasError = computed(() => siteError.value || servicesError.value)
const errorDisplay = computed(() => siteErrorDisplay.value || servicesErrorDisplay.value)

// Load data on mount
onMounted(async () => {
  try {
    await Promise.all([
      loadSiteSettings(),
      loadServices({ page: 1, pageSize: 10 })
    ])
  } catch (error) {
    console.error('Error loading services page data:', error)
  }
})

// Get services list
const servicesList = computed(() => services.value?.data || [])
</script>

<template>
    <ComponentLoadingState v-if="isLoading" />
    <ComponentErrorState v-else-if="hasError" :error="errorDisplay" />
    <section v-else class="page-services">
        <header class="page-services__header">
            <h1 class="page-services__title">Services</h1>
        </header>
        <div class="page-services__content">
            <div v-if="servicesList.length > 0" class="page-services__grid">
                <ComponentServiceCard 
                    v-for="service in servicesList" 
                    :key="service.id"
                    :service="service"
                />
            </div>
            <div v-else class="page-services__empty">
                <p class="page-services__text">No services available at the moment.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.page-services {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-services__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-services__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-6, 1.5rem);
    margin-top: var(--space-6, 1.5rem);
}

.page-services__empty {
    text-align: center;
    padding: var(--space-8, 2rem);
}

.page-services__text {
    color: var(--color-text-secondary, #6b7280);
    font-size: var(--font-size-lg, 1.125rem);
}
</style>