<script setup>
defineProps({
    src: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    size: {
        type: String,
        default: 'md',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(value)
    },
    variant: {
        type: String,
        default: 'plain',
        validator: (value) => ['plain', 'circular', 'rounded', 'card'].includes(value)
    },
    objectFit: {
        type: String,
        default: 'cover',
        validator: (value) => ['contain', 'cover', 'fill', 'none', 'scale-down'].includes(value)
    },
    loading: {
        type: String,
        default: 'lazy',
        validator: (value) => ['lazy', 'eager'].includes(value)
    }
})

// Size mappings for different breakpoints
const getSizeClasses = (size) => {
    const sizeMap = {
        // Extra Small - For icons and small thumbnails
        xs: 'w-auto h-16 md:w-20 md:h-20',

        // Small - For social media icons and small cards
        sm: 'w-auto h-24 md:w-32 md:h-32',

        // Medium - For product cards and medium content images
        md: 'w-auto h-32 md:w-48 md:h-48',

        // Large - For section images and featured content
        lg: 'w-48 h-48 md:w-64 md:h-64',

        // Extra Large - For hero images and large banners
        xl: 'w-64 h-64 md:w-80 md:h-80',

        // 2XL - For full-width hero sections
        '2xl': 'w-auto h-72 md:w-128 md:h-96',

        // Full - Maximum height and width (fills container)
        full: 'w-full h-full'
    }
    return sizeMap[size] || sizeMap.md
}

// Variant styling
const getVariantClasses = (variant) => {
    const variantMap = {
        plain: '',
        circular: 'rounded-full overflow-hidden bg-white shadow-lg p-4',
        rounded: 'rounded-lg overflow-hidden bg-white shadow-md p-2',
        card: 'rounded-xl overflow-hidden bg-white shadow-lg border border-slate-200 p-4'
    }
    return variantMap[variant] || ''
}

// Object fit classes
const getObjectFitClasses = (objectFit) => {
    // Direct mapping to Tailwind classes
    if (!objectFit) return 'object-cover'
    return `object-${objectFit}`
}
</script>

<template>
    <div :class="[
        'image-display-wrapper transition-all duration-300 overflow-hidden',
        getSizeClasses(size),
        getVariantClasses(variant),
        { 'flex items-center justify-center': variant !== 'plain' }
    ]">
        <img :src="src" :alt="alt" :loading="loading" :class="[
            'transition-all duration-300 w-full h-full',
            getObjectFitClasses(objectFit),
            'object-center',
            variant === 'plain' ? '' : 'max-w-full max-h-full'
        ]" />
    </div>
</template>

<style scoped>
/* Ensure image fills container completely */
.image-display-wrapper {
    position: relative;
    display: block;
}

.image-display-wrapper img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-position: center;
}

/* Additional hover effects for variants */
.image-display-wrapper:hover {
    transform: scale(1.02);
}

.image-display-wrapper.circular:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.image-display-wrapper.card:hover {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Prevent hover effects on plain variant */
.image-display-wrapper:not(.circular):not(.card):not(.rounded):hover {
    transform: none;
}
</style>