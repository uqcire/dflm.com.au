<script setup>
import { ref } from 'vue'

// Import components for showcase
import ComponentHeroPage from '@/components/layout/COMPONENT__HERO--PAGE.vue'
import ComponentProductCard from '@/components/ui/COMPONENT__PRODUCT--CARD.vue'
import ComponentServiceCard from '@/components/ui/COMPONENT__SERVICE--CARD.vue'

import ComponentCtaSection from '@/components/forms/COMPONENT__CTA--SECTION.vue'

import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentGrid from '@/components/layout/COMPONENT__GRID.vue'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentStack from '@/components/layout/COMPONENT__STACK.vue'

// Sample data for component examples
const sampleProduct = ref({
    id: 1,
    title: 'Sample Product',
    description: 'This is a sample product description for demonstration purposes.',
    category: 'Electronics',
    image: '',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    price: '$99.99'
})

const sampleService = ref({
    id: 1,
    title: 'Sample Service',
    description: 'Professional service offering with comprehensive support.',
    icon: 'cog',
    features: ['24/7 Support', 'Expert Consultation', 'Quality Assurance']
})


const sampleLogos = ref([
    { name: 'Partner 1', url: '', link: '#' },
    { name: 'Partner 2', url: '', link: '#' },
    { name: 'Partner 3', url: '', link: '#' },
    { name: 'Partner 4', url: '', link: '#' }
])

// Active section for navigation
const activeSection = ref('tokens')

// Design token categories
const tokenCategories = ref([
    'colors',
    'typography',
    'spacing',
    'borders',
    'shadows',
    'animation'
])

const componentCategories = ref([
    'layout',
    'business',
    'ui'
])
</script>

<template>
    <ComponentContainer tag="main" size="xl" class="design-system-page">

        <!-- Page Header -->
        <ComponentSection spacing="lg" background="primary">
            <header :style="{
                textAlign: 'center',
                color: 'var(--color-text-inverse)'
            }">
                <h1 :style="{
                    fontFamily: 'var(--font-family-heading)',
                    fontSize: 'var(--font-size-4xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: 'var(--line-height-tight)',
                    marginBottom: 'var(--space-4)',
                    letterSpacing: 'var(--letter-spacing-tight)'
                }" class="md:text-6xl">
                    E-Sunrise Australia Design System
                </h1>
                <p :style="{
                    fontSize: 'var(--font-size-xl)',
                    lineHeight: 'var(--line-height-relaxed)',
                    opacity: '0.95',
                    maxWidth: 'var(--container-md)',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }" class="md:text-2xl">
                    Design tokens, components, and guidelines for consistent brand experience
                </p>
            </header>
        </ComponentSection>

        <!-- Navigation -->
        <ComponentSection spacing="sm" background="secondary">
            <nav :style="{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-6)',
                flexWrap: 'wrap'
            }">
                <button v-for="section in ['tokens', 'components', 'guidelines']" :key="section"
                    @click="activeSection = section" :style="{
                        padding: 'var(--space-3) var(--space-6)',
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: 'var(--font-weight-medium)',
                        fontFamily: 'var(--font-family-body)',
                        backgroundColor: activeSection === section ? 'var(--color-text-inverse)' : 'transparent',
                        color: activeSection === section ? 'var(--color-primary)' : 'var(--color-text-inverse)',
                        border: `var(--border-width-2) solid ${activeSection === section ? 'var(--color-text-inverse)' : 'var(--color-text-inverse)'}`,
                        borderRadius: 'var(--radius-xl)',
                        cursor: 'pointer',
                        transition: 'all var(--duration-200) var(--ease-out)',
                        textTransform: 'capitalize',
                        letterSpacing: 'var(--letter-spacing-wide)'
                    }" @mouseenter="$event.target.style.transform = 'translateY(-2px)'"
                    @mouseleave="$event.target.style.transform = 'translateY(0)'"
                    :aria-pressed="activeSection === section">
                    {{ section }}
                </button>
            </nav>
        </ComponentSection>

        <!-- Design Tokens Section -->
        <ComponentSection v-if="activeSection === 'tokens'" spacing="lg">
            <ComponentStack space="xl">

                <!-- Section Header -->
                <header :style="{ textAlign: 'center' }">
                    <h2 :style="{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-4)'
                    }">Design Tokens</h2>
                    <p :style="{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-secondary)',
                        maxWidth: 'var(--container-md)',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }">
                        Foundational design values that ensure consistency across the brand
                    </p>
                </header>

                <!-- Brand Colors -->
                <div>
                    <h3 :style="{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: 'var(--font-size-2xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-6)'
                    }">Brand Colors</h3>

                    <ComponentGrid columns="1" gap="lg" class="md:grid-cols-3">

                        <!-- Primary Colors -->
                        <div :style="{
                            padding: 'var(--space-6)',
                            backgroundColor: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-xl)',
                            border: 'var(--border-width-1) solid var(--color-border-primary)'
                        }">
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">Primary - Monza</h4>
                            <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }">
                                <div v-for="shade in ['500', '600', '700', '800', '900']" :key="'monza-' + shade"
                                    :style="{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-3)'
                                    }">
                                    <div :style="{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: `var(--color-monza-${shade})`,
                                        borderRadius: 'var(--radius-lg)',
                                        border: 'var(--border-width-1) solid var(--color-border-primary)'
                                    }"></div>
                                    <div>
                                        <div :style="{
                                            fontSize: 'var(--font-size-sm)',
                                            fontWeight: 'var(--font-weight-medium)',
                                            color: 'var(--color-text-primary)'
                                        }">Monza {{ shade }}</div>
                                        <div :style="{
                                            fontSize: 'var(--font-size-xs)',
                                            color: 'var(--color-text-secondary)',
                                            fontFamily: 'var(--font-family-mono)'
                                        }">--color-monza-{{ shade }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Secondary Colors -->
                        <div :style="{
                            padding: 'var(--space-6)',
                            backgroundColor: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-xl)',
                            border: 'var(--border-width-1) solid var(--color-border-primary)'
                        }">
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">Secondary - Tree Poppy</h4>
                            <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }">
                                <div v-for="shade in ['500', '600', '700', '800', '900']" :key="'tree-poppy-' + shade"
                                    :style="{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-3)'
                                    }">
                                    <div :style="{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: `var(--color-tree-poppy-${shade})`,
                                        borderRadius: 'var(--radius-lg)',
                                        border: 'var(--border-width-1) solid var(--color-border-primary)'
                                    }"></div>
                                    <div>
                                        <div :style="{
                                            fontSize: 'var(--font-size-sm)',
                                            fontWeight: 'var(--font-weight-medium)',
                                            color: 'var(--color-text-primary)'
                                        }">Tree Poppy {{ shade }}</div>
                                        <div :style="{
                                            fontSize: 'var(--font-size-xs)',
                                            color: 'var(--color-text-secondary)',
                                            fontFamily: 'var(--font-family-mono)'
                                        }">--color-tree-poppy-{{ shade }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Accent Colors -->
                        <div :style="{
                            padding: 'var(--space-6)',
                            backgroundColor: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-xl)',
                            border: 'var(--border-width-1) solid var(--color-border-primary)'
                        }">
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">Accent - Pickled Bluewood</h4>
                            <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }">
                                <div v-for="shade in ['500', '600', '700', '800', '900']"
                                    :key="'pickled-bluewood-' + shade" :style="{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 'var(--space-3)'
                                    }">
                                    <div :style="{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: `var(--color-pickled-bluewood-${shade})`,
                                        borderRadius: 'var(--radius-lg)',
                                        border: 'var(--border-width-1) solid var(--color-border-primary)'
                                    }"></div>
                                    <div>
                                        <div :style="{
                                            fontSize: 'var(--font-size-sm)',
                                            fontWeight: 'var(--font-weight-medium)',
                                            color: 'var(--color-text-primary)'
                                        }">Pickled Bluewood {{ shade }}</div>
                                        <div :style="{
                                            fontSize: 'var(--font-size-xs)',
                                            color: 'var(--color-text-secondary)',
                                            fontFamily: 'var(--font-family-mono)'
                                        }">--color-pickled-bluewood-{{ shade }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ComponentGrid>
                </div>

                <!-- Typography -->
                <div>
                    <h3 :style="{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: 'var(--font-size-2xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-6)'
                    }">Typography</h3>

                    <ComponentGrid columns="1" gap="lg" class="md:grid-cols-2">

                        <!-- Headings Font -->
                        <div :style="{
                            padding: 'var(--space-6)',
                            backgroundColor: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-xl)',
                            border: 'var(--border-width-1) solid var(--color-border-primary)'
                        }">
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">Headings - Playfair Display</h4>
                            <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }">
                                <div>
                                    <h1 :style="{
                                        fontFamily: 'var(--font-family-heading)',
                                        fontSize: 'var(--font-size-3xl)',
                                        fontWeight: 'var(--font-weight-bold)',
                                        color: 'var(--color-text-primary)',
                                        margin: '0'
                                    }">Heading Example</h1>
                                    <code :style="{
                                        fontSize: 'var(--font-size-xs)',
                                        color: 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-family-mono)'
                                    }">font-family: var(--font-family-heading)</code>
                                </div>
                            </div>
                        </div>

                        <!-- Body Font -->
                        <div :style="{
                            padding: 'var(--space-6)',
                            backgroundColor: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-xl)',
                            border: 'var(--border-width-1) solid var(--color-border-primary)'
                        }">
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">Body Text - Montserrat</h4>
                            <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }">
                                <div>
                                    <p :style="{
                                        fontFamily: 'var(--font-family-body)',
                                        fontSize: 'var(--font-size-base)',
                                        color: 'var(--color-text-primary)',
                                        lineHeight: 'var(--line-height-relaxed)',
                                        margin: '0'
                                    }">This is body text using Montserrat font family for optimal readability and
                                        modern appearance.</p>
                                    <code :style="{
                                        fontSize: 'var(--font-size-xs)',
                                        color: 'var(--color-text-secondary)',
                                        fontFamily: 'var(--font-family-mono)'
                                    }">font-family: var(--font-family-body)</code>
                                </div>
                            </div>
                        </div>
                    </ComponentGrid>
                </div>

                <!-- Spacing Scale -->
                <div>
                    <h3 :style="{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: 'var(--font-size-2xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-6)'
                    }">Spacing Scale</h3>

                    <div :style="{
                        padding: 'var(--space-6)',
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: 'var(--radius-xl)',
                        border: 'var(--border-width-1) solid var(--color-border-primary)'
                    }">
                        <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }">
                            <div v-for="space in ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl']" :key="space" :style="{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-4)'
                            }">
                                <div :style="{
                                    width: `var(--space-${space})`,
                                    height: '20px',
                                    backgroundColor: 'var(--color-primary)',
                                    borderRadius: 'var(--radius-sm)'
                                }"></div>
                                <span :style="{
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 'var(--font-weight-medium)',
                                    color: 'var(--color-text-primary)',
                                    minWidth: '100px'
                                }">{{ space }}</span>
                                <code :style="{
                                    fontSize: 'var(--font-size-xs)',
                                    color: 'var(--color-text-secondary)',
                                    fontFamily: 'var(--font-family-mono)'
                                }">var(--space-{{ space }})</code>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentStack>
        </ComponentSection>

        <!-- Components Section -->
        <ComponentSection v-if="activeSection === 'components'" spacing="lg">
            <ComponentStack space="xl">

                <!-- Section Header -->
                <header :style="{ textAlign: 'center' }">
                    <h2 :style="{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-4)'
                    }">Component Library</h2>
                    <p :style="{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-secondary)',
                        maxWidth: 'var(--container-md)',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }">
                        Reusable components built with design tokens for consistent brand experience
                    </p>
                </header>

                <!-- Layout Components -->
                <div>
                    <h3 :style="{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: 'var(--font-size-2xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-6)'
                    }">Layout Components</h3>

                    <ComponentGrid columns="1" gap="lg" class="md:grid-cols-2">

                        <!-- Container Example -->
                        <div :style="{
                            padding: 'var(--space-6)',
                            backgroundColor: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-xl)',
                            border: 'var(--border-width-1) solid var(--color-border-primary)'
                        }">
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">Container</h4>
                            <div :style="{
                                padding: 'var(--space-4)',
                                backgroundColor: 'var(--color-primary)',
                                borderRadius: 'var(--radius-lg)',
                                color: 'var(--color-text-inverse)',
                                textAlign: 'center'
                            }">
                                <ComponentContainer size="sm">
                                    Container content with max-width and responsive padding
                                </ComponentContainer>
                            </div>
                            <code :style="{
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-text-secondary)',
                                fontFamily: 'var(--font-family-mono)',
                                marginTop: 'var(--space-2)',
                                display: 'block'
                            }">&lt;ComponentContainer size="sm"&gt;</code>
                        </div>

                        <!-- Grid Example -->
                        <div :style="{
                            padding: 'var(--space-6)',
                            backgroundColor: 'var(--color-bg-secondary)',
                            borderRadius: 'var(--radius-xl)',
                            border: 'var(--border-width-1) solid var(--color-border-primary)'
                        }">
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">Grid</h4>
                            <ComponentGrid columns="3" gap="sm">
                                <div v-for="i in 3" :key="'grid-' + i" :style="{
                                    padding: 'var(--space-3)',
                                    backgroundColor: 'var(--color-secondary)',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'var(--color-text-inverse)',
                                    textAlign: 'center',
                                    fontSize: 'var(--font-size-sm)'
                                }">
                                    Grid {{ i }}
                                </div>
                            </ComponentGrid>
                            <code :style="{
                                fontSize: 'var(--font-size-xs)',
                                color: 'var(--color-text-secondary)',
                                fontFamily: 'var(--font-family-mono)',
                                marginTop: 'var(--space-2)',
                                display: 'block'
                            }">&lt;ComponentGrid columns="3" gap="sm"&gt;</code>
                        </div>
                    </ComponentGrid>
                </div>

                <!-- Business Components -->
                <div>
                    <h3 :style="{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: 'var(--font-size-2xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-6)'
                    }">Business Components</h3>

                    <ComponentStack space="lg">

                        <!-- Product Card -->
                        <div>
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">Product Card</h4>
                            <ComponentGrid columns="1" gap="lg" class="md:grid-cols-2 lg:grid-cols-3">
                                <ComponentProductCard :product="sampleProduct" variant="standard" />
                                <ComponentProductCard :product="sampleProduct" variant="detailed" />
                                <ComponentProductCard :product="sampleProduct" variant="featured" />
                            </ComponentGrid>
                        </div>

                        <!-- Service Card -->
                        <div>
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">Service Card</h4>
                            <ComponentGrid columns="1" gap="lg" class="md:grid-cols-2">
                                <ComponentServiceCard :service="sampleService" variant="standard" icon-position="top" />
                                <ComponentServiceCard :service="sampleService" variant="detailed"
                                    icon-position="left" />
                            </ComponentGrid>
                        </div>

                        <!-- CTA Section -->
                        <div>
                            <h4 :style="{
                                fontSize: 'var(--font-size-lg)',
                                fontWeight: 'var(--font-weight-semibold)',
                                marginBottom: 'var(--space-4)',
                                color: 'var(--color-text-primary)'
                            }">CTA Section</h4>
                            <ComponentCtaSection title="Ready to Get Started?"
                                description="Transform your business with our comprehensive solutions and expert support."
                                :primary-action="{ text: 'Get Started', href: '/contact', type: 'button' }"
                                :secondary-action="{ text: 'Learn More', href: '/about', type: 'link' }"
                                variant="primary" size="standard" />
                        </div>
                    </ComponentStack>
                </div>
            </ComponentStack>
        </ComponentSection>

        <!-- Guidelines Section -->
        <ComponentSection v-if="activeSection === 'guidelines'" spacing="lg">
            <ComponentStack space="xl">

                <!-- Section Header -->
                <header :style="{ textAlign: 'center' }">
                    <h2 :style="{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: 'var(--font-size-3xl)',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-4)'
                    }">Usage Guidelines</h2>
                    <p :style="{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--color-text-secondary)',
                        maxWidth: 'var(--container-md)',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }">
                        Best practices for implementing the E-Sunrise Australia design system
                    </p>
                </header>

                <!-- Implementation Guidelines -->
                <ComponentGrid columns="1" gap="lg" class="md:grid-cols-2">

                    <!-- Design Tokens Usage -->
                    <div :style="{
                        padding: 'var(--space-6)',
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: 'var(--radius-xl)',
                        border: 'var(--border-width-1) solid var(--color-border-primary)'
                    }">
                        <h3 :style="{
                            fontFamily: 'var(--font-family-heading)',
                            fontSize: 'var(--font-size-xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-4)'
                        }">Design Tokens</h3>
                        <ul :style="{
                            listStyle: 'none',
                            padding: '0',
                            margin: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-3)'
                        }">
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Always use CSS custom properties for styling</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Prefer semantic tokens over brand tokens</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Use spacing tokens for consistent layouts</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Apply typography tokens for text styling</li>
                        </ul>
                    </div>

                    <!-- Component Guidelines -->
                    <div :style="{
                        padding: 'var(--space-6)',
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: 'var(--radius-xl)',
                        border: 'var(--border-width-1) solid var(--color-border-primary)'
                    }">
                        <h3 :style="{
                            fontFamily: 'var(--font-family-heading)',
                            fontSize: 'var(--font-size-xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-4)'
                        }">Components</h3>
                        <ul :style="{
                            listStyle: 'none',
                            padding: '0',
                            margin: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-3)'
                        }">
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Use layout components for page structure</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Implement business components for content</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Follow responsive design principles</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Ensure accessibility compliance</li>
                        </ul>
                    </div>

                    <!-- Responsive Guidelines -->
                    <div :style="{
                        padding: 'var(--space-6)',
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: 'var(--radius-xl)',
                        border: 'var(--border-width-1) solid var(--color-border-primary)'
                    }">
                        <h3 :style="{
                            fontFamily: 'var(--font-family-heading)',
                            fontSize: 'var(--font-size-xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-4)'
                        }">Responsive Design</h3>
                        <ul :style="{
                            listStyle: 'none',
                            padding: '0',
                            margin: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-3)'
                        }">
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Mobile-first development approach</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Use standard Tailwind breakpoints</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Test across all device sizes</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Optimize for touch interactions</li>
                        </ul>
                    </div>

                    <!-- Accessibility Guidelines -->
                    <div :style="{
                        padding: 'var(--space-6)',
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: 'var(--radius-xl)',
                        border: 'var(--border-width-1) solid var(--color-border-primary)'
                    }">
                        <h3 :style="{
                            fontFamily: 'var(--font-family-heading)',
                            fontSize: 'var(--font-size-xl)',
                            fontWeight: 'var(--font-weight-semibold)',
                            color: 'var(--color-text-primary)',
                            marginBottom: 'var(--space-4)'
                        }">Accessibility</h3>
                        <ul :style="{
                            listStyle: 'none',
                            padding: '0',
                            margin: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 'var(--space-3)'
                        }">
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Maintain WCAG 2.1 AA+ compliance</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Use semantic HTML structures</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Provide proper ARIA labels</li>
                            <li :style="{
                                fontSize: 'var(--font-size-base)',
                                color: 'var(--color-text-primary)',
                                lineHeight: 'var(--line-height-relaxed)'
                            }">• Ensure keyboard navigation support</li>
                        </ul>
                    </div>
                </ComponentGrid>

                <!-- Documentation Links -->
                <div :style="{
                    padding: 'var(--space-8)',
                    backgroundColor: 'var(--color-bg-tertiary)',
                    borderRadius: 'var(--radius-xl)',
                    textAlign: 'center'
                }">
                    <h3 :style="{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: 'var(--font-size-xl)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--color-text-primary)',
                        marginBottom: 'var(--space-4)'
                    }">Documentation</h3>
                    <p :style="{
                        fontSize: 'var(--font-size-base)',
                        color: 'var(--color-text-secondary)',
                        marginBottom: 'var(--space-6)',
                        lineHeight: 'var(--line-height-relaxed)'
                    }">
                        Detailed documentation and specifications are available in the project docs
                    </p>
                    <ComponentStack space="sm" inline>
                        <a href="/docs/ux/design-tokens" :style="{
                            padding: 'var(--space-3) var(--space-6)',
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            backgroundColor: 'var(--color-primary)',
                            color: 'var(--color-text-inverse)',
                            textDecoration: 'none',
                            borderRadius: 'var(--radius-lg)',
                            transition: 'all var(--duration-200) var(--ease-out)'
                        }" @mouseenter="$event.target.style.backgroundColor = 'var(--color-monza-700)'"
                            @mouseleave="$event.target.style.backgroundColor = 'var(--color-primary)'">
                            Design Tokens
                        </a>
                        <a href="/docs/ux/components" :style="{
                            padding: 'var(--space-3) var(--space-6)',
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            backgroundColor: 'var(--color-secondary)',
                            color: 'var(--color-text-inverse)',
                            textDecoration: 'none',
                            borderRadius: 'var(--radius-lg)',
                            transition: 'all var(--duration-200) var(--ease-out)'
                        }" @mouseenter="$event.target.style.backgroundColor = 'var(--color-tree-poppy-700)'"
                            @mouseleave="$event.target.style.backgroundColor = 'var(--color-secondary)'">
                            Components
                        </a>
                        <a href="/docs/ux/responsive-rules" :style="{
                            padding: 'var(--space-3) var(--space-6)',
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            backgroundColor: 'var(--color-accent)',
                            color: 'var(--color-text-inverse)',
                            textDecoration: 'none',
                            borderRadius: 'var(--radius-lg)',
                            transition: 'all var(--duration-200) var(--ease-out)'
                        }" @mouseenter="$event.target.style.backgroundColor = 'var(--color-pickled-bluewood-700)'"
                            @mouseleave="$event.target.style.backgroundColor = 'var(--color-accent)'">
                            Responsive
                        </a>
                        <a href="/docs/ux/accessibility-guidelines" :style="{
                            padding: 'var(--space-3) var(--space-6)',
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 'var(--font-weight-medium)',
                            backgroundColor: 'var(--color-cello-600)',
                            color: 'var(--color-text-inverse)',
                            textDecoration: 'none',
                            borderRadius: 'var(--radius-lg)',
                            transition: 'all var(--duration-200) var(--ease-out)'
                        }" @mouseenter="$event.target.style.backgroundColor = 'var(--color-cello-700)'"
                            @mouseleave="$event.target.style.backgroundColor = 'var(--color-cello-600)'">
                            Accessibility
                        </a>
                    </ComponentStack>
                </div>
            </ComponentStack>
        </ComponentSection>

    </ComponentContainer>
</template>

<style scoped>
.design-system-page {
    min-height: 100vh;
    font-family: var(--font-family-body);
}

/* Responsive adjustments */
@media (min-width: 768px) {
    .design-system-page h1 {
        font-size: var(--font-size-6xl);
    }

    .design-system-page header p {
        font-size: var(--font-size-2xl);
    }
}

/* Enhanced hover effects for navigation */
.design-system-page nav button:hover {
    box-shadow: var(--shadow-lg);
}

/* Focus states for accessibility */
.design-system-page nav button:focus {
    outline: 3px solid var(--color-border-focus);
    outline-offset: 2px;
}

.design-system-page a:focus {
    outline: 3px solid var(--color-border-focus);
    outline-offset: 2px;
}
</style>