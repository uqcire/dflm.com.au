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
const aboutPage = computed(() => {
  return pages.value || null;
})
</script>

<template>
  <ComponentLoadingState v-if="isLoading" />
  <ComponentErrorState v-else-if="hasError"
    :message="errorDisplay?.message || 'An error occurred while loading the page.'" />
  <div v-else-if="aboutPage">
    <section class="page-about">
      <ComponentHero :title="aboutPage.hero?.title" :subtitle="aboutPage.hero?.subtitle"
        :cta-text="aboutPage.hero?.ctaText" :cta-link="aboutPage.hero?.ctaLink" />
      <div class="page-about__content max-w-4xl mx-auto py-8 px-6">
        <div v-if="aboutPage.blocks && aboutPage.blocks.length > 0" class="page-about__body">
          <div v-for="(block, index) in aboutPage.blocks" :key="index" class="page-about__block mb-6">
            <!-- Content Block -->
            <div v-if="block.type === 'Content' || block.type === 'content'" class="page-about__content-block">
              <h2 v-if="block.title" class="text-2xl font-bold text-gray-900 mb-4">{{ block.title }}</h2>
              <div v-if="block.text" class="prose max-w-none" v-html="block.text"></div>
              <img v-if="block.image" :src="block.image" :alt="block.title" class="mt-4 rounded-lg shadow-md" />
            </div>
            <!-- Features Block -->
            <div v-else-if="block.features" class="page-about__features">
              <h2 v-if="block.features.title" class="text-2xl font-bold text-gray-900 mb-6">{{ block.features.title }}
              </h2>
              <div v-if="block.features.features && block.features.features.length > 0"
                class="grid md:grid-cols-2 gap-6">
                <div v-for="(feature, featureIndex) in block.features.features" :key="featureIndex"
                  class="page-about__feature">
                  <h3 class="text-lg font-semibold mb-2 text-blue-600">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.text }}</p>
                </div>
              </div>
            </div>
            <!-- Default fallback -->
            <div v-else class="page-about__default-block">
              <pre>{{ JSON.stringify(block, null, 2) }}</pre>
            </div>
          </div>
        </div>
        <div v-else class="page-about__placeholder">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">About E-Sunrise Australia</h2>
          <p class="text-gray-600 mb-6">
            We are a leading food import and distribution company serving businesses across Australia.
            Our commitment to quality, reliability, and exceptional customer service sets us apart in the industry.
          </p>
          <p class="text-gray-600">
            Content for this page is being prepared. Please check back soon for more detailed information about our
            company,
            mission, and values.
          </p>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <ComponentErrorState :message="'About page content could not be loaded.'" />
  </div>
</template>

<style scoped></style>