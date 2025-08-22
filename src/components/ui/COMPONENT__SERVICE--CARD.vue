<script setup>
defineProps({
    service: {
        type: Object,
        required: true,
        validator: (value) => {
            return typeof value.title === 'string' &&
                typeof value.description === 'string' &&
                (typeof value.image === 'string' || value.image === undefined) &&
                (typeof value.icon === 'string' || value.icon === undefined) &&
                (typeof value.linkText === 'string' || value.linkText === undefined) &&
                (typeof value.linkUrl === 'string' || value.linkUrl === undefined) &&
                (typeof value.featured === 'boolean' || value.featured === undefined)
        }
    },
    variant: {
        type: String,
        default: 'standard',
        validator: (value) => ['minimal', 'standard', 'detailed'].includes(value)
    },
    iconPosition: {
        type: String,
        default: 'top',
        validator: (value) => ['top', 'left', 'background'].includes(value)
    },
    showLink: {
        type: Boolean,
        default: true
    },
    showFeatures: {
        type: Boolean,
        default: true
    },
    linkText: {
        type: String,
        default: 'Learn More'
    }
})

// Tailwind class mappings for variants
const getVariantClasses = (variant, featured) => {
    if (featured || variant === 'featured') {
        return 'border-2 border-monza-600 shadow-lg'
    }

    switch (variant) {
        case 'detailed':
            return 'border border-slate-300 shadow-md'
        case 'minimal':
            return 'border-b border-slate-200 pb-4 shadow-none rounded-none'
        case 'standard':
        default:
            return 'border border-slate-200 shadow-sm'
    }
}

const getLayoutClasses = (iconPosition) => {
    switch (iconPosition) {
        case 'left':
            return 'flex flex-row gap-6 md:flex-col md:gap-4'
        case 'background':
            return 'relative overflow-hidden'
        case 'top':
        default:
            return 'flex flex-col'
    }
}

const getIconContainerClasses = (iconPosition) => {
    const baseClasses = 'flex-shrink-0'

    switch (iconPosition) {
        case 'left':
            return `${baseClasses} w-16 h-16 md:w-full md:h-auto md:mb-4`
        case 'background':
            return `${baseClasses} absolute top-4 right-4 opacity-10 z-0`
        case 'top':
        default:
            return `${baseClasses} w-full mb-4`
    }
}

const getIconClasses = (iconPosition) => {
    switch (iconPosition) {
        case 'left':
            return 'w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-2xl text-monza-600 mx-0'
        case 'background':
            return 'w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center text-4xl text-monza-600 mx-auto'
        case 'top':
        default:
            return 'w-20 h-20 bg-slate-100 rounded-xl flex items-center justify-center text-4xl text-monza-600 mx-auto'
    }
}

const getContentClasses = (iconPosition) => {
    const baseClasses = 'flex-1'
    return iconPosition === 'background' ? `${baseClasses} relative z-10` : baseClasses
}

const getTitleSize = (variant) => {
    return variant === 'detailed' ? 'text-2xl' : 'text-xl'
}

const getImageHeight = (iconPosition) => {
    return iconPosition === 'top' ? 'h-48' : 'h-full'
}

const getFeatureGridClasses = (variant) => {
    return variant === 'detailed' ? 'grid grid-cols-1 md:grid-cols-2 gap-1' : 'flex flex-col gap-1'
}
</script>

<template>
    <article
        class="service-card relative bg-white overflow-hidden transition-all duration-200 ease-out font-body hover:shadow-md lg:hover:-translate-y-0.5"
        :class="[
            variant === 'minimal' ? 'rounded-none p-0' : 'rounded-lg p-6',
            getVariantClasses(variant, service.featured),
            getLayoutClasses(iconPosition)
        ]" :aria-label="`Service: ${service.title}`">

        <!-- Icon/Image Section -->
        <div v-if="service.icon || service.image" class="service-card__visual"
            :class="getIconContainerClasses(iconPosition)">

            <!-- Service Image -->
            <div v-if="service.image" class="w-full rounded-md overflow-hidden bg-slate-100"
                :class="getImageHeight(iconPosition)">
                <img :src="service.image" :alt="service.title" class="w-full h-full object-cover" />
            </div>

            <!-- Service Icon -->
            <div v-else-if="service.icon" :class="getIconClasses(iconPosition)">
                {{ service.icon }}
            </div>
        </div>

        <!-- Content Section -->
        <div class="service-card__content" :class="getContentClasses(iconPosition)">

            <!-- Category Badge -->
            <div v-if="service.category" class="mb-2">
                <span
                    class="inline-block px-2 py-1 text-xs font-medium text-tree-poppy-600 bg-tree-poppy-50 rounded uppercase tracking-wide">
                    {{ service.category }}
                </span>
            </div>

            <!-- Service Title -->
            <h3 class="font-heading font-semibold text-slate-900 mb-2 leading-tight md:text-2xl"
                :class="getTitleSize(variant)">
                {{ service.title }}
            </h3>

            <!-- Service Description -->
            <p class="text-base text-slate-600 leading-normal"
                :class="showFeatures && service.features ? 'mb-4' : 'mb-6'">
                {{ service.description }}
            </p>

            <!-- Service Features -->
            <div v-if="showFeatures && service.features" class="mb-6">
                <h4 class="text-sm font-medium text-slate-900 mb-2 uppercase tracking-wide">
                    Key Features
                </h4>
                <ul class="text-sm text-slate-600 list-none p-0" :class="getFeatureGridClasses(variant)">
                    <li v-for="feature in service.features" :key="feature" class="pl-4 relative leading-relaxed">
                        <span class="absolute left-0 text-monza-600 font-bold">✓</span>
                        {{ feature }}
                    </li>
                </ul>
            </div>

            <!-- Action Button -->
            <div v-if="showLink" class="service-card__action">
                <a :href="service.linkUrl || '#'"
                    class="inline-flex items-center px-6 py-3 text-base font-medium font-body text-white bg-monza-600 border-none rounded-md no-underline transition-all duration-200 ease-out tracking-wide shadow-sm hover:bg-monza-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-monza-500 focus:ring-offset-2"
                    :aria-label="`${service.linkText || linkText} for ${service.title}`">
                    {{ service.linkText || linkText }}
                    <span class="ml-2 text-sm" aria-hidden="true">→</span>
                </a>
            </div>

            <!-- Featured Badge -->
            <div v-if="service.featured"
                class="absolute right-0 px-2 py-1 text-xs font-bold text-white bg-tree-poppy-600 rounded uppercase tracking-wider shadow-sm z-20"
                :class="iconPosition === 'background' ? 'top-4' : 'top-0'">
                Featured
            </div>
        </div>
    </article>
</template>

<style scoped>
/* Essential responsive overrides that can't be done with Tailwind alone */
@media (max-width: 767px) {
    .service-card.flex-row {
        flex-direction: column !important;
    }

    .service-card__visual.w-16 {
        width: 100% !important;
        margin-bottom: 1rem !important;
    }
}
</style>