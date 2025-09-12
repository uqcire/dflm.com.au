<script setup>
import { productsPage, exploreCards } from '@/data/index.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentChallengeCard from '@/components/ui/COMPONENT__CHALLENGE--CARD.vue'
import ComponentProductCard from '@/components/ui/COMPONENT__PRODUCT--CARD.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue' 
</script>

<template>
  <!-- Hero -->
  <ComponentSection spacing="xs" :fullWidth="true" :style="'padding-bottom: 0px; padding-top: 0px'">
    <ComponentHero :title="productsPage.hero.title" :subtitle="productsPage.hero.subtitle"
      :fullWidth="productsPage.hero.fullWidth" :backgroundImage="productsPage.hero.backgroundImage"
      :overlayOpacity="productsPage.hero.overlayOpacity" />
  </ComponentSection>

  <!-- Statement Section -->
  <ComponentSection spacing="xs" background="transparent" :style="'background-color: hsl(var(--tree-poppy-100))'">
    <ComponentContainer size="sm" padding="sm">
      <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-pickled-bluewood-800 leading-tight">
        From Farm Roots to Industrial Partnerships
      </h2>
      <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-8">
        For over two decades, E-Sunrise Group has grown from agricultural origins into a vertically integrated food
        manufacturer with a global footprint. In Australia, we combine large-scale production with tailored logistics
        and compliance expertise, enabling manufacturers, distributors, and retailers to access consistent quality and
        sustainable supply. Our focus is on building long-term value through trusted partnerships and reliable delivery.
      </p>
    </ComponentContainer>
  </ComponentSection>

  <!-- Challenge Section -->
  <ComponentSection spacing="sm" containerSize="full" background="transparent"
    :style="'background-color: hsl(var(--cello-100))'">
    <ComponentContainer size="2xl" padding="responsive" :constrainWidth="true">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2
          class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6 pb-8">
          {{ productsPage.challenges.title }}
        </h2>
        <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto">
          {{ productsPage.challenges.description }}
        </p>
      </div>

      <!-- Challenges Grid -->
      <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg" class="items-stretch">
        <ComponentChallengeCard v-for="challenge in productsPage.challenges.items" :key="challenge.id"
          :challenge="challenge" class="h-full" />
      </ComponentGrid>
    </ComponentContainer>
  </ComponentSection>

  <!-- Products Section -->
  <ComponentSection spacing="xs" background="transparent" containerSize="full">
    <ComponentContainer size="2xl" padding="responsive" :constrainWidth="true">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2
          class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6 pb-8">
          Our Product Portfolio
        </h2>
        <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto">
          From fresh produce to processed ingredients, our comprehensive portfolio supports diverse food manufacturing
          needs with reliable supply and consistent quality across all product categories.
        </p>
      </div>

      <!-- Products Grid -->
      <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg" align="stretch">
        <ComponentProductCard v-for="product in productsPage.products" :key="product.id" :product="product"
          variant="detailed" :showLink="true" :showSpecs="true" linkText="View Product Details" />
      </ComponentGrid>
    </ComponentContainer>
  </ComponentSection>

  <!-- Explore More Section -->
  <ComponentExploreMore :title="exploreCards.products.title" :cards="exploreCards.products.cards"
    :columns="exploreCards.columns" :gap="exploreCards.gap" :background="exploreCards.products.background"
    :style="exploreCards.products.backgroundStyle" />
</template>

<style scoped></style>