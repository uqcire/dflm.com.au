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
        <ComponentHero title="Supermarkets & Custom Brands"
            subtitle="We partner with retail chains and supermarkets to deliver tailored OEM solutions. From garlic sauces to packaged legumes, we help retailers build distinctive, compliant, and trusted private label products."
            :ctaText="'Get in touch'" :ctaLink="'/contact'" backgroundImage="/assets/explore/explore__card--newsroom.png" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="md">
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Building Trusted Private Label Products
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto">
                    Our OEM and private label services help supermarkets and retailers create distinctive, high-quality
                    products that build customer loyalty and drive sales growth.
                </p>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Services Section -->
    <ComponentSection spacing="lg" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <div class="text-center mb-12">
                <h3 class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Our Private Label Solutions
                </h3>
            </div>

            <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg">
                <ComponentServiceCard :service="{
                    title: 'Custom Formulation',
                    description: 'Tailored product development to meet your specific taste profiles, nutritional requirements, and brand positioning.',
                    image: '/assets/home/home__service-card--manufacturing.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/oem-and-private-label'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Packaging Solutions',
                    description: 'Custom packaging design and production that aligns with your brand identity and retail requirements.',
                    image: '/assets/home/home__product-card--fresh-vegetables.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/oem-and-private-label'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Quality Compliance',
                    description: 'Full regulatory compliance and quality assurance to meet Australian food safety standards and retailer requirements.',
                    image: '/assets/explore/explore__card--our-business.png',
                    linkText: 'Learn more',
                    linkUrl: '/our-businesses/oem-and-private-label'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Product Categories Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="xl" padding="md">
            <div class="text-center mb-12">
                <h3 class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Popular Private Label Categories
                </h3>
            </div>

            <ComponentGrid :columns="{ base: 1, md: 2, lg: 4 }" gap="lg">
                <ComponentServiceCard :service="{
                    title: 'Garlic Sauces',
                    description: 'Premium garlic sauces and pastes for authentic flavor in cooking and food preparation.',
                    image: '/assets/home/home__product-card--garlic.jpg',
                    linkText: 'Learn more',
                    linkUrl: '/products/garlic'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Packaged Legumes',
                    description: 'High-quality packaged pulses and legumes for convenient, nutritious meal solutions.',
                    image: '/assets/home/home__product-card--pulses.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/pulses'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Dehydrated Vegetables',
                    description: 'Convenient dehydrated vegetable mixes for soups, stews, and recipe bases.',
                    image: '/assets/home/home__product-card--dehydrated-vegetables.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/dehydrated-vegetables'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Seasoning Blends',
                    description: 'Custom seasoning and spice blends for enhanced flavor profiles and cooking convenience.',
                    image: '/assets/home/home__product-card--fresh-vegetables.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/seasonings'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Benefits Section -->
    <ComponentSection spacing="lg" background="subtle">
        <ComponentContainer size="lg" padding="md">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3
                        class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        Why Choose Our Private Label Services
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Brand Differentiation</h4>
                                <p class="text-pickled-bluewood-700">Unique product formulations that set your private
                                    label apart from competitors and build customer loyalty.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Quality Assurance</h4>
                                <p class="text-pickled-bluewood-700">Rigorous quality control and compliance with
                                    Australian food safety standards and retailer requirements.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Scalable Production</h4>
                                <p class="text-pickled-bluewood-700">Flexible production capacity to meet varying demand
                                    and seasonal requirements in retail.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-100 rounded-lg p-8">
                    <h4 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-4">Service Features</h4>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Minimum Order:</span>
                            <span class="font-semibold text-pickled-bluewood-800">Flexible</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Lead Time:</span>
                            <span class="font-semibold text-pickled-bluewood-800">4-8 weeks</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Packaging:</span>
                            <span class="font-semibold text-pickled-bluewood-800">Custom design</span>
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

    <!-- Get in Touch -->
    <ComponentCtaGetInTouch
        description="Ready to develop your own private label products? Contact our OEM team to discuss your requirements and learn how we can help create distinctive products for your retail business."
        backgroundColor="monza-300" />
</template>