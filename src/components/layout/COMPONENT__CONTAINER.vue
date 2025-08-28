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
    constrainWidth: {
        type: Boolean,
        default: true
    },
    tag: {
        type: String,
        default: 'div'
    }
})

// Tailwind class mappings
const getSizeClasses = (size, constrainWidth) => {
    if (!constrainWidth) {
        return 'max-w-full' // No width constraint
    }

    const sizeMap = {
        sm: 'max-w-sm',      // 640px
        md: 'max-w-md',      // 768px  
        lg: 'max-w-5xl',     // 1024px
        xl: 'max-w-6xl',     // 1152px
        '2xl': 'max-w-7xl',  // 1280px
        '3xl': 'max-w-8xl',  // 1536px
        full: 'max-w-full'   // Full width (no constraint)
    }
    return sizeMap[size] || 'max-w-5xl'
}

const getPaddingClasses = (padding) => {
    const paddingMap = {
        none: 'p-0',
        sm: 'p-4',     // 16px
        md: 'p-6',     // 24px  
        lg: 'p-8',     // 32px
        responsive: 'p-4 md:p-6 lg:p-8 xl:p-12'  // Responsive padding
    }
    return paddingMap[padding] || 'p-4 md:p-6 lg:p-8 xl:p-12'
}

const getCenterClasses = (center) => {
    return center ? 'mx-auto' : ''
}
</script>

<template>
    <component :is="tag" class="container-component w-full box-border font-body" :class="[
        getSizeClasses(size, constrainWidth),
        getPaddingClasses(padding),
        getCenterClasses(center),
        `container--${size}`,
        `container--padding-${padding}`,
        { 'container--centered': center }
    ]">
        <slot />
    </component>
</template>

<style scoped>
/* Custom max-widths that don't exist in default Tailwind */
.container--xl .container-component {
    max-width: 1280px;
}

/* 2xl uses 7xl max-width (1280px) */
.container--2xl .container-component {
    max-width: 1280px;
}

/* Debug mode for development */
.container-component[data-debug="true"] {
    outline: 1px dashed hsl(var(--monza-600));
    outline-offset: -1px;
}

.container-component[data-debug="true"]::before {
    content: attr(class);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.75rem;
    color: hsl(var(--monza-600));
    background: white;
    padding: 0.25rem;
    z-index: 1000;
    pointer-events: none;
}
</style>