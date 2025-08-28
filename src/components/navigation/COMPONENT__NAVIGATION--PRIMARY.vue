<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    mode: { type: String, default: 'horizontal' },
    backgroundColor: { type: String, default: '' },
    textColor: { type: String, default: '' },
    activeTextColor: { type: String, default: '' },
    // Sub-navigation props
    isSubNavigation: { type: Boolean, default: false },
    subNavItems: {
        type: Array,
        default: () => [],
        validator: (value) => {
            return value.every(item =>
                typeof item === 'object' &&
                item.id &&
                item.title &&
                item.href
            )
        }
    },
    sticky: { type: Boolean, default: false }
})

// Active section tracking for sub-navigation
const activeSection = ref('')

// Scroll to section function
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        activeSection.value = sectionId
    }
}

// Intersection Observer for tracking active section
let observer = null

const setupIntersectionObserver = () => {
    if (!props.isSubNavigation || !props.subNavItems.length) return

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id
                if (props.subNavItems.some(item => item.id === sectionId)) {
                    activeSection.value = sectionId
                }
            }
        })
    }, {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0
    })

    // Observe all sections
    props.subNavItems.forEach(item => {
        const element = document.getElementById(item.id)
        if (element) {
            observer.observe(element)
        }
    })
}

// Initialize active section
const initializeActiveSection = () => {
    if (props.isSubNavigation && props.subNavItems.length) {
        activeSection.value = props.subNavItems[0]?.id || ''
    }
}

onMounted(() => {
    initializeActiveSection()
    setupIntersectionObserver()
})

onUnmounted(() => {
    if (observer) {
        observer.disconnect()
    }
})
</script>

<template>
    <!-- Sub Navigation -->
    <nav v-if="isSubNavigation" :class="[
        'border-b border-slate-200',
        sticky ? 'sticky top-0 z-50 bg-white/95 backdrop-blur-sm' : ''
    ]" role="navigation" aria-label="Sub Navigation">
        <div
            class="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 px-4 py-2 overflow-x-auto lg:overflow-x-visible">
            <router-link v-for="item in subNavItems" :key="item.id" :to="item.href"
                @click.prevent="scrollToSection(item.id)"
                class="relative whitespace-nowrap font-body text-sm font-medium text-pickled-bluewood-700 hover:text-pickled-bluewood-900 transition-all duration-200 py-2 border-b-2 border-transparent hover:border-monza-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-monza-600 after:transition-all after:duration-300 after:ease-out"
                :class="{
                    'text-pickled-bluewood-900 border-monza-600 after:w-full': activeSection === item.id,
                    'hover:after:w-full': activeSection !== item.id
                }">
                {{ item.title }}
            </router-link>
        </div>
    </nav>

    <!-- Primary Navigation -->
    <nav v-else class="px-4" role="navigation" aria-label="Primary">
        <el-menu class="border-b-0" :ellipsis="false" :mode="mode" :default-active="$route.path" router
            :background-color="backgroundColor || 'hsl(var(--monza-600))'" :text-color="textColor || '#ffffff'"
            :active-text-color="activeTextColor || 'hsl(var(--tree-poppy-200))'">
            <el-menu-item index="/our-company">Our Company</el-menu-item>
            <el-menu-item index="/our-businesses">Our Businesses</el-menu-item>
            <el-menu-item index="/products">Products</el-menu-item>
            <el-menu-item index="/news">News</el-menu-item>
            <el-menu-item index="/contact">Contact us</el-menu-item>
        </el-menu>
    </nav>
</template>

<style scoped>
/* Element Plus Menu Overrides - Only essential overrides that can't be done with Tailwind */
.el-menu--horizontal.el-menu {
    border-bottom: none;
}

.el-menu--vertical {
    border-right: none !important;
}

/* Essential Element Plus state overrides */
.el-menu-item:hover,
.el-menu-item:focus {
    background-color: hsl(var(--monza-700)) !important;
    color: #ffffff !important;
}

.el-menu-item.is-active {
    background-color: hsl(var(--monza-700)) !important;
    color: hsl(var(--tree-poppy-200)) !important;
}

.el-sub-menu__title {
    color: #ffffff !important;
}

.el-sub-menu__title:hover,
.el-sub-menu__title:focus {
    background-color: hsl(var(--monza-700)) !important;
    color: #ffffff !important;
}

.el-sub-menu.is-opened .el-sub-menu__title {
    background-color: hsl(var(--monza-700)) !important;
    color: hsl(var(--tree-poppy-200)) !important;
}

.el-menu .el-menu-item {
    background-color: hsl(var(--monza-600)) !important;
    color: #ffffff !important;
}

.el-sub-menu .el-menu-item:hover,
.el-sub-menu .el-menu-item:focus {
    background-color: hsl(var(--monza-700)) !important;
    color: #ffffff !important;
}

.el-sub-menu .el-menu-item.is-active {
    background-color: hsl(var(--monza-700)) !important;
    color: hsl(var(--tree-poppy-200)) !important;
}
</style>