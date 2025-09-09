<script setup>
import { useRouter } from 'vue-router'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentButtonCustom from '@/components/ui/COMPONENT__BUTTON--CUSTOM.vue'

// Router
const router = useRouter()

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
    buttonVariant: {
        type: String,
        default: 'danger',
        validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
    },
    buttonSize: {
        type: String,
        default: 'lg',
        validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    buttonFullWidth: {
        type: Boolean,
        default: false
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

// Navigation handler
const handleButtonClick = () => {
    router.push(props.buttonLink)
}
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
                    <ComponentButtonCustom :variant="buttonVariant" :size="buttonSize" :fullWidth="buttonFullWidth"
                        @click="handleButtonClick">
                        {{ buttonText }}
                    </ComponentButtonCustom>
                </div>
            </div>
        </ComponentContainer>
    </ComponentSection>
</template>