<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    imagePosition: {
        type: String,
        default: 'none',
        validator: (value) => ['none', 'left', 'right', 'top', 'background'].includes(value)
    },
    variant: {
        type: String,
        default: 'default',
        validator: (value) => ['default', 'featured', 'minimal', 'card'].includes(value)
    },
    alignment: {
        type: String,
        default: 'left',
        validator: (value) => ['left', 'center', 'right'].includes(value)
    },
    showCta: {
        type: Boolean,
        default: false
    },
    ctaText: {
        type: String,
        default: 'View Details'
    },
    ctaUrl: {
        type: String,
        default: '#'
    },
    backgroundColor: {
        type: String,
        default: 'white'
    }
})

const getVariantClasses = (variant) => {
    switch (variant) {
        case 'featured':
            return 'border-l-4 border-monza-500 pl-6'
        case 'minimal':
            return ''
        case 'card':
            return 'bg-white rounded-lg shadow-md p-8 border border-gray-200'
        case 'default':
        default:
            return 'pb-8 border-b border-gray-200'
    }
}

const getAlignmentClasses = (alignment) => {
    switch (alignment) {
        case 'center':
            return 'text-center'
        case 'right':
            return 'text-right'
        case 'left':
        default:
            return 'text-left'
    }
}

const getLayoutClasses = (imagePosition) => {
    switch (imagePosition) {
        case 'left':
            return 'flex flex-col md:flex-row gap-8 items-center'
        case 'right':
            return 'flex flex-col md:flex-row-reverse gap-8 items-center'
        case 'background':
            return 'relative overflow-hidden'
        case 'top':
        case 'none':
        default:
            return 'flex flex-col'
    }
}

const getBackgroundColorClass = (backgroundColor) => {
    switch (backgroundColor) {
        case 'gray':
            return 'bg-gray-50'
        case 'monza':
            return 'bg-monza-50'
        case 'white':
        default:
            return 'bg-white'
    }
}
</script>

<template>
    <section :class="[
        'content-section',
        'py-12',
        'px-4',
        getBackgroundColorClass(backgroundColor),
        getVariantClasses(variant)
    ]">
        <div class="container mx-auto">
            <div :class="['content-section__layout', getLayoutClasses(imagePosition)]">
                <!-- Background Image -->
                <div v-if="imagePosition === 'background' && image"
                    class="content-section__background-wrapper absolute inset-0 z-0">
                    <img :src="image" :alt="title"
                        class="content-section__background-image w-full h-full object-cover" />
                    <div class="content-section__background-overlay absolute inset-0 bg-black bg-opacity-50"></div>
                </div>

                <!-- Left or Right Image -->
                <div v-if="imagePosition === 'left' || imagePosition === 'right'"
                    class="content-section__image-wrapper flex-shrink-0"
                    :class="imagePosition === 'left' ? 'md:w-1/3' : 'md:w-1/3'">
                    <img :src="image" :alt="title" class="content-section__image w-full h-auto rounded-lg shadow-md" />
                </div>

                <!-- Top Image -->
                <div v-if="imagePosition === 'top' && image" class="content-section__image-wrapper mb-8">
                    <img :src="image" :alt="title"
                        class="content-section__image w-full h-64 object-cover rounded-lg shadow-md" />
                </div>

                <!-- Content -->
                <div :class="[
                    'content-section__content',
                    'flex',
                    'flex-col',
                    imagePosition === 'background' ? 'relative z-10 text-white' : '',
                    imagePosition === 'left' || imagePosition === 'right' ? 'md:w-2/3' : 'w-full',
                    getAlignmentClasses(alignment)
                ]">
                    <!-- Subtitle -->
                    <div v-if="subtitle" class="content-section__subtitle mb-2">
                        <span class="text-monza-600 font-medium uppercase text-sm tracking-wide">
                            {{ subtitle }}
                        </span>
                    </div>

                    <!-- Title -->
                    <h2 :class="[
                        'content-section__title',
                        'text-3xl',
                        'font-bold',
                        'font-playfair',
                        'mb-6',
                        imagePosition === 'background' ? 'text-white' : 'text-gray-900'
                    ]">
                        {{ title }}
                    </h2>

                    <!-- Content -->
                    <div :class="[
                        'content-section__text',
                        'prose',
                        'prose-lg',
                        'max-w-none',
                        'mb-8',
                        imagePosition === 'background' ? 'text-gray-100' : 'text-gray-600'
                    ]" v-html="content"></div>

                    <!-- CTA Button -->
                    <div v-if="showCta" class="content-section__cta mt-auto">
                        <a :href="ctaUrl" :class="[
                            'content-section__cta-button',
                            'inline-block',
                            'px-6',
                            'py-3',
                            'rounded-md',
                            'font-medium',
                            'transition-colors',
                            'duration-200',
                            imagePosition === 'background'
                                ? 'bg-white text-monza-600 hover:bg-gray-100'
                                : 'bg-monza-600 text-white hover:bg-monza-700'
                        ]">
                            {{ ctaText }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>