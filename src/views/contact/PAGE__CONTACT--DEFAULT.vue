<script setup>
import { contactPage, exploreCards } from '@/data/index.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
import ComponentContactForm from '@/components/forms/COMPONENT__CONTACT--FORM.vue'
import ComponentImageDisplay from '@/components/ui/COMPONENT__IMAGE--DISPLAY.vue'

</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true" :style="'padding-bottom: 0px; padding-top: 0px'">
        <ComponentHero :title="contactPage.hero.title" :subtitle="contactPage.hero.subtitle"
            :fullWidth="contactPage.hero.fullWidth" :backgroundImage="contactPage.hero.backgroundImage"
            :overlayOpacity="contactPage.hero.overlayOpacity" imageFit="object-contain" />
    </ComponentSection>

    <!-- Contact Form Section -->
    <ComponentSection spacing="sm" background="transparent" containerSize="full">
        <!-- Top Column: Contact Form -->
        <ComponentContainer padding="sm" size="2xl" :constrainWidth="true">
            <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="sm" justify="between">
                <div class="mx-auto">
                    <div class="text-left mb-12">
                        <h2 class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 mb-4 pb-4">
                            Get in Touch
                        </h2>
                        <p class="text-lg text-pickled-bluewood-700 mb-8">
                            Ready to discuss your food ingredient needs? Fill out the form below and our team will get
                            back to you within 24 hours.
                        </p>
                    </div>
                </div>
                <ComponentContactForm />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <ComponentSection spacing="sm" background="transparent" containerSize="full">
        <!-- Bottom Column: Our Locations -->
        <ComponentContainer padding="sm" size="2xl" :constrainWidth="true">
            <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="sm" justify="between">
                <div class="text-left mt-4">
                    <h2 class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 mb-4 pb-4">
                        Our Locations
                    </h2>
                    <p class="text-lg text-pickled-bluewood-700 mb-8">
                        Connect with our team across our key operational locations in Australia and Asia.
                    </p>
                </div>

                <div class="mx-auto">
                    <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl">
                        <!-- Location Cards -->
                        <ComponentContainer v-for="location in contactPage.locations" :key="location.id" padding="none"
                            size="md" :constrainWidth="false" class="flex flex-col gap-2">
                            <ComponentImageDisplay :src="location.image" :alt="location.alt" size="lg" variant="plain"
                                objectFit="cover" />
                            <div class="text-sm text-pickled-bluewood-700">
                                <p>{{ location.name }}</p>
                            </div>
                        </ComponentContainer>
                    </ComponentGrid>
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Explore More -->
    <ComponentExploreMore :title="exploreCards.contact.title" :cards="exploreCards.contact.cards"
        :columns="exploreCards.columns" :gap="exploreCards.gap" :background="exploreCards.contact.background"
        :style="exploreCards.contact.backgroundStyle" />
</template>

<style scoped></style>
<style scoped></style>