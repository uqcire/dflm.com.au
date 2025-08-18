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

const getVariantStyles = (variant, featured) => {
    if (featured || variant === 'featured') {
        return {
            border: `var(--border-width-2) solid var(--color-primary)`,
            boxShadow: 'var(--shadow-lg)'
        }
    }

    switch (variant) {
        case 'detailed':
            return {
                border: `var(--border-width-1) solid var(--color-border-secondary)`,
                boxShadow: 'var(--shadow-md)'
            }
        case 'minimal':
            return {
                borderBottom: `var(--border-width-1) solid var(--color-border-primary)`,
                padding: `0 0 var(--space-4) 0`,
                boxShadow: 'none'
            }
        case 'standard':
        default:
            return {
                border: `var(--border-width-1) solid var(--color-border-primary)`,
                boxShadow: 'var(--shadow-sm)'
            }
    }
}

const getLayoutStyles = (iconPosition) => {
    switch (iconPosition) {
        case 'left':
            return {
                display: 'flex',
                flexDirection: 'row',
                gap: 'var(--space-component-md)'
            }
        case 'background':
            return {
                position: 'relative',
                overflow: 'hidden'
            }
        case 'top':
        default:
            return {
                display: 'flex',
                flexDirection: 'column'
            }
    }
}
</script>

<template>
    <article class="service-card" :style="{
        backgroundColor: 'var(--color-bg-primary)',
        borderRadius: variant === 'minimal' ? '0' : 'var(--radius-lg)',
        overflow: 'hidden',
        transition: `all var(--duration-200) var(--ease-out)`,
        fontFamily: 'var(--font-family-body)',
        padding: variant === 'minimal' ? '0' : 'var(--space-component-md)',
        ...getVariantStyles(variant, service.featured),
        ...getLayoutStyles(iconPosition)
    }" @mouseenter="$event.currentTarget.style.boxShadow = variant === 'minimal' ? 'none' : 'var(--shadow-md)'"
        @mouseleave="$event.currentTarget.style.boxShadow = getVariantStyles(variant, service.featured).boxShadow"
        :aria-label="`Service: ${service.title}`">

        <!-- Icon/Image Section -->
        <div v-if="service.icon || service.image" class="service-card__visual" :style="{
            flexShrink: 0,
            marginBottom: iconPosition === 'top' ? 'var(--space-component-sm)' : '0',
            width: iconPosition === 'left' ? 'var(--space-16)' : '100%',
            height: iconPosition === 'left' ? 'var(--space-16)' : 'auto',
            position: iconPosition === 'background' ? 'absolute' : 'relative',
            top: iconPosition === 'background' ? 'var(--space-4)' : 'auto',
            right: iconPosition === 'background' ? 'var(--space-4)' : 'auto',
            opacity: iconPosition === 'background' ? '0.1' : '1',
            zIndex: iconPosition === 'background' ? '0' : '1'
        }">

            <!-- Service Image -->
            <div v-if="service.image" :style="{
                width: '100%',
                height: iconPosition === 'top' ? 'var(--space-48)' : '100%',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                backgroundColor: 'var(--color-bg-secondary)'
            }">
                <img :src="service.image" :alt="service.title" :style="{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }" />
            </div>

            <!-- Service Icon -->
            <div v-else-if="service.icon" :style="{
                width: iconPosition === 'left' ? 'var(--space-16)' : 'var(--space-20)',
                height: iconPosition === 'left' ? 'var(--space-16)' : 'var(--space-20)',
                backgroundColor: 'var(--color-bg-primary-subtle)',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: iconPosition === 'left' ? 'var(--font-size-2xl)' : 'var(--font-size-4xl)',
                color: 'var(--color-primary)',
                margin: iconPosition === 'top' ? '0 auto' : '0'
            }">
                {{ service.icon }}
            </div>
        </div>

        <!-- Content Section -->
        <div class="service-card__content" :style="{
            flex: '1',
            position: 'relative',
            zIndex: iconPosition === 'background' ? '1' : 'auto'
        }">

            <!-- Category Badge -->
            <div v-if="service.category" :style="{
                marginBottom: 'var(--space-2)'
            }">
                <span :style="{
                    display: 'inline-block',
                    padding: 'var(--space-1) var(--space-2)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-secondary)',
                    backgroundColor: 'var(--color-bg-secondary-subtle)',
                    borderRadius: 'var(--radius-base)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--letter-spacing-wide)'
                }">
                    {{ service.category }}
                </span>
            </div>

            <!-- Service Title -->
            <h3 :style="{
                fontFamily: 'var(--font-family-heading)',
                fontSize: variant === 'detailed' ? 'var(--font-size-2xl)' : 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-2)',
                lineHeight: 'var(--line-height-tight)'
            }">
                {{ service.title }}
            </h3>

            <!-- Service Description -->
            <p :style="{
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: showFeatures && service.features ? 'var(--space-4)' : 'var(--space-6)'
            }">
                {{ service.description }}
            </p>

            <!-- Service Features -->
            <div v-if="showFeatures && service.features" :style="{
                marginBottom: 'var(--space-6)'
            }">
                <h4 :style="{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-2)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--letter-spacing-wide)'
                }">
                    Key Features
                </h4>
                <ul :style="{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    listStyle: 'none',
                    padding: '0',
                    display: 'grid',
                    gridTemplateColumns: variant === 'detailed' ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr',
                    gap: 'var(--space-1)'
                }">
                    <li v-for="feature in service.features" :key="feature" :style="{
                        paddingLeft: 'var(--space-4)',
                        position: 'relative',
                        lineHeight: 'var(--line-height-relaxed)'
                    }">
                        <span :style="{
                            position: 'absolute',
                            left: '0',
                            color: 'var(--color-primary)',
                            fontWeight: 'var(--font-weight-bold)'
                        }">✓</span>
                        {{ feature }}
                    </li>
                </ul>
            </div>

            <!-- Action Button -->
            <div v-if="showLink" class="service-card__action">
                <a :href="service.linkUrl || '#'" :style="{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: 'var(--space-3) var(--space-6)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontFamily: 'var(--font-family-body)',
                    color: 'var(--color-text-inverse)',
                    backgroundColor: 'var(--color-primary)',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    transition: `all var(--duration-200) var(--ease-out)`,
                    letterSpacing: 'var(--letter-spacing-wide)',
                    boxShadow: 'var(--shadow-sm)'
                }"
                    @mouseenter="$event.target.style.backgroundColor = 'var(--color-monza-700)'; $event.target.style.boxShadow = 'var(--shadow-md)'"
                    @mouseleave="$event.target.style.backgroundColor = 'var(--color-primary)'; $event.target.style.boxShadow = 'var(--shadow-sm)'"
                    @focus="$event.target.style.outline = 'none'; $event.target.style.boxShadow = 'var(--shadow-focus-primary)'"
                    @blur="$event.target.style.boxShadow = 'var(--shadow-sm)'"
                    :aria-label="`${service.linkText || linkText} for ${service.title}`">
                    {{ service.linkText || linkText }}
                    <span :style="{
                        marginLeft: 'var(--space-2)',
                        fontSize: 'var(--font-size-sm)'
                    }" aria-hidden="true">→</span>
                </a>
            </div>

            <!-- Featured Badge -->
            <div v-if="service.featured" :style="{
                position: 'absolute',
                top: iconPosition === 'background' ? 'var(--space-4)' : '0',
                right: '0',
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
        </div>
    </article>
</template>

<style scoped>
.service-card {
    position: relative;
}

/* Responsive adjustments */
@media (max-width: 767px) {
    .service-card[style*="flex-direction: row"] {
        flex-direction: column !important;
    }

    .service-card__visual {
        width: 100% !important;
        margin-bottom: var(--space-component-sm) !important;
    }
}

@media (min-width: 768px) {
    .service-card h3 {
        font-size: var(--font-size-2xl);
    }
}

@media (min-width: 1024px) {
    .service-card:hover {
        transform: translateY(-2px);
    }
}
</style>