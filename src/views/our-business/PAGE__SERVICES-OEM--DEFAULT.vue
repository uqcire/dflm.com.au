<script setup>
import { serviceOEM, productsPage, exploreCards } from '@/data/index.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentFeaturesTwoColumn from '@/components/content/COMPONENT__FEATURES--TWO-COLUMN.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
import ComponentProductCard from '@/components/ui/COMPONENT__PRODUCT--CARD.vue'
</script>

<template>

    <!-- Hero -->
    <componentSection spacing="xs" :fullWidth="true" :style="'padding-bottom: 0px; padding-top: 0px'">
        <ComponentHero :title="serviceOEM.hero.title" :subtitle="serviceOEM.hero.subtitle"
            :backgroundImage="serviceOEM.hero.image" :overlayOpacity="serviceOEM.hero.overlayOpacity"
            :fullWidth="serviceOEM.hero.fullWidth" />
    </componentSection>

    <!-- Statement Section -->
    <ComponentSection spacing="xs" background="transparent" style="background-color: hsl(var(--monza-100))">
        <ComponentContainer size="sm" padding="sm">
            <h2
                class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-pickled-bluewood-800 leading-tight">
                Turning Ideas Into Products That Build Trust
            </h2>
            <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-8">
                E-Sunrise Group Australia provides full-service OEM and private label solutions, enabling partners to
                bring their product vision to life. From concept and formulation to packaging and logistics, we manage
                the entire process with strict HACCP and ISO compliance. With advanced manufacturing facilities and
                global sourcing strength, we deliver distinctive products that enhance brand value and customer loyalty.
            </p>
        </ComponentContainer>
    </ComponentSection>

    <!-- Our Capabilities -->
    <ComponentFeaturesTwoColumn :mainTitle="serviceOEM.ourCapabilities.title"
        :mainDescription="serviceOEM.ourCapabilities.description" :features="serviceOEM.ourCapabilities.features"
        textColor="text-pickled-bluewood-800" backgroundColor="transparent" />

    <!-- Products Section -->
    <ComponentSection spacing="xs" background="transparent" containerSize="full"
        style="background-color: hsl(var(--tree-poppy-100))">
        <ComponentContainer size="2xl" padding="responsive" :constrainWidth="true">
            <!-- Section Header -->
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6 pb-8">
                    Our Product Portfolio
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto">
                    From fresh produce to processed ingredients, our comprehensive portfolio supports diverse food
                    manufacturing
                    needs with reliable supply and consistent quality across all product categories.
                </p>
            </div>

            <!-- Products Grid -->
            <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg" align="stretch">
                <ComponentProductCard v-for="product in productsPage.products" :key="product.id" :product="product"
                    variant="detailed" :showLink="true" :showSpecs="true" linkText="Learn More"
                    imageFit="object-cover" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Call-to-Action Section -->
    <ComponentCtaGetInTouch title="Partner With Us to Build Your Brand"
        description="Whether you’re a supermarket, food service provider, or specialty retailer, we help you create products that stand out. With scalable manufacturing, certified compliance, and tailored solutions, E-Sunrise turns your ideas into market-ready success."
        buttonText="Start Your OEM Project" buttonVariant="primary" backgroundColor="transparent" />

    <!-- Explore More -->
    <ComponentExploreMore :title="exploreCards.oemPrivateLabel.title" :cards="exploreCards.oemPrivateLabel.cards"
        :columns="exploreCards.columns" :gap="exploreCards.gap" style="background-color: hsl(var(--monza-100))" />
</template>

<style scoped></style>