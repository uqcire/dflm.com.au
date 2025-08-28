<script setup>
import { productsPage } from '@/data/pages/productsPage.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue' 
</script>

<template>
  <!-- Hero -->
  <ComponentSection spacing="xs" :fullWidth="true">
    <ComponentHero :title="productsPage.hero.title" :subtitle="productsPage.hero.subtitle"
      :fullWidth="productsPage.hero.fullWidth" :backgroundImage="productsPage.hero.backgroundImage"
      :overlayOpacity="productsPage.hero.overlayOpacity" />
  </ComponentSection>

  <!-- Statement Section -->
  <ComponentSection spacing="xs" background="transparent">
    <ComponentContainer size="sm" padding="sm">
      <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-pickled-bluewood-800 leading-tight">
        Driving Reliability Across Food Manufacturing and Supply
      </h2>
      <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-8">
        Our business is built on scale, expertise, and trust. From world-class manufacturing to cold-chain logistics and
        OEM solutions, we serve as a dependable partner across Australia’s food industry. Each service reflects our
        commitment to certified quality, efficiency, and lasting value.
      </p>
      <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
        Take a closer look at the solutions we provide.
      </p>
    </ComponentContainer>
  </ComponentSection>
</template>

<style scoped>
.page-products {
  padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-products__title {
  margin: 0 0 var(--space-4, 1rem) 0;
  font-size: var(--font-size-2xl, 1.5rem);
  font-weight: 600;
}

.page-products__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6, 1.5rem);
  margin-top: var(--space-6, 1.5rem);
}

.page-products__empty {
  text-align: center;
  padding: var(--space-8, 2rem);
}

.page-products__text {
  color: var(--color-text-secondary, #6b7280);
  font-size: var(--font-size-lg, 1.125rem);
}
</style>