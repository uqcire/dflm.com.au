<script setup>
defineProps({
    product: {
        type: Object,
        required: true,
        validator: (value) => {
            return typeof value.title === 'string' &&
                typeof value.description === 'string' &&
                (typeof value.image === 'string' || value.image === undefined) &&
                (typeof value.price === 'string' || value.price === undefined) &&
                (typeof value.category === 'string' || value.category === undefined) &&
                (typeof value.linkText === 'string' || value.linkText === undefined) &&
                (typeof value.linkUrl === 'string' || value.linkUrl === undefined) &&
                (typeof value.featured === 'boolean' || value.featured === undefined) &&
                (typeof value.badge === 'string' || value.badge === undefined)
        }
    },
    variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'featured', 'minimal'].includes(value)
    },
    showPrice: {
        type: Boolean,
        default: true
    },
    showCategory: {
        type: Boolean,
        default: true
    },
    showLink: {
        type: Boolean,
        default: true
    },
    linkText: {
        type: String,
        default: 'View Details'
    }
})

const getVariantClasses = (variant, featured) => {
    if (featured) {
        return 'border-2 border-monza-500 shadow-lg'
    }

    switch (variant) {
        case 'featured':
            return 'border border-monza-300 shadow-md'
        case 'minimal':
            return 'border-b border-gray-200 pb-4'
        case 'default':
        default:
            return 'border border-gray-200 shadow-sm'
    }
}
</script>

<template>
    <div :class="[
        'product-card',
        'bg-white',
        'rounded-lg',
        'overflow-hidden',
        'transition-all',
        'duration-300',
        'hover:shadow-lg',
        'flex',
        'flex-col',
        getVariantClasses(variant, product.featured)
    ]">
        <!-- Badge -->
        <div v-if="product.badge" class="product-card__badge absolute top-4 right-4 z-10">
            <span class="bg-monza-500 text-white text-xs font-bold px-2 py-1 rounded">
                {{ product.badge }}
            </span>
        </div>

        <!-- Image -->
        <div class="product-card__image-wrapper relative">
            <img v-if="product.image" :src="product.image" :alt="product.title"
                class="product-card__image w-full h-48 object-cover" />
            <div v-else
                class="product-card__image-placeholder w-full h-48 bg-gray-200 flex items-center justify-center">
                <span class="text-gray-400">No Image</span>
            </div>
        </div>

        <!-- Content -->
        <div class="product-card__content p-6 flex flex-col flex-1">
            <!-- Category -->
            <div v-if="showCategory && product.category" class="product-card__category mb-2">
                <span class="text-sm text-monza-600 font-medium">{{ product.category }}</span>
            </div>

            <!-- Title -->
            <h3 class="product-card__title text-xl font-bold font-playfair mb-3 text-gray-900">
                {{ product.title }}
            </h3>

            <!-- Description -->
            <p class="product-card__description text-gray-600 mb-4 flex-1">
                {{ product.description }}
            </p>

            <!-- Price -->
            <div v-if="showPrice && product.price" class="product-card__price mb-4">
                <span class="text-lg font-bold text-monza-600">{{ product.price }}</span>
            </div>

            <!-- Link -->
            <div v-if="showLink" class="product-card__link mt-auto">
                <a :href="product.linkUrl || '#'"
                    class="product-card__link-text inline-flex items-center font-medium text-monza-600 hover:text-monza-800 transition-colors duration-200">
                    {{ product.linkText || linkText }}
                    <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>