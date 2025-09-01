<script setup>
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true">
        <ComponentHero title="Broader Agriculture"
            subtitle="Comprehensive agricultural products including pulses, legumes, and specialty crops. Our broad portfolio supports diverse food manufacturing needs with reliable supply and consistent quality."
            :fullWidth="true" backgroundImage="/assets/explore/explore__card--our-business.png" overlayOpacity="50" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="responsive" :constrainWidth="true">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2
                        class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        Comprehensive Agricultural Solutions
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed mb-6">
                        Our broader agriculture division provides a complete range of agricultural products that form
                        the
                        foundation of food manufacturing worldwide. We source and process premium pulses, legumes, and
                        specialty crops to meet the diverse needs of industrial, retail, and export markets.
                    </p>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        With annual production capacity exceeding 100,000 tons and full traceability systems, we deliver
                        stable, cost-effective, and large-scale supply solutions that support sustainable food
                        production.
                    </p>
                </div>
                <div class="bg-slate-50 p-8 rounded-lg">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-4">Key Capabilities</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">100,000+ tons annual capacity</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">HACCP & ISO 22000 certified</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Full traceability systems</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Industrial, retail & export markets</span>
                        </li>
                    </ul>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Product Range Section -->
    <ComponentSection spacing="lg" background="transparent" :style="'background-color: hsl(var(--tree-poppy-100))'">
        <ComponentContainer size="lg" padding="responsive" :constrainWidth="true">
            <div class="text-center mb-12">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Our Agricultural Product Range
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-3xl mx-auto">
                    From pulses and legumes to specialty crops, our comprehensive range supports diverse food
                    manufacturing and agricultural needs.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Pulses & Legumes</h3>
                    <p class="font-body text-pickled-bluewood-700">Chickpeas, lentils, beans, and peas</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Specialty Crops</h3>
                    <p class="font-body text-pickled-bluewood-700">Unique and high-value agricultural products</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Bulk Ingredients</h3>
                    <p class="font-body text-pickled-bluewood-700">Large-scale supply for industrial applications</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Export Products</h3>
                    <p class="font-body text-pickled-bluewood-700">International market solutions</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Retail Supply</h3>
                    <p class="font-body text-pickled-bluewood-700">Packaged products for consumer markets</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Custom Processing</h3>
                    <p class="font-body text-pickled-bluewood-700">Tailored processing solutions</p>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- CTA Section -->
    <ComponentCtaGetInTouch
        description="Ready to secure reliable agricultural supply for your business? Contact us to discuss your requirements and discover how our comprehensive agricultural solutions can support your manufacturing needs and expand your market reach."
        backgroundColor="monza-300" />
</template>

<style scoped></style>