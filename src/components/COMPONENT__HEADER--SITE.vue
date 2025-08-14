<script setup>
import { ref } from 'vue'
import ComponentNavigationPrimary from '@/components/COMPONENT__NAVIGATION--PRIMARY.vue'
const props = defineProps({
    title: { type: String, default: 'E‑Sunrise Australia' },
    tagline: { type: String, default: '' }
})

const mobileOpen = ref(false)
function toggleMobile() { mobileOpen.value = !mobileOpen.value }
</script>

<template>
    <header class="header header--site w-full bg-monza-600">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
            <RouterLink to="/" class="header__brand flex items-center gap-3">
                <img src="/src/assets/brand__logo--icon.png" alt="E‑Sunrise Australia"
                    class="header__logo h-8 w-auto" />
                <div class="header__brand-text flex flex-col">
                    <span class="header__title text-lg font-semibold font-playfair text-white">{{ title }}</span>
                </div>
            </RouterLink>

            <!-- Mobile controls -->
            <button class="inline-flex items-center justify-center p-2 text-white lg:hidden text-2xl"
                @click="toggleMobile" aria-label="Open Menu">
                ☰
            </button>

            <!-- Desktop nav -->
            <div class="hidden lg:block">
                <ComponentNavigationPrimary />
            </div>
        </div>

        <!-- Mobile drawer nav -->
        <el-drawer v-model="mobileOpen" direction="rtl" size="75%" :with-header="false"
            class="lg:hidden mobile-nav-drawer">
            <div class="p-4 bg-monza-600 min-h-full">
                <ComponentNavigationPrimary mode="vertical" background-color="hsl(var(--monza-600))" text-color="#fff"
                    active-text-color="hsl(var(--tree-poppy-50))" />
            </div>
        </el-drawer>
    </header>
</template>

<style>
/* Global styles for Element Plus drawer */
.mobile-nav-drawer .el-drawer__body {
    background-color: hsl(var(--monza-600)) !important;
    padding: 8px !important;
}
</style>

<style scoped></style>