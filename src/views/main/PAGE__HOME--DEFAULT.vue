<script setup>
import { homePage } from '@/data/pages/homePage.js'
import { productsPage } from '@/data/pages/productsPage.js'
import { exploreCards } from '@/data/components/exploreCards.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentProductCard from '@/components/ui/COMPONENT__PRODUCT--CARD.vue'
import ComponentImageDisplay from '@/components/ui/COMPONENT__IMAGE--DISPLAY.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
import ComponentAlternatingContent from '@/components/content/COMPONENT__ALTERNATING--CONTENT.vue'
import { useRouter } from 'vue-router'

// Navigation
const router = useRouter()
const navigateToPage = (path) => {
  router.push(path)
}
</script>

<template>
  <!-- Hero -->
  <ComponentSection spacing="lg">
    <ComponentHero :title="homePage.hero.title" :subtitle="homePage.hero.subtitle" :image="homePage.hero.image"
      :image-size="homePage.hero.imageSize" />
  </ComponentSection>

  <!-- About Us -->
  <ComponentSection spacing="xs" background="transparent" style="background-color: hsl(var(--monza-100))">
    <ComponentContainer size="xl" padding="md">
      <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="start">
        <!-- Left Column - Main Heading -->
        <div class="space-y-6">
          <h2 class="font-heading text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
            Connecting World-Class Supply Chains with Local Industry Needs
          </h2>
        </div>

        <!-- Right Column - Description & CTA -->
        <div class="space-y-6">
          <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
            E-Sunrise Group Australia connects global agricultural manufacturing with local distribution. Backed by
            Jiangsu Liming Food Group’s 20+ years of international trade, we deliver large-scale garlic and agricultural
            products with consistent quality, certified safety, and dependable logistics across Australia.
          </p>

          <router-link to="/our-company"
            class="inline-flex items-center mt-4 text-pickled-bluewood-800 underline font-medium hover:text-pickled-bluewood-900 transition-colors duration-200 group">
            Discover more about us
            <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>
      </ComponentGrid>

      <!-- Secondary Section -->
      <div class="mt-16 pt-12 border-t border-pickled-bluewood-200">
        <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="start">
          <!-- Left Column - Secondary Heading -->
          <div class="space-y-6">
            <h3 class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight">
              From Farm-Level Cultivation to Industry Supply, Delivering Scale, Efficiency, and Trusted Partnerships
              Across Markets
            </h3>
          </div>

          <!-- Right Column - Secondary Description -->
          <div class="space-y-6">
            <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
              Our vertically integrated model covers every step—cultivation, processing, export, and delivery. With over
              100,000 tons annual capacity, advanced quality systems, and strategic operations in Melbourne, we are a
              trusted partner for manufacturers, distributors, and retailers seeking efficiency and growth.
            </p>
          </div>
        </ComponentGrid>
      </div>
    </ComponentContainer>
  </ComponentSection>

  <!-- Products -->
  <ComponentSection spacing="sm" background="transparent">
    <ComponentContainer size="xl" padding="md">
      <!-- Top 3 Product Cards -->
      <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg" class="mb-16">
        <ComponentProductCard v-for="product in productsPage.products" :key="product.id" :product="product"
          variant="standard" :showSpecs="true" :showLink="true" />
      </ComponentGrid>

      <!-- Bottom Section - Garlic -->
      <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="center">
        <!-- Left Column - Image -->
        <div class="order-2 lg:order-1">
          <ComponentImageDisplay class="mask-luminance mask-r-from-white mask-r-from-50% mask-r-to-black"
            src="/src/assets/home/product-card__garlic.jpg" alt="Garlic" size="lg" variant="plain" object-fit="cover" />
        </div>

        <!-- Right Column - Content -->
        <div class="order-1 lg:order-2 space-y-6">
          <h3
            class="font-heading text-3xl md:text-4xl lg:text-5xl pb-8 font-bold text-pickled-bluewood-600 leading-tight">
            From Farm to Flavor – Our Garlic Promise
          </h3>

          <p class="font-body text-lg text-pickled-bluewood-600 leading-relaxed pb-4">
            Proven partner to global brands. Our garlic portfolio combines large-scale processing, vertical integration,
            and strict quality control to deliver dependable supply for every industrial application.
          </p>

          <router-link to="/products/garlic"
            class="inline-flex items-center text-pickled-bluewood-600 underline font-medium hover:text-pickled-bluewood-900 transition-colors duration-200 group">
            Discover more
            <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>
        </div>
      </ComponentGrid>
    </ComponentContainer>
  </ComponentSection>

  <!-- Global scale, local reliability -->
  <ComponentSection spacing="sm" background="transparent" style="background-color: hsl(var(--cello-200))">
    <ComponentContainer size="lg" padding="sm">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left Column - Empty Space -->
        <div></div>

        <!-- Right Column - Content -->
        <div class="space-y-8">
          <h3
            class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 pb-8 leading-tight">
            Global scale, local reliability
          </h3>

          <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
            We are a vertically integrated manufacturer with full control from cultivation to processing. Backed by
            advanced facilities and international certifications, E-Sunrise Group delivers consistent, high-quality food
            ingredients with reliable local service in Australia.
          </p>

          <!-- Statistics Grid -->
          <ComponentGrid :columns="{ base: 1, md: 3 }" gap="lg" class="pt-4">
            <!-- Revenue -->
            <div class="text-center">
              <div class=" pt-4 mb-2">
                <div class="font-heading text-3xl font-bold text-pickled-bluewood-800">
                  100,000+ tons
                </div>
              </div>
              <p class="font-body text-sm text-pickled-bluewood-700">
                annual production capacity
              </p>
            </div>

            <!-- People -->
            <div class="text-center">
              <div class="pt-4 mb-2">
                <div class="font-heading text-3xl font-bold text-pickled-bluewood-800">
                  20+ <br>
                  years
                </div>
              </div>
              <p class="font-body text-sm text-pickled-bluewood-700">
                proven international trade expertise
              </p>
            </div>

            <!-- Years -->
            <div class="text-center">
              <div class=" pt-4 mb-2">
                <div class="font-heading text-3xl font-bold text-pickled-bluewood-800">
                  60+ countries
                </div>
              </div>
              <p class="font-body text-sm text-pickled-bluewood-700">
                global distribution network
              </p>
            </div>
          </ComponentGrid>
        </div>
      </div>
    </ComponentContainer>
  </ComponentSection>

  <!-- Our Businesses -->
  <ComponentSection spacing="sm" containerSize="full" background="transparent">
    <ComponentContainer size="2xl" padding="responsive" :constrainWidth="true">
      <ComponentAlternatingContent :sections="homePage.ourBusinesses.sections" />
    </ComponentContainer>
  </ComponentSection>

  <!-- Get in Touch -->
  <ComponentCtaGetInTouch :title="homePage.getInTouch.title" :description="homePage.getInTouch.description"
    :buttonText="homePage.getInTouch.buttonText" :buttonLink="homePage.getInTouch.buttonLink"
    :background="homePage.getInTouch.background" :backgroundColor="homePage.getInTouch.backgroundColor"
    :backgroundStyle="homePage.getInTouch.backgroundStyle" />

  <!-- Explore More -->
  <ComponentExploreMore :title="exploreCards.home.title" :cards="exploreCards.home.cards"
    :columns="exploreCards.columns" :gap="exploreCards.gap" :background="exploreCards.home.background"
    :style="exploreCards.home.backgroundStyle" />

</template>
