<script setup>
import { industriesPage } from '@/data/index.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentServiceCard from '@/components/ui/COMPONENT__SERVICE--CARD.vue'
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
        <ComponentContainer size="lg" padding="sm">
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
                    image: industry.image || '/src/assets/explore/industries.png',
                    linkText: 'Learn more',
                    linkUrl: industry.linkUrl || '/industries'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- CTA Section -->
    <ComponentSection spacing="sm" background="transparent" style="background-color: hsl(var(--cello-200))">
        <ComponentContainer size="md" padding="sm">
            <div class="text-center">
                <h3 class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-4">
                    Ready to power your products?
                </h3>
                <p class="font-body text-base text-pickled-bluewood-700 leading-relaxed mb-8">
                    Talk to our team about ingredient sourcing, private label manufacturing, and supply solutions
                    tailored
                    to your category.
                </p>
                <router-link to="/contact"
                    class="inline-flex items-center px-8 py-4 bg-pickled-bluewood-800 text-white font-medium text-sm rounded-lg hover:bg-pickled-bluewood-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Contact our team
                </router-link>
            </div>
        </ComponentContainer>
    </ComponentSection>
</template>