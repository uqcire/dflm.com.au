<script setup>
import { serviceImportDistribution } from '@/data/staticContent.js'
import ComponentHero from '@/components/COMPONENT__HERO--PAGE.vue'
</script>

<template>
    <section class="page-service-import">
        <ComponentHero :title="serviceImportDistribution.hero.title" :subtitle="serviceImportDistribution.hero.subtitle"
            :cta-text="serviceImportDistribution.hero.ctaText" :cta-link="serviceImportDistribution.hero.ctaLink" />
        <div class="max-w-4xl mx-auto py-8 px-6">
            <div class="page-service-import__content">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ serviceImportDistribution.content.title }}</h2>
                <div class="prose max-w-none mb-8" v-html="serviceImportDistribution.content.text"></div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div v-for="feature in serviceImportDistribution.content.features" :key="feature.title"
                        class="bg-white rounded-lg shadow-md p-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                        <p class="text-gray-600">{{ feature.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.page-service-import {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-service-import__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-service-import__text {
    color: var(--color-text-secondary, #6b7280);
}
</style>