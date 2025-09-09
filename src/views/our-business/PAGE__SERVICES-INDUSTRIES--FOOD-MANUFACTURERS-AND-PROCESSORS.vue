<script setup>
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import { foodManufacturersAndProcessorsPage } from '@/data/index.js'
import ComponentChallengeCard from '@/components/ui/COMPONENT__CHALLENGE--CARD.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true" style="padding-bottom: 0px; padding-top: 0px">
        <ComponentHero :title="foodManufacturersAndProcessorsPage.hero.title"
            :subtitle="foodManufacturersAndProcessorsPage.hero.subtitle"
            :backgroundImage="foodManufacturersAndProcessorsPage.hero.backgroundImage"
            :overlayOpacity="foodManufacturersAndProcessorsPage.hero.overlayOpacity"
            :fullWidth="foodManufacturersAndProcessorsPage.hero.fullWidth" />
    </ComponentSection>

    <!-- Statement Section -->
    <ComponentSection spacing="xs" background="transparent" style="background-color: hsl(var(--cello-100))">
        <ComponentContainer size="sm" padding="sm">
            <h2 class="font-heading text-2xl lg:text-4xl font-bold pb-8 text-pickled-bluewood-800 leading-tight">
                {{ foodManufacturersAndProcessorsPage.statement.title }}
            </h2>
            <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-8">
                {{ foodManufacturersAndProcessorsPage.statement.description }}
            </p>
        </ComponentContainer>
    </ComponentSection>

    <!-- Challenge Section -->
    <ComponentSection spacing="sm" containerSize="full" background="transparent"
        :style="'background-color: transparent'">
        <ComponentContainer size="2xl" padding="responsive" :constrainWidth="true">
            <!-- Section Header -->
            <div class="text-left mb-12">
                <h2
                    class="font-heading text-3xl lg:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6 pb-8">
                    {{ foodManufacturersAndProcessorsPage.challenges.title }}
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl">
                    {{ foodManufacturersAndProcessorsPage.challenges.description }}
                </p>
            </div>

            <!-- Challenges Grid -->
            <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg" class="items-stretch">
                <ComponentChallengeCard v-for="challenge in foodManufacturersAndProcessorsPage.challenges.items"
                    :key="challenge.id" :challenge="challenge" class="h-full" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>
</template>