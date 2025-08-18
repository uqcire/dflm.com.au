<script setup>
defineProps({
    space: {
        type: String,
        default: 'md',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    align: {
        type: String,
        default: 'stretch',
        validator: (value) => ['start', 'center', 'end', 'stretch'].includes(value)
    },
    dividers: {
        type: Boolean,
        default: false
    },
    dividerColor: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value)
    },
    tag: {
        type: String,
        default: 'div'
    },
    inline: {
        type: Boolean,
        default: false
    }
})

const getStackStyles = (space, align, inline) => {
    const baseStyles = {
        fontFamily: 'var(--font-family-body)',
        display: inline ? 'inline-flex' : 'flex',
        flexDirection: inline ? 'row' : 'column'
    }

    const spaceStyles = {
        xs: { gap: 'var(--space-component-xs)' },
        sm: { gap: 'var(--space-component-sm)' },
        md: { gap: 'var(--space-component-md)' },
        lg: { gap: 'var(--space-component-lg)' },
        xl: { gap: 'var(--space-component-xl)' }
    }

    const alignStyles = {
        start: { alignItems: 'flex-start' },
        center: { alignItems: 'center' },
        end: { alignItems: 'flex-end' },
        stretch: { alignItems: 'stretch' }
    }

    return {
        ...baseStyles,
        ...spaceStyles[space],
        ...alignStyles[align]
    }
}
</script>

<template>
    <component :is="tag" class="stack-component" :class="[
        `stack--space-${space}`,
        `stack--align-${align}`,
        { 'stack--inline': inline },
        { 'stack--dividers': dividers }
    ]" :style="getStackStyles(space, align, inline)" role="group">
        <slot />
    </component>
</template>

<style scoped>
.stack-component {
    box-sizing: border-box;
}

/* Responsive adjustments for mobile */
@media (max-width: 767px) {
    .stack--inline {
        flex-direction: column;
    }
}

.stack-component:focus-within {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
    border-radius: var(--radius-base);
}
</style>