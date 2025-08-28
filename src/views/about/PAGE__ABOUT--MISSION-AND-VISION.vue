<script setup>
import { aboutPage } from '@/data/pages/aboutPage.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentNavigation from '@/components/navigation/COMPONENT__NAVIGATION--PRIMARY.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
import { exploreCards } from '@/data/components/exploreCards.js'
import ComponentImageDisplay from '@/components/ui/COMPONENT__IMAGE--DISPLAY.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true">
        <ComponentHero :title="aboutPage.mission.title" :subtitle="aboutPage.mission.subtitle"
            :fullWidth="aboutPage.mission.fullWidth" :backgroundImage="aboutPage.mission.backgroundImage"
            :overlayOpacity="aboutPage.mission.overlayOpacity" />
    </ComponentSection>

    <!-- Sub Navigation -->
    <ComponentSection spacing="none" background="subtle">
        <ComponentNavigation :isSubNavigation="true" :subNavItems="aboutPage.subNavigation.mission"
            :sticky="aboutPage.subNavigation.sticky" />
    </ComponentSection>

    <!-- Values Section -->
    <ComponentSection id="our-values" spacing="sm" background="transparent"
        style="background-color: hsl(var(--cello-200))">
        <ComponentContainer size="xl" padding="md">
            <!-- Main Heading -->
            <div class="mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
                    Our values
                </h2>
            </div>

            <!-- Three Value Columns -->
            <ComponentGrid :columns="{ base: 1, md: 3 }" gap="lg" class="mb-16">
                <!-- Shape the future -->
                <div class="space-y-4">
                    <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800">
                        Shape the future
                    </h3>
                    <p class="font-body text-pickled-bluewood-700 leading-relaxed">
                        We are curious and open-minded. We're cutting-edge scientists, breakthrough innovators, and
                        passionate creators with more than a century of expertise. We take joy in building a way forward
                        with our customers. We are a beacon. When others want to know how to change the world, they look
                        to us.
                    </p>
                </div>

                <!-- Be a force for good -->
                <div class="space-y-4">
                    <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800">
                        Be a force for good
                    </h3>
                    <p class="font-body text-pickled-bluewood-700 leading-relaxed">
                        For us, integrity is the only way forward. We are responsible and focus on impact, with a legacy
                        to prove it. We are passionate about constantly raising the bar. Because caring about customers,
                        communities, people, and the planet is the right thing to do. And it's the only way to grow an
                        enduring, profitable business.
                    </p>
                </div>

                <!-- Own the outcome -->
                <div class="space-y-4">
                    <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800">
                        Own the outcome
                    </h3>
                    <p class="font-body text-pickled-bluewood-700 leading-relaxed">
                        We make bold commitments to customers and each other. And we go above and beyond to fulfil them.
                        The thing to remember is that we're part of the solution. We're empowered to make courageous
                        decisions at the right level. And we hold each other accountable—individually and collectively,
                        to drive impact.
                    </p>
                </div>
            </ComponentGrid>

            <!-- Together, with our customers - Full Width -->
            <div class="space-y-4">
                <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800">
                    Together, with our customers
                </h3>
                <p class="font-body text-pickled-bluewood-700 leading-relaxed max-w-4xl">
                    We act with unity - customers and stakeholders included. We're inclusive. We value our differences.
                    And we learn from each other. We remove barriers that separate us. We look after each other's safety
                    and well-being. We set each other up for success and we help each other grow. Plus, we have fun
                    doing it.
                </p>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Our Business Unit Section -->
    <ComponentSection id="our-business-unit" spacing="sm" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <!-- Banner Image -->
            <div class="mb-12">
                <ComponentImageDisplay src="/src/assets/about/hero.png" alt="Our Business Team" size="xl"
                    variant="plain" object-fit="cover" />
            </div>

            <!-- Main Heading -->
            <div class="text-left mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
                    Four business units, one common purpose
                </h2>
            </div>

            <!-- Business Units Grid -->
            <ComponentGrid :columns="{ base: 1, md: 2 }" gap="lg">
                <!-- Perfumery & Beauty -->
                <div class="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-4">
                        Perfumery & Beauty
                    </h3>
                    <p class="font-body text-pickled-bluewood-700 leading-relaxed mb-6">
                        In Perfumery & Beauty, we delight the world with superior scents created from a palette of
                        sustainable ingredients.
                    </p>
                    <a href="/services/perfumery-beauty"
                        class="inline-flex items-center text-tree-poppy-600 font-medium hover:text-tree-poppy-700 transition-colors duration-200 group">
                        Perfumery & Beauty
                        <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                    </a>
                </div>

                <!-- Taste, Texture & Health -->
                <div class="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-4">
                        Taste, Texture & Health
                    </h3>
                    <p class="font-body text-pickled-bluewood-700 leading-relaxed mb-6">
                        In Taste, Texture & Health, we partner with the food and beverage industry to overcome the
                        trade-off between palate and planet.
                    </p>
                    <a href="/services/taste-texture-health"
                        class="inline-flex items-center text-tree-poppy-600 font-medium hover:text-tree-poppy-700 transition-colors duration-200 group">
                        Taste, Texture & Health
                        <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                    </a>
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Partner with us Section -->
    <ComponentSection id="partner-with-us" spacing="sm" background="transparent"
        style="background-color: hsl(var(--tree-poppy-200))">
        <ComponentContainer size="xl" padding="md">
            <ComponentGrid :columns="{ base: 1 }" gap="lg" justify="end">
                <!-- Empty left column -->
                <div></div>
                <!-- Content container on the right -->
                <div class="bg-tree-poppy-300 text-pickled-bluewood-800 rounded-lg p-12">
                    <div class="text-left space-y-8">
                        <h2 class="font-heading text-3xl md:text-5xl lg:text-6xl font-bold  leading-tight pb-8">
                            We can't do it without you
                        </h2>
                        <p class="font-body text-lg leading-relaxed pb-8">
                            We love a challenge. But we know we can't solve the world's problems single-handedly. To
                            bring
                            progress to life, we need partnerships. Partnerships all along our value chain. Across
                            industries and sectors. From business to consumers, and governments to academia. We love
                            working
                            with like-minded partners of all shapes and sizes – so we can help our customers make a
                            positive
                            difference for consumers and the planet.
                        </p>
                        <div class="pt-4">
                            <a href="/contact"
                                class="inline-flex items-center px-8 py-4 bg-transparent text-pickled-bluewood-800 font-medium text-sm rounded-lg  transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-pickled-bluewood-800">
                                Partner with us
                            </a>
                        </div>
                    </div>
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Our History Section -->
    <ComponentSection id="our-history" spacing="sm" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <ComponentGrid :columns="{ base: 1, md: 2 }" gap="lg" align="center">
                <!-- Left Column - Text Content -->
                <div class="space-y-8">
                    <h2
                        class="pb-8 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
                        Putting the "pro" in progress
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        We know a thing or two about purpose and progress. Thanks to our combined history, we can draw
                        on over a century of purpose-led scientific discovery and innovation. That's more than 150
                        years' worth of creative genius and genius creations (even if we say so ourselves).
                    </p>
                    <div class="pt-8">
                        <a href="/about/history"
                            class="inline-flex items-center px-8 py-4 bg-pickled-bluewood-800 text-white font-medium text-sm rounded-lg hover:bg-pickled-bluewood-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-pickled-bluewood-800">
                            Explore our history
                        </a>
                    </div>
                </div>

                <!-- Right Column - Image -->
                <div>
                    <ComponentImageDisplay src="/src/assets/about/our-history.png"
                        alt="Scientist in laboratory working with equipment" size="xl" variant="plain"
                        object-fit="cover" class="w-full h-full rounded-lg" />
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Explore More -->
    <ComponentExploreMore :title="exploreCards.about.title" :cards="exploreCards.about.cards"
        :columns="exploreCards.about.columns" :gap="exploreCards.about.gap" :background="exploreCards.about.background"
        :style="exploreCards.about.backgroundStyle" />

</template>

<style scoped>
/* Smooth scrolling for the entire page */
html {
    scroll-behavior: smooth;
}

/* Section transitions */
section {
    transition: all 0.3s ease;
}
</style>