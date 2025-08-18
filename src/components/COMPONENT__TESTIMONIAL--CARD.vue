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

const getVariantStyles = (variant, featured) => {
    if (featured || variant === 'featured') {
        return {
            border: `var(--border-width-2) solid var(--color-primary)`,
            boxShadow: 'var(--shadow-lg)',
            background: `linear-gradient(145deg, var(--color-bg-primary) 0%, var(--color-bg-primary-subtle) 100%)`
        }
    }

    switch (variant) {
        case 'minimal':
            return {
                border: 'none',
                boxShadow: 'none',
                padding: '0'
            }
        case 'standard':
        default:
            return {
                border: `var(--border-width-1) solid var(--color-border-primary)`,
                boxShadow: 'var(--shadow-sm)'
            }
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
    <article class="testimonial-card" :style="{
        backgroundColor: 'var(--color-bg-primary)',
        borderRadius: variant === 'minimal' ? '0' : 'var(--radius-lg)',
        overflow: 'hidden',
        transition: `all var(--duration-200) var(--ease-out)`,
        fontFamily: 'var(--font-family-body)',
        padding: variant === 'minimal' ? '0' : 'var(--space-component-lg)',
        position: 'relative',
        ...getVariantStyles(variant, testimonial.featured)
    }" @mouseenter="$event.currentTarget.style.boxShadow = variant === 'minimal' ? 'none' : 'var(--shadow-md)'"
        @mouseleave="$event.currentTarget.style.boxShadow = getVariantStyles(variant, testimonial.featured).boxShadow"
        :aria-label="`Testimonial from ${testimonial.author}`">

        <!-- Quote Icon -->
        <div v-if="variant !== 'minimal'" :style="{
            position: 'absolute',
            top: 'var(--space-4)',
            right: 'var(--space-4)',
            fontSize: 'var(--font-size-3xl)',
            color: 'var(--color-primary)',
            opacity: '0.2',
            fontFamily: 'serif',
            lineHeight: '1',
            zIndex: '0'
        }" aria-hidden="true">
            "
        </div>

        <!-- Rating -->
        <div v-if="showRating && testimonial.rating" :style="{
            marginBottom: 'var(--space-3)',
            position: 'relative',
            zIndex: '1'
        }">
            <div :style="{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
            }">
                <span :style="{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-secondary)',
                    lineHeight: '1'
                }" :aria-label="`${testimonial.rating} out of 5 stars`">
                    {{ renderStars(testimonial.rating) }}
                </span>
                <span :style="{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    fontWeight: 'var(--font-weight-medium)'
                }">
                    {{ testimonial.rating }}/5
                </span>
            </div>
        </div>

        <!-- Quote Text -->
        <blockquote :style="{
            fontSize: variant === 'featured' ? 'var(--font-size-lg)' : 'var(--font-size-base)',
            color: 'var(--color-text-primary)',
            lineHeight: 'var(--line-height-relaxed)',
            fontStyle: 'italic',
            margin: '0',
            marginBottom: 'var(--space-4)',
            position: 'relative',
            zIndex: '1',
            quotes: 'none'
        }">
            "{{ testimonial.quote }}"
        </blockquote>

        <!-- Author Information -->
        <footer :style="{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            position: 'relative',
            zIndex: '1'
        }">

            <!-- Avatar -->
            <div v-if="showAvatar && testimonial.avatar" :style="{
                width: 'var(--space-12)',
                height: 'var(--space-12)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
                flexShrink: '0',
                border: `var(--border-width-2) solid var(--color-border-primary)`
            }">
                <img :src="testimonial.avatar" :alt="`${testimonial.author} profile photo`" :style="{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }" />
            </div>

            <!-- Avatar Placeholder -->
            <div v-else-if="showAvatar" :style="{
                width: 'var(--space-12)',
                height: 'var(--space-12)',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-bg-accent-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
                fontSize: 'var(--font-size-xl)',
                color: 'var(--color-text-secondary)'
            }" :aria-label="`${testimonial.author} profile placeholder`">
                {{ testimonial.author.charAt(0).toUpperCase() }}
            </div>

            <!-- Author Details -->
            <div :style="{
                flex: '1',
                minWidth: '0'
            }">
                <cite :style="{
                    display: 'block',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--color-text-primary)',
                    fontStyle: 'normal',
                    marginBottom: testimonial.title || testimonial.company ? 'var(--space-1)' : '0'
                }">
                    {{ testimonial.author }}
                </cite>

                <div v-if="testimonial.title || testimonial.company" :style="{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-snug)'
                }">
                    <span v-if="testimonial.title">{{ testimonial.title }}</span>
                    <span v-if="testimonial.title && testimonial.company">, </span>
                    <span v-if="testimonial.company" :style="{
                        color: 'var(--color-primary)',
                        fontWeight: 'var(--font-weight-medium)'
                    }">
                        {{ testimonial.company }}
                    </span>
                </div>

                <!-- Date -->
                <time v-if="showDate && testimonial.date" :datetime="testimonial.date" :style="{
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-text-tertiary)',
                    display: 'block',
                    marginTop: 'var(--space-1)'
                }">
                    {{ formatDate(testimonial.date) }}
                </time>
            </div>
        </footer>

        <!-- Featured Badge -->
        <div v-if="testimonial.featured || variant === 'featured'" :style="{
            position: 'absolute',
            top: 'var(--space-3)',
            left: 'var(--space-3)',
            padding: 'var(--space-1) var(--space-2)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-inverse)',
            backgroundColor: 'var(--color-secondary)',
            borderRadius: 'var(--radius-base)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--letter-spacing-wider)',
            boxShadow: 'var(--shadow-sm)',
            zIndex: '2'
        }">
            Featured
        </div>
    </article>
</template>

<style scoped>
.testimonial-card {
    position: relative;
}

/* Responsive adjustments */
@media (min-width: 768px) {
    .testimonial-card blockquote {
        font-size: var(--font-size-lg);
    }
}

@media (min-width: 1024px) {
    .testimonial-card:hover {
        transform: translateY(-2px);
    }
}

/* Enhanced accessibility */
.testimonial-card:focus-within {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
}

/* Ensure proper contrast for featured testimonials */
.testimonial-card blockquote {
    text-shadow: none;
}
</style>