<script setup>
import { certificationsPage } from '@/data/pages/certificationsPage.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
</script>

<template>
    <section class="page-certifications">
        <ComponentHero :title="certificationsPage.hero.title" :subtitle="certificationsPage.hero.subtitle"
            :cta-text="certificationsPage.hero.ctaText" :cta-link="certificationsPage.hero.ctaLink" />
        <div class="max-w-4xl mx-auto py-8 px-6">
            <div class="page-certifications__content">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ certificationsPage.content.title }}</h2>
                <div class="prose max-w-none mb-8" v-html="certificationsPage.content.text"></div>

                <div class="grid md:grid-cols-3 gap-6">
                    <div v-for="cert in certificationsPage.content.certifications" :key="cert.name"
                        class="bg-white rounded-lg shadow-md p-6">
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ cert.name }}</h3>
                        <p class="text-gray-600 mb-3">{{ cert.description }}</p>
                        <span
                            class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {{ cert.status }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.page-certifications {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-certifications__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-certifications__text {
    color: var(--color-text-secondary, #6b7280);
}
</style>