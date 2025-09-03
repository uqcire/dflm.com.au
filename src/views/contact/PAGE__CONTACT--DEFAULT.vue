<script setup>
import { contactPage, exploreCards } from '@/data/index.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
import ComponentContactForm from '@/components/forms/COMPONENT__CONTACT--FORM.vue'

</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true" :style="'padding-bottom: 0px; padding-top: 0px'">
        <ComponentHero :title="contactPage.hero.title" :subtitle="contactPage.hero.subtitle"
            :fullWidth="contactPage.hero.fullWidth" :backgroundImage="contactPage.hero.backgroundImage"
            :overlayOpacity="contactPage.hero.overlayOpacity" />
    </ComponentSection>

    <!-- Contact Form Section -->
    <ComponentSection spacing="lg" background="transparent">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 mb-4">
                    Get in Touch
                </h2>
                <p class="text-lg text-pickled-bluewood-600 max-w-2xl mx-auto">
                    Ready to discuss your food ingredient needs? Fill out the form below and our team will get back to
                    you within 24 hours.
                </p>
            </div>

            <ComponentContactForm />
        </div>
    </ComponentSection>

    <!-- Explore More -->
    <ComponentExploreMore :title="exploreCards.contact.title" :cards="exploreCards.contact.cards"
        :columns="exploreCards.columns" :gap="exploreCards.gap" :background="exploreCards.contact.background"
        :style="exploreCards.contact.backgroundStyle" />
</template>


<style scoped></style>