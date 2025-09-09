<script setup>
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
import ComponentProductCard from '@/components/ui/COMPONENT__PRODUCT--CARD.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import { freshProduce } from '@/data/index.js'  
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true">
        <ComponentHero :title="freshProduce.hero.title" :subtitle="freshProduce.hero.subtitle"
            :fullWidth="freshProduce.hero.fullWidth" :backgroundImage="freshProduce.hero.backgroundImage"
            :overlayOpacity="freshProduce.hero.overlayOpacity" />
    </ComponentSection>

    <!-- Statement Section -->
    <ComponentSection spacing="sm" containerSize="full" background="transparent">
        <ComponentContainer size="xl" padding="responsive" :constrainWidth="true">
            <ComponentGrid :columns="{ base: 1, md: 2 }" gap="xl" align="center">
                <div>
                    <h2
                        class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6 pb-6">
                        {{ freshProduce.productOverview.title }}
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed mb-6">
                        {{ freshProduce.productOverview.description }}
                    </p>
                </div>
                <div class="bg-[hsl(var(--cello-100))] p-8 rounded-lg">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-4 pb-4">Key Features</h3>
                    <ul class="space-y-3">
                        <li v-for="feature in freshProduce.productOverview.features" :key="feature.title"
                            class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <span class="font-body text-pickled-bluewood-700 font-medium">{{ feature.title }}</span>
                                <p class="font-body text-sm text-pickled-bluewood-600">{{ feature.description }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Product Range Section -->
    <ComponentSection spacing="sm" containerSize="full" background="transparent"
        :style="'background-color: hsl(var(--tree-poppy-100))'">
        <ComponentContainer size="2xl" padding="responsive" :constrainWidth="true">
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6 pb-4">
                    {{ freshProduce.productCategories.title }}
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto">
                    {{ freshProduce.productCategories.description }}
                </p>
            </div>
            <ComponentGrid :columns="{ base: 1, md: 2, lg: 4 }" gap="lg">
                <ComponentProductCard v-for="category in freshProduce.productCategories.categories"
                    :key="category.title" :product="{
                        title: category.title,
                        image: category.image,
                    }" variant="standard" imageFit="object-cover" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- CTA Section -->
    <ComponentCtaGetInTouch title="Partner With Us for Fresh Produce Supply"
        description="Secure reliable access to premium garlic, onions, ginger, and seasonal vegetables with E-Sunrise Australia. Our certified cold-chain logistics and grower partnerships deliver freshness and consistency that keep your business ahead."
        buttonText="Talk to Our Supply Team" backgroundColor="monza-300" />
</template>

<style scoped></style>