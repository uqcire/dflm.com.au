<script setup>
defineProps({
    columns: {
        type: [Number, Object],
        default: 1,
        // Object format: { sm: 1, md: 2, lg: 3, xl: 4 }
        validator: (value) => {
            if (typeof value === 'number') return value > 0 && value <= 12
            if (typeof value === 'object') {
                return Object.keys(value).every(key =>
                    ['base', 'sm', 'md', 'lg', 'xl', '2xl'].includes(key) &&
                    typeof value[key] === 'number' &&
                    value[key] > 0 && value[key] <= 12
                )
            }
            return false
        }
    },
    gap: {
        type: String,
        default: 'md',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    align: {
        type: String,
        default: 'stretch',
        validator: (value) => ['start', 'center', 'end', 'stretch'].includes(value)
    },
    justify: {
        type: String,
        default: 'start',
        validator: (value) => ['start', 'center', 'end', 'between', 'around', 'evenly'].includes(value)
    },
    minItemWidth: {
        type: String,
        default: null
    },
    tag: {
        type: String,
        default: 'div'
    }
})

const getGridStyles = (columns, gap, align, justify, minItemWidth) => {
    // Base grid styles
    const baseStyles = {
        display: 'grid',
        fontFamily: 'var(--font-family-body)'
    }

    // Gap styles using design tokens
    const gapStyles = {
        xs: { gap: 'var(--space-component-xs)' },  // 8px
        sm: { gap: 'var(--space-component-sm)' },  // 16px
        md: { gap: 'var(--space-component-md)' },  // 24px
        lg: { gap: 'var(--space-component-lg)' },  // 32px
        xl: { gap: 'var(--space-component-xl)' }   // 48px
    }

    // Alignment styles
    const alignStyles = {
        start: { alignItems: 'start' },
        center: { alignItems: 'center' },
        end: { alignItems: 'end' },
        stretch: { alignItems: 'stretch' }
    }

    const justifyStyles = {
        start: { justifyContent: 'start' },
        center: { justifyContent: 'center' },
        end: { justifyContent: 'end' },
        between: { justifyContent: 'space-between' },
        around: { justifyContent: 'space-around' },
        evenly: { justifyContent: 'space-evenly' }
    }

    // Column styles
    let gridTemplateColumns
    if (minItemWidth) {
        gridTemplateColumns = `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`
    } else if (typeof columns === 'number') {
        gridTemplateColumns = `repeat(${columns}, 1fr)`
    } else {
        // Handle responsive columns via CSS classes
        gridTemplateColumns = 'repeat(1, 1fr)' // Default fallback
    }

    return {
        ...baseStyles,
        ...gapStyles[gap],
        ...alignStyles[align],
        ...justifyStyles[justify],
        gridTemplateColumns
    }
}

const getResponsiveClasses = (columns) => {
    if (typeof columns === 'object') {
        return Object.entries(columns).map(([breakpoint, cols]) =>
            `grid-cols-${breakpoint}-${cols}`
        )
    }
    return []
}
</script>

<template>
    <component :is="tag" class="grid-component" :class="[
        `grid--gap-${gap}`,
        `grid--align-${align}`,
        `grid--justify-${justify}`,
        ...getResponsiveClasses(columns)
    ]" :style="getGridStyles(columns, gap, align, justify, minItemWidth)">
        <slot />
    </component>
</template>

<style scoped>
/* Responsive column classes */
.grid-component {
    box-sizing: border-box;
}

/* Base columns */
.grid-cols-base-1 {
    grid-template-columns: repeat(1, 1fr);
}

.grid-cols-base-2 {
    grid-template-columns: repeat(2, 1fr);
}

.grid-cols-base-3 {
    grid-template-columns: repeat(3, 1fr);
}

.grid-cols-base-4 {
    grid-template-columns: repeat(4, 1fr);
}

.grid-cols-base-5 {
    grid-template-columns: repeat(5, 1fr);
}

.grid-cols-base-6 {
    grid-template-columns: repeat(6, 1fr);
}

/* Small breakpoint (640px+) */
@media (min-width: 640px) {
    .grid-cols-sm-1 {
        grid-template-columns: repeat(1, 1fr);
    }

    .grid-cols-sm-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-cols-sm-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-cols-sm-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    .grid-cols-sm-5 {
        grid-template-columns: repeat(5, 1fr);
    }

    .grid-cols-sm-6 {
        grid-template-columns: repeat(6, 1fr);
    }
}

/* Medium breakpoint (768px+) */
@media (min-width: 768px) {
    .grid-cols-md-1 {
        grid-template-columns: repeat(1, 1fr);
    }

    .grid-cols-md-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-cols-md-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-cols-md-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    .grid-cols-md-5 {
        grid-template-columns: repeat(5, 1fr);
    }

    .grid-cols-md-6 {
        grid-template-columns: repeat(6, 1fr);
    }
}

/* Large breakpoint (1024px+) */
@media (min-width: 1024px) {
    .grid-cols-lg-1 {
        grid-template-columns: repeat(1, 1fr);
    }

    .grid-cols-lg-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-cols-lg-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-cols-lg-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    .grid-cols-lg-5 {
        grid-template-columns: repeat(5, 1fr);
    }

    .grid-cols-lg-6 {
        grid-template-columns: repeat(6, 1fr);
    }
}

/* Extra large breakpoint (1280px+) */
@media (min-width: 1280px) {
    .grid-cols-xl-1 {
        grid-template-columns: repeat(1, 1fr);
    }

    .grid-cols-xl-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-cols-xl-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-cols-xl-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    .grid-cols-xl-5 {
        grid-template-columns: repeat(5, 1fr);
    }

    .grid-cols-xl-6 {
        grid-template-columns: repeat(6, 1fr);
    }
}

/* 2XL breakpoint (1536px+) */
@media (min-width: 1536px) {
    .grid-cols-2xl-1 {
        grid-template-columns: repeat(1, 1fr);
    }

    .grid-cols-2xl-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-cols-2xl-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    .grid-cols-2xl-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    .grid-cols-2xl-5 {
        grid-template-columns: repeat(5, 1fr);
    }

    .grid-cols-2xl-6 {
        grid-template-columns: repeat(6, 1fr);
    }
}

/* Debug mode for development */
.grid-component[data-debug="true"] {
    outline: 1px dashed var(--color-secondary);
    outline-offset: -1px;
}

.grid-component[data-debug="true"]>* {
    outline: 1px solid var(--color-accent);
    outline-offset: -1px;
}
</style>