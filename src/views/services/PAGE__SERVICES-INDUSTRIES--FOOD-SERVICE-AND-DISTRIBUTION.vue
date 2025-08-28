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
        <ComponentHero title="Food Service & Distribution"
            subtitle="From restaurants to catering suppliers, we support Australia's food service industry through strong distributor partnerships. Our cold-chain logistics and scalable supply guarantee freshness, efficiency, and long-term reliability."
            :ctaText="'Get in touch'" :ctaLink="'/contact'" backgroundImage="/src/assets/explore/our-company.png" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="md">
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Supporting Australia's Food Service Industry
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto">
                    We partner with distributors, restaurants, cafes, and catering services to deliver fresh,
                    high-quality ingredients that meet the demands of Australia's dynamic food service sector.
                </p>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Services Section -->
    <ComponentSection spacing="lg" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <div class="text-center mb-12">
                <h3 class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Our Food Service Solutions
                </h3>
            </div>

            <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg">
                <ComponentServiceCard :service="{
                    title: 'Cold-Chain Logistics',
                    description: 'Temperature-controlled storage and transportation ensuring product freshness and safety throughout the supply chain.',
                    image: '/src/assets/home/service-card__supply-chain.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Distributor Partnerships',
                    description: 'Strong relationships with regional distributors for reliable, consistent supply across Australia.',
                    image: '/src/assets/home/service-card__manufacturing.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Scalable Supply',
                    description: 'Flexible ordering and delivery options to meet varying demand patterns in food service.',
                    image: '/src/assets/explore/our-business.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/import-and-distribution'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Market Coverage Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="md">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3
                        class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        Market Coverage & Reliability
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Nationwide Distribution</h4>
                                <p class="text-pickled-bluewood-700">Comprehensive coverage across all Australian states
                                    and territories through our distributor network.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Consistent Quality</h4>
                                <p class="text-pickled-bluewood-700">Maintained product quality and freshness through
                                    rigorous quality control and proper handling procedures.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Flexible Delivery</h4>
                                <p class="text-pickled-bluewood-700">Adaptable delivery schedules and order quantities
                                    to accommodate food service industry demands.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-100 rounded-lg p-8">
                    <h4 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-4">Service Highlights</h4>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Delivery Time:</span>
                            <span class="font-semibold text-pickled-bluewood-800">1-3 business days</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Order Flexibility:</span>
                            <span class="font-semibold text-pickled-bluewood-800">Weekly/Monthly</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Temperature Control:</span>
                            <span class="font-semibold text-pickled-bluewood-800">-18°C to +4°C</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Support:</span>
                            <span class="font-semibold text-pickled-bluewood-800">24/7 availability</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Get in Touch -->
    <ComponentCtaGetInTouch
        description="Looking for a reliable ingredient supplier for your food service business? Contact us to discuss your distribution needs and learn how we can support your operations."
        backgroundColor="monza-300" />
</template>