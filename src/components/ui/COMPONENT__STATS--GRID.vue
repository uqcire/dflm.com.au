<script setup>
import ComponentGrid from '../layout/COMPONENT__GRID.vue'

defineProps({
    stats: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(stat =>
                typeof stat.value !== 'undefined' &&
                typeof stat.label === 'string'
            )
        }
    },
    variant: {
        type: String,
        default: 'standard',
        validator: (value) => ['minimal', 'standard', 'detailed', 'cards'].includes(value)
    },
    columns: {
        type: [Number, Object],
        default: () => ({ base: 1, sm: 2, lg: 3, xl: 4 })
    },
    alignment: {
        type: String,
        default: 'center',
        validator: (value) => ['left', 'center', 'right'].includes(value)
    },
    showIcons: {
        type: Boolean,
        default: true
    },
    showTrends: {
        type: Boolean,
        default: true
    },
    showDescriptions: {
        type: Boolean,
        default: true
    }
})

// Tailwind class mappings
const getVariantClasses = (variant) => {
    switch (variant) {
        case 'cards':
            return 'p-6 bg-white border border-slate-200 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 cursor-pointer'
        case 'detailed':
            return 'p-6 bg-slate-50 border border-slate-200 rounded-md'
        case 'minimal':
            return 'p-4'
        case 'standard':
        default:
            return 'p-4 bg-white border border-slate-100 rounded'
    }
}

const getAlignmentClasses = (alignment) => {
    const alignMap = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    }
    return alignMap[alignment] || 'text-center'
}

const getIconSizeClasses = (variant) => {
    return (variant === 'detailed' || variant === 'cards') ? 'text-4xl' : 'text-3xl'
}

const getValueSizeClasses = (variant) => {
    switch (variant) {
        case 'detailed':
        case 'cards':
            return 'text-5xl'
        case 'minimal':
            return 'text-3xl'
        case 'standard':
        default:
            return 'text-4xl'
    }
}

const getTrendColorClasses = (trend) => {
    if (!trend || !trend.direction) return 'text-slate-600'

    switch (trend.direction) {
        case 'up': return 'text-green-600'
        case 'down': return 'text-red-600'
        default: return 'text-slate-600'
    }
}

const formatValue = (value) => {
    // Handle different value formats (numbers, percentages, etc.)
    if (typeof value === 'string') {
        // If it already contains formatting, return as-is
        return value
    }

    if (typeof value === 'number') {
        // Format large numbers with commas
        return value.toLocaleString()
    }

    return String(value)
}
</script>

<template>
    <section class="stats-grid font-body" role="region" aria-label="Statistics">

        <ComponentGrid :columns="columns" gap="lg" align="stretch">

            <article v-for="(stat, index) in stats" :key="stat.id || index"
                class="stat-item relative transition-all duration-200 ease-out" :class="[
                    getVariantClasses(variant),
                    getAlignmentClasses(alignment)
                ]" :aria-label="`${stat.label}: ${stat.value}`">

                <!-- Icon -->
                <div v-if="showIcons && stat.icon" class="text-monza-600 mb-3 leading-none"
                    :class="getIconSizeClasses(variant)" :aria-hidden="true">
                    {{ stat.icon }}
                </div>

                <!-- Value -->
                <div class="stat-value font-black text-slate-900 leading-none mb-2 font-body"
                    :class="getValueSizeClasses(variant)">
                    {{ formatValue(stat.value) }}

                    <!-- Trend Indicator -->
                    <span v-if="showTrends && stat.trend" class="text-lg font-normal ml-2"
                        :class="getTrendColorClasses(stat.trend)"
                        :aria-label="`Trend: ${stat.trend.direction === 'up' ? 'increasing' : stat.trend.direction === 'down' ? 'decreasing' : 'neutral'}`">

                        <!-- Trend Value -->
                        <span v-if="stat.trend.value" class="text-sm font-medium ml-1">
                            {{ stat.trend.value }}
                        </span>
                    </span>
                </div>

                <!-- Label -->
                <h3 class="text-lg font-semibold text-slate-900 mb-2 font-heading leading-tight md:text-xl">
                    {{ stat.label }}
                </h3>

                <!-- Description -->
                <p v-if="(variant === 'detailed' || variant === 'cards') && stat.description && showDescriptions"
                    class="text-sm text-slate-600 leading-relaxed mb-0">
                    {{ stat.description }}
                </p>

                <!-- Additional Info for Cards -->
                <div v-if="variant === 'cards'" class="mt-4 pt-4 border-t border-slate-100">
                    <div class="flex items-center justify-between text-xs text-slate-500">
                        <span v-if="stat.lastUpdated">Last updated: {{ stat.lastUpdated }}</span>
                        <span v-if="stat.source">Source: {{ stat.source }}</span>
                    </div>
                </div>

            </article>

        </ComponentGrid>
    </section>
</template>

<style scoped>
/* Only keep essential styles that can't be done with Tailwind */
.stats-grid {
    /* All styles now handled by Tailwind classes */
}

/* Enhanced interactions for cards variant */
.stat-item.cursor-pointer:hover {
    transform: translateY(-4px);
}
</style>