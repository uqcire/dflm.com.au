<script setup>
import { onMounted, computed } from 'vue'
import { usePages, useSiteSettings } from '@/composables/useDataFetching.js'
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

// About page data
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
      loadPageBySlug('about')
    ])
  } catch (error) {
    console.error('Error loading about page data:', error)
  }
})

// Get about page data
const aboutPage = computed(() => pages.value || null)
</script>

<template>
  <ComponentLoadingState v-if="isLoading" />
  <ComponentErrorState v-else-if="hasError"
    :message="errorDisplay?.message || 'An error occurred while loading the page.'" />
  <div v-else-if="aboutPage">
    <section class="page-about">
      <ComponentHero :title="aboutPage.hero?.title" :subtitle="aboutPage.hero?.subtitle" />
      <div class="page-about__content max-w-4xl mx-auto py-8 px-6">
        <div v-if="aboutPage.blocks && aboutPage.blocks.length > 0" class="page-about__body">
          <div v-for="(block, index) in aboutPage.blocks" :key="index" class="page-about__block mb-6">
            <div v-if="block.type === 'content'" v-html="block.content"></div>
            <div v-else-if="block.type === 'features'" class="page-about__features">
              <div v-for="(feature, featureIndex) in block.features" :key="featureIndex"
                class="page-about__feature mb-4">
                <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
                <p class="text-gray-600">{{ feature.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="page-about__text text-gray-600">Content coming soon.</p>
      </div>
    </section>
  </div>
  <div v-else>
    <ComponentErrorState :message="'About page content could not be loaded.'" />
  </div>
</template>

<style scoped></style>