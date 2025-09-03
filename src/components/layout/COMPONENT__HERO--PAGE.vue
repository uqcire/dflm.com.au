<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    imageSize: {
        type: String,
        default: 'md',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    ctaText: {
        type: String,
        default: ''
    },
    ctaLink: {
        type: String,
        default: ''
    },
    fullWidth: {
        type: Boolean,
        default: false
    },
    backgroundImage: {
        type: String,
        default: ''
    },
    overlayOpacity: {
        type: String,
        default: '40',
        validator: (value) => ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'].includes(value)
    }
})

// 16:9 aspect ratio image size mappings for different breakpoints
const getImageSizeClasses = (size) => {
    const sizeMap = {
        xs: 'w-full max-w-sm md:max-w-md lg:max-w-lg', // Small hero image
        sm: 'w-full max-w-md md:max-w-lg lg:max-w-xl', // Medium hero image
        md: 'w-full max-w-lg md:max-w-xl lg:max-w-2xl', // Default hero image
        lg: 'w-full max-w-xl md:max-w-2xl lg:max-w-3xl', // Large hero image
        xl: 'w-full max-w-2xl md:max-w-3xl lg:max-w-4xl' // Extra large hero image
    }
    return sizeMap[size] || sizeMap.md
}
</script>

<template>
    <section :class="[
        'page-hero',
        fullWidth ? 'hero-full-width' : ''
    ]">
        <!-- Full Width Background Image -->
        <div v-if="fullWidth && backgroundImage" class="absolute inset-0 w-full h-full">
            <img :src="backgroundImage" :alt="title" class="w-full h-full object-cover" />
            <div :class="`absolute inset-0 bg-black/${overlayOpacity}`"></div>
        </div>

        <div :class="[
            fullWidth ? 'relative z-10 h-full flex items-center justify-center px-4' : 'max-w-7xl mx-auto'
        ]">
            <div :class="[
                'text-center',
                fullWidth ? 'text-white max-w-4xl mx-auto' : ''
            ]">
                <h1 :class="[
                    'font-heading font-bold mb-4 pb-12 leading-tight',
                    fullWidth
                        ? 'text-5xl md:text-6xl lg:text-7xl text-white'
                        : 'text-4xl md:text-5xl lg:text-7xl text-pickled-bluewood-800'
                ]">
                    {{ title }}
                </h1>
                <h2 v-if="subtitle" :class="[
                    'font-heading max-w-3xl mx-auto mb-6 pb-12 leading-relaxed',
                    fullWidth
                        ? 'text-xl md:text-2xl lg:text-3xl font-medium text-white'
                        : 'text-xl md:text-4xl text-pickled-bluewood-600'
                ]">
                    {{ subtitle }}
                </h2>
                <div v-if="ctaText && ctaLink" class="mt-6">
                    <router-link :to="ctaLink"
                        class="hero-cta-button inline-flex items-center px-6 py-3 font-body text-base font-medium text-white bg-monza-600 border-0 rounded-lg shadow-sm transition-all duration-200 no-underline tracking-wide hover:bg-monza-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-monza-500 focus:ring-offset-2">
                        {{ ctaText }}
                    </router-link>
                </div>
            </div>

            <!-- 16:9 Aspect Ratio Image Container (only for non-fullWidth) -->
            <div v-if="!fullWidth && image" class="flex justify-center">
                <div :class="[
                    'relative overflow-hidden rounded-lg shadow-lg',
                    getImageSizeClasses(imageSize)
                ]">
                    <!-- 16:9 Aspect Ratio Container -->
                    <div class="aspect-video w-full">
                        <img :src="image" :alt="title"
                            class="w-full h-full object-contain transition-all duration-300 hover:scale-105" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Minimal scoped styles - everything else handled by Tailwind */

/* Ensure aspect-video works properly */
.aspect-video {
    aspect-ratio: 16 / 9;
}

/* Full width hero styles */
.hero-full-width {
    position: relative;
    height: 100vh;
    overflow: hidden;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
}
</style>