<script setup>
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true">
        <ComponentHero title="Condiments & Sauces"
            subtitle="Premium sauces and condiments crafted for food service and retail markets. Our range includes garlic sauces, specialty condiments, and custom formulations for diverse culinary applications."
            :fullWidth="true" backgroundImage="/src/assets/home/product-card__dehydrated-vegetables.png"
            overlayOpacity="50" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="responsive" :constrainWidth="true">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2
                        class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        Crafting Culinary Excellence
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed mb-6">
                        Our condiments and sauces division specializes in creating premium flavor solutions that enhance
                        any culinary creation. We combine traditional recipes with modern processing techniques to
                        deliver
                        consistent, high-quality products.
                    </p>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        From classic garlic sauces to innovative specialty condiments, our range supports both food
                        service
                        operations and retail markets with products that deliver exceptional taste and extended shelf
                        life.
                    </p>
                </div>
                <div class="bg-slate-50 p-8 rounded-lg">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-4">Product Features</h3>
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
                            <span class="font-body text-pickled-bluewood-700">12-24 month shelf life</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Bulk and retail formats</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Custom formulations available</span>
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
                    Our Condiments & Sauces Range
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-3xl mx-auto">
                    From classic favorites to innovative specialty products, our comprehensive range meets diverse
                    culinary needs.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Garlic Sauces</h3>
                    <p class="font-body text-pickled-bluewood-700">Traditional and flavored garlic sauces</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Specialty Condiments
                    </h3>
                    <p class="font-body text-pickled-bluewood-700">Unique and artisanal condiment varieties</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Dipping Sauces</h3>
                    <p class="font-body text-pickled-bluewood-700">Perfect for food service applications</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Custom Blends</h3>
                    <p class="font-body text-pickled-bluewood-700">Tailored formulations for specific needs</p>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- CTA Section -->
    <ComponentCtaGetInTouch
        description="Ready to enhance your menu with premium condiments and sauces? Contact us to discuss your requirements and discover how our flavor solutions can elevate your culinary offerings and delight your customers."
        backgroundColor="monza-300" />
</template>

<style scoped></style>