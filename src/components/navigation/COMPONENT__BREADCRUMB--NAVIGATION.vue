<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'

const props = defineProps({
    items: {
        type: Array,
        default: () => []
    },
    separator: {
        type: String,
        default: '/'
    },
    size: {
        type: String,
        default: 'default',
        validator: (value) => ['large', 'default', 'small'].includes(value)
    }
})

const route = useRoute()

// Generate breadcrumbs from route if no items provided
const breadcrumbs = computed(() => {
    if (props.items && props.items.length > 0) {
        return props.items
    }

    // Auto-generate breadcrumbs from route
    const pathSegments = route.path.split('/').filter(Boolean)
    const breadcrumbItems = [{ name: 'Home', path: '/' }]

    let currentPath = ''
    pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`

        // Convert route segment to readable name
        const name = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

        breadcrumbItems.push({
            name,
            path: currentPath
        })
    })

    return breadcrumbItems
})

// Check if item is the last one
const isLastItem = (index) => {
    return index === breadcrumbs.value.length - 1
}
</script>

<template>
    <nav aria-label="Breadcrumb navigation" class="w-full">
        <ElBreadcrumb :separator="separator" :size="size" class="flex items-center flex-wrap space-x-1 sm:flex-nowrap">
            <ElBreadcrumbItem v-for="(item, index) in breadcrumbs" :key="index"
                :to="isLastItem(index) ? null : item.path" :class="[
                    'text-xs sm:text-sm',
                    isLastItem(index)
                        ? 'text-pickled-bluewood-800 font-medium'
                        : 'text-slate-600 hover:text-monza-600 transition-colors duration-200'
                ]">
                <template v-if="!isLastItem(index)">
                    <RouterLink :to="item.path"
                        class="text-inherit hover:text-inherit no-underline transition-colors duration-200"
                        :aria-label="`Navigate to ${item.name}`">
                        {{ item.name }}
                    </RouterLink>
                </template>
                <template v-else>
                    <span class="text-inherit" :aria-current="'page'">
                        {{ item.name }}
                    </span>
                </template>
            </ElBreadcrumbItem>
        </ElBreadcrumb>
    </nav>
</template>

<style scoped>
@import "tailwindcss" reference;
/* Minimal Element Plus overrides */

:deep(.el-breadcrumb__separator) {
    @apply text-slate-400 mx-2;
}

:deep(.el-breadcrumb__inner:hover) {
    @apply text-[hsl(var(--monza-600))];
}

:deep(.el-breadcrumb__inner.is-link:hover) {
    @apply text-[hsl(var(--monza-600))];
}
</style>
