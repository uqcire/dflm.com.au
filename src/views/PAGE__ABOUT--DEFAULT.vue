<script setup>
import { aboutPage } from '@/data/pages/aboutPage.js'
import { exploreCards } from '@/data/components/exploreCards.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentNavigation from '@/components/navigation/COMPONENT__NAVIGATION--PRIMARY.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentImageDisplay from '@/components/ui/COMPONENT__IMAGE--DISPLAY.vue'
import ComponentPartnersGrid from '@/components/content/COMPONENT__PARTNERS--GRID.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
</script>

<template>
  <!-- Hero -->
  <ComponentSection spacing="xs" :fullWidth="true">
    <ComponentHero :title="aboutPage.hero.title" :subtitle="aboutPage.hero.subtitle"
      :fullWidth="aboutPage.hero.fullWidth" :backgroundImage="aboutPage.hero.backgroundImage"
      :overlayOpacity="aboutPage.hero.overlayOpacity" />
  </ComponentSection>

  <!-- Sub Navigation -->
  <ComponentSection spacing="none" background="white">
    <ComponentNavigation :isSubNavigation="true" :subNavItems="aboutPage.subNavigation.items"
      :sticky="aboutPage.subNavigation.sticky" />
  </ComponentSection>

  <!-- Who are we -->
  <ComponentSection id="who-are-we" spacing="sm" background="transparent"
    style="background-color: hsl(var(--tree-poppy-300))">
    <ComponentContainer size="xl" padding="md">
      <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="center">
        <!-- Left Column - Empty Space -->
        <div></div>

        <!-- Right Column - Content -->
        <div class="space-y-8 max-w-3xl">
          <h3
            class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 pb-4 leading-tight">
            The Company Behind the Supply
          </h3>

          <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
            E-Sunrise Group Australia is the local arm of Jiangsu Liming Food Group, one of China’s leading agricultural
            manufacturers. Based in Melbourne, we combine world-class production capacity with trusted Australian
            operations, delivering high-quality food ingredients across the country. We are not just importers — we are
            manufacturers with full control from farm to factory, ensuring consistent quality, certified compliance, and
            reliable supply. Our role is clear, to connect global-scale production with the evolving needs of
            Australia’s food industry.
          </p>

          <div class="pt-4">
            <a href="/about/mission-and-vision"
              class="inline-flex items-center px-8 py-4 bg-transparent text-pickled-bluewood-700 font-medium text-sm rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-pickled-bluewood-700">
              Read more about our purpose
            </a>
          </div>
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

  <!-- Our Edge -->
  <ComponentSection id="our-edge" spacing="sm" background="subtle">
    <ComponentContainer size="xl" padding="sm">
      <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="center" class="mb-16">
        <!-- Left Column - Image -->
        <div class="order-first lg:order-last">
          <ComponentImageDisplay src="/src/assets/about/our-edge.png" alt="Strength in Supply Chain Solutions" size="xl"
            variant="plain" object-fit="cover" loading="lazy" />
        </div>

        <!-- Right Column - Content -->
        <div class="space-y-6">
          <h3
            class="font-heading text-3xl pb-8 md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
            Delivering Reliability from Production to Partnership
          </h3>

          <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-4">
            As a vertically integrated manufacturer, we manage everything from cultivation and processing to large-scale
            supply. With proven international experience and strong local operations in Australia, we deliver certified
            quality, consistent capacity, and trusted partnerships that create long-term value.
          </p>

          <a href="/services"
            class="inline-flex items-center underline text-pickled-bluewood-800 font-medium hover:text-pickled-bluewood-900 transition-colors duration-200 group">
            Discover Our Capabilities
            <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </ComponentGrid>
    </ComponentContainer>

    <!-- Capabilities -->
    <ComponentContainer id="capabilities" size="xl" padding="sm">
      <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="center">
        <!-- left Column - Image -->
        <div class="order-first">
          <ComponentImageDisplay class="lg:-ml-56" src="/src/assets/about/capabilities.png"
            alt="Strength in Supply Chain Solutions" size="xl" variant="plain" object-fit="cover" loading="lazy" />
        </div>

        <!-- right Column - Content -->
        <div class="">
          <h3
            class="font-heading text-3xl pb-8 md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
            Capabilities That Power Food Supply Chains
          </h3>

          <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed pb-4">
            E-Sunrise Group Australia combines manufacturing strength with reliable supply chain solutions. We produce
            dehydrated vegetables, garlic products, sauces, pulses and legumes under strict HACCP and ISO standards. Our
            cold-chain logistics, warehousing and customs expertise are tailored to the Australian market. Through OEM
            services, we help manufacturers and retailers develop private label and custom products, supported by full
            traceability and compliance with global and local regulations.
          </p>

          <a href="/products"
            class="inline-flex items-center underline text-pickled-bluewood-800 font-medium hover:text-pickled-bluewood-900 transition-colors duration-200 group">
            Partner With Us for Reliable Supply
            <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none"
              stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </ComponentGrid>
    </ComponentContainer>
  </ComponentSection>

  <!-- Partners & Clients -->
  <ComponentSection id="partners-clients" spacing="sm" style="background-color: hsl(var(--cello-300))">
    <ComponentContainer size="xl" padding="sm">
      <ComponentPartnersGrid :title="aboutPage.partners.title" :partners="aboutPage.partners.items"
        :columns="aboutPage.partners.columns" :gap="aboutPage.partners.gap" />
    </ComponentContainer>
  </ComponentSection>

  <!-- Our History -->
  <ComponentSection spacing="xs" fullWidth="true">
    <ComponentHero :title="aboutPage.ourHistory.title" :subtitle="aboutPage.ourHistory.subtitle"
      :backgroundImage="aboutPage.ourHistory.backgroundImage" :overlayOpacity="50"
      :ctaText="aboutPage.ourHistory.ctaText" :ctaLink="aboutPage.ourHistory.ctaLink"
      :fullWidth="aboutPage.ourHistory.fullWidth" />
  </ComponentSection>

  <!-- Explore More -->
  <ComponentExploreMore :title="exploreCards.about.title" :cards="exploreCards.about.cards"
    :columns="exploreCards.about.columns" :gap="exploreCards.about.gap" :background="exploreCards.about.background"
    :style="exploreCards.about.backgroundStyle" />
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