<script setup>
import { useData } from '@/composables/useData'
import ComponentHero from '@/components/COMPONENT__HERO--PAGE.vue'
import ComponentLoadingState from '@/components/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/COMPONENT__ERROR--STATE.vue'

const { data, isLoading, error } = useData()
</script>

<template>
    <ComponentLoadingState v-if="isLoading" />
    <ComponentErrorState v-else-if="error" />
    <div v-else>
        <section class="page-about">
            <ComponentHero :title="data.pages.about.hero.title" :subtitle="data.pages.about.hero.subtitle" />
            <div class="page-about__content max-w-4xl mx-auto py-8 px-6">
                <p class="page-about__text text-gray-600">Content coming soon.</p>
            </div>
        </section>
    </div>
</template>

<style scoped></style>