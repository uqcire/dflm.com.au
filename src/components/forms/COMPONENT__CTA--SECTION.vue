<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    primaryAction: {
        type: Object,
        required: true,
        validator: (value) => {
            return value &&
                typeof value.text === 'string' &&
                typeof value.href === 'string' &&
                ['button', 'link'].includes(value.type || 'button')
        }
    },
    secondaryAction: {
        type: Object,
        default: null,
        validator: (value) => {
            if (!value) return true
            return typeof value.text === 'string' &&
                typeof value.href === 'string' &&
                ['button', 'link'].includes(value.type || 'link')
        }
    },
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'accent', 'gradient', 'minimal'].includes(value)
    },
    alignment: {
        type: String,
        default: 'center',
        validator: (value) => ['left', 'center', 'right'].includes(value)
    },
    size: {
        type: String,
        default: 'standard',
        validator: (value) => ['compact', 'standard', 'large'].includes(value)
    }
})

// Tailwind class mappings
const getVariantClasses = (variant) => {
    const variantMap = {
        primary: 'bg-gradient-to-br from-monza-600 to-monza-700 text-white',
        secondary: 'bg-gradient-to-br from-tree-poppy-600 to-tree-poppy-700 text-white',
        accent: 'bg-gradient-to-br from-pickled-bluewood-600 to-pickled-bluewood-700 text-white',
        gradient: 'bg-gradient-to-br from-monza-600 via-tree-poppy-600 to-pickled-bluewood-600 text-white',
        minimal: 'bg-slate-50 text-slate-900 border border-slate-200'
    }
    return variantMap[variant] || variantMap.primary
}

const getSizeClasses = (size) => {
    const sizeMap = {
        compact: 'py-8 px-6',
        standard: 'py-12 px-8',
        large: 'py-16 px-12'
    }
    return sizeMap[size] || sizeMap.standard
}

const getAlignmentClasses = (alignment) => {
    const alignMap = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    }
    return alignMap[alignment] || 'text-center'
}

const getTitleSizeClasses = (size) => {
    const titleMap = {
        compact: 'text-2xl md:text-3xl',
        standard: 'text-3xl md:text-4xl',
        large: 'text-4xl md:text-5xl'
    }
    return titleMap[size] || titleMap.standard
}

const getDescriptionSizeClasses = (size) => {
    const descMap = {
        compact: 'text-base md:text-lg',
        standard: 'text-lg md:text-xl',
        large: 'text-xl md:text-2xl'
    }
    return descMap[size] || descMap.standard
}
</script>

<template>
    <section class="cta-section relative overflow-hidden font-body" :class="[
        getVariantClasses(variant),
        getSizeClasses(size),
        getAlignmentClasses(alignment)
    ]" role="region" aria-label="Call to action">

        <!-- Background Decoration -->
        <div class="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
            <div class="absolute top-4 right-4 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
            <div class="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        <!-- Content Container -->
        <div class="relative z-10 max-w-4xl mx-auto">

            <!-- Title -->
            <h2 class="font-heading font-bold mb-4 leading-tight" :class="getTitleSizeClasses(size)">
                {{ title }}
            </h2>

            <!-- Description -->
            <p v-if="description" class="font-body leading-relaxed mb-8 opacity-90" :class="[
                getDescriptionSizeClasses(size),
                variant === 'minimal' ? 'text-slate-600' : 'text-white'
            ]">
                {{ description }}
            </p>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" :class="{
                'sm:justify-start': alignment === 'left',
                'sm:justify-center': alignment === 'center',
                'sm:justify-end': alignment === 'right'
            }">

                <!-- Primary Action -->
                <a :href="primaryAction.href"
                    class="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 ease-out no-underline border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-offset-2"
                    :class="[
                        variant === 'minimal'
                            ? 'bg-monza-600 text-white hover:bg-monza-700 focus:ring-monza-500'
                            : 'bg-white text-slate-900 hover:bg-slate-100 focus:ring-white/50'
                    ]">
                    {{ primaryAction.text }}
                </a>

                <!-- Secondary Action -->
                <a v-if="secondaryAction" :href="secondaryAction.href"
                    class="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg transition-all duration-200 ease-out no-underline border-2 focus:outline-none focus:ring-4 focus:ring-offset-2"
                    :class="[
                        variant === 'minimal'
                            ? 'border-slate-300 text-slate-700 hover:bg-slate-100 focus:ring-slate-500'
                            : 'border-white/30 text-white hover:bg-white/10 focus:ring-white/50'
                    ]">
                    {{ secondaryAction.text }}
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Only keep essential styles that can't be done with Tailwind */
.cta-section {
    /* All styles now handled by Tailwind classes */
}
</style>