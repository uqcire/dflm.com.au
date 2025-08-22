<script setup>
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
</script>

<template>
    <!-- Hero -->
    <ComponentSection spacing="xs" containerSize="full">
        <ComponentHero title="Mission & Vision" subtitle="Building a better legacy of global environmental leadership"
            :fullWidth="true" backgroundImage="/src/assets/hero/visual__garlic--realistic-conceptual-balance.jpg"
            overlayOpacity="40" />
    </ComponentSection>

    <!-- Mission Section -->
    <ComponentSection spacing="lg" background="white">
        <ComponentContainer size="xl" padding="md">
            <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="center">
                <!-- Left Column - Content -->
                <div class="space-y-6">
                    <h2
                        class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
                        Our Mission
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        Our mission is to bridge the gap between global agricultural excellence and Australian market
                        needs. We envision becoming the most trusted partner for food businesses across Australia,
                        delivering innovative solutions that drive growth and sustainability in the food industry.
                    </p>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        We are committed to building a better legacy of global environmental leadership and raising the
                        bar in tackling climate change, protecting nature, and caring for people throughout our value
                        chain.
                    </p>
                </div>

                <!-- Right Column - Image/Visual -->
                <div class="flex justify-center lg:justify-end">
                    <div class="w-full max-w-md">
                        <div class="bg-cello-100 rounded-lg p-8 text-center">
                            <div class="text-6xl mb-4">🌱</div>
                            <h3 class="font-heading text-xl font-bold text-cello-800 mb-2">Sustainable Growth</h3>
                            <p class="font-body text-sm text-cello-700">Committed to environmental stewardship</p>
                        </div>
                    </div>
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Vision Section -->
    <ComponentSection spacing="lg" background="subtle">
        <ComponentContainer size="xl" padding="md">
            <ComponentGrid :columns="{ base: 1, lg: 2 }" gap="xl" align="center">
                <!-- Left Column - Image/Visual -->
                <div class="flex justify-center lg:justify-start">
                    <div class="w-full max-w-md">
                        <div class="bg-monza-100 rounded-lg p-8 text-center">
                            <div class="text-6xl mb-4">🎯</div>
                            <h3 class="font-heading text-xl font-bold text-monza-800 mb-2">Innovation Focus</h3>
                            <p class="font-body text-sm text-monza-700">Driving progress through purpose-led science</p>
                        </div>
                    </div>
                </div>

                <!-- Right Column - Content -->
                <div class="space-y-6">
                    <h2
                        class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
                        Our Vision
                    </h2>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        We envision becoming the most trusted partner for food businesses across Australia, delivering
                        innovative solutions that drive growth and sustainability in the food industry.
                    </p>
                    <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed">
                        With over 150 years of combined industry experience, we aim to be the leading force in
                        connecting world-class supply chains with local industry needs, ensuring consistent quality and
                        reliable service.
                    </p>
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Values Section -->
    <ComponentSection spacing="lg" background="white">
        <ComponentContainer size="xl" padding="md">
            <div class="text-center mb-12">
                <h2
                    class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight mb-6">
                    Our Core Values
                </h2>
                <p class="font-body text-lg text-pickled-bluewood-700 leading-relaxed max-w-3xl mx-auto">
                    These values guide everything we do and shape our relationships with partners, clients, and
                    communities.
                </p>
            </div>

            <ComponentGrid :columns="{ base: 1, md: 2, lg: 3 }" gap="lg" align="stretch">
                <!-- Value 1 -->
                <div class="bg-slate-50 rounded-lg p-8 text-center">
                    <div class="text-4xl mb-4">🤝</div>
                    <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-3">Trust & Reliability</h3>
                    <p class="font-body text-sm text-pickled-bluewood-700">
                        Building lasting partnerships through consistent quality and dependable service.
                    </p>
                </div>

                <!-- Value 2 -->
                <div class="bg-slate-50 rounded-lg p-8 text-center">
                    <div class="text-4xl mb-4">🌍</div>
                    <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-3">Sustainability</h3>
                    <p class="font-body text-sm text-pickled-bluewood-700">
                        Committed to environmental stewardship and responsible business practices.
                    </p>
                </div>

                <!-- Value 3 -->
                <div class="bg-slate-50 rounded-lg p-8 text-center">
                    <div class="text-4xl mb-4">💡</div>
                    <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-3">Innovation</h3>
                    <p class="font-body text-sm text-pickled-bluewood-700">
                        Driving progress through purpose-led science and continuous improvement.
                    </p>
                </div>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>

    <!-- Call to Action -->
    <ComponentSection spacing="lg" background="transparent" style="background-color: hsl(var(--cello-600))">
        <ComponentContainer size="lg" padding="md">
            <div class="text-center space-y-6">
                <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    Ready to Partner With Us?
                </h2>
                <p class="font-body text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                    Discover how our mission and vision translate into real solutions for your business needs.
                </p>
                <div class="pt-4">
                    <a href="/contact"
                        class="inline-flex items-center px-8 py-4 bg-white text-cello-600 font-medium text-lg rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform border-2 border-white">
                        Get in Touch
                    </a>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>
</template>

<style scoped>
/* Smooth scrolling for the entire page */
html {
    scroll-behavior: smooth;
}

/* Section transitions */
section {
    transition: all 0.3s ease;
}
</style>