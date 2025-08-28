<script setup>
import { historyPage } from '@/data/index.js'
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
    <ComponentSection spacing="xs" :fullWidth="true" style="padding-bottom: 0px; padding-top: 0px">
        <ComponentHero :title="historyPage.hero.title" :subtitle="historyPage.hero.subtitle"
            :fullWidth="historyPage.hero.fullWidth" :backgroundImage="historyPage.hero.backgroundImage"
            :overlayOpacity="historyPage.hero.overlayOpacity" />
    </ComponentSection>

    <!-- Statement Section -->
    <ComponentSection spacing="xs" background="transparent" style="background-color: hsl(var(--cello-100))">
        <ComponentContainer size="sm" padding="sm">
            <h2
                class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-pickled-bluewood-800 leading-tight">
                A Journey of Growth and Trust
            </h2>
            <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-8">
                Our story begins in 2002 with Jiangsu Liming Food Group, a pioneer in garlic processing and agricultural
                exports. What started as a small-scale operation quickly grew into a national leader in food
                manufacturing, trusted by partners across the globe. Over two decades, we diversified our product lines,
                strengthened our supply chain, and built long-term partnerships in more than 60 countries. In 2025, we
                took an important step forward by launching E-Sunrise Group Australia in Melbourne. This regional hub
                reflects our commitment to bringing global scale closer to local industries, ensuring safe, reliable,
                and sustainable food supply for the future.
            </p>
        </ComponentContainer>
    </ComponentSection>

    <!-- Timeline Section -->
    <ComponentSection id="timeline" containerSize="full" spacing="xs" background="transparent">
        <!-- Main Heading -->
        <ComponentContainer size="lg" padding="sm" style="padding-left: 0px; padding-right: 0px">
            <div class="mb-16">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold pb-4 text-pickled-bluewood-800 leading-tight mb-6">
                    Our Journey Through Time
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl">
                    From humble beginnings to global scale, our story is one of continuous growth, innovation, and
                    unwavering commitment to quality.
                </p>
            </div>
        </ComponentContainer>
        <ComponentContainer size="sm" padding="sm">
            <!-- Timeline -->
            <el-timeline class="max-w-xl mx-auto">
                <el-timeline-item v-for="item in historyPage.timeline" :key="item.year" :timestamp="item.year"
                    :placement="item.placement" :center="item.placement === 'center'" size="large"
                    color="hsl(var(--monza-600))">
                    <el-card class="bg-pickled-bluewood-50 border-pickled-bluewood-200">
                        <div class="flex flex-col lg:flex-row gap-8 items-center">
                            <!-- Content on left for center placement, right for top placement -->
                            <div class="flex-1" :class="{ 'order-2 lg:order-1': item.placement === 'center' }">
                                <h3 class="font-body text-lg font-bold text-pickled-bluewood-800 pb-2 mb-4">
                                    {{ item.title }}
                                </h3>
                                <p class="font-body text-sm text-pickled-bluewood-700 leading-relaxed">
                                    {{ item.description }}
                                </p>
                            </div>
                            <!-- Image on right for center placement, left for top placement -->
                            <div class="flex-shrink-0" :class="{ 'order-1 lg:order-2': item.placement === 'center' }">
                                <ComponentImageDisplay :src="item.image" :alt="item.imageAlt" size="xs" variant="plain"
                                    object-fit="cover" class="rounded-lg" />
                            </div>
                        </div>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </ComponentContainer>
    </ComponentSection>

    <!-- Future Vision Section -->
    <ComponentSection spacing="sm" background="transparent" style="background-color: hsl(var(--monza-100))">
        <ComponentContainer size="xl" padding="md">
            <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="center">
                <div>
                    <h2
                        class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-pickled-bluewood-800 leading-tight mb-6">
                        {{ historyPage.futureVision.title }}
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-8 mb-8">
                        {{ historyPage.futureVision.description }}
                    </p>
                    <router-link :to="historyPage.futureVision.buttonLink"
                        class="inline-flex items-center px-8 py-4 bg-pickled-bluewood-800 text-white font-medium text-sm rounded-lg hover:bg-pickled-bluewood-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                        {{ historyPage.futureVision.buttonText }}
                    </router-link>
                </div>
                <div>
                    <ComponentImageDisplay :src="historyPage.futureVision.image"
                        :alt="historyPage.futureVision.imageAlt" size="lg" variant="plain" object-fit="cover"
                        class="rounded-lg" />
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Explore More -->
    <ComponentExploreMore :title="exploreCards.ourHistory.title" :cards="exploreCards.ourHistory.cards"
        :columns="exploreCards.columns" :gap="exploreCards.gap" :background="exploreCards.ourHistory.background"
        :style="exploreCards.ourHistory.backgroundStyle" />

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