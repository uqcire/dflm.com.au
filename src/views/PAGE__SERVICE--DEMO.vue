<script setup>
import COMPONENT__SERVICE__CARD from '../components/COMPONENT__SERVICE--CARD.vue'

const services = [
    {
        title: 'Import & Distribution',
        description: 'We specialize in importing and distributing high-quality food products from around the world, ensuring timely delivery and competitive pricing.',
        image: '/src/assets/brand__logo--icon.png',
        icon: 'import',
        linkUrl: '/services/import-distribution',
        linkText: 'Explore Services'
    },
    {
        title: 'OEM / Private Label',
        description: 'Our OEM and private label services allow you to create custom-branded products that meet your specific requirements and quality standards.',
        image: '/src/assets/brand__logo--icon.png',
        icon: 'label',
        linkUrl: '/services/oem',
        linkText: 'Learn More'
    },
    {
        title: 'Quality Assurance',
        description: 'We implement rigorous quality control measures at every stage of the supply chain to ensure product excellence and safety.',
        image: '/src/assets/brand__logo--icon.png',
        icon: 'check',
        featured: true
    },
    {
        title: 'Logistics & Supply Chain',
        description: 'Our comprehensive logistics and supply chain solutions ensure efficient transportation and storage of your products.',
        image: '/src/assets/brand__logo--icon.png',
        icon: 'truck'
    }
]
</script>

<template>
    <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-8">Service Card Component Demo</h1>

        <div class="space-y-12">
            <!-- Default Variant with Top Image -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Default Variant (Top Image)</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <COMPONENT__SERVICE__CARD v-for="(service, index) in services.slice(0, 3)" :key="index"
                        :service="service" variant="default" image-position="top" />
                </div>
            </section>

            <!-- Featured Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Featured Variant</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <COMPONENT__SERVICE__CARD :service="services[2]" variant="featured" image-position="top" />
                    <COMPONENT__SERVICE__CARD :service="services[0]" variant="featured" image-position="top" />
                </div>
            </section>

            <!-- Minimal Variant -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Minimal Variant</h2>
                <div class="space-y-6">
                    <COMPONENT__SERVICE__CARD v-for="(service, index) in services.slice(0, 2)" :key="index"
                        :service="service" variant="minimal" image-position="left" />
                </div>
            </section>

            <!-- Left Image Position -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Left Image Position</h2>
                <div class="space-y-6">
                    <COMPONENT__SERVICE__CARD v-for="(service, index) in services.slice(0, 2)" :key="index"
                        :service="service" variant="default" image-position="left" />
                </div>
            </section>

            <!-- Background Image Position -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Background Image Position</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <COMPONENT__SERVICE__CARD v-for="(service, index) in services.slice(0, 2)" :key="index"
                        :service="service" variant="default" image-position="background" />
                </div>
            </section>

            <!-- Without Link -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Without Link</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <COMPONENT__SERVICE__CARD v-for="(service, index) in services.slice(0, 3)" :key="index"
                        :service="service" variant="default" image-position="top" :show-link="false" />
                </div>
            </section>
        </div>
    </div>
</template>