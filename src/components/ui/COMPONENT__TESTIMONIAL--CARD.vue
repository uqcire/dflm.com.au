<script setup>
defineProps({
    testimonial: {
        type: Object,
        required: true,
        validator: (value) => {
            return value &&
                typeof value.quote === 'string' &&
                typeof value.author === 'string' &&
                (typeof value.title === 'string' || value.title === undefined) &&
                (typeof value.company === 'string' || value.company === undefined) &&
                (typeof value.avatar === 'string' || value.avatar === undefined) &&
                (typeof value.rating === 'number' || value.rating === undefined) &&
                (typeof value.date === 'string' || value.date === undefined)
        }
    },
    variant: {
        type: String,
        default: 'standard',
        validator: (value) => ['minimal', 'standard', 'featured'].includes(value)
    },
    showRating: {
        type: Boolean,
        default: true
    },
    showAvatar: {
        type: Boolean,
        default: true
    },
    showDate: {
        type: Boolean,
        default: false
    }
})

// Tailwind class mappings
const getVariantClasses = (variant, featured) => {
    if (featured || variant === 'featured') {
        return 'border-2 border-monza-600 shadow-lg bg-gradient-to-br from-white to-slate-50'
    }

    switch (variant) {
        case 'minimal':
            return 'border-none shadow-none p-0'
        case 'standard':
        default:
            return 'border border-slate-200 shadow-sm bg-white'
    }
}

const renderStars = (rating) => {
    if (!rating || rating < 1 || rating > 5) return ''

    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - Math.ceil(rating)

    return '★'.repeat(fullStars) +
        (hasHalfStar ? '☆' : '') +
        '☆'.repeat(emptyStars)
}

const formatDate = (dateString) => {
    if (!dateString) return ''
    try {
        return new Date(dateString).toLocaleDateString('en-AU', {
            year: 'numeric',
            month: 'long'
        })
    } catch {
        return dateString
    }
}
</script>

<template>
    <article
        class="testimonial-card relative overflow-hidden transition-all duration-200 ease-out font-body hover:shadow-md"
        :class="[
            variant === 'minimal' ? 'rounded-none p-0' : 'rounded-lg p-8',
            getVariantClasses(variant, testimonial.featured)
        ]" :aria-label="`Testimonial from ${testimonial.author}`">

        <!-- Quote Icon -->
        <div v-if="variant !== 'minimal'" class="mb-4">
            <div class="w-12 h-12 flex items-center justify-center bg-monza-100 rounded-full">
                <span class="text-2xl text-monza-600" aria-hidden="true">"</span>
            </div>
        </div>

        <!-- Rating -->
        <div v-if="showRating && testimonial.rating" class="mb-4">
            <div class="flex items-center gap-2">
                <span class="text-lg text-yellow-500" role="img" :aria-label="`${testimonial.rating} out of 5 stars`">
                    {{ renderStars(testimonial.rating) }}
                </span>
                <span class="text-sm font-medium text-slate-700">
                    {{ testimonial.rating }}/5
                </span>
            </div>
        </div>

        <!-- Quote -->
        <blockquote class="text-lg text-slate-900 leading-relaxed mb-6 italic font-serif">
            "{{ testimonial.quote }}"
        </blockquote>

        <!-- Author Info -->
        <footer class="flex items-center gap-4">

            <!-- Avatar -->
            <div v-if="showAvatar" class="flex-shrink-0">
                <div v-if="testimonial.avatar" class="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                    <img :src="testimonial.avatar" :alt="`${testimonial.author} profile photo`"
                        class="w-full h-full object-cover" />
                </div>
                <div v-else class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                    <span class="text-slate-600 font-medium text-lg">
                        {{ testimonial.author.charAt(0).toUpperCase() }}
                    </span>
                </div>
            </div>

            <!-- Author Details -->
            <div class="flex-1">
                <cite class="not-italic font-semibold text-slate-900 block">
                    {{ testimonial.author }}
                </cite>

                <div v-if="testimonial.title || testimonial.company" class="text-sm text-slate-600 mt-1">
                    {{ testimonial.title }}{{ testimonial.title && testimonial.company ? ', ' : '' }}
                    <span v-if="testimonial.company" class="text-slate-500">{{ testimonial.company }}</span>
                </div>

                <time v-if="showDate && testimonial.date" :datetime="testimonial.date"
                    class="text-xs text-slate-500 mt-1 block">
                    {{ formatDate(testimonial.date) }}
                </time>
            </div>
        </footer>

        <!-- Featured Badge -->
        <div v-if="testimonial.featured || variant === 'featured'"
            class="absolute top-4 right-4 px-2 py-1 text-xs font-bold text-white bg-tree-poppy-600 rounded uppercase tracking-wider shadow-sm">
            Featured
        </div>

    </article>
</template>

<style scoped>
/* Only keep essential styles that can't be done with Tailwind */
.testimonial-card {
    /* All styles now handled by Tailwind classes */
}
</style>