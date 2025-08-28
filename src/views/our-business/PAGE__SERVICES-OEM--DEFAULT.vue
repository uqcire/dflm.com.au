<script setup>
import { serviceOEM } from '@/data/pages/our-business/oemPrivateLabel.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
</script>

<template>
    <section class="page-service-oem">
        <ComponentHero :title="serviceOEM.hero.title" :subtitle="serviceOEM.hero.subtitle"
            :cta-text="serviceOEM.hero.ctaText" :cta-link="serviceOEM.hero.ctaLink" />
        <div class="max-w-4xl mx-auto py-8 px-6">
            <div class="page-service-oem__content">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ serviceOEM.content.title }}</h2>
                <div class="prose max-w-none mb-8" v-html="serviceOEM.content.text"></div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div v-for="feature in serviceOEM.content.features" :key="feature.title"
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
.page-service-oem {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-service-oem__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-service-oem__text {
    color: var(--color-text-secondary, #6b7280);
}
</style>