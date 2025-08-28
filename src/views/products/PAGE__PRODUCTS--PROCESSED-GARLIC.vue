<script setup>
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true">
        <ComponentHero title="Processed Garlic"
            subtitle="From fresh garlic to dehydrated, pickled, and black garlic varieties. Our garlic products are processed under strict quality controls for consistent flavor and safety across all applications."
            :fullWidth="true" backgroundImage="/src/assets/home/product-card__garlic.jpg" overlayOpacity="50" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="responsive" :constrainWidth="true">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2
                        class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        Premium Garlic Processing Excellence
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed mb-6">
                        Our garlic processing facility combines traditional methods with modern technology to deliver
                        consistent, high-quality garlic products that meet the exacting standards of food manufacturers
                        worldwide.
                    </p>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        From fresh peeled garlic to specialty black garlic, our range supports diverse culinary
                        applications
                        while maintaining the authentic flavor profiles that chefs and manufacturers demand.
                    </p>
                </div>
                <div class="bg-slate-50 p-8 rounded-lg">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-4">Processing Methods
                    </h3>
                    <ul class="space-y-3">
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Fresh peeled garlic</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Dehydrated garlic</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Pickled garlic</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Black garlic</span>
                        </li>
                    </ul>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- Applications Section -->
    <ComponentSection spacing="lg" background="transparent" :style="'background-color: hsl(var(--cello-100))'">
        <ComponentContainer size="lg" padding="responsive" :constrainWidth="true">
            <div class="text-center mb-12">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Applications & Markets
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-3xl mx-auto">
                    Our garlic products serve diverse markets and applications, from food service to industrial
                    manufacturing.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Food Service</h3>
                    <p class="font-body text-pickled-bluewood-700">Restaurants, catering, and hospitality applications
                    </p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Manufacturing</h3>
                    <p class="font-body text-pickled-bluewood-700">Sauce, condiment, and processed food production</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Retail</h3>
                    <p class="font-body text-pickled-bluewood-700">Supermarkets and specialty food stores</p>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- CTA Section -->
    <ComponentCtaGetInTouch
        description="Looking for premium garlic products for your business? Contact us to discuss your specific requirements and discover how our processed garlic solutions can enhance your products and streamline your operations."
        backgroundColor="monza-300" />
</template>

<style scoped></style>