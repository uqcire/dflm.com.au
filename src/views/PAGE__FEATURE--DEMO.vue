<script setup>
import COMPONENT__FEATURE__LIST from '../components/COMPONENT__FEATURE--LIST.vue'

const features = [
    {
        title: 'Premium Quality',
        description: 'We source only the highest quality products from trusted suppliers around the world.',
        icon: 'check'
    },
    {
        title: 'Fast Delivery',
        description: 'Our efficient logistics network ensures timely delivery to your doorstep.',
        icon: 'truck'
    },
    {
        title: 'Competitive Pricing',
        description: 'We offer competitive prices without compromising on quality or service.',
        icon: 'dollar'
    },
    {
        title: 'Expert Support',
        description: 'Our team of experts is always ready to assist you with any questions or concerns.',
        icon: 'support',
        highlighted: true
    },
    {
        title: 'Sustainable Sourcing',
        description: 'We are committed to environmentally responsible and sustainable sourcing practices.',
        icon: 'leaf'
    },
    {
        title: 'Custom Solutions',
        description: 'Tailored solutions to meet your specific business requirements and preferences.',
        icon: 'settings'
    }
]
</script>

<template>
    <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-8">Feature List Component Demo</h1>

        <div class="space-y-12">
            <!-- Default Variant with Vertical Layout -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Default Variant (Vertical Layout)</h2>
                <COMPONENT__FEATURE__LIST :features="features" title="Our Features" layout="vertical"
                    variant="default" />
            </section>

            <!-- Card Variant with Grid Layout -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Card Variant (Grid Layout)</h2>
                <COMPONENT__FEATURE__LIST :features="features" title="Our Features" layout="grid" variant="card" />
            </section>

            <!-- Minimal Variant with Horizontal Layout -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Minimal Variant (Horizontal Layout)</h2>
                <COMPONENT__FEATURE__LIST :features="features" title="Our Features" layout="horizontal"
                    variant="minimal" />
            </section>

            <!-- Without Title -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Without Title</h2>
                <COMPONENT__FEATURE__LIST :features="features.slice(0, 3)" :show-title="false" layout="grid" />
            </section>

            <!-- Custom Highlight Color -->
            <section>
                <h2 class="text-2xl font-semibold mb-4">Custom Highlight Color</h2>
                <COMPONENT__FEATURE__LIST :features="features" title="Our Features" layout="grid"
                    highlightColor="blue-500" />
            </section>
        </div>
    </div>
</template>