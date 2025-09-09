<script setup>
// Props
const props = defineProps({
    // Main content (left column)
    mainTitle: {
        type: String,
        required: true
    },
    mainDescription: {
        type: String,
        required: true
    },
    // Features (right column)
    features: {
        type: Array,
        required: true,
        validator: (features) => {
            return features.every(feature =>
                feature.title &&
                feature.description
            )
        }
    },
    // Styling options
    backgroundColor: {
        type: String,
        default: 'bg-[hsl(var(--cello-100))]' // Default orange background as shown in image
    },
    textColor: {
        type: String,
        default: 'text-black'
    },
    mainTitleClass: {
        type: String,
        default: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-8'
    },
    mainDescriptionClass: {
        type: String,
        default: 'text-lg md:text-xl leading-relaxed'
    },
    featureTitleClass: {
        type: String,
        default: 'text-xl md:text-2xl font-bold leading-tight'
    },
    featureDescriptionClass: {
        type: String,
        default: 'text-base md:text-lg leading-relaxed'
    },
    // Layout options
    gap: {
        type: String,
        default: 'xl',
        validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl'].includes(value)
    },
    padding: {
        type: String,
        default: 'responsive',
        validator: (value) => ['none', 'sm', 'md', 'lg', 'xl', 'responsive'].includes(value)
    }
})

// Gap size mapping
const getGapClass = (gap) => {
    const gapMap = {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8',
        xl: 'gap-12',
        '2xl': 'gap-16'
    }
    return gapMap[gap] || gapMap.xl
}

// Padding size mapping
const getPaddingClass = (padding) => {
    const paddingMap = {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
        xl: 'p-12',
        responsive: 'p-6 md:p-8 lg:p-12 xl:p-16'
    }
    return paddingMap[padding] || paddingMap.responsive
}
</script>

<template>
    <section :class="[
        'features-two-column',
        backgroundColor,
        textColor,
        getPaddingClass(padding)
    ]">
        <div class="max-w-7xl mx-auto">
            <div :class="[
                'grid grid-cols-1 lg:grid-cols-2',
                getGapClass(gap),
                'items-start'
            ]">
                <!-- Left Column - Main Content -->
                <div class="space-y-6">
                    <h2 :class="mainTitleClass">
                        {{ mainTitle }}
                    </h2>
                    <p :class="mainDescriptionClass">
                        {{ mainDescription }}
                    </p>
                </div>

                <!-- Right Column - Features -->
                <div class="space-y-8">
                    <div v-for="(feature, index) in features" :key="index" class="space-y-3">
                        <div class="flex items-start space-x-4">
                            <!-- Checkmark Icon -->
                            <div class="flex-shrink-0 mt-1">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>

                            <!-- Feature Content -->
                            <div class="flex-1">
                                <h3 :class="featureTitleClass">
                                    {{ feature.title }}
                                </h3>
                                <p :class="featureDescriptionClass" class="mt-2">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Component-specific styles if needed */
.features-two-column {
    /* Any additional styling can go here */
}
</style>