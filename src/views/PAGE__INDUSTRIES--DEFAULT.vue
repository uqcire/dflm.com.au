<script setup>
import { industriesPage } from '@/data/staticContent.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
</script>

<template>
    <section class="page-industries">
        <ComponentHero :title="industriesPage.hero.title" :subtitle="industriesPage.hero.subtitle"
            :cta-text="industriesPage.hero.ctaText" :cta-link="industriesPage.hero.ctaLink" />
        <div class="max-w-4xl mx-auto py-8 px-6">
            <div class="page-industries__content">
                <div class="grid md:grid-cols-3 gap-6">
                    <div v-for="industry in industriesPage.industries" :key="industry.id"
                        class="bg-white rounded-lg shadow-md p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ industry.title }}</h3>
                        <p class="text-gray-600 mb-4">{{ industry.description }}</p>
                        <ul class="space-y-2">
                            <li v-for="feature in industry.features" :key="feature"
                                class="text-sm text-gray-500 flex items-center">
                                <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.page-industries {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-industries__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-industries__text {
    color: var(--color-text-secondary, #6b7280);
}
</style>