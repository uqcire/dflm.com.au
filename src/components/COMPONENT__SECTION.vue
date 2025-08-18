<script setup>
import ComponentContainer from './COMPONENT__CONTAINER.vue'

defineProps({
    spacing: {
        type: String,
        default: 'md',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    background: {
        type: String,
        default: 'transparent',
        validator: (value) => ['transparent', 'primary', 'secondary', 'accent', 'subtle', 'inverse'].includes(value)
    },
    fullWidth: {
        type: Boolean,
        default: false
    },
    containerSize: {
        type: String,
        default: 'xl',
        validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(value)
    },
    tag: {
        type: String,
        default: 'section'
    },
    containerTag: {
        type: String,
        default: 'div'
    }
})

const getSectionStyles = (spacing, background) => {
    // Base section styles
    const baseStyles = {
        width: '100%',
        fontFamily: 'var(--font-family-body)',
        position: 'relative'
    }

    // Spacing styles using design tokens
    const spacingStyles = {
        xs: {
            paddingTop: 'var(--space-layout-xs)',      // 16px
            paddingBottom: 'var(--space-layout-xs)'
        },
        sm: {
            paddingTop: 'var(--space-layout-sm)',      // 32px
            paddingBottom: 'var(--space-layout-sm)'
        },
        md: {
            paddingTop: 'var(--space-layout-md)',      // 64px
            paddingBottom: 'var(--space-layout-md)'
        },
        lg: {
            paddingTop: 'var(--space-layout-lg)',      // 96px
            paddingBottom: 'var(--space-layout-lg)'
        },
        xl: {
            paddingTop: 'var(--space-layout-xl)',      // 128px
            paddingBottom: 'var(--space-layout-xl)'
        }
    }

    // Background styles using design tokens
    const backgroundStyles = {
        transparent: { backgroundColor: 'transparent' },
        primary: {
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-text-inverse)'
        },
        secondary: {
            backgroundColor: 'var(--color-secondary)',
            color: 'var(--color-text-inverse)'
        },
        accent: {
            backgroundColor: 'var(--color-accent)',
            color: 'var(--color-text-inverse)'
        },
        subtle: {
            backgroundColor: 'var(--color-bg-accent-subtle)',
            color: 'var(--color-text-primary)'
        },
        inverse: {
            backgroundColor: 'var(--color-bg-inverse)',
            color: 'var(--color-text-inverse)'
        }
    }

    return {
        ...baseStyles,
        ...spacingStyles[spacing],
        ...backgroundStyles[background]
    }
}
</script>

<template>
    <component :is="tag" class="section-component" :class="[
        `section--spacing-${spacing}`,
        `section--bg-${background}`,
        { 'section--full-width': fullWidth }
    ]" :style="getSectionStyles(spacing, background)" role="region">

        <!-- Full width content -->
        <template v-if="fullWidth">
            <slot />
        </template>

        <!-- Container wrapped content -->
        <template v-else>
            <ComponentContainer :size="containerSize" :tag="containerTag" padding="responsive">
                <slot />
            </ComponentContainer>
        </template>
    </component>
</template>

<style scoped>
/* Ensure proper box-sizing */
.section-component {
    box-sizing: border-box;
}

/* Responsive spacing adjustments */
@media (max-width: 767px) {
    .section--spacing-xs {
        padding-top: var(--space-layout-xs);
        padding-bottom: var(--space-layout-xs);
    }

    .section--spacing-sm {
        padding-top: var(--space-layout-xs);
        padding-bottom: var(--space-layout-xs);
    }

    .section--spacing-md {
        padding-top: var(--space-layout-sm);
        padding-bottom: var(--space-layout-sm);
    }

    .section--spacing-lg {
        padding-top: var(--space-layout-sm);
        padding-bottom: var(--space-layout-sm);
    }

    .section--spacing-xl {
        padding-top: var(--space-layout-md);
        padding-bottom: var(--space-layout-md);
    }
}

/* Enhanced background effects for brand colors */
.section--bg-primary {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-monza-700) 100%);
}

.section--bg-secondary {
    background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-tree-poppy-600) 100%);
}

.section--bg-accent {
    background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-pickled-bluewood-600) 100%);
}

.section--bg-subtle {
    background: linear-gradient(145deg, var(--color-bg-accent-subtle) 0%, var(--color-bg-secondary) 100%);
}

/* Full width sections */
.section--full-width {
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    padding-left: calc(50vw - 50%);
    padding-right: calc(50vw - 50%);
}

/* Accessibility enhancements */
.section-component:focus-within {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
}

/* Debug mode for development */
.section-component[data-debug="true"] {
    outline: 2px dashed var(--color-primary);
    outline-offset: -2px;
}

.section-component[data-debug="true"]::before {
    content: attr(class);
    position: absolute;
    top: var(--space-2);
    left: var(--space-2);
    font-size: var(--font-size-xs);
    color: var(--color-primary);
    background: var(--color-bg-primary);
    padding: var(--space-1);
    z-index: 1000;
    pointer-events: none;
    border-radius: var(--radius-base);
}
</style>