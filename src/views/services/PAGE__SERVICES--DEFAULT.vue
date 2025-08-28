<script setup>
import { servicesPage, exploreCards } from '@/data/index.js'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentNavigation from '@/components/navigation/COMPONENT__NAVIGATION--PRIMARY.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
import ComponentExploreMore from '@/components/content/COMPONENT__EXPLORE--MORE.vue'
import ComponentAlternatingContent from '@/components/content/COMPONENT__ALTERNATING--CONTENT.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentServiceCard from '@/components/ui/COMPONENT__SERVICE--CARD.vue'
</script>

<template>
  <!-- Hero -->
  <ComponentSection spacing="xs" :fullWidth="true">
    <ComponentHero :title="servicesPage.hero.title" :subtitle="servicesPage.hero.subtitle"
      :fullWidth="servicesPage.hero.fullWidth" :backgroundImage="servicesPage.hero.backgroundImage"
      :overlayOpacity="servicesPage.hero.overlayOpacity" />
  </ComponentSection>

  <!-- Sub Navigation -->
  <ComponentSection spacing="xs" background="transparent">
    <ComponentNavigation :isSubNavigation="true" :subNavItems="servicesPage.services.items"
      :sticky="servicesPage.services.sticky" />
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

  <!-- Services Section -->
  <ComponentSection spacing="sm" containerSize="full" background="transparent"
    :style="'background-color: hsl(var(--tree-poppy-100))'">
    <ComponentContainer size="2xl" padding="responsive" :constrainWidth="true">
      <ComponentAlternatingContent :sections="[
        {
          title: 'Import & Distribution',
          description: 'Smell that? That\'s the scent of conscious perfumery and beauty – all with a more positive impact on people and planet. Using outstanding ingredients, we bring together the best of nature and science through a responsible and sustainable approach.',
          image: '/src/assets/hero/visual__garlic--realistic-conceptual-balance.jpg',
          linkText: 'Explore more',
          linkUrl: '/our-businesses/import-and-distribution',
          imagePosition: 'left',
          id: 'import-and-distribution'
        },
        {
          title: 'OEM & Private Label',
          description: 'At E-Sunrise Australia we have the recipe to lead a new era in Taste, Texture and Health. Our boundless creativity and broad portfolio of unique and nutritious ingredients ensures consumer preferred food and beverages for every taste and occasion. We bring progress to life by co-creating with our customers to transform how the world eats.',
          image: '/src/assets/hero/visual__garlic--realistic-conceptual-balance.jpg',
          linkText: 'Explore more',
          linkUrl: '/our-businesses/oem-and-private-label',
          imagePosition: 'right',
          id: 'oem-and-private-label'
        }
      ]" imageSize="lg" />
    </ComponentContainer>
  </ComponentSection>

  <!-- Industries -->
  <ComponentSection id="industry-solutions" spacing="xs" containerSize="full" background="transparent">
    <ComponentContainer id="industry-solutions" size="2xl" padding="responsive" :constrainWidth="true">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2
          class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
          Industries We Serve
        </h2>
      </div>

      <!-- Industries Grid -->
      <ComponentGrid :columns="{ base: 1, md: 3 }" gap="lg">
        <ComponentServiceCard :service="{
          title: 'Food Manufacturers & Processors',
          description: 'We supply dehydrated vegetables, garlic products, sauces, pulses, and legumes to food manufacturers and processors. With HACCP and ISO certifications, we ensure consistent, safe, and traceable ingredients for large-scale production.',
          image: '/src/assets/explore/our-business.png',
          linkText: 'Learn more',
          linkUrl: '/our-businesses/industries/food-manufacturers-and-processors'
        }" variant="standard" :showLink="true" />
        <ComponentServiceCard :service="{
          title: 'Food Service & Distribution',
          description: 'From restaurants to catering suppliers, we support Australia’s food service industry through strong distributor partnerships. Our cold-chain logistics and scalable supply guarantee freshness, efficiency, and long-term reliability.',
          image: '/src/assets/explore/our-company.png',
          linkText: 'Learn more',
          linkUrl: '/our-businesses/industries/food-service-and-distribution'
        }" variant="standard" :showLink="true" />
        <ComponentServiceCard :service="{
          title: 'Supermarkets & Custom Brands',
          description: 'We partner with retail chains and supermarkets to deliver tailored OEM solutions. From garlic sauces to packaged legumes, we help retailers build distinctive, compliant, and trusted private label products.Want to create foods and beverages that benefit health & wellbeing? We offer ingredients that support digestive health, immunity, and overall wellness.',
          image: '/src/assets/explore/newsroom.png',
          linkText: 'Learn more',
          linkUrl: '/our-businesses/industries/supermarkets-and-custom-brands'
        }" variant="standard" :showLink="true" />
        <ComponentServiceCard :service="{
          title: 'Ingredient & Bulk Suppliers',
          description: 'Bulk pulses, legumes, and dehydrated vegetables are at the core of many ingredient suppliers. With 100,000+ tons annual production capacity, we offer stable, cost-effective, and large-scale supply for industrial applications.',
          image: '/src/assets/explore/newsroom.png',
          linkText: 'Learn more',
          linkUrl: '/our-businesses/industries/ingredient-and-bulk-suppliers'
        }" variant="standard" :showLink="true" />
        <ComponentServiceCard :service="{
          title: 'Importers & Trade Partners',
          description: 'We work with global importers and trade partners to provide secure capacity, compliance support, and flexible cooperation models. Our proven expertise reduces supply chain risk and strengthens competitiveness in international markets.',
          image: '/src/assets/explore/newsroom.png',
          linkText: 'Learn more',
          linkUrl: '/our-businesses/industries/importers-and-trade-partners'
        }" variant="standard" :showLink="true" />
      </ComponentGrid>
    </ComponentContainer>
  </ComponentSection>

  <!-- Get in Touch -->
  <ComponentCtaGetInTouch
    description="Looking to source reliable ingredients or explore tailored solutions? Connect with us today, our team is ready to support your needs with trusted products, scalable supply, and opportunities for long-term partnership."
    backgroundColor="monza-100" />

  <!-- Explore More -->
  <ComponentExploreMore :title="exploreCards.ourBusinesses.title" :cards="exploreCards.ourBusinesses.cards"
    :columns="exploreCards.ourBusinesses.columns" :gap="exploreCards.ourBusinesses.gap"
    :background="exploreCards.ourBusinesses.background" :style="exploreCards.ourBusinesses.backgroundStyle" />
</template>

<style scoped></style>