<script setup>
import { aboutPage } from '@/data/pages/aboutPage.js'
import { exploreCards } from '@/data/components/exploreCards.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentNavigation from '@/components/navigation/COMPONENT__NAVIGATION--PRIMARY.vue'
import ComponentPartnersGrid from '@/components/content/COMPONENT__PARTNERS--GRID.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
import ComponentAlternatingContent from '@/components/content/COMPONENT__ALTERNATING--CONTENT.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
</script>

<template>
  <!-- Hero -->
  <ComponentSection spacing="xs" :fullWidth="true" :style="'padding-bottom: 0px; padding-top: 0px'">
    <ComponentHero :title="aboutPage.hero.title" :subtitle="aboutPage.hero.subtitle" :fullWidth="true"
      :backgroundImage="aboutPage.hero.backgroundImage" :overlayOpacity="aboutPage.hero.overlayOpacity" />
  </ComponentSection>

  <!-- Sub Navigation -->
  <ComponentSection spacing="sm" background="subtle">
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
            class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 pb-8 leading-tight">
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

          <div class="pt-8">
            <router-link to="/our-company/mission-and-vision"
              class="inline-flex items-center px-8 py-4 bg-transparent text-pickled-bluewood-700 font-medium text-sm rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-pickled-bluewood-700">
              Read more about our purpose
            </router-link>
          </div>
        </div>
      </ComponentGrid>
    </ComponentContainer>
  </ComponentSection>

  <!-- Global scale, local reliability -->
  <ComponentSection id="our-edge" spacing="sm" background="transparent" style="background-color: hsl(var(--cello-200))">
    <ComponentContainer size="sm" padding="sm" :constrainWidth="false">
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
              <div class="pt-4 mb-2">
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
              <div class="pt-4 mb-2">
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

  <!-- Our Edge & Capabilities -->
  <ComponentSection id="capabilities" spacing="sm" background="transparent">
    <ComponentContainer size="full" padding="sm" :constrainWidth="false">
      <ComponentAlternatingContent :sections="[
        {
          title: 'Delivering Reliability from Production to Partnership',
          description: 'As a vertically integrated manufacturer, we manage everything from cultivation and processing to large-scale supply. With proven international experience and strong local operations in Australia, we deliver certified quality, consistent capacity, and trusted partnerships that create long-term value.',
          image: '/src/assets/about/our-edge.png',
          linkText: 'Discover Our Capabilities',
          linkUrl: '/our-businesses',
          imagePosition: 'right',
          imageSize: 'lg'
        },
        {
          title: 'Capabilities That Power Food Supply Chains',
          description: 'E-Sunrise Group Australia delivers certified food ingredients with manufacturing strength, cold-chain logistics, and OEM solutions, ensuring reliable supply, full traceability, and compliance for Australia’s food industry.',
          image: '/src/assets/about/capabilities.png',
          linkText: 'Partner With Us for Reliable Supply',
          linkUrl: '/our-businesses/oem-and-private-label',
          imagePosition: 'left',
          imageSize: 'lg'
        }
      ]" />
    </ComponentContainer>
  </ComponentSection>

  <!-- Partners & Clients -->
  <ComponentSection id="partners-clients" containerSize="full" spacing="sm"
    style="background-color: hsl(var(--cello-300))">
    <ComponentContainer size="md" padding="sm">
      <ComponentPartnersGrid :title="aboutPage.partners.title" :partners="aboutPage.partners.items"
        :columns="aboutPage.partners.columns" :gap="aboutPage.partners.gap" />
    </ComponentContainer>
  </ComponentSection>

  <!-- Our History -->
  <ComponentSection spacing="xs" :fullWidth="true" style="padding-top: 0 !important; padding-bottom: 0 !important;">
    <ComponentHero :title="aboutPage.ourHistory.title" :subtitle="aboutPage.ourHistory.subtitle"
      :backgroundImage="aboutPage.ourHistory.backgroundImage" :overlayOpacity="'50'"
      :ctaText="aboutPage.ourHistory.ctaText" :ctaLink="aboutPage.ourHistory.ctaLink" :fullWidth="true" />
  </ComponentSection>

  <!-- Explore More -->
  <ComponentExploreMore :title="exploreCards.about.title" :cards="exploreCards.about.cards"
    :columns="exploreCards.columns" :gap="exploreCards.gap" :background="exploreCards.about.background"
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