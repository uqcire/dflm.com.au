<script setup>
import facebookIcon from '/assets/icons/facebook.svg'
import instagramIcon from '/assets/icons/instagram.svg'
import linkedinIcon from '/assets/icons/linkedin.svg'
import rednoteIcon from '/assets/icons/rednote.svg'

const iconMap = {
    facebook: facebookIcon,
    instagram: instagramIcon,
    linkedin: linkedinIcon,
    rednote: rednoteIcon
}

defineProps({
    links: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(link =>
                typeof link.name === 'string' &&
                typeof link.icon === 'string' &&
                typeof link.url === 'string'
            )
        }
    },
    showTitle: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: 'Follow Us'
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'footer', 'standalone'].includes(value)
    }
})

const getSizeClasses = (size) => {
    switch (size) {
        case 'small':
            return 'w-4 h-4'
        case 'large':
            return 'w-12 h-12'
        case 'medium':
            return 'w-8 h-8'
        default:
            return 'w-10 h-10'
    }
}

const getIconSizeClasses = (size) => {
    switch (size) {
        case 'small':
            return 'w-4 h-4'
        case 'large':
            return 'w-12 h-12'
        case 'medium':
            return 'w-8 h-8'
        default:
            return 'w-6 h-6'
    }
}

// Provide explicit pixel dimensions to reduce CLS
const getIconPixelSize = (size) => {
    switch (size) {
        case 'small':
            return 16
        case 'large':
            return 48
        case 'medium':
            return 32
        default:
            return 24
    }
}

const getVariantClasses = (variant) => {
    switch (variant) {
        case 'footer':
            return 'bg-monza-500 hover:bg-monza-200 text-white'
        case 'standalone':
            return 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 shadow-sm'
        case 'default':
        default:
            return 'bg-white hover:bg-gray-100 text-gray-700'
    }
}
</script>

<template>
    <div class="social-links">
        <h2 v-if="showTitle" class="social-links__title text-lg font-semibold font-playfair pb-2">{{ title }}</h2>

        <div class="social-links__container flex flex-wrap gap-3">
            <a v-for="(link, index) in links" :key="index" :href="link.url" :class="[
                'social-links__link',
                'rounded-full',
                'flex',
                'items-center',
                'justify-center',
                'transition-colors',
                'duration-200',
                getSizeClasses(size),
                getVariantClasses(variant)
            ]" :aria-label="`Follow us on ${link.name}`" target="_blank" rel="noopener noreferrer">
                <img :src="iconMap[link.icon]" :alt="link.name" :width="getIconPixelSize(size)"
                    :height="getIconPixelSize(size)" :class="[
                        'social-links__icon',
                        getIconSizeClasses(size)
                    ]" />
            </a>
        </div>
    </div>
</template>