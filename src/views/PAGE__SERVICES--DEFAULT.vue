<script setup>
import { servicesPage } from '@/data/staticContent.js'
import ComponentHero from '@/components/COMPONENT__HERO--PAGE.vue'
import ComponentServiceCard from '@/components/COMPONENT__SERVICE--CARD.vue'
</script>

<template>
  <section class="page-services">
    <ComponentHero :title="servicesPage.hero.title" :subtitle="servicesPage.hero.subtitle"
      :cta-text="servicesPage.hero.ctaText" :cta-link="servicesPage.hero.ctaLink" />
    <div class="page-services__content max-w-6xl mx-auto py-8 px-6">
      <div class="page-services__grid">
        <ComponentServiceCard v-for="service in servicesPage.services" :key="service.id" :service="service" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-services {
  padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-services__title {
  margin: 0 0 var(--space-4, 1rem) 0;
  font-size: var(--font-size-2xl, 1.5rem);
  font-weight: 600;
}

.page-services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6, 1.5rem);
  margin-top: var(--space-6, 1.5rem);
}

.page-services__empty {
  text-align: center;
  padding: var(--space-8, 2rem);
}

.page-services__text {
  color: var(--color-text-secondary, #6b7280);
  font-size: var(--font-size-lg, 1.125rem);
}
</style>