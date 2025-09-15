<script setup>
import ComponentImageDisplay from '@/components/ui/COMPONENT__IMAGE--DISPLAY.vue'

defineProps({
    product: {
        type: Object,
        required: true,
        validator: (value) => {
            // Basic validation - check if required properties exist
            return value &&
                typeof value.title === 'string' &&
                (value.description === undefined || typeof value.description === 'string');
        }
    },
    variant: {
        type: String,
        default: 'standard',
        validator: (value) => ['minimal', 'standard', 'detailed'].includes(value)
    },
    showLink: {
        type: Boolean,
        default: false
    },
    showSpecs: {
        type: Boolean,
        default: false
    },
    linkText: {
        type: String,
        default: 'View Product Details'
    },
    imageFit: {
        type: String,
        default: 'object-cover',
        validator: (value) => ['object-cover', 'object-contain', 'object-fill', 'object-scale-down', 'object-none'].includes(value)
    }
})

// Computed class combinations for variants
const getVariantClasses = (variant) => {
    switch (variant) {
        case 'detailed':
            return 'border border-slate-300'
        case 'minimal':
            return 'border border-slate-200 pb-4 shadow-none'
        case 'standard':
        default:
            return 'border border-slate-200'
    }
}

const getImageHeight = (variant) => {
    return 'h-56' // Increased from h-48 to h-56 for better proportions
}

const getContentPadding = (variant) => {
    return variant === 'minimal' ? 'p-3' : 'p-6'
}

const getTitleSize = (variant) => {
    return 'text-xl'
}
</script>

<template>
    <div class="product-card relative bg-white overflow-hidden transition-all duration-200 ease-out font-body hover:shadow-md lg:hover:-translate-y-0.5"
        :class="[
            variant === 'minimal' ? 'rounded-none' : 'rounded-lg',
            getVariantClasses(variant)
        ]" :aria-label="`Product: ${product.title}`">

        <!-- Product Image -->
        <div v-if="product.image && variant !== 'minimal'" class="w-full overflow-hidden border-b-6 border-monza-200"
            :class="getImageHeight(variant)">
            <ComponentImageDisplay :src="product.image" :alt="product.title" size="2xl" variant="plain"
                :objectFit="imageFit.replace('object-', '')" loading="lazy" class="w-full h-full" />
        </div>

        <!-- Product Content -->
        <div :class="getContentPadding(variant)">
            <!-- Product Title -->
            <h3 class="font-body font-semibold text-pickled-bluewood-900 mb-2 pb-4 leading-tight md:text-sm"
                :class="getTitleSize(variant)">
                {{ product.title }}
            </h3>

            <!-- Product Description -->
            <div v-if="product.description" class="pb-4">
                <p class="text-xs text-pickled-bluewood-800 leading-normal line-clamp-3">
                    {{ product.description }}
                </p>
            </div>

            <!-- Product Specifications (for detailed variant) -->
            <div v-if="variant === 'detailed' && product.specs" class="mb-4">
                <h4
                    class="text-xs font-body font-medium text-pickled-bluewood-700 pb-2 border-b border-monza-600 uppercase tracking-wide">
                    Specifications
                </h4>
                <ul class="text-xs pt-2 text-pickled-bluewood-700 list-none p-0">
                    <li v-for="(value, key) in product.specs" :key="key" class="mb-1 pl-4 relative text-xs">
                        <span class="absolute left-0 text-monza-600">•</span>
                        <span class="font-medium capitalize">{{ key }}:</span> {{ value }}
                    </li>
                </ul>
            </div>

            <!-- Price and Actions Row -->
            <div class="flex items-center justify-between gap-4">
                <!-- Action Button -->
                <router-link v-if="showLink" :to="product.link || '#'"
                    class="inline-flex items-center px-4 py-2 text-xs font-medium font-body text-white bg-monza-600 border-none rounded-md no-underline transition-all duration-200 ease-out tracking-wide hover:bg-monza-700 focus:outline-none focus:ring-2 focus:ring-monza-500 focus:ring-offset-2"
                    :aria-label="`${linkText} for ${product.title}`">
                    {{ linkText }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Shadow effects for different variants */
.product-card:not(.border-b) {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.product-card:hover:not(.border-b) {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Ensure the image container fills the card completely */
.product-card {
    position: relative;
}

/* Ensure the image display component fills its container */
:deep(.image-display-wrapper) {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
}

:deep(.image-display-wrapper img) {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
}
</style>