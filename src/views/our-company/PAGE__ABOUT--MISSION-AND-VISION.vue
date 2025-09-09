<script setup>
import { companyPage } from '@/data/pages/our-company/companyPage.js'
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
        <ComponentHero :title="companyPage.mission.title" :subtitle="companyPage.mission.subtitle"
            :fullWidth="companyPage.mission.fullWidth" :backgroundImage="companyPage.mission.backgroundImage"
            :overlayOpacity="companyPage.mission.overlayOpacity" />
    </ComponentSection>

    <!-- Sub Navigation -->
    <ComponentSection spacing="sm" background="subtle">
        <ComponentNavigation :isSubNavigation="true" :subNavItems="companyPage.subNavigation.mission"
            :sticky="companyPage.subNavigation.sticky" />
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
                <!-- Reliability at Scale -->
                <div class="space-y-4">
                    <h3 class="font-heading text-2xl font-bold text-pickled-bluewood-800 pb-4">
                        Reliability at Scale
                    </h3>
                    <p class="font-body text-pickled-bluewood-700 leading-relaxed">
                        We believe reliability is the cornerstone of trust. Every shipment, whether fresh garlic,
                        dehydrated vegetables, or pulses, carries the weight of our commitment. Backed by HACCP and ISO
                        certifications, we never compromise on consistency and safety. Our partners know they can count
                        on us every time, at every scale.
                    </p>
                </div>

                <!-- Innovation with Purpose -->
                <div class="space-y-4">
                    <h3 class="font-heading text-2xl font-bold text-pickled-bluewood-800 pb-4">
                        Innovation with Purpose
                    </h3>
                    <p class="font-body text-pickled-bluewood-700 leading-relaxed">
                        For us, innovation is never about novelty for its own sake. It is about creating solutions that
                        simplify processes, improve quality, and open opportunities for our partners. From clean-label
                        sauces to optimized supply chains, we bring new ideas to life with a clear purpose, making food
                        safer, smarter, and more sustainable.
                    </p>
                </div>

                <!-- Compliance and Integrity -->
                <div class="space-y-4">
                    <h3 class="font-heading text-2xl font-bold text-pickled-bluewood-800 pb-4">
                        Compliance and Integrity
                    </h3>
                    <p class="font-body text-pickled-bluewood-700 leading-relaxed">
                        Integrity is not optional. We uphold strict international standards and local regulations,
                        ensuring full traceability from farm to finished product. But compliance is more than paperwork.
                        It is a culture, a discipline, and the foundation of trust. That is why customers and partners
                        rely on us
                        to safeguard their reputation.
                    </p>
                </div>
            </ComponentGrid>

            <!-- Partnership-Driven Growth - Full Width -->
            <div class="space-y-4">
                <h3 class="font-heading text-2xl font-bold text-pickled-bluewood-800 pb-4">
                    Partnership-Driven Growth
                </h3>
                <p class="font-body text-pickled-bluewood-700 leading-relaxed max-w-4xl">
                    We succeed when our partners succeed. Collaboration is more than a business strategy; it’s our way
                    of working. We listen, adapt, and grow side by side with manufacturers, distributors, and retailers.
                    We celebrate shared achievements and face challenges together. Because long-term value is built not
                    in isolation, but through partnerships that endure across industries, borders, and generations.
                </p>
            </div>
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
                            Stronger Together with Our Partners
                        </h2>
                        <p class="font-body text-lg leading-relaxed pb-8">
                            At E-Sunrise Group Australia, we know lasting progress comes from collaboration. From
                            farmers and manufacturers to distributors, retailers, and innovators, every partnership
                            strengthens our ability to deliver safe, reliable, and sustainable food solutions. By
                            joining forces with like-minded businesses, we create value across the entire supply chain,
                            open new markets, and drive meaningful change for consumers and communities. Together, we
                            turn shared ambitions into real impact.
                        </p>
                        <div class="pt-4">
                            <router-link to="/contact"
                                class="inline-flex items-center px-8 py-4 bg-transparent text-pickled-bluewood-800 font-medium text-sm rounded-lg  transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-pickled-bluewood-800">
                                Partner with us
                            </router-link>
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
                        Building Trust Through Time
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        From our beginnings in 2002 with Jiangsu Liming Food Group to the launch of E-Sunrise Group
                        Australia in 2024, our journey has always been about scale, reliability, and innovation. For
                        more than two decades, we’ve transformed from a pioneer in agricultural processing into a
                        trusted global food manufacturer, exporting to over 60 countries. Every milestone reflects our
                        purpose: combining global strength with local trust to deliver lasting value.
                    </p>
                    <div class="pt-8">
                        <router-link to="/our-company/history"
                            class="inline-flex items-center px-8 py-4 bg-pickled-bluewood-800 text-white font-medium text-sm rounded-lg hover:bg-pickled-bluewood-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-pickled-bluewood-800">
                            Explore our history
                        </router-link>
                    </div>
                </div>

                <!-- Right Column - Image -->
                <div>
                    <ComponentImageDisplay src="/assets/mission-values__sustainable-farming.png"
                        alt="Farmer harvesting fresh garlic leaves by hand, symbolizing sustainable farming and human care in agriculture"
                        size="lg" variant="plain" object-fit="cover" class="w-full h-full rounded-lg" />
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Explore More -->
    <ComponentExploreMore :title="exploreCards.missionAndValues.title" :cards="exploreCards.missionAndValues.cards"
        :columns="exploreCards.columns" :gap="exploreCards.gap" :background="exploreCards.missionAndValues.background"
        :style="exploreCards.missionAndValues.backgroundStyle" />

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