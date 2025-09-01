<script setup>
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true">
        <ComponentHero title="Snacks & Consumer Products"
            subtitle="Ready-to-eat snacks and consumer products designed for modern lifestyles. From healthy snack options to convenient meal solutions, we deliver quality and taste that consumers trust."
            :fullWidth="true" backgroundImage="/assets/home/product-card__pulses.png" overlayOpacity="50" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="responsive" :constrainWidth="true">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2
                        class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        Modern Snacking Solutions
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed mb-6">
                        Our snacks and consumer products division creates innovative, ready-to-eat solutions that meet
                        the
                        evolving demands of today's health-conscious consumers. We combine premium ingredients with
                        modern processing techniques to deliver products that taste great and support healthy
                        lifestyles.
                    </p>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        From nutritious snack options to convenient meal solutions, our range supports both retail
                        markets
                        and convenience stores with products that deliver exceptional quality and extended shelf life.
                    </p>
                </div>
                <div class="bg-slate-50 p-8 rounded-lg">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-4">Product Benefits</h3>
                    <ul class="space-y-3">
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
                            <span class="font-body text-pickled-bluewood-700">6-18 month shelf life</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Retail and convenience ready</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Health-conscious formulations</span>
                        </li>
                    </ul>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Product Categories Section -->
    <ComponentSection spacing="lg" background="transparent" :style="'background-color: hsl(var(--cello-100))'">
        <ComponentContainer size="lg" padding="responsive" :constrainWidth="true">
            <div class="text-center mb-12">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Our Snacks & Consumer Products
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-3xl mx-auto">
                    From healthy snacks to convenient meal solutions, our range caters to diverse consumer preferences
                    and lifestyles.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Healthy Snacks</h3>
                    <p class="font-body text-pickled-bluewood-700">Nutritious, plant-based snack options</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Convenience Foods</h3>
                    <p class="font-body text-pickled-bluewood-700">Ready-to-eat meal solutions</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Specialty Products
                    </h3>
                    <p class="font-body text-pickled-bluewood-700">Unique and innovative food items</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Retail Ready</h3>
                    <p class="font-body text-pickled-bluewood-700">Packaged for supermarket shelves</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Convenience Store</h3>
                    <p class="font-body text-pickled-bluewood-700">Perfect for grab-and-go markets</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Private Label</h3>
                    <p class="font-body text-pickled-bluewood-700">Custom branding solutions</p>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- CTA Section -->
    <ComponentCtaGetInTouch
        description="Ready to expand your product range with premium snacks and consumer products? Contact us to discuss your requirements and discover how our ready-to-eat solutions can enhance your retail offerings and meet consumer demands."
        backgroundColor="monza-300" />
</template>

<style scoped></style>