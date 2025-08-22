<script setup>
import { ref, computed } from 'vue'
import ComponentGrid from '../layout/COMPONENT__GRID.vue'

const props = defineProps({
    logos: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(logo =>
                typeof logo.name === 'string' &&
                (typeof logo.url === 'string' || logo.url === '') &&
                (typeof logo.link === 'string' || logo.link === '')
            )
        }
    },
    variant: {
        type: String,
        default: 'grid',
        validator: (value) => ['grid', 'carousel', 'inline'].includes(value)
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    grayscale: {
        type: Boolean,
        default: true
    },
    autoPlay: {
        type: Boolean,
        default: false
    },
    loop: {
        type: Boolean,
        default: true
    },
    showNavigation: {
        type: Boolean,
        default: false
    },
    showIndicators: {
        type: Boolean,
        default: false
    }
})

// Carousel state for carousel variant
const currentIndex = ref(0)
const isPlaying = ref(props.autoPlay)

// Computed properties
const logoSize = computed(() => {
    const sizes = {
        small: {
            width: '80px',
            height: '60px'
        },
        medium: {
            width: '120px',
            height: '80px'
        },
        large: {
            width: '160px',
            height: '100px'
        }
    }
    return sizes[props.size]
})

const gridColumns = computed(() => {
    const logoCount = props.logos.length
    if (logoCount <= 3) return logoCount
    if (logoCount <= 6) return 3
    return 4
})

// Carousel functionality
const nextSlide = () => {
    if (currentIndex.value < props.logos.length - 1) {
        currentIndex.value++
    } else if (props.loop) {
        currentIndex.value = 0
    }
}

const prevSlide = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    } else if (props.loop) {
        currentIndex.value = props.logos.length - 1
    }
}

const goToSlide = (index) => {
    currentIndex.value = index
}

// Auto-play functionality
let autoPlayInterval = null

const startAutoPlay = () => {
    if (props.autoPlay && props.variant === 'carousel') {
        autoPlayInterval = setInterval(() => {
            nextSlide()
        }, 3000)
        isPlaying.value = true
    }
}

const stopAutoPlay = () => {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval)
        autoPlayInterval = null
        isPlaying.value = false
    }
}

// Start auto-play on mount if enabled
if (props.autoPlay && props.variant === 'carousel') {
    startAutoPlay()
}

// Logo styling functions
const getLogoStyles = () => {
    return {
        width: logoSize.value.width,
        height: logoSize.value.height,
        objectFit: 'contain',
        filter: props.grayscale ? 'grayscale(100%)' : 'none',
        transition: 'all var(--duration-300) var(--ease-out)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--space-2)'
    }
}

const getContainerStyles = () => {
    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-4)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        border: 'var(--border-width-1) solid var(--color-border-primary)',
        transition: 'all var(--duration-200) var(--ease-out)',
        cursor: 'pointer'
    }
}

const getCarouselStyles = () => {
    return {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius-xl)',
        backgroundColor: 'var(--color-bg-secondary)',
        border: 'var(--border-width-1) solid var(--color-border-primary)'
    }
}

const getCarouselTrackStyles = () => {
    return {
        display: 'flex',
        transform: `translateX(-${currentIndex.value * 100}%)`,
        transition: 'transform var(--duration-500) var(--ease-out)'
    }
}

const getInlineStyles = () => {
    return {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-4)',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
</script>

<template>
    <div class="company-logo-showcase" :style="{
        fontFamily: 'var(--font-family-body)'
    }">

        <!-- Grid Variant -->
        <ComponentGrid v-if="variant === 'grid'" :columns="1" gap="md"
            :class="`md:grid-cols-${Math.min(gridColumns, 3)} lg:grid-cols-${gridColumns}`">

            <div v-for="logo in logos" :key="logo.name" :style="getContainerStyles()"
                @mouseenter="$event.currentTarget.style.transform = 'translateY(-4px)'; $event.currentTarget.style.boxShadow = 'var(--shadow-lg)'"
                @mouseleave="$event.currentTarget.style.transform = 'translateY(0)'; $event.currentTarget.style.boxShadow = 'none'"
                @click="logo.link && window.open(logo.link, '_blank')" :title="logo.name" role="button"
                :tabindex="logo.link ? 0 : -1" :aria-label="`Visit ${logo.name} website`">

                <img v-if="logo.url" :src="logo.url" :alt="logo.name" :style="getLogoStyles()"
                    @mouseenter="$event.target.style.filter = 'grayscale(0%)'"
                    @mouseleave="$event.target.style.filter = grayscale ? 'grayscale(100%)' : 'none'" />

                <!-- Placeholder for logos without images -->
                <div v-else :style="{
                    ...getLogoStyles(),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--color-bg-tertiary)',
                    color: 'var(--color-text-secondary)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    textAlign: 'center',
                    border: 'var(--border-width-1) dashed var(--color-border-secondary)'
                }">
                    {{ logo.name }}
                </div>
            </div>
        </ComponentGrid>

        <!-- Carousel Variant -->
        <div v-else-if="variant === 'carousel'" :style="getCarouselStyles()" @mouseenter="stopAutoPlay"
            @mouseleave="startAutoPlay">

            <!-- Carousel Track -->
            <div :style="getCarouselTrackStyles()">
                <div v-for="logo in logos" :key="'carousel-' + logo.name" :style="{
                    minWidth: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-8)'
                }">

                    <div :style="{
                        ...getContainerStyles(),
                        backgroundColor: 'transparent',
                        border: 'none'
                    }" @click="logo.link && window.open(logo.link, '_blank')" :title="logo.name" role="button"
                        :tabindex="logo.link ? 0 : -1">

                        <img v-if="logo.url" :src="logo.url" :alt="logo.name" :style="getLogoStyles()" />

                        <div v-else :style="{
                            ...getLogoStyles(),
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'var(--color-bg-tertiary)',
                            color: 'var(--color-text-secondary)',
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            textAlign: 'center'
                        }">
                            {{ logo.name }}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Navigation Arrows -->
            <div v-if="showNavigation" :style="{
                position: 'absolute',
                top: '50%',
                left: 'var(--space-4)',
                transform: 'translateY(-50%)',
                zIndex: '2'
            }">
                <button @click="prevSlide" :style="{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-bg-primary)',
                    border: 'var(--border-width-1) solid var(--color-border-primary)',
                    color: 'var(--color-text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all var(--duration-200) var(--ease-out)',
                    boxShadow: 'var(--shadow-base)'
                }" @mouseenter="$event.target.style.backgroundColor = 'var(--color-primary)'; $event.target.style.color = 'var(--color-text-inverse)'"
                    @mouseleave="$event.target.style.backgroundColor = 'var(--color-bg-primary)'; $event.target.style.color = 'var(--color-text-primary)'"
                    aria-label="Previous logo">
                    ←
                </button>
            </div>

            <div v-if="showNavigation" :style="{
                position: 'absolute',
                top: '50%',
                right: 'var(--space-4)',
                transform: 'translateY(-50%)',
                zIndex: '2'
            }">
                <button @click="nextSlide" :style="{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-bg-primary)',
                    border: 'var(--border-width-1) solid var(--color-border-primary)',
                    color: 'var(--color-text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all var(--duration-200) var(--ease-out)',
                    boxShadow: 'var(--shadow-base)'
                }" @mouseenter="$event.target.style.backgroundColor = 'var(--color-primary)'; $event.target.style.color = 'var(--color-text-inverse)'"
                    @mouseleave="$event.target.style.backgroundColor = 'var(--color-bg-primary)'; $event.target.style.color = 'var(--color-text-primary)'"
                    aria-label="Next logo">
                    →
                </button>
            </div>

            <!-- Indicators -->
            <div v-if="showIndicators" :style="{
                position: 'absolute',
                bottom: 'var(--space-4)',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 'var(--space-2)',
                zIndex: '2'
            }">
                <button v-for="(logo, index) in logos" :key="'indicator-' + index" @click="goToSlide(index)" :style="{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: currentIndex === index ? 'var(--color-primary)' : 'var(--color-bg-tertiary)',
                    border: 'var(--border-width-1) solid var(--color-border-primary)',
                    cursor: 'pointer',
                    transition: 'all var(--duration-200) var(--ease-out)'
                }" :aria-label="`Go to ${logo.name}`">
                </button>
            </div>
        </div>

        <!-- Inline Variant -->
        <div v-else-if="variant === 'inline'" :style="getInlineStyles()">
            <div v-for="logo in logos" :key="'inline-' + logo.name" :style="{
                display: 'inline-flex',
                alignItems: 'center',
                padding: 'var(--space-2) var(--space-4)',
                backgroundColor: 'var(--color-bg-secondary)',
                borderRadius: 'var(--radius-lg)',
                border: 'var(--border-width-1) solid var(--color-border-primary)',
                transition: 'all var(--duration-200) var(--ease-out)',
                cursor: logo.link ? 'pointer' : 'default'
            }" @mouseenter="$event.currentTarget.style.transform = 'scale(1.05)'"
                @mouseleave="$event.currentTarget.style.transform = 'scale(1)'"
                @click="logo.link && window.open(logo.link, '_blank')" :title="logo.name"
                :role="logo.link ? 'button' : null" :tabindex="logo.link ? 0 : -1">

                <img v-if="logo.url" :src="logo.url" :alt="logo.name" :style="{
                    width: logoSize.width,
                    height: logoSize.height,
                    objectFit: 'contain',
                    filter: props.grayscale ? 'grayscale(100%)' : 'none'
                }" />

                <span v-else :style="{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-text-primary)'
                }">
                    {{ logo.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.company-logo-showcase {
    width: 100%;
}

/* Responsive grid adjustments */
@media (min-width: 768px) {
    .company-logo-showcase .md\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .company-logo-showcase .md\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .company-logo-showcase .lg\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .company-logo-showcase .lg\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

/* Accessibility enhancements */
.company-logo-showcase [role="button"]:focus {
    outline: 3px solid var(--color-border-focus);
    outline-offset: 2px;
}

/* Hover effects for better interactivity */
.company-logo-showcase img:hover {
    transform: scale(1.05);
}

/* Carousel specific styles */
.company-logo-showcase [aria-label*="logo"]:focus {
    outline: 3px solid var(--color-border-focus);
    outline-offset: 2px;
}
</style>