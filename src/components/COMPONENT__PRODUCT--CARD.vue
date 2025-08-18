<script setup>
defineProps({
    product: {
        type: Object,
        required: true,
        validator: (value) => {
            // Basic validation - check if required properties exist
            return value &&
                typeof value.title === 'string' &&
                typeof value.description === 'string';
        }
    },
    variant: {
        type: String,
        default: 'standard',
        validator: (value) => ['minimal', 'standard', 'detailed', 'featured'].includes(value)
    },
    showPrice: {
        type: Boolean,
        default: true
    },
    showCategory: {
        type: Boolean,
        default: true
    },
    showLink: {
        type: Boolean,
        default: true
    },
    linkText: {
        type: String,
        default: 'View Details'
    }
})

const getVariantClasses = (variant, featured) => {
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
</script>

<template>
    <article class="product-card" :style="{
        backgroundColor: 'var(--color-bg-primary)',
        borderRadius: variant === 'minimal' ? '0' : 'var(--radius-lg)',
        overflow: 'hidden',
        transition: `all var(--duration-200) var(--ease-out)`,
        fontFamily: 'var(--font-family-body)',
        ...getVariantClasses(variant, product.featured)
    }" @mouseenter="$event.currentTarget.style.boxShadow = variant === 'minimal' ? 'none' : 'var(--shadow-md)'"
        @mouseleave="$event.currentTarget.style.boxShadow = getVariantClasses(variant, product.featured).boxShadow"
        :aria-label="`Product: ${product.title}`">

        <!-- Product Image -->
        <div v-if="product.image && variant !== 'minimal'" :style="{
            width: '100%',
            height: variant === 'featured' ? 'var(--space-64)' : 'var(--space-48)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg-secondary)'
        }">
            <img :src="product.image" :alt="product.title" :style="{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }" />
        </div>

        <!-- Product Content -->
        <div :style="{
            padding: variant === 'minimal' ? '0' : 'var(--space-component-md)'
        }">

            <!-- Category Badge -->
            <div v-if="showCategory && product.category" :style="{
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
                    {{ product.category }}
                </span>
            </div>

            <!-- Product Title -->
            <h3 :style="{
                fontFamily: 'var(--font-family-heading)',
                fontSize: variant === 'featured' ? 'var(--font-size-2xl)' : 'var(--font-size-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-2)',
                lineHeight: 'var(--line-height-tight)'
            }">
                {{ product.title }}
            </h3>

            <!-- Product Description -->
            <p :style="{
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-normal)',
                marginBottom: 'var(--space-4)'
            }">
                {{ product.description }}
            </p>

            <!-- Product Specifications (for detailed variant) -->
            <div v-if="variant === 'detailed' && product.specs" :style="{
                marginBottom: 'var(--space-4)'
            }">
                <h4 :style="{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-text-primary)',
                    marginBottom: 'var(--space-2)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--letter-spacing-wide)'
                }">
                    Specifications
                </h4>
                <ul :style="{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    listStyle: 'none',
                    padding: '0'
                }">
                    <li v-for="spec in product.specs" :key="spec" :style="{
                        marginBottom: 'var(--space-1)',
                        paddingLeft: 'var(--space-4)',
                        position: 'relative'
                    }">
                        <span :style="{
                            position: 'absolute',
                            left: '0',
                            color: 'var(--color-primary)'
                        }">•</span>
                        {{ spec }}
                    </li>
                </ul>
            </div>

            <!-- Price and Actions Row -->
            <div :style="{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'var(--space-4)'
            }">

                <!-- Price -->
                <div v-if="showPrice && product.price">
                    <span :style="{
                        fontSize: variant === 'featured' ? 'var(--font-size-2xl)' : 'var(--font-size-xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-primary)',
                        fontFamily: 'var(--font-family-body)'
                    }">
                        {{ product.price }}
                    </span>
                    <span v-if="product.originalPrice" :style="{
                        fontSize: 'var(--font-size-base)',
                        color: 'var(--color-text-tertiary)',
                        textDecoration: 'line-through',
                        marginLeft: 'var(--space-2)'
                    }">
                        {{ product.originalPrice }}
                    </span>
                </div>

                <!-- Action Button -->
                <a v-if="showLink" :href="product.link || '#'" :style="{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: 'var(--space-2) var(--space-4)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontFamily: 'var(--font-family-body)',
                    color: 'var(--color-text-inverse)',
                    backgroundColor: 'var(--color-primary)',
                    border: 'none',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    transition: `all var(--duration-200) var(--ease-out)`,
                    letterSpacing: 'var(--letter-spacing-wide)'
                }" @mouseenter="$event.target.style.backgroundColor = 'var(--color-monza-700)'"
                    @mouseleave="$event.target.style.backgroundColor = 'var(--color-primary)'"
                    @focus="$event.target.style.outline = 'none'; $event.target.style.boxShadow = 'var(--shadow-focus-primary)'"
                    @blur="$event.target.style.boxShadow = 'none'" :aria-label="`${linkText} for ${product.title}`">
                    {{ linkText }}
                </a>
            </div>

            <!-- Featured Badge -->
            <div v-if="product.featured" :style="{
                position: 'absolute',
                top: 'var(--space-4)',
                right: 'var(--space-4)',
                padding: 'var(--space-1) var(--space-2)',
                fontSize: 'var(--font-size-xs)',
                fontWeight: 'var(--font-weight-bold)',
                color: 'var(--color-text-inverse)',
                backgroundColor: 'var(--color-secondary)',
                borderRadius: 'var(--radius-base)',
                textTransform: 'uppercase',
                letterSpacing: 'var(--letter-spacing-wider)',
                boxShadow: 'var(--shadow-sm)'
            }">
                Featured
            </div>
        </div>
    </article>
</template>

<style scoped>
.product-card {
    position: relative;
}

/* Responsive adjustments */
@media (min-width: 768px) {
    .product-card h3 {
        font-size: var(--font-size-2xl);
    }
}

@media (min-width: 1024px) {
    .product-card:hover {
        transform: translateY(-2px);
    }
}
</style>