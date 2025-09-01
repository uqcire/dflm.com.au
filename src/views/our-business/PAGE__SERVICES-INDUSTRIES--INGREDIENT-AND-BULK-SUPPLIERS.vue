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
        <ComponentHero title="Ingredient & Bulk Suppliers"
            subtitle="Bulk pulses, legumes, and dehydrated vegetables are at the core of many ingredient suppliers. With 100,000+ tons annual production capacity, we offer stable, cost-effective, and large-scale supply for industrial applications."
            :ctaText="'Get in touch'" :ctaLink="'/contact'" backgroundImage="/assets/explore/newsroom.png" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="md">
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Large-Scale Supply for Industrial Applications
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto">
                    We provide ingredient suppliers and bulk distributors with reliable, high-volume supply of quality
                    ingredients for industrial food processing and manufacturing applications.
                </p>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Products Section -->
    <ComponentSection spacing="lg" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <div class="text-center mb-12">
                <h3 class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Bulk Ingredient Categories
                </h3>
            </div>

            <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg">
                <ComponentServiceCard :service="{
                    title: 'Bulk Pulses',
                    description: 'High-quality chickpeas, lentils, beans, and other pulses in bulk quantities for industrial processing and ingredient manufacturing.',
                    image: '/assets/home/product-card__pulses.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/pulses'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Dehydrated Vegetables',
                    description: 'Bulk dehydrated vegetables including onions, garlic, carrots, and mixed vegetables for industrial food applications.',
                    image: '/assets/home/product-card__dehydrated-vegetables.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/dehydrated-vegetables'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Garlic Products',
                    description: 'Bulk garlic products in various forms including minced, granulated, and powder for industrial seasoning and flavor applications.',
                    image: '/assets/home/product-card__garlic.jpg',
                    linkText: 'Learn more',
                    linkUrl: '/products/garlic'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Supply Chain Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="md">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3
                        class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        Reliable Supply Chain Solutions
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Large-Scale Production</h4>
                                <p class="text-pickled-bluewood-700">100,000+ tons annual production capacity ensures
                                    consistent supply for industrial applications and bulk orders.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Cost-Effective Pricing</h4>
                                <p class="text-pickled-bluewood-700">Competitive bulk pricing and flexible payment terms
                                    to support ingredient suppliers and distributors.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Quality Consistency</h4>
                                <p class="text-pickled-bluewood-700">Maintained product quality and specifications
                                    across large production batches for reliable ingredient supply.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-100 rounded-lg p-8">
                    <h4 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-4">Bulk Supply Features</h4>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Annual Capacity:</span>
                            <span class="font-semibold text-pickled-bluewood-800">100,000+ tons</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Minimum Order:</span>
                            <span class="font-semibold text-pickled-bluewood-800">1 ton</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Lead Time:</span>
                            <span class="font-semibold text-pickled-bluewood-800">2-6 weeks</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Packaging:</span>
                            <span class="font-semibold text-pickled-bluewood-800">Bulk bags/containers</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Applications Section -->
    <ComponentSection spacing="lg" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <div class="text-center mb-12">
                <h3 class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Industrial Applications
                </h3>
            </div>

            <ComponentGrid :columns="{ base: 1, md: 2, lg: 4 }" gap="lg">
                <ComponentServiceCard :service="{
                    title: 'Food Processing',
                    description: 'Ingredients for large-scale food processing operations including soups, sauces, and prepared meals.',
                    image: '/assets/home/service-card__manufacturing.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Ingredient Manufacturing',
                    description: 'Base ingredients for seasoning blends, flavor enhancers, and functional food ingredients.',
                    image: '/assets/home/service-card__supply-chain.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Animal Feed',
                    description: 'High-quality ingredients for animal feed formulations and pet food manufacturing.',
                    image: '/assets/explore/our-business.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Export Markets',
                    description: 'Bulk ingredients for international markets and global food manufacturing operations.',
                    image: '/assets/explore/our-company.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Get in Touch -->
    <ComponentCtaGetInTouch
        description="Looking for reliable bulk ingredient supply? Contact our team to discuss your requirements, request samples, or learn more about our large-scale production capabilities."
        backgroundColor="monza-300" />
</template>