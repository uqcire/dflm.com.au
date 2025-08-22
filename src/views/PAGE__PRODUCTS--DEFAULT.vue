<script setup>
import { productsPage } from '@/data/staticContent.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentProductCard from '@/components/ui/COMPONENT__PRODUCT--CARD.vue'
</script>

<template>
  <section class="page-products">
    <ComponentHero :title="productsPage.hero.title" :subtitle="productsPage.hero.subtitle"
      :cta-text="productsPage.hero.ctaText" :cta-link="productsPage.hero.ctaLink" />
    <div class="page-products__content max-w-6xl mx-auto py-8 px-6">
      <div class="page-products__grid">
        <ComponentProductCard v-for="product in productsPage.products" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
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