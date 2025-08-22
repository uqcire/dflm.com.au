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
import { useRouter } from 'vue-router'

// Navigation
const router = useRouter()
const navigateToPage = (path) => {
  router.push(path)
}
</script>

<template>
  <!-- Hero -->
  <ComponentSection spacing="xs" containerSize="full">
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

          <a href="/about"
            class="inline-flex items-center mt-4 text-pickled-bluewood-800 underline font-medium hover:text-pickled-bluewood-900 transition-colors duration-200 group">
            Discover more about us
            <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
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

          <a href="/products/garlic"
            class="inline-flex items-center text-pickled-bluewood-600 underline font-medium hover:text-pickled-bluewood-900 transition-colors duration-200 group">
            Discover more
            <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
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
            class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 pb-4 leading-tight">
            Global scale, local reliability
          </h3>

          <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
            We are a vertically integrated manufacturer with full control from cultivation to processing. Backed by
            advanced facilities and international certifications, E-Sunrise Group delivers consistent, high-quality food
            ingredients with reliable local service in Australia.
          </p>

          <!-- Statistics Grid -->
          <ComponentGrid :columns="{ base: 1, md: 3 }" gap="lg" class="pt-8">
            <!-- Revenue -->
            <div class="text-center">
              <div class="border-t-2 border-pickled-bluewood-800 pt-4 mb-2">
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
              <div class="border-t-2 border-pickled-bluewood-800 pt-4 mb-2">
                <div class="font-heading text-3xl font-bold text-pickled-bluewood-800">
                  20+ years
                </div>
              </div>
              <p class="font-body text-sm text-pickled-bluewood-700">
                proven international trade expertise
              </p>
            </div>

            <!-- Years -->
            <div class="text-center">
              <div class="border-t-2 border-pickled-bluewood-800 pt-4 mb-2">
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

  <!-- Services -->
  <ComponentSection spacing="sm" background="subtle">
    <ComponentContainer size="xl" padding="md">
      <!-- First Service - Helping to safeguard our planet -->
      <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="center" class="mb-16">
        <!-- Left Column - Content -->
        <div class="space-y-6">
          <h3
            class="font-heading text-3xl pb-8 md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
            Strength in Supply Chain Solutions
          </h3>

          <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-4">
            With vertically integrated operations and advanced logistics, we provide seamless import, distribution, and
            supply chain management across Australia. From customs clearance to cold-chain delivery, our expertise
            ensures products arrive safely, efficiently, and at scale.
          </p>

          <a href="/services/sustainability"
            class="inline-flex items-center underline text-pickled-bluewood-800 font-medium hover:text-pickled-bluewood-900 transition-colors duration-200 group">
            Discover End-to-End Distribution
            <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <!-- Right Column - Image -->
        <div class="order-first lg:order-last">
          <ComponentImageDisplay src="/src/assets/home/service-card__supply-chain.png"
            alt="Strength in Supply Chain Solutions" size="lg" variant="plain" object-fit="cover" />
        </div>
      </ComponentGrid>

      <!-- Second Service - Some heroes wear lab coats -->
      <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="center">
        <!-- Left Column - Image -->
        <div>
          <ComponentImageDisplay class="mask-alpha mask-r-from-black mask-r-from-70% mask-r-to-transparent"
            src="/src/assets/home/service-card__manufacturing.png" alt="Some heroes wear lab coats" size="lg"
            variant="plain" object-fit="cover" />
        </div>

        <!-- Right Column - Content -->
        <div class="space-y-6">
          <h3
            class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 pb-8 leading-tight">
            Manufacturing You Can Count On
          </h3>

          <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-4">
            As a full-scale producer, we control every step from cultivation to processing, guaranteeing consistent
            quality and compliance. Our modern facilities and certified systems allow us to deliver tailored solutions
            for manufacturers, distributors, and retail partners.
          </p>

          <a href="/services/research"
            class="inline-flex items-center underline text-pickled-bluewood-800 font-medium hover:text-pickled-bluewood-900 transition-colors duration-200 group">
            Partner With Us for Tailored Solutions
            <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </ComponentGrid>
    </ComponentContainer>
  </ComponentSection>

  <!-- Get in Touch -->
  <ComponentSection spacing="sm" background="transparent" style="background-color: hsl(var(--monza-100))">
    <ComponentContainer size="lg" padding="sm">
      <div class="text-center space-y-6">
        <h3 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
          Get in touch
        </h3>
        <p class="font-body text-lg md:text-xl text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto pt-4">
          Did you know that you can contact different departments and functions from E-Sunrise Australia such as media
          team, sustainability team and our investors team?
        </p>
        <div class="pt-4">
          <a href="/contact"
            class="inline-flex items-center px-8 py-4 bg-pickled-bluewood-800 text-white font-medium text-lg rounded-full hover:bg-pickled-bluewood-900 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Contact us
          </a>
        </div>
      </div>
    </ComponentContainer>
  </ComponentSection>

  <!-- Explore More -->
  <ComponentExploreMore :title="exploreCards.home.title" :cards="exploreCards.home.cards"
    :columns="exploreCards.home.columns" :gap="exploreCards.home.gap" :background="exploreCards.home.background"
    :style="exploreCards.home.backgroundStyle" />

</template>
