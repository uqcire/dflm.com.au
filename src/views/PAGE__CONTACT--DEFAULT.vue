<script setup>
import { onMounted, computed } from 'vue'
import { useSiteSettings } from '@/composables/useDataFetching.js'
import ComponentLoadingState from '@/components/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/COMPONENT__ERROR--STATE.vue'
import ComponentContactInfo from '@/components/COMPONENT__CONTACT--INFO.vue'

// Site settings
const {
    siteSettings,
    isLoading,
    hasError,
    errorDisplay,
    loadSiteSettings,
    getSetting
} = useSiteSettings()

// Load data on mount
onMounted(async () => {
    try {
        await loadSiteSettings()
    } catch (error) {
        console.error('Error loading contact page data:', error)
    }
})

// Get site settings data
const settings = computed(() => siteSettings.value || {})
</script>

<template>
    <ComponentLoadingState v-if="isLoading" />
    <ComponentErrorState v-else-if="hasError"
        :message="errorDisplay?.message || 'An error occurred while loading the contact page.'" />
    <div v-else class="py-8 px-6">
        <div class="max-w-4xl mx-auto">
            <header class="page-contact__header mb-8">
                <h1 class="page-contact__title text-3xl font-bold text-gray-900">Contact</h1>
            </header>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <ComponentContactInfo :email="settings.email" :phone="settings.phone" :address="settings.address"
                        title="Get in Touch" />
                </div>

                <div>
                    <!-- Placeholder for a contact form in the future -->
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
                        <p class="text-gray-600">Contact form coming soon.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>