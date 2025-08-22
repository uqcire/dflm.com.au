<script setup>
defineProps({
    features: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(feature =>
                typeof feature.title === 'string' &&
                typeof feature.description === 'string' &&
                (typeof feature.icon === 'string' || feature.icon === undefined) &&
                (typeof feature.highlighted === 'boolean' || feature.highlighted === undefined)
            )
        }
    },
    showTitle: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: 'Features'
    },
    layout: {
        type: String,
        default: 'vertical',
        validator: (value) => ['vertical', 'horizontal', 'grid'].includes(value)
    },
    variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'card', 'minimal'].includes(value)
    },
    highlightColor: {
        type: String,
        default: 'monza-500'
    }
})

const getLayoutClasses = (layout) => {
    switch (layout) {
        case 'horizontal':
            return 'flex flex-row gap-6 overflow-x-auto'
        case 'grid':
            return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        case 'vertical':
        default:
            return 'flex flex-col gap-6'
    }
}

const getVariantClasses = (variant, highlighted, highlightColor) => {
    if (highlighted) {
        return `bg-${highlightColor} text-white`
    }

    switch (variant) {
        case 'card':
            return 'bg-white rounded-lg shadow-md p-6 border border-gray-200'
        case 'minimal':
            return 'pb-6 border-b border-gray-200'
        case 'default':
        default:
            return 'bg-white rounded-lg p-4'
    }
}
</script>

<template>
    <div class="feature-list">
        <h2 v-if="showTitle" class="feature-list__title text-2xl font-bold font-playfair mb-6">{{ title }}</h2>

        <div :class="['feature-list__container', getLayoutClasses(layout)]">
            <div v-for="(feature, index) in features" :key="index" :class="[
                'feature-list__item',
                getVariantClasses(variant, feature.highlighted, highlightColor)
            ]">
                <div class="feature-list__content">
                    <div v-if="feature.icon" class="feature-list__icon mb-4">
                        <img :src="`/src/assets/icons/${feature.icon}.svg`" :alt="feature.title" class="w-8 h-8" />
                    </div>

                    <h3 class="feature-list__item-title text-lg font-semibold mb-2">{{ feature.title }}</h3>

                    <p class="feature-list__item-description text-gray-600">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>