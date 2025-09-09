<script setup>
import { businessesPage, exploreCards } from '@/data/index.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentNavigation from '@/components/navigation/COMPONENT__NAVIGATION--PRIMARY.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
import ComponentAlternatingContent from '@/components/content/COMPONENT__ALTERNATING--CONTENT.vue'
</script>

<template>
  <!-- Hero -->
  <ComponentSection spacing="xs" :fullWidth="true" :style="'padding-bottom: 0px; padding-top: 0px'">
    <ComponentHero :title="businessesPage.hero.title" :subtitle="businessesPage.hero.subtitle"
      :fullWidth="businessesPage.hero.fullWidth" :backgroundImage="businessesPage.hero.backgroundImage"
      :overlayOpacity="businessesPage.hero.overlayOpacity" />
  </ComponentSection>

  <!-- Sub Navigation -->
  <ComponentSection spacing="xs" background="transparent" style="padding-bottom: 0px;">
    <ComponentNavigation :isSubNavigation="true" :subNavItems="businessesPage.services.items"
      :sticky="businessesPage.services.sticky" />
  </ComponentSection>

  <!-- Statement Section -->
  <ComponentSection spacing="xs" background="transparent" style="padding-top: 0px;">
    <ComponentContainer size="sm" padding="sm">
      <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-pickled-bluewood-800 leading-tight">
        Driving Reliability Across Food Manufacturing and Supply
      </h2>
      <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-8">
        Our business is built on scale, expertise, and trust. From world-class manufacturing to cold-chain logistics and
        OEM solutions, we serve as a dependable partner across Australia's food industry. Each service reflects our
        commitment to certified quality, efficiency, and lasting value.
      </p>
      <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
        Take a closer look at the solutions we provide.
      </p>
    </ComponentContainer>
  </ComponentSection>

  <!-- Services Section -->
  <ComponentSection spacing="sm" containerSize="full" background="transparent"
    :style="'background-color: hsl(var(--tree-poppy-100))'">
    <ComponentContainer size="2xl" padding="responsive" :constrainWidth="true">
      <ComponentAlternatingContent :sections="businessesPage.serviceSections" imageSize="lg" />
    </ComponentContainer>
  </ComponentSection>

  <!-- Industries -->
  <ComponentSection spacing="sm" containerSize="full" background="transparent">
    <ComponentContainer size="2xl" padding="responsive" :constrainWidth="true">
      <ComponentAlternatingContent :sections="businessesPage.industrySections" imageSize="lg" />
    </ComponentContainer>
  </ComponentSection>

  <!-- Get in Touch -->
  <ComponentCtaGetInTouch
    description="Looking to source reliable ingredients or explore tailored solutions? Connect with us today, our team is ready to support your needs with trusted products, scalable supply, and opportunities for long-term partnership."
    backgroundColor="monza-100" />

  <!-- Explore More -->
  <ComponentExploreMore :title="exploreCards.ourBusinesses.title" :cards="exploreCards.ourBusinesses.cards"
    :columns="exploreCards.columns" :gap="exploreCards.gap" :background="exploreCards.ourBusinesses.background"
    :style="exploreCards.ourBusinesses.backgroundStyle" />
</template>

<style scoped></style>