<script setup>
import { ref } from 'vue'
import ComponentNavigationPrimary from '@/components/COMPONENT__NAVIGATION--PRIMARY.vue'

const props = defineProps({
    title: { type: String, default: 'E‑Sunrise Australia' },
    tagline: { type: String, default: '' }
})

const mobileOpen = ref(false)
function toggleMobile() {
    mobileOpen.value = !mobileOpen.value
}
</script>

<template>
    <header class="header header--site" :style="{
        width: '100%',
        backgroundColor: 'var(--color-primary)',
        boxShadow: 'var(--shadow-sm)',
        position: 'sticky',
        top: '0',
        zIndex: '50'
    }" role="banner">
        <div :style="{
            maxWidth: 'var(--container-xl)',
            margin: '0 auto',
            padding: 'var(--space-3) var(--space-4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)'
        }" class="sm:px-6 lg:px-8">

            <!-- Brand Logo -->
            <RouterLink to="/" class="header__brand" :style="{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                textDecoration: 'none',
                transition: `opacity var(--duration-200) var(--ease-out)`
            }" @mouseenter="$event.target.style.opacity = '0.9'"
                @mouseleave="$event.target.style.opacity = '1'"
                @focus="$event.target.style.outline = '2px solid var(--color-text-inverse)'; $event.target.style.outlineOffset = '2px'"
                @blur="$event.target.style.outline = 'none'" :aria-label="`${title} - Home`">
                <img src="/src/assets/brand__logo--icon.png" :alt="`${title} logo`" class="header__logo" :style="{
                    height: 'var(--space-8)',
                    width: 'auto',
                    flexShrink: '0'
                }" />
                <div class="header__brand-text" :style="{
                    display: 'flex',
                    flexDirection: 'column'
                }">
                    <span class="header__title" :style="{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        fontFamily: 'var(--font-family-heading)',
                        color: 'var(--color-text-inverse)',
                        lineHeight: 'var(--line-height-tight)'
                    }">
                        {{ title }}
                    </span>
                    <span v-if="tagline" class="header__tagline" :style="{
                        fontSize: 'var(--font-size-xs)',
                        fontFamily: 'var(--font-family-body)',
                        color: 'var(--color-monza-100)',
                        opacity: '0.9'
                    }">
                        {{ tagline }}
                    </span>
                </div>
            </RouterLink>

            <!-- Mobile Menu Button -->
            <button class="mobile-menu-toggle lg:hidden" :style="{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--space-2)',
                color: 'var(--color-text-inverse)',
                backgroundColor: 'transparent',
                border: `var(--border-width-1) solid transparent`,
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-2xl)',
                lineHeight: '1',
                cursor: 'pointer',
                transition: `all var(--duration-200) var(--ease-out)`,
                minWidth: '44px',
                minHeight: '44px'
            }" @click="toggleMobile"
                @mouseenter="$event.target.style.backgroundColor = 'var(--color-monza-700)'"
                @mouseleave="$event.target.style.backgroundColor = 'transparent'"
                @focus="$event.target.style.outline = 'none'; $event.target.style.borderColor = 'var(--color-text-inverse)'; $event.target.style.boxShadow = 'var(--shadow-focus-primary)'"
                @blur="$event.target.style.borderColor = 'transparent'; $event.target.style.boxShadow = 'none'"
                :aria-label="mobileOpen ? 'Close navigation menu' : 'Open navigation menu'" :aria-expanded="mobileOpen">
                <span :style="{
                    transform: mobileOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: `transform var(--duration-200) var(--ease-out)`
                }" aria-hidden="true">
                    {{ mobileOpen ? '✕' : '☰' }}
                </span>
            </button>

            <!-- Desktop Navigation -->
            <nav class="desktop-nav hidden lg:block" :style="{
                flex: '1',
                display: 'flex',
                justifyContent: 'flex-end'
            }" aria-label="Main navigation">
                <ComponentNavigationPrimary />
            </nav>
        </div>

        <!-- Mobile Navigation Drawer -->
        <el-drawer v-model="mobileOpen" direction="rtl" size="75%" :with-header="false"
            class="lg:hidden mobile-nav-drawer" :modal="true" :close-on-click-modal="true"
            :close-on-press-escape="true">
            <div :style="{
                padding: 'var(--space-4)',
                backgroundColor: 'var(--color-primary)',
                minHeight: '100%',
                fontFamily: 'var(--font-family-body)'
            }">

                <!-- Mobile Nav Header -->
                <div :style="{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--space-6)',
                    paddingBottom: 'var(--space-4)',
                    borderBottom: `var(--border-width-1) solid var(--color-monza-500)`
                }">
                    <span :style="{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-inverse)',
                        fontFamily: 'var(--font-family-heading)'
                    }">
                        Navigation
                    </span>
                    <button :style="{
                        padding: 'var(--space-1)',
                        color: 'var(--color-text-inverse)',
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: 'var(--font-size-xl)',
                        cursor: 'pointer',
                        borderRadius: 'var(--radius-base)'
                    }" @click="toggleMobile" aria-label="Close navigation">
                        ✕
                    </button>
                </div>

                <!-- Mobile Navigation Component -->
                <ComponentNavigationPrimary mode="vertical" :background-color="`var(--color-primary)`"
                    :text-color="`var(--color-text-inverse)`" :active-text-color="`var(--color-tree-poppy-200)`" />
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
/* Responsive logo sizing */
@media (min-width: 640px) {
    .header__logo {
        height: var(--space-10);
    }

    .header__title {
        font-size: var(--font-size-xl);
    }
}

@media (min-width: 1024px) {
    .header__title {
        font-size: var(--font-size-2xl);
    }
}

/* Enhanced hover effects for desktop */
@media (min-width: 1024px) {
    .header__brand:hover .header__title {
        color: var(--color-monza-100);
        transition: color var(--duration-200) var(--ease-out);
    }
}

/* Ensure proper z-index stacking */
.header--site {
    position: relative;
    z-index: 40;
}

.mobile-nav-drawer {
    z-index: 1000;
}
</style>