<script setup>
defineProps({
    size: {
        type: String,
        default: 'lg',
        validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl', 'full'].includes(value)
    },
    padding: {
        type: String,
        default: 'responsive',
        validator: (value) => ['none', 'sm', 'md', 'lg', 'responsive'].includes(value)
    },
    center: {
        type: Boolean,
        default: true
    },
    tag: {
        type: String,
        default: 'div'
    }
})

const getContainerStyles = (size, padding, center) => {
    // Base container styles
    const baseStyles = {
        width: '100%',
        fontFamily: 'var(--font-family-body)'
    }

    // Size-based max-width
    const sizeStyles = {
        sm: { maxWidth: 'var(--container-sm)' },      // 640px
        md: { maxWidth: 'var(--container-md)' },      // 768px  
        lg: { maxWidth: 'var(--container-lg)' },      // 1024px
        xl: { maxWidth: 'var(--container-xl)' },      // 1280px
        '2xl': { maxWidth: 'var(--container-2xl)' },  // 1536px
        full: { maxWidth: '100%' }
    }

    // Padding styles
    const paddingStyles = {
        none: { padding: '0' },
        sm: { padding: 'var(--space-component-sm)' },     // 16px
        md: { padding: 'var(--space-component-md)' },     // 24px  
        lg: { padding: 'var(--space-component-lg)' },     // 32px
        responsive: {
            padding: 'var(--space-4)',                      // 16px mobile
            '@media (min-width: 768px)': {
                padding: 'var(--space-6)'                     // 24px tablet+
            },
            '@media (min-width: 1024px)': {
                padding: 'var(--space-8)'                     // 32px desktop+
            },
            '@media (min-width: 1280px)': {
                padding: 'var(--space-12)'                    // 48px large+
            }
        }
    }

    // Center alignment
    const centerStyles = center ? { margin: '0 auto' } : {}

    return {
        ...baseStyles,
        ...sizeStyles[size],
        ...(padding !== 'responsive' ? paddingStyles[padding] : {}),
        ...centerStyles
    }
}
</script>

<template>
    <component :is="tag" class="container-component" :class="[
        `container--${size}`,
        `container--padding-${padding}`,
        { 'container--centered': center }
    ]" :style="getContainerStyles(size, padding, center)">
        <slot />
    </component>
</template>

<style scoped>
/* Responsive padding for 'responsive' option */
.container--padding-responsive {
    padding: var(--space-4);
}

@media (min-width: 768px) {
    .container--padding-responsive {
        padding: var(--space-6);
    }
}

@media (min-width: 1024px) {
    .container--padding-responsive {
        padding: var(--space-8);
    }
}

@media (min-width: 1280px) {
    .container--padding-responsive {
        padding: var(--space-12);
    }
}

/* Ensure proper box-sizing */
.container-component {
    box-sizing: border-box;
}

/* Debug mode for development (remove in production) */
.container-component[data-debug="true"] {
    outline: 1px dashed var(--color-primary);
    outline-offset: -1px;
}

.container-component[data-debug="true"]::before {
    content: attr(class);
    position: absolute;
    top: 0;
    left: 0;
    font-size: var(--font-size-xs);
    color: var(--color-primary);
    background: var(--color-bg-primary);
    padding: var(--space-1);
    z-index: 1000;
    pointer-events: none;
}
</style>