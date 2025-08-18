<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    primaryAction: {
        type: Object,
        required: true,
        validator: (value) => {
            return value &&
                typeof value.text === 'string' &&
                typeof value.href === 'string' &&
                ['button', 'link'].includes(value.type || 'button')
        }
    },
    secondaryAction: {
        type: Object,
        default: null,
        validator: (value) => {
            if (!value) return true
            return typeof value.text === 'string' &&
                typeof value.href === 'string' &&
                ['button', 'link'].includes(value.type || 'link')
        }
    },
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'accent', 'gradient', 'minimal'].includes(value)
    },
    alignment: {
        type: String,
        default: 'center',
        validator: (value) => ['left', 'center', 'right'].includes(value)
    },
    size: {
        type: String,
        default: 'standard',
        validator: (value) => ['compact', 'standard', 'large'].includes(value)
    }
})

const getVariantStyles = (variant) => {
    const variants = {
        primary: {
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-text-inverse)',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-monza-700) 100%)'
        },
        secondary: {
            backgroundColor: 'var(--color-secondary)',
            color: 'var(--color-text-inverse)',
            background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-tree-poppy-600) 100%)'
        },
        accent: {
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-text-inverse)',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-pickled-bluewood-600) 100%)'
        },
        gradient: {
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)',
            color: 'var(--color-text-inverse)'
        },
        minimal: {
            backgroundColor: 'var(--color-bg-secondary)',
            color: 'var(--color-text-primary)',
            border: 'var(--border-width-1) solid var(--color-border-primary)'
        }
    }
    return variants[variant]
}

const getSizeStyles = (size) => {
    const sizes = {
        compact: {
            padding: 'var(--space-layout-sm) var(--space-6)'
        },
        standard: {
            padding: 'var(--space-layout-md) var(--space-8)'
        },
        large: {
            padding: 'var(--space-layout-lg) var(--space-12)'
        }
    }
    return sizes[size]
}

const getAlignmentStyles = (alignment) => {
    return {
        textAlign: alignment,
        alignItems: alignment === 'center' ? 'center' : alignment === 'left' ? 'flex-start' : 'flex-end'
    }
}

const getButtonStyles = (isPrimary, variant) => {
    if (isPrimary) {
        if (variant === 'minimal') {
            return {
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-text-inverse)',
                border: 'var(--border-width-2) solid var(--color-primary)'
            }
        } else {
            return {
                backgroundColor: 'var(--color-text-inverse)',
                color: 'var(--color-primary)',
                border: 'var(--border-width-2) solid var(--color-text-inverse)'
            }
        }
    } else {
        if (variant === 'minimal') {
            return {
                backgroundColor: 'transparent',
                color: 'var(--color-primary)',
                border: 'var(--border-width-2) solid var(--color-primary)'
            }
        } else {
            return {
                backgroundColor: 'transparent',
                color: 'var(--color-text-inverse)',
                border: 'var(--border-width-2) solid var(--color-text-inverse)'
            }
        }
    }
}

// Generate unique ID for accessibility
const ctaId = 'cta-title-' + Math.random().toString(36).substr(2, 9)
</script>

<template>
    <section class="cta-section" :style="{
        ...getVariantStyles(variant),
        ...getSizeStyles(size),
        ...getAlignmentStyles(alignment),
        fontFamily: 'var(--font-family-body)',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: 'var(--shadow-lg)'
    }" role="region" :aria-labelledby="ctaId">

        <!-- Background Pattern (optional decoration) -->
        <div v-if="variant !== 'minimal'" :style="{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '50%',
            height: '100%',
            opacity: '0.1',
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)',
            backgroundSize: '20px 20px',
            zIndex: '0'
        }" aria-hidden="true">
        </div>

        <!-- Content Container -->
        <div :style="{
            position: 'relative',
            zIndex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-6)',
            maxWidth: 'var(--container-lg)',
            margin: '0 auto'
        }">

            <!-- Header Content -->
            <header :style="{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)'
            }">

                <!-- Title -->
                <h2 :id="ctaId" :style="{
                    fontFamily: 'var(--font-family-heading)',
                    fontSize: size === 'large' ? 'var(--font-size-4xl)' : size === 'compact' ? 'var(--font-size-2xl)' : 'var(--font-size-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: 'var(--line-height-tight)',
                    margin: '0',
                    letterSpacing: 'var(--letter-spacing-tight)'
                }" class="md:text-5xl lg:text-6xl">
                    {{ title }}
                </h2>

                <!-- Description -->
                <p v-if="description" :style="{
                    fontSize: size === 'large' ? 'var(--font-size-xl)' : 'var(--font-size-lg)',
                    lineHeight: 'var(--line-height-relaxed)',
                    opacity: '0.95',
                    margin: '0',
                    maxWidth: 'var(--container-md)',
                    ...(alignment === 'center' ? { marginLeft: 'auto', marginRight: 'auto' } : {})
                }" class="md:text-xl">
                    {{ description }}
                </p>
            </header>

            <!-- Actions -->
            <div :style="{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)',
                alignItems: getAlignmentStyles(alignment).alignItems
            }" class="sm:flex-row sm:gap-6">

                <!-- Primary Action -->
                <a :href="primaryAction.href" :style="{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-4) var(--space-8)',
                    fontSize: 'var(--font-size-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    fontFamily: 'var(--font-family-body)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-xl)',
                    transition: 'all var(--duration-200) var(--ease-out)',
                    letterSpacing: 'var(--letter-spacing-wide)',
                    boxShadow: 'var(--shadow-base)',
                    minWidth: '200px',
                    ...getButtonStyles(true, variant)
                }"
                    @mouseenter="$event.target.style.transform = 'translateY(-2px)'; $event.target.style.boxShadow = 'var(--shadow-lg)'"
                    @mouseleave="$event.target.style.transform = 'translateY(0)'; $event.target.style.boxShadow = 'var(--shadow-base)'"
                    @focus="$event.target.style.outline = 'none'; $event.target.style.boxShadow = 'var(--shadow-focus-primary)'"
                    @blur="$event.target.style.boxShadow = 'var(--shadow-base)'"
                    :aria-label="`${primaryAction.text} - Primary action`">
                    {{ primaryAction.text }}
                </a>

                <!-- Secondary Action -->
                <a v-if="secondaryAction" :href="secondaryAction.href" :style="{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-4) var(--space-8)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontFamily: 'var(--font-family-body)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-xl)',
                    transition: 'all var(--duration-200) var(--ease-out)',
                    letterSpacing: 'var(--letter-spacing-wide)',
                    minWidth: '180px',
                    ...getButtonStyles(false, variant)
                }"
                    @mouseenter="$event.target.style.backgroundColor = variant === 'minimal' ? 'var(--color-primary)' : 'var(--color-text-inverse)'; $event.target.style.color = variant === 'minimal' ? 'var(--color-text-inverse)' : 'var(--color-primary)'"
                    @mouseleave="$event.target.style.backgroundColor = getButtonStyles(false, variant).backgroundColor; $event.target.style.color = getButtonStyles(false, variant).color"
                    @focus="$event.target.style.outline = 'none'; $event.target.style.boxShadow = 'var(--shadow-focus-secondary)'"
                    @blur="$event.target.style.boxShadow = 'none'"
                    :aria-label="`${secondaryAction.text} - Secondary action`">
                    {{ secondaryAction.text }}
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.cta-section {
    position: relative;
}

/* Responsive typography */
@media (min-width: 768px) {
    .cta-section h2 {
        font-size: var(--font-size-5xl);
    }

    .cta-section p {
        font-size: var(--font-size-xl);
    }
}

@media (min-width: 1024px) {
    .cta-section h2 {
        font-size: var(--font-size-6xl);
    }
}

/* Responsive button layout */
@media (min-width: 640px) {
    .cta-section>div>div:last-child {
        flex-direction: row;
        gap: var(--space-6);
    }
}

/* Enhanced hover effects */
@media (min-width: 1024px) {
    .cta-section:hover {
        transform: scale(1.02);
        transition: transform var(--duration-300) var(--ease-out);
    }
}

/* Accessibility enhancements */
.cta-section:focus-within {
    outline: 3px solid var(--color-border-focus);
    outline-offset: 3px;
}

/* Ensure proper contrast for all variants */
.cta-section a {
    text-shadow: none;
}
</style>