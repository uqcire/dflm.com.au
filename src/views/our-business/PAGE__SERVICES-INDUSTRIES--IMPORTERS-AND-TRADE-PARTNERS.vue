<script setup>
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentServiceCard from '@/components/ui/COMPONENT__SERVICE--CARD.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true">
        <ComponentHero title="Importers & Trade Partners"
            subtitle="We work with global importers and trade partners to provide secure capacity, compliance support, and flexible cooperation models. Our proven expertise reduces supply chain risk and strengthens competitiveness in international markets."
            :ctaText="'Get in touch'" :ctaLink="'/contact'" backgroundImage="/assets/explore/explore__card--newsroom.png" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="md">
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Global Trade Partnership Solutions
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto">
                    Our international trade expertise and reliable supply chain support importers and trade partners in
                    navigating global markets, ensuring secure capacity and competitive advantage.
                </p>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Services Section -->
    <ComponentSection spacing="lg" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <div class="text-center mb-12">
                <h3 class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Our Trade Partnership Services
                </h3>
            </div>

            <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg">
                <ComponentServiceCard :service="{
                    title: 'Secure Capacity',
                    description: 'Guaranteed supply capacity and production planning to ensure reliable delivery for international trade partners.',
                    image: '/assets/home/home__service-card--supply-chain.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Compliance Support',
                    description: 'Full regulatory compliance assistance including documentation, certifications, and import/export requirements.',
                    image: '/assets/home/home__service-card--manufacturing.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Flexible Cooperation',
                    description: 'Adaptable partnership models including joint ventures, exclusive agreements, and strategic alliances.',
                    image: '/assets/explore/explore__card--our-business.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Global Reach Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="md">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3
                        class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        Global Market Expertise
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">International Experience</h4>
                                <p class="text-pickled-bluewood-700">Proven track record in global markets with exports
                                    to over 60 countries and deep understanding of international trade dynamics.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Risk Mitigation</h4>
                                <p class="text-pickled-bluewood-700">Comprehensive risk management strategies to reduce
                                    supply chain disruptions and ensure reliable international trade.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Competitive Advantage</h4>
                                <p class="text-pickled-bluewood-700">Strategic partnerships that enhance market
                                    competitiveness through quality, reliability, and cost-effective solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-100 rounded-lg p-8">
                    <h4 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-4">Partnership Benefits</h4>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Export Markets:</span>
                            <span class="font-semibold text-pickled-bluewood-800">60+ countries</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Lead Time:</span>
                            <span class="font-semibold text-pickled-bluewood-800">4-8 weeks</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Payment Terms:</span>
                            <span class="font-semibold text-pickled-bluewood-800">Flexible</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Support:</span>
                            <span class="font-semibold text-pickled-bluewood-800">Dedicated team</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Product Range Section -->
    <ComponentSection spacing="lg" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <div class="text-center mb-12">
                <h3 class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Export Product Range
                </h3>
            </div>

            <ComponentGrid :columns="{ base: 1, md: 2, lg: 4 }" gap="lg">
                <ComponentServiceCard :service="{
                    title: 'Dehydrated Vegetables',
                    description: 'Premium dehydrated vegetables for international markets with extended shelf life and consistent quality.',
                    image: '/assets/home/home__product-card--dehydrated-vegetables.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/dehydrated-vegetables'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Garlic Products',
                    description: 'High-quality garlic products in various forms for global culinary and food manufacturing markets.',
                    image: '/assets/home/home__product-card--garlic.jpg',
                    linkText: 'Learn more',
                    linkUrl: '/products/garlic'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Pulses & Legumes',
                    description: 'Premium pulses and legumes for international markets with high nutritional value and versatility.',
                    image: '/assets/home/home__product-card--pulses.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/pulses'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Sauces & Seasonings',
                    description: 'Ready-to-use sauces and seasoning blends for international food service and retail markets.',
                    image: '/assets/home/home__product-card--fresh-vegetables.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/sauces'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Get in Touch -->
    <ComponentCtaGetInTouch
        description="Ready to explore international trade opportunities? Contact our global trade team to discuss partnership possibilities and learn how we can support your international business expansion."
        backgroundColor="monza-300" />
</template>