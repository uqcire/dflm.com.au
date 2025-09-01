<script setup>
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'

// Props
const props = defineProps({
    title: {
        type: String,
        default: 'Get in touch'
    },
    description: {
        type: String,
        default: 'Did you know that you can contact different departments and functions from E-Sunrise Australia such as media team, sustainability team and our investors team?'
    },
    buttonText: {
        type: String,
        default: 'Contact us'
    },
    buttonLink: {
        type: String,
        default: '/contact'
    },
    background: {
        type: String,
        default: 'transparent'
    },
    backgroundColor: {
        type: String,
        default: 'monza-100'
    },
    backgroundStyle: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <ComponentSection spacing="sm" :background="background" :style="`background-color: hsl(var(--${backgroundColor}))`">
        <ComponentContainer size="lg" padding="sm">
            <div class="text-center space-y-6">
                <h3
                    class="font-heading text-3xl pb-8 md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
                    {{ title }}
                </h3>
                <p
                    class="font-body text-lg md:text-xl text-pickled-bluewood-700 leading-relaxed max-w-4xl mx-auto pt-4">
                    {{ description }}
                </p>
                <div class="pt-8">
                    <router-link :to="buttonLink"
                        class="inline-flex items-center px-6 py-3 font-body text-base font-medium text-white bg-monza-600 border-0 rounded-lg shadow-sm transition-all duration-200 no-underline tracking-wide hover:bg-monza-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-monza-500 focus:ring-offset-2">
                        {{ buttonText }}
                    </router-link>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>
</template>