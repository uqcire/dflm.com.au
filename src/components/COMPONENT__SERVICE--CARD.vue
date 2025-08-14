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
        default: 'default',
        validator: (value) => ['default', 'featured', 'minimal'].includes(value)
    },
    imagePosition: {
        type: String,
        default: 'top',
        validator: (value) => ['top', 'left', 'background'].includes(value)
    },
    showLink: {
        type: Boolean,
        default: true
    },
    linkText: {
        type: String,
        default: 'Learn More'
    }
})

const getVariantClasses = (variant, featured) => {
    if (featured) {
        return 'border-2 border-monza-500 shadow-lg'
    }

    switch (variant) {
        case 'featured':
            return 'border border-monza-300 shadow-md'
        case 'minimal':
            return 'border-b border-gray-200 pb-4'
        case 'default':
        default:
            return 'border border-gray-200 shadow-sm'
    }
}

const getImagePositionClasses = (imagePosition) => {
    switch (imagePosition) {
        case 'left':
            return 'flex flex-col md:flex-row'
        case 'background':
            return 'relative overflow-hidden'
        case 'top':
        default:
            return 'flex flex-col'
    }
}
</script>

<template>
    <div :class="[
        'service-card',
        'bg-white',
        'rounded-lg',
        'overflow-hidden',
        'transition-all',
        'duration-300',
        'hover:shadow-lg',
        getVariantClasses(variant, service.featured),
        getImagePositionClasses(imagePosition)
    ]">
        <!-- Background Image Variant -->
        <div v-if="imagePosition === 'background' && service.image"
            class="service-card__background-wrapper absolute inset-0 z-0">
            <img :src="service.image" :alt="service.title"
                class="service-card__background-image w-full h-full object-cover" />
            <div class="service-card__background-overlay absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <!-- Top or Left Image -->
        <div v-if="imagePosition !== 'background' && service.image" :class="[
            'service-card__image-wrapper',
            imagePosition === 'left' ? 'md:w-1/3' : 'w-full h-48'
        ]">
            <img :src="service.image" :alt="service.title" :class="[
                'service-card__image',
                'w-full',
                'h-full',
                'object-cover',
                imagePosition === 'left' ? 'md:h-full' : ''
            ]" />
        </div>

        <!-- Content -->
        <div :class="[
            'service-card__content',
            'p-6',
            'flex',
            'flex-col',
            'flex-1',
            imagePosition === 'background' ? 'relative z-10 text-white' : '',
            imagePosition === 'left' ? 'md:w-2/3' : ''
        ]">
            <!-- Icon -->
            <div v-if="service.icon" class="service-card__icon mb-4">
                <img :src="`/src/assets/icons/${service.icon}.svg`" :alt="service.title"
                    class="service-card__icon-image w-10 h-10" />
            </div>

            <!-- Title -->
            <h3 :class="[
                'service-card__title',
                'text-xl',
                'font-bold',
                'font-playfair',
                'mb-3',
                imagePosition === 'background' ? 'text-white' : 'text-gray-900'
            ]">
                {{ service.title }}
            </h3>

            <!-- Description -->
            <p :class="[
                'service-card__description',
                'mb-4',
                'flex-1',
                imagePosition === 'background' ? 'text-gray-100' : 'text-gray-600'
            ]">
                {{ service.description }}
            </p>

            <!-- Link -->
            <div v-if="showLink && (service.linkUrl || linkText)" class="service-card__link mt-auto">
                <a :href="service.linkUrl || '#'" :class="[
                    'service-card__link-text',
                    'inline-flex',
                    'items-center',
                    'font-medium',
                    'transition-colors',
                    'duration-200',
                    imagePosition === 'background'
                        ? 'text-white hover:text-monza-200'
                        : 'text-monza-600 hover:text-monza-800'
                ]">
                    {{ service.linkText || linkText }}
                    <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>