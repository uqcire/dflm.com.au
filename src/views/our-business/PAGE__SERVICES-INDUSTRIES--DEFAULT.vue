<script setup>
import { industriesPage } from '@/data/index.js'
import { exploreCards } from '@/data/components/exploreCards.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentServiceCard from '@/components/ui/COMPONENT__SERVICE--CARD.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true" style="padding-bottom: 0px; padding-top: 0px">
        <ComponentHero :title="industriesPage.hero.title" :subtitle="industriesPage.hero.subtitle"
            :fullWidth="industriesPage.hero.fullWidth" :backgroundImage="industriesPage.hero.backgroundImage"
            :overlayOpacity="industriesPage.hero.overlayOpacity" />
    </ComponentSection>

    <!-- Intro Statement -->
    <ComponentSection spacing="xs" containerSize="full" background="transparent"
        style="background-color: hsl(var(--cello-100))">
        <ComponentContainer size="lg" padding="sm" class="text-center">
            <h2
                class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-pickled-bluewood-800 leading-tight">
                Solutions tailored to every industry
            </h2>
            <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-8">
                E-Sunrise Group Australia supports a wide range of industries because the challenges they face are
                universal.
                <br> We ensure reliable supply, manage costs, and meet strict compliance standards. From food
                manufacturers and distributors to retailers and trade partners, each relies on consistent, certified
                ingredients to keep operations running smoothly. With large-scale production, global certifications, and
                tailored supply chain expertise, we address these challenges head-on.
            </p>
        </ComponentContainer>
    </ComponentSection>

    <!-- Industries Section -->
    <ComponentSection spacing="xs" containerSize="full" background="transparent">
        <ComponentContainer size="2xl" padding="sm">
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
                    image: industry.image || '/assets/explore/explore__card--industries.webp',
                    linkText: 'Explore industry solutions',
                    linkUrl: industry.linkUrl || '/industries'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- CTA Section -->
    <ComponentCtaGetInTouch :title="industriesPage.cta.title" :description="industriesPage.cta.description"
        :buttonText="industriesPage.cta.buttonText" :buttonLink="industriesPage.cta.buttonLink"
        :background="industriesPage.cta.background" :backgroundColor="industriesPage.cta.backgroundColor"
        :backgroundStyle="industriesPage.cta.backgroundStyle" />

    <!-- Explore More -->
    <ComponentExploreMore :title="exploreCards.industries.title" :cards="exploreCards.industries.cards"
        :columns="exploreCards.columns" :gap="exploreCards.gap" :background="exploreCards.industries.background"
        :style="exploreCards.industries.backgroundStyle" />
</template>