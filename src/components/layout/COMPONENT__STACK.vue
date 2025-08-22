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

// Tailwind class mappings
const getSpaceClasses = (space) => {
    const spaceMap = {
        xs: 'gap-2',
        sm: 'gap-3',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8'
    }
    return spaceMap[space] || 'gap-4'
}

const getAlignClasses = (align) => {
    const alignMap = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch'
    }
    return alignMap[align] || 'items-stretch'
}

const getFlexDirection = (inline) => {
    return inline ? 'flex-row md:flex-col' : 'flex-col'
}

const getDividerClasses = (dividers, dividerColor) => {
    if (!dividers) return ''

    const dividerMap = {
        primary: 'divide-monza-200',
        secondary: 'divide-tree-poppy-200',
        tertiary: 'divide-slate-200'
    }
    return `divide-y ${dividerMap[dividerColor] || 'divide-slate-200'}`
}
</script>

<template>
    <component :is="tag"
        class="stack-component box-border font-body transition-all duration-200 focus-within:outline-2 focus-within:outline-slate-300 focus-within:outline-offset-2 focus-within:rounded"
        :class="[
            inline ? 'inline-flex' : 'flex',
            getFlexDirection(inline),
            getSpaceClasses(space),
            getAlignClasses(align),
            getDividerClasses(dividers, dividerColor),
            `stack--space-${space}`,
            `stack--align-${align}`,
            { 'stack--inline': inline },
            { 'stack--dividers': dividers }
        ]" role="group">
        <slot />
    </component>
</template>

<style scoped>
/* Only keep essential styles that can't be done with Tailwind */
.stack--inline.inline-flex {
    /* Mobile responsive override for inline stacks */
    flex-direction: column;
}

@media (min-width: 768px) {
    .stack--inline.inline-flex {
        flex-direction: row;
    }
}
</style>