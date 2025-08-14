<script setup>
import { onMounted, computed } from 'vue'
import { useSiteSettings, usePages } from '@/composables/useDataFetching.js'
import ComponentHero from '@/components/COMPONENT__HERO--PAGE.vue'
import ComponentLoadingState from '@/components/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/COMPONENT__ERROR--STATE.vue'

// Site settings
const {
  siteSettings,
  isLoading: siteLoading,
  hasError: siteError,
  errorDisplay: siteErrorDisplay,
  loadSiteSettings
} = useSiteSettings()

// Home page data
const {
  pages,
  isLoading: pageLoading,
  hasError: pageError,
  errorDisplay: pageErrorDisplay,
  loadPageBySlug
} = usePages()

// Computed properties
const isLoading = computed(() => siteLoading.value || pageLoading.value)
const hasError = computed(() => siteError.value || pageError.value)
const errorDisplay = computed(() => siteErrorDisplay.value || pageErrorDisplay.value)

// Load data on mount
onMounted(async () => {
  try {
    await Promise.all([
      loadSiteSettings(),
      loadPageBySlug('home')
    ])
  } catch (error) {
    console.error('Error loading home page data:', error)
  }
})

// Get home page data
const homePage = computed(() => pages.value || null)
</script>

<template>
  <ComponentLoadingState v-if="isLoading" />
  <ComponentErrorState v-else-if="hasError"
    :message="errorDisplay?.message || 'An error occurred while loading the home page.'" />
  <div v-else-if="homePage">
    <section class="page-home">
      <ComponentHero :title="homePage.hero?.title" :subtitle="homePage.hero?.subtitle" :image="homePage.hero?.image" />
      <!-- Rest of home page content using homePage data -->
    </section>
  </div>
  <div v-else>
    <ComponentErrorState :message="'Home page content could not be loaded.'" />
  </div>
</template>
