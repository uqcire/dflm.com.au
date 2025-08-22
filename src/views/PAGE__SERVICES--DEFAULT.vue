<script setup>
import { servicesPage } from '@/data/staticContent.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentServiceCard from '@/components/ui/COMPONENT__SERVICE--CARD.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentStack from '@/components/layout/COMPONENT__STACK.vue'
</script>

<template>
  <section class="page-services">
    <ComponentHero :title="servicesPage.hero.title" :subtitle="servicesPage.hero.subtitle"
      :cta-text="servicesPage.hero.ctaText" :cta-link="servicesPage.hero.ctaLink" />

    <ComponentContainer size="xl" padding="responsive">
      <!-- Service Navigation Links -->
      <ComponentStack space="lg" align="center">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-heading font-semibold text-slate-900 mb-4">Our Service Categories</h2>
          <p class="text-lg text-slate-600 mb-6">Explore our comprehensive range of business solutions</p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/services/import-distribution"
              class="inline-flex items-center px-6 py-3 bg-monza-600 text-white font-medium rounded-lg hover:bg-monza-700 transition-colors duration-200 no-underline focus:outline-none focus:ring-2 focus:ring-monza-500 focus:ring-offset-2">
              <span class="mr-2">📦</span>
              Import & Distribution Services
            </RouterLink>

            <RouterLink to="/services/oem"
              class="inline-flex items-center px-6 py-3 bg-tree-poppy-600 text-white font-medium rounded-lg hover:bg-tree-poppy-700 transition-colors duration-200 no-underline focus:outline-none focus:ring-2 focus:ring-tree-poppy-500 focus:ring-offset-2">
              <span class="mr-2">🏭</span>
              OEM / Private Label Services
            </RouterLink>
          </div>
        </div>

        <!-- Service Cards Grid -->
        <div class="page-services__grid">
          <ComponentServiceCard v-for="service in servicesPage.services" :key="service.id" :service="service" />
        </div>
      </ComponentStack>
    </ComponentContainer>
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