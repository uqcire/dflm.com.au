<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ComponentNavigationPrimary from './COMPONENT__NAVIGATION--PRIMARY.vue'

const props = defineProps({
    title: { type: String, default: 'E‑Sunrise Australia' },
    tagline: { type: String, default: '' }
})

const mobileOpen = ref(false)
function toggleMobile() {
    mobileOpen.value = !mobileOpen.value
}

// 使用 requestAnimationFrame 延迟 resize 处理，避免强制回流
let resizeTimer = null
let rafId = null

function handleResize() {
    // 取消之前的 RAF
    if (rafId !== null) {
        cancelAnimationFrame(rafId)
    }

    // 使用 requestAnimationFrame 批量处理，避免强制回流
    rafId = requestAnimationFrame(() => {
        // 使用 matchMedia 替代直接读取 innerWidth（更高效）
        if (window.matchMedia('(min-width: 768px)').matches) {
            mobileOpen.value = false
        }
    })
}

// Debounced resize handler
function debouncedResize() {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(handleResize, 150) // 150ms debounce
}

onMounted(() => {
    // 使用 matchMedia 替代直接读取窗口大小
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    // 延迟初始检查，避免在渲染过程中触发回流
    requestAnimationFrame(() => {
        if (mediaQuery.matches) {
            mobileOpen.value = false
        }
    })

    // 使用 ResizeObserver 或 debounced resize
    window.addEventListener('resize', debouncedResize, { passive: true })

    // 监听媒体查询变化（更高效）
    if (mediaQuery.addListener) {
        mediaQuery.addListener(handleResize)
    } else {
        mediaQuery.addEventListener('change', handleResize)
    }
})

onUnmounted(() => {
    window.removeEventListener('resize', debouncedResize)

    if (rafId !== null) {
        cancelAnimationFrame(rafId)
    }

    clearTimeout(resizeTimer)

    // 清理媒体查询监听
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleResize)
    } else {
        mediaQuery.removeEventListener('change', handleResize)
    }
})
</script>

<template>
    <header class="header header--site w-full shadow-lg sticky top-0 z-40" role="banner"
        style="background-color: hsl(var(--monza-600));">
        <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 sm:px-6 lg:px-8">

            <!-- Brand Logo -->
            <RouterLink to="/"
                class="header__brand flex items-center gap-3 no-underline transition-opacity duration-200 hover:opacity-90"
                :aria-label="`${title} - Home`">
                <img src="/assets/brand__logo--icon.webp" :alt="`${title} logo`" width="40" height="40"
                    style="height: 40px; width: 50px;" class="header__logo h-10 w-10 flex-shrink-0 sm:h-10" />
                <div class="header__brand-text flex flex-col">
                    <span
                        class="header__title text-lg font-semibold font-heading text-white leading-tight sm:text-xl lg:text-2xl">
                        {{ title }}
                    </span>
                </div>
            </RouterLink>

            <!-- Mobile Menu Button -->
            <button
                class="mobile-menu-toggle inline-flex items-center justify-center p-2 text-white bg-transparent border border-transparent rounded-md text-2xl leading-none cursor-pointer transition-all duration-200 min-w-[44px] min-h-[44px] md:hidden hover:bg-monza-700 focus:outline-none focus:border-white focus:shadow-lg"
                @click="toggleMobile" :aria-label="mobileOpen ? 'Close navigation menu' : 'Open navigation menu'"
                :aria-expanded="mobileOpen">
                <span class="transition-transform duration-200 ease-out" :class="{ 'rotate-90': mobileOpen }"
                    aria-hidden="true">
                    {{ mobileOpen ? '✕' : '☰' }}
                </span>
            </button>

            <!-- Desktop Navigation -->
            <nav class="desktop-nav hidden md:flex flex-1 justify-end" aria-label="Main navigation">
                <ComponentNavigationPrimary />
            </nav>
        </div>

        <!-- Mobile Navigation Drawer -->
        <el-drawer v-model="mobileOpen" direction="rtl" size="75%" :with-header="false"
            class="md:hidden mobile-nav-drawer" :modal="true" :close-on-click-modal="true"
            :close-on-press-escape="true">
            <div class="p-4 bg-monza-600 min-h-full font-body">

                <!-- Mobile Nav Header -->
                <div class="flex items-center justify-between mb-6 pb-4 border-b border-monza-500">
                    <span class="text-lg font-semibold text-white font-heading">
                        Navigation
                    </span>
                    <button
                        class="p-1 text-white bg-transparent border-none text-xl cursor-pointer rounded-md hover:bg-monza-700 transition-colors duration-200"
                        @click="toggleMobile" aria-label="Close navigation">
                        ✕
                    </button>
                </div>

                <!-- Mobile Navigation Component -->
                <ComponentNavigationPrimary mode="vertical" :background-color="`hsl(var(--monza-600))`"
                    :text-color="`#ffffff`" :active-text-color="`hsl(var(--tree-poppy-200))`" />
            </div>
        </el-drawer>
    </header>
</template>

<style>
/* Global styles for Element Plus drawer - using design tokens */
.mobile-nav-drawer .el-drawer__body {
    background-color: var(--color-primary) !important;
    padding: 0 !important;
}

.mobile-nav-drawer .el-drawer {
    background-color: var(--color-primary);
}

/* Focus styles for better accessibility */
.mobile-nav-drawer .el-drawer__header {
    display: none;
}
</style>

<style scoped>
/* Enhanced hover effects for desktop */
@media (min-width: 1024px) {
    .header__brand:hover .header__title {
        color: hsl(var(--monza-100));
        transition: color var(--duration-200) var(--ease-out);
    }
}

/* Ensure proper z-index stacking */
.mobile-nav-drawer {
    z-index: 1000;
}
</style>