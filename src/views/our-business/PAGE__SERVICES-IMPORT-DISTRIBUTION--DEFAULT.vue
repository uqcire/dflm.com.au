<script setup>
import { serviceImportDistribution, businessesPage, exploreCards } from '@/data/index.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentFeaturesTwoColumn from '@/components/content/COMPONENT__FEATURES--TWO-COLUMN.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentServiceCard from '@/components/ui/COMPONENT__SERVICE--CARD.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
</script>

<template>

    <!-- Hero -->
    <componentSection spacing="xs" :fullWidth="true" :style="'padding-bottom: 0px; padding-top: 0px'">
        <ComponentHero :title="serviceImportDistribution.hero.title" :subtitle="serviceImportDistribution.hero.subtitle"
            :backgroundImage="serviceImportDistribution.hero.image"
            :overlayOpacity="serviceImportDistribution.hero.overlayOpacity"
            :fullWidth="serviceImportDistribution.hero.fullWidth" />
    </componentSection>

    <!-- Statement Section -->
    <ComponentSection spacing="xs" background="transparent" style="background-color: hsl(var(--cello-100))">
        <ComponentContainer size="sm" padding="sm">
            <h2
                class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-pickled-bluewood-800 leading-tight">
                Seamless Import and Distribution Backed by Scale, Compliance, and Cold-Chain Expertise
            </h2>
            <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-8">
                E-Sunrise Group Australia provides seamless import and distribution services that bridge international
                supply with the needs of local industries. From fresh produce to processed food ingredients, our
                operations are fully compliant with HACCP and ISO certifications. With established networks, cold-chain
                facilities, and customs expertise, we guarantee reliability, scale, and quality in every shipment.
            </p>
        </ComponentContainer>
    </ComponentSection>

    <!-- Our Strengths -->
    <ComponentFeaturesTwoColumn :mainTitle="serviceImportDistribution.ourStrengths.title"
        :mainDescription="serviceImportDistribution.ourStrengths.description"
        :features="serviceImportDistribution.ourStrengths.features" backgroundColor="bg-[hsl(var(--monza-200))]"
        textColor="text-pickled-bluewood-800" />

    <!-- Industries -->
    <ComponentSection id="industry-solutions" spacing="xs" containerSize="full" background="transparent">
        <ComponentContainer id="industry-solutions" size="2xl" padding="responsive" :constrainWidth="true">
            <!-- Section Title -->
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Industries We Serve
                </h2>
            </div>

            <!-- Industries Grid -->
            <ComponentGrid :columns="{ base: 1, md: 3 }" gap="lg">
                <ComponentServiceCard v-for="industry in businessesPage.industries" :key="industry.title"
                    :service="industry" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Call-to-Action Section -->
    <ComponentCtaGetInTouch title="Partner With Us for Reliable Distribution"
        description="Work with a team that understands both global sourcing and local compliance, backed by certified operations and advanced logistics. From bulk imports to tailored distribution, E-Sunrise delivers consistent quality, scalable capacity, and end-to-end reliability. Together, we help your business grow with confidence and strengthen long-term value in the food supply chain."
        buttonText="Discuss Your Supply Needs" buttonVariant="primary" backgroundColor="monza-100" />

    <!-- Explore More -->
    <ComponentExploreMore :title="exploreCards.importDistribution.title" :cards="exploreCards.importDistribution.cards"
        :columns="exploreCards.columns" :gap="exploreCards.gap" />
</template>

<style scoped>
.page-service-import {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-service-import__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-service-import__text {
    color: var(--color-text-secondary, #6b7280);
}
</style>