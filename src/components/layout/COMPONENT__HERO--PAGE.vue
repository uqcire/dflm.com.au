<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import COMPONENT__BREADCRUMB__NAVIGATION from '@/components/navigation/COMPONENT__BREADCRUMB--NAVIGATION.vue'

const props = defineProps({
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
    imageFit: {
        type: String,
        default: 'cover',
        validator: (value) => ['cover', 'contain', 'fill', 'scale-down', 'none'].includes(value)
    },
    backgroundImage: {
        type: String,
        default: ''
    },
    overlayOpacity: {
        type: String,
        default: '40',
        validator: (value) => ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'].includes(value)
    },
    breadcrumbs: {
        type: Array,
        default: () => []
    },
    showBreadcrumbs: {
        type: Boolean,
        default: true
    }
})

const route = useRoute()

// Generate breadcrumbs based on route if not provided
const computedBreadcrumbs = computed(() => {
    if (props.breadcrumbs && props.breadcrumbs.length > 0) {
        return props.breadcrumbs
    }

    // Auto-generate breadcrumbs from route
    const pathSegments = route.path.split('/').filter(Boolean)
    const breadcrumbItems = [{ name: 'Home', path: '/' }]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`

        // Convert route segment to readable name
        const name = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

        breadcrumbItems.push({
            name,
            path: currentPath
        })
    })

    return breadcrumbItems
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
            <img :src="backgroundImage" :alt="title"
                class="w-full h-full object-cover object-center min-h-full min-w-full" loading="eager" decoding="async"
                fetchpriority="high" style="object-position: center center;" />
            <div :class="`absolute inset-0 bg-black/${overlayOpacity} mobile:bg-black/30`"></div>
        </div>

        <!-- Breadcrumb Navigation - Top of Hero -->
        <div v-if="showBreadcrumbs && computedBreadcrumbs.length > 1" :class="[
            'flex justify-center pt-12 pl-12',
            fullWidth ? 'relative z-10' : 'max-w-7xl mx-auto px-4'
        ]">
            <COMPONENT__BREADCRUMB__NAVIGATION :items="computedBreadcrumbs"
                :class="fullWidth ? 'breadcrumb--light' : 'breadcrumb--dark'" />
        </div>

        <div :class="[
            fullWidth ? 'relative z-10 h-full flex flex-col justify-center px-4' : 'max-w-7xl mx-auto'
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
                        <!-- Desktop-optimized responsive sources for the home hero image -->
                        <picture v-if="image && image.includes('home__hero--factory-building.webp')">
                            <source type="image/avif"
                                srcset="/assets/hero-factory-768.avif 768w, /assets/hero-factory-1200.avif 1200w, /assets/hero-factory-1600.avif 1600w"
                                sizes="(max-width: 1024px) 90vw, 1200px" />
                            <source type="image/webp"
                                srcset="/assets/hero-factory-768.webp 768w, /assets/hero-factory-1200.webp 1200w, /assets/hero-factory-1600.webp 1600w"
                                sizes="(max-width: 1024px) 90vw, 1200px" />
                            <img :src="image" :alt="title" class="w-full h-full" :class="`object-${imageFit}`"
                                width="1200" height="675" loading="eager" decoding="async" fetchpriority="high" />
                        </picture>
                        <img v-else :src="image" :alt="title" class="w-full h-full" :class="`object-${imageFit}`"
                            loading="eager" decoding="async" fetchpriority="high" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import "tailwindcss" reference;

/* Minimal scoped styles - everything else handled by Tailwind */

/* Ensure aspect-video works properly */
.aspect-video {
    aspect-ratio: 16 / 9;
}

/* Full width hero styles */
.hero-full-width {
    position: relative;
    height: 100vh;
    height: 100dvh;
    /* Use dynamic viewport height for mobile */
    overflow: hidden;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
}

/* Ensure background image covers entire container */
.hero-full-width img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    min-width: 100%;
    min-height: 100%;
}

/* Mobile-specific adjustments */
@media (max-width: 768px) {
    .hero-full-width {
        height: 100vh;
        height: 100svh;
        /* Use small viewport height for mobile */
        min-height: 500px;
        /* Ensure minimum height */
    }

    .hero-full-width img {
        object-position: center center;
        /* Ensure proper image positioning */
        min-height: 100%;
        /* Ensure image covers full height */
        width: 100%;
        /* Ensure image covers full width */
    }

    /* Improve text readability on mobile */
    .hero-full-width .text-white {
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
}

/* Breadcrumb styling for hero - minimal overrides only */
.breadcrumb--light :deep(.el-breadcrumb__item) {
    @apply text-white;
}

.breadcrumb--light :deep(.el-breadcrumb__inner) {
    @apply text-white hover:text-[hsl(var(--tree-poppy-200))];
}

.breadcrumb--light :deep(.el-breadcrumb__separator) {
    @apply text-white/70;
}

.breadcrumb--dark :deep(.el-breadcrumb__item) {
    @apply text-slate-600;
}

.breadcrumb--dark :deep(.el-breadcrumb__inner) {
    @apply text-slate-600 hover:text-[hsl(var(--monza-600))];
}

.breadcrumb--dark :deep(.el-breadcrumb__separator) {
    @apply text-slate-400;
}
</style>