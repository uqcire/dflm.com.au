<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    partners: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(partner =>
                typeof partner.name === 'string' &&
                typeof partner.logo === 'string'
            )
        }
    },
    columns: {
        type: Object,
        default: () => ({ base: 2, md: 3, lg: 4 }),
        validator: (value) => {
            return Object.keys(value).every(key =>
                ['base', 'sm', 'md', 'lg', 'xl'].includes(key) &&
                typeof value[key] === 'number' &&
                value[key] > 0 && value[key] <= 6
            )
        }
    },
    gap: {
        type: String,
        default: 'lg',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    }
})

// Gap class mapping
const getGapClasses = (gap) => {
    const gapMap = {
        xs: 'gap-4',
        sm: 'gap-6',
        md: 'gap-8',
        lg: 'gap-8',
        xl: 'gap-12'
    }
    return gapMap[gap] || 'gap-8'
}

// Column class mapping
const getColumnClasses = (columns) => {
    const classes = []

    if (columns.base) classes.push(`grid-cols-${columns.base}`)
    if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`)
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`)
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`)
    if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`)

    return classes.join(' ')
}
</script>

<template>
    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
        <!-- Left Column - Text -->
        <div class="lg:w-1/3 text-center lg:text-left">
            <h2 class="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight">
                {{ title }}
            </h2>
        </div>

        <!-- Divider Line -->
        <div class="hidden lg:block w-px h-64 bg-monza-600"></div>

        <!-- Right Column - Partner Logos Grid -->
        <div class="lg:w-2/3">
            <div :class="[
                'grid',
                getGapClasses(gap),
                getColumnClasses(columns)
            ]">
                <div v-for="(partner, index) in partners" :key="index" class="flex flex-col items-center text-center">
                    <div
                        class="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-2 shadow-sm border border-pickled-bluewood-100">
                        <img :src="partner.logo" :alt="partner.name" class="w-12 h-12 object-contain" loading="lazy" />
                    </div>
                    <span class="text-xs text-pickled-bluewood-600 font-medium">{{ partner.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>