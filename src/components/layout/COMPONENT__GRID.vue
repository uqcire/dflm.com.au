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

// Tailwind class mappings
const getGapClasses = (gap) => {
    const gapMap = {
        xs: 'gap-2',
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8',
        xl: 'gap-12'
    }
    return gapMap[gap] || 'gap-6'
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

const getJustifyClasses = (justify) => {
    const justifyMap = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly'
    }
    return justifyMap[justify] || 'justify-start'
}

const getColumnClasses = (columns) => {
    if (typeof columns === 'number') {
        const colMap = {
            1: 'grid-cols-1',
            2: 'grid-cols-2',
            3: 'grid-cols-3',
            4: 'grid-cols-4',
            5: 'grid-cols-5',
            6: 'grid-cols-6',
            7: 'grid-cols-7',
            8: 'grid-cols-8',
            9: 'grid-cols-9',
            10: 'grid-cols-10',
            11: 'grid-cols-11',
            12: 'grid-cols-12'
        }
        return colMap[columns] || 'grid-cols-1'
    }

    if (typeof columns === 'object') {
        const classes = []

        if (columns.base) classes.push(`grid-cols-${columns.base}`)
        if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`)
        if (columns.md) classes.push(`md:grid-cols-${columns.md}`)
        if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`)
        if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`)
        if (columns['2xl']) classes.push(`2xl:grid-cols-${columns['2xl']}`)

        return classes.join(' ')
    }

    return 'grid-cols-1'
}

const getGridTemplateColumns = (minItemWidth) => {
    if (minItemWidth) {
        return {
            gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`
        }
    }
    return {}
}
</script>

<template>
    <component :is="tag" class="grid-component grid box-border font-body" :class="[
        getColumnClasses(columns),
        getGapClasses(gap),
        getAlignClasses(align),
        getJustifyClasses(justify),
        `grid--gap-${gap}`,
        `grid--align-${align}`,
        `grid--justify-${justify}`
    ]" :style="getGridTemplateColumns(minItemWidth)">
        <slot />
    </component>
</template>

<style scoped>
/* Only keep essential styles that can't be done with Tailwind */

/* Debug mode for development */
.grid-component[data-debug="true"] {
    outline: 1px dashed hsl(var(--tree-poppy-600));
    outline-offset: -1px;
}

.grid-component[data-debug="true"]>* {
    outline: 1px solid hsl(var(--pickled-bluewood-600));
    outline-offset: -1px;
}
</style>