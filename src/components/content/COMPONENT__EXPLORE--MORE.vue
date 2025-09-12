<script setup>
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentImageDisplay from '@/components/ui/COMPONENT__IMAGE--DISPLAY.vue'
import { ElCard } from 'element-plus'

defineProps({
    title: {
        type: String,
        default: 'Explore more'
    },
    cards: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(card =>
                typeof card.title === 'string' &&
                typeof card.description === 'string' &&
                typeof card.image === 'string' &&
                typeof card.link === 'string'
            )
        }
    },
    columns: {
        type: Object,
        default: () => ({ base: 1, md: 3 }),
        validator: (value) => {
            return Object.keys(value).every(key =>
                ['base', 'sm', 'md', 'lg', 'xl'].includes(key) &&
                typeof value[key] === 'number' &&
                value[key] > 0 &&
                value[key] <= 6
            )
        }
    },
    gap: {
        type: String,
        default: 'lg',
        validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
    background: {
        type: String,
        default: 'transparent'
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

import { useRouter } from 'vue-router'

const router = useRouter()
const navigateToPage = (link) => {
    router.push(link)
}
</script>

<template>
    <ComponentSection spacing="sm" containerSize="full" :background="background">
        <ComponentContainer size="xl" padding="sm">
            <!-- Section Title -->
            <div class="text-left mb-8">
                <h3 class="font-heading text-xl font-bold text-pickled-bluewood-800 mb-2">
                    {{ title }}
                </h3>
            </div>

            <!-- Cards Grid -->
            <ComponentGrid :columns="columns" :gap="gap" align="stretch">
                <el-card v-for="(card, index) in cards" :key="index"
                    class="explore-card h-88 cursor-pointer transition-transform duration-300 hover:scale-105 relative overflow-hidden"
                    shadow="always" @click="navigateToPage(card.link)">
                    <!-- Full Background Image -->
                    <div class="absolute inset-0 w-full h-full">
                        <ComponentImageDisplay :src="card.image" :alt="card.alt" size="xl" variant="plain"
                            object-fit="cover" loading="lazy" class="w-full h-full" />
                        <!-- Dark Overlay for Text Readability -->
                        <div class="absolute inset-0 bg-black/50"></div>
                    </div>

                    <!-- Card Content Overlay -->
                    <div class="absolute inset-0 z-10 h-full flex">
                        <div class="m-auto flex flex-col gap-4 items-center text-center p-12 text-white">
                            <h4 class="font-heading text-2xl font-bold text-white">
                                {{ card.title }}
                            </h4>

                            <p class="font-body text-white/90 leading-relaxed line-clamp-3 text-lg">
                                {{ card.description }}
                            </p>

                            <router-link :to="card.link"
                                class="inline-flex items-center text-tree-poppy-300 font-medium hover:text-tree-poppy-200 transition-colors duration-200 group"
                                :aria-label="`Learn more about ${card.title}`">
                                Learn more about {{ card.title }}
                                <svg class="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7">
                                    </path>
                                </svg>
                            </router-link>
                        </div>
                    </div>
                    <!-- 底部插槽 - 与default插槽平级 -->
                </el-card>
            </ComponentGrid>
        </ComponentContainer>
    </ComponentSection>
</template>

<style scoped>
/* Component-specific styles if needed */
:deep(.el-card__header) {
    padding: 0;
    height: 0;
}

:deep(.el-card__body) {
    padding: 0;
}
</style>
