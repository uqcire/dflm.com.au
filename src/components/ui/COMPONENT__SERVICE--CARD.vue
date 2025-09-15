<script setup>
import { ElCard } from 'element-plus'
import ComponentImageDisplay from '@/components/ui/COMPONENT__IMAGE--DISPLAY.vue'

defineProps({
    service: {
        type: Object,
        required: true,
        validator: (value) => {
            return typeof value.title === 'string' &&
                typeof value.description === 'string' &&
                (typeof value.image === 'string' || value.image === undefined) &&
                (typeof value.linkText === 'string' || value.linkText === undefined) &&
                (typeof value.linkUrl === 'string' || value.linkUrl === undefined)
        }
    },
    variant: {
        type: String,
        default: 'standard',
        validator: (value) => ['minimal', 'standard', 'detailed'].includes(value)
    },
    showLink: {
        type: Boolean,
        default: true
    },
    linkText: {
        type: String,
        default: 'View Service Details'
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

const getTitleSize = (variant) => {
    return variant === 'detailed' ? 'text-2xl' : 'text-xl'
}
</script>

<template>
    <ElCard
        class="service-card transition-all duration-200 ease-out font-body hover:shadow-md lg:hover:-translate-y-0.5"
        :class="[
            variant === 'minimal' ? 'border-0 shadow-none' : '',
            getVariantClasses(variant, service.featured)
        ]" :body-style="{ padding: variant === 'minimal' ? '0' : '24px' }" :aria-label="`Service: ${service.title}`">
        <!-- Image Section - Top -->
        <div v-if="service.image" class="service-card__visual mb-6">
            <div class="w-full h-48 lg:h-72 rounded-lg overflow-hidden bg-slate-100">
                <ComponentImageDisplay :src="service.image" :alt="service.title" size="2xl" variant="plain"
                    :object-fit="'cover'" loading="lazy" class="w-full h-full" />
            </div>
        </div>

        <!-- Content Section - Bottom -->
        <div class="service-card__content flex flex-col h-full">

            <!-- Service Title -->
            <h3 class="font-body font-bold md:text-base pb-4 text-pickled-bluewood-800 mb-4 leading-tight"
                :class="getTitleSize(variant)">
                {{ service.title }}
            </h3>

            <!-- Service Description -->
            <div class="mb-6 flex-1">
                <p class="text-xs text-pickled-bluewood-700 leading-relaxed line-clamp-5">
                    {{ service.description }}
                </p>
            </div>

            <!-- Action Button -->
            <div v-if="showLink" class="service-card__action mt-auto">
                <router-link :to="service.linkUrl || '#'"
                    class="inline-flex items-center text-xs font-medium font-body text-monza-600 no-underline transition-all duration-200 ease-out hover:text-monza-700 group"
                    :aria-label="`${service.linkText || linkText} for ${service.title}`">
                    {{ service.linkText || linkText }}
                    <span class="ml-2 text-xs transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true">→</span>
                </router-link>
            </div>
        </div>
    </ElCard>
</template>

<style scoped>
/* Custom styles for Element Plus card */
.service-card {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.service-card :deep(.el-card__body) {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 24px;
}

.service-card :deep(.el-card) {
    height: 100%;
    border: none !important;
    box-shadow: none !important;
    transition: all 0.2s ease-out;
}

.service-card :deep(.el-card:hover) {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
}



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