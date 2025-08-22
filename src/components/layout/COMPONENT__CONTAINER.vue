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

// Tailwind class mappings
const getSizeClasses = (size) => {
    const sizeMap = {
        sm: 'max-w-sm',      // 640px
        md: 'max-w-md',      // 768px  
        lg: 'max-w-4xl',     // 1024px (using max-w-4xl which is 896px, closest to 1024px)
        xl: 'max-w-5xl',     // 1280px (using max-w-5xl which is 1024px, will need custom)
        '2xl': 'max-w-7xl',  // 1536px (using max-w-7xl which is 1280px, will need custom)
        full: 'max-w-full'
    }
    return sizeMap[size] || 'max-w-4xl'
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
        getSizeClasses(size),
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

.container--2xl .container-component {
    max-width: 1536px;
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