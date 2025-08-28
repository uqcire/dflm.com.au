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
        <ComponentHero title="Food Manufacturers & Processors"
            subtitle="We supply dehydrated vegetables, garlic products, sauces, pulses, and legumes to food manufacturers and processors. With HACCP and ISO certifications, we ensure consistent, safe, and traceable ingredients for large-scale production."
            :ctaText="'Get in touch'" :ctaLink="'/contact'" backgroundImage="/src/assets/explore/our-business.png" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="md">
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Reliable Ingredients for Large-Scale Production
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto">
                    Our certified ingredients support food manufacturers and processors across Australia, providing the
                    quality, consistency, and traceability needed for successful large-scale production.
                </p>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Products Section -->
    <ComponentSection spacing="lg" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <div class="text-center mb-12">
                <h3 class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Our Product Range
                </h3>
            </div>

            <ComponentGrid :columns="{ base: 1, md: 2, lg: 4 }" gap="lg">
                <ComponentServiceCard :service="{
                    title: 'Dehydrated Vegetables',
                    description: 'High-quality dehydrated vegetables including onions, garlic, carrots, and bell peppers for consistent flavor and extended shelf life.',
                    image: '/src/assets/home/product-card__dehydrated-vegetables.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/dehydrated-vegetables'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Garlic Products',
                    description: 'Premium garlic products including minced, granulated, and powder forms for authentic flavor and aroma in food manufacturing.',
                    image: '/src/assets/home/product-card__garlic.jpg',
                    linkText: 'Learn more',
                    linkUrl: '/products/garlic'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Sauces & Seasonings',
                    description: 'Ready-to-use sauces and seasoning blends that enhance taste profiles and streamline production processes.',
                    image: '/src/assets/home/product-card__fresh-vegetables.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/sauces'
                }" variant="standard" :showLink="true" />
                <ComponentServiceCard :service="{
                    title: 'Pulses & Legumes',
                    description: 'High-protein pulses and legumes including chickpeas, lentils, and beans for nutritious food formulations.',
                    image: '/src/assets/home/product-card__pulses.png',
                    linkText: 'Learn more',
                    linkUrl: '/products/pulses'
                }" variant="standard" :showLink="true" />
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Certifications Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="md">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3
                        class="font-heading text-2xl md:text-3xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        Quality Assurance & Certifications
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">HACCP Certified</h4>
                                <p class="text-pickled-bluewood-700">Hazard Analysis and Critical Control Points
                                    certification ensures food safety throughout our production process.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">ISO 9001:2015</h4>
                                <p class="text-pickled-bluewood-700">International quality management system
                                    certification for consistent product quality and customer satisfaction.</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-3">
                            <div class="w-6 h-6 bg-monza-600 rounded-full flex-shrink-0 mt-1"></div>
                            <div>
                                <h4 class="font-semibold text-pickled-bluewood-800">Full Traceability</h4>
                                <p class="text-pickled-bluewood-700">Complete supply chain traceability from farm to
                                    factory, ensuring ingredient origin and quality control.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-slate-100 rounded-lg p-8">
                    <h4 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-4">Production Capacity</h4>
                    <div class="space-y-3">
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Annual Production:</span>
                            <span class="font-semibold text-pickled-bluewood-800">100,000+ tons</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Lead Time:</span>
                            <span class="font-semibold text-pickled-bluewood-800">2-4 weeks</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Minimum Order:</span>
                            <span class="font-semibold text-pickled-bluewood-800">Flexible</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-pickled-bluewood-700">Packaging:</span>
                            <span class="font-semibold text-pickled-bluewood-800">Custom options</span>
                        </div>
                    </div>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Get in Touch -->
    <ComponentCtaGetInTouch
        description="Ready to partner with a reliable ingredient supplier? Contact our team to discuss your manufacturing needs, request samples, or learn more about our certified product range."
        backgroundColor="monza-300" />
</template>