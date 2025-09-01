<script setup>
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentCtaGetInTouch from '@/components/forms/COMPONENT__CTA--GET-IN-TOUCH.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" :fullWidth="true">
        <ComponentHero title="Fresh Produce"
            subtitle="Premium fresh vegetables and fruits sourced directly from trusted farms. Our cold-chain logistics ensure peak freshness and extended shelf life for retail and food service applications."
            :fullWidth="true" backgroundImage="/assets/home/product-card__fresh-vegetables.png"
            overlayOpacity="50" />
    </ComponentSection>

    <!-- Overview Section -->
    <ComponentSection spacing="lg" background="transparent">
        <ComponentContainer size="lg" padding="responsive" :constrainWidth="true">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2
                        class="font-heading text-3xl md:text-4xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                        From Farm to Table Excellence
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed mb-6">
                        Our fresh produce division delivers premium vegetables and fruits with uncompromising quality
                        standards.
                        We work directly with trusted farmers to ensure the freshest ingredients reach your kitchen.
                    </p>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        With state-of-the-art cold-chain logistics and HACCP-certified processes, we maintain peak
                        freshness
                        from harvest to delivery, supporting both retail and food service applications.
                    </p>
                </div>
                <div class="bg-slate-50 p-8 rounded-lg">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-4">Key Features</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">Direct farm partnerships</span>
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
                            <span class="font-body text-pickled-bluewood-700">Cold-chain logistics</span>
                        </li>
                        <li class="flex items-start space-x-3">
                            <div class="w-5 h-5 bg-monza-600 rounded-full flex items-center justify-center mt-0.5">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="font-body text-pickled-bluewood-700">7-14 day shelf life</span>
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
                    Our Fresh Produce Range
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-3xl mx-auto">
                    From leafy greens to root vegetables, our comprehensive range covers all your fresh produce needs.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Leafy Greens</h3>
                    <p class="font-body text-pickled-bluewood-700">Spinach, kale, lettuce, and other fresh greens</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Root Vegetables</h3>
                    <p class="font-body text-pickled-bluewood-700">Carrots, potatoes, onions, and garlic</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <h3 class="font-heading text-xl font-semibold text-pickled-bluewood-800 mb-3">Fresh Fruits</h3>
                    <p class="font-body text-pickled-bluewood-700">Seasonal fruits and specialty varieties</p>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>

    <!-- CTA Section -->
    <ComponentCtaGetInTouch
        description="Ready to source premium fresh produce for your business? Contact us today to discuss your requirements and discover how our fresh produce solutions can enhance your menu and delight your customers."
        backgroundColor="monza-300" />
</template>

<style scoped></style>