<script setup>
import { industriesPage } from '@/data/pages/industriesPage.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentServiceCard from '@/components/ui/COMPONENT__SERVICE--CARD.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true">
        <ComponentHero :title="industriesPage.hero.title" :subtitle="industriesPage.hero.subtitle"
            :ctaText="industriesPage.hero.ctaText" :ctaLink="industriesPage.hero.ctaLink" />
    </ComponentSection>

    <!-- Industries Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="xl" padding="md">
            <!-- Section Title -->
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Our solutions & expertise
                </h2>
            </div>

            <!-- Industries Grid -->
            <ComponentGrid :columns="{ base: 1, md: 3 }" gap="lg">
                <ComponentServiceCard v-for="industry in industriesPage.industries" :key="industry.id" :service="{
                    title: industry.title,
                    description: industry.description,
                    image: industry.image || '/src/assets/explore/industries.png',
                    linkText: 'Learn more',
                    linkUrl: industry.linkUrl || '/industries'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>
</template>