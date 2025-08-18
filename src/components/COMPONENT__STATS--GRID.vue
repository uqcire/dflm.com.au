<script setup>
import ComponentGrid from './COMPONENT__GRID.vue'

defineProps({
    stats: {
        type: Array,
        required: true,
        validator: (value) => {
            return Array.isArray(value) && value.every(stat =>
                typeof stat.value === 'string' &&
                typeof stat.label === 'string' &&
                (typeof stat.description === 'string' || stat.description === undefined) &&
                (typeof stat.icon === 'string' || stat.icon === undefined) &&
                (typeof stat.trend === 'object' || stat.trend === undefined)
            )
        }
    },
    columns: {
        type: [Number, Object],
        default: () => ({ base: 1, sm: 2, lg: 4 })
    },
    variant: {
        type: String,
        default: 'standard',
        validator: (value) => ['minimal', 'standard', 'detailed', 'cards'].includes(value)
    },
    showTrends: {
        type: Boolean,
        default: false
    },
    showIcons: {
        type: Boolean,
        default: true
    },
    alignment: {
        type: String,
        default: 'center',
        validator: (value) => ['left', 'center', 'right'].includes(value)
    }
})

const getVariantStyles = (variant) => {
    const variants = {
        minimal: {
            padding: '0',
            border: 'none',
            boxShadow: 'none',
            backgroundColor: 'transparent'
        },
        standard: {
            padding: 'var(--space-component-md)',
            border: `var(--border-width-1) solid var(--color-border-primary)`,
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--color-bg-primary)',
            boxShadow: 'var(--shadow-sm)'
        },
        detailed: {
            padding: 'var(--space-component-lg)',
            border: `var(--border-width-1) solid var(--color-border-secondary)`,
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--color-bg-primary)',
            boxShadow: 'var(--shadow-md)'
        },
        cards: {
            padding: 'var(--space-component-lg)',
            border: `var(--border-width-1) solid var(--color-border-primary)`,
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--color-bg-primary)',
            boxShadow: 'var(--shadow-lg)',
            background: `linear-gradient(145deg, var(--color-bg-primary) 0%, var(--color-bg-secondary) 100%)`
        }
    }
    return variants[variant]
}

const getTrendIcon = (trend) => {
    if (!trend || !trend.direction) return ''
    return trend.direction === 'up' ? '↗' : trend.direction === 'down' ? '↘' : '→'
}

const getTrendColor = (trend) => {
    if (!trend || !trend.direction) return 'var(--color-text-secondary)'

    switch (trend.direction) {
        case 'up': return 'var(--color-success)'
        case 'down': return 'var(--color-error)'
        default: return 'var(--color-text-secondary)'
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
    <section class="stats-grid" :style="{
        fontFamily: 'var(--font-family-body)'
    }" role="region" aria-label="Statistics">

        <ComponentGrid :columns="columns" gap="lg" align="stretch">

            <article v-for="(stat, index) in stats" :key="stat.id || index" class="stat-item" :style="{
                ...getVariantStyles(variant),
                textAlign: alignment,
                position: 'relative',
                transition: `all var(--duration-200) var(--ease-out)`,
                cursor: variant === 'cards' ? 'pointer' : 'default'
            }"
                @mouseenter="$event.currentTarget.style.transform = variant === 'cards' ? 'translateY(-4px)' : 'none'; $event.currentTarget.style.boxShadow = variant === 'cards' ? 'var(--shadow-xl)' : getVariantStyles(variant).boxShadow"
                @mouseleave="$event.currentTarget.style.transform = 'translateY(0)'; $event.currentTarget.style.boxShadow = getVariantStyles(variant).boxShadow"
                :aria-label="`${stat.label}: ${stat.value}`">

                <!-- Icon -->
                <div v-if="showIcons && stat.icon" :style="{
                    fontSize: variant === 'detailed' || variant === 'cards' ? 'var(--font-size-4xl)' : 'var(--font-size-3xl)',
                    color: 'var(--color-primary)',
                    marginBottom: 'var(--space-3)',
                    lineHeight: '1'
                }" :aria-hidden="true">
                    {{ stat.icon }}
                </div>

                <!-- Value -->
                <div :style="{
                    fontSize: variant === 'detailed' || variant === 'cards' ? 'var(--font-size-5xl)' : variant === 'minimal' ? 'var(--font-size-3xl)' : 'var(--font-size-4xl)',
                    fontWeight: 'var(--font-weight-black)',
                    color: 'var(--color-text-primary)',
                    lineHeight: 'var(--line-height-none)',
                    marginBottom: 'var(--space-2)',
                    fontFamily: 'var(--font-family-body)'
                }" class="stat-value">
                    {{ formatValue(stat.value) }}

                    <!-- Trend Indicator -->
                    <span v-if="showTrends && stat.trend" :style="{
                        fontSize: 'var(--font-size-lg)',
                        color: getTrendColor(stat.trend),
                        marginLeft: 'var(--space-2)',
                        fontWeight: 'var(--font-weight-normal)'
                    }" :aria-label="`Trend: ${stat.trend.direction} ${stat.trend.value || ''}`">
                        {{ getTrendIcon(stat.trend) }}
                        <span v-if="stat.trend.value" :style="{
                            fontSize: 'var(--font-size-sm)',
                            marginLeft: 'var(--space-1)'
                        }">
                            {{ stat.trend.value }}
                        </span>
                    </span>
                </div>

                <!-- Label -->
                <h3 :style="{
                    fontSize: variant === 'detailed' || variant === 'cards' ? 'var(--font-size-lg)' : 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-text-secondary)',
                    margin: '0',
                    lineHeight: 'var(--line-height-snug)',
                    fontFamily: 'var(--font-family-heading)',
                    textTransform: variant === 'minimal' ? 'uppercase' : 'none',
                    letterSpacing: variant === 'minimal' ? 'var(--letter-spacing-wide)' : 'normal'
                }">
                    {{ stat.label }}
                </h3>

                <!-- Description -->
                <p v-if="(variant === 'detailed' || variant === 'cards') && stat.description" :style="{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-tertiary)',
                    lineHeight: 'var(--line-height-relaxed)',
                    marginTop: 'var(--space-2)',
                    margin: '0',
                    marginTop: 'var(--space-2)'
                }">
                    {{ stat.description }}
                </p>

                <!-- Background Decoration for Cards Variant -->
                <div v-if="variant === 'cards'" :style="{
                    position: 'absolute',
                    top: 'var(--space-3)',
                    right: 'var(--space-3)',
                    fontSize: 'var(--font-size-4xl)',
                    color: 'var(--color-primary)',
                    opacity: '0.1',
                    zIndex: '0',
                    pointerEvents: 'none'
                }" aria-hidden="true">
                    {{ stat.icon || '●' }}
                </div>
            </article>
        </ComponentGrid>
    </section>
</template>

<style scoped>
.stats-grid {
    position: relative;
}

.stat-item {
    position: relative;
    z-index: 1;
}

/* Responsive value sizing */
@media (max-width: 767px) {
    .stat-value {
        font-size: var(--font-size-2xl) !important;
    }
}

@media (min-width: 768px) {
    .stat-value {
        font-size: var(--font-size-4xl);
    }
}

@media (min-width: 1024px) {
    .stat-value {
        font-size: var(--font-size-5xl);
    }
}

/* Enhanced accessibility */
.stat-item:focus-within {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
}

/* Animation for trend indicators */
.stat-item span[aria-label*="Trend"] {
    animation: fadeInScale var(--duration-300) var(--ease-out);
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Loading state shimmer effect (for future enhancement) */
.stat-item.loading {
    background: linear-gradient(90deg, var(--color-bg-secondary) 25%, var(--color-bg-tertiary) 50%, var(--color-bg-secondary) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
}
</style>