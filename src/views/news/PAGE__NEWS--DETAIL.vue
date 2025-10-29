<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePosts } from '@/composables/useDataFetching.js'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentLoadingState from '@/components/system/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/system/COMPONENT__ERROR--STATE.vue'
import { updateRouteSEO } from '@/utils/SEO-MANAGER__DYNAMIC.js'

const route = useRoute()

// Post data
const {
    posts,
    isLoading,
    hasError,
    errorDisplay,
    loadPostBySlug
} = usePosts()

// Load data on mount
onMounted(async () => {
    try {
        const slug = route.params.slug
        if (slug) {
            const data = await loadPostBySlug(slug)
            const post = data?.data || posts.value
            // SEO for News detail
            updateRouteSEO({
                title: post?.title,
                description: post?.excerpt || post?.description,
                image: post?.cover,
                publishedAt: post?.publishedAt,
                updatedAt: post?.updatedAt,
                author: post?.author,
                breadcrumbs: [
                    { name: 'Home', url: '/' },
                    { name: 'News', url: '/news' },
                    { name: post?.title || 'Detail', url: route.fullPath }
                ]
            })
        }
    } catch (error) {
        console.error('Error loading news article:', error)
    }
})

// Get current post
const currentPost = computed(() => posts.value || null)

// Format date helper
const formatDate = (dateString) => {
    if (!dateString) return ''
    try {
        return new Date(dateString).toLocaleDateString('en-AU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    } catch (error) {
        console.error('Date formatting error:', error)
        return dateString
    }
}
</script>

<template>
    <!-- Loading State -->
    <ComponentSection v-if="isLoading" spacing="lg">
        <ComponentContainer size="xl" padding="md">
            <ComponentLoadingState />
        </ComponentContainer>
    </ComponentSection>

    <!-- Error State -->
    <ComponentSection v-else-if="hasError" spacing="lg">
        <ComponentContainer size="xl" padding="md">
            <ComponentErrorState
                :message="errorDisplay?.message || 'An error occurred while loading the news article.'" />
        </ComponentContainer>
    </ComponentSection>

    <!-- Article Content -->
    <template v-else-if="currentPost">
        <!-- Article Header -->
        <ComponentSection spacing="lg" background="transparent" style="padding-bottom: 0;">
            <ComponentContainer size="2xl" padding="sm">
                <div class="max-w-4xl mx-auto">
                    <!-- Date -->
                    <div class="text-sm font-medium text-pickled-bluewood-600 mb-4">
                        {{ formatDate(currentPost.publishedAt) }}
                    </div>

                    <!-- Title -->
                    <h1
                        class="font-body text-3xl md:text-4xl lg:text-5xl font-bold text-pickled-bluewood-800 leading-tight pb-6">
                        {{ currentPost.title }}
                    </h1>

                    <!-- Excerpt -->
                    <p v-if="currentPost.excerpt"
                        class="font-body text-lg md:text-xl text-pickled-bluewood-700 leading-relaxed pb-6">
                        {{ currentPost.excerpt }}
                    </p>

                    <!-- Categories/Tags -->
                    <div class="flex flex-wrap gap-2 mb-8">
                        <span v-for="tag in currentPost.tags" :key="tag.id"
                            class="px-3 py-1 text-xs font-medium bg-monza-400 hover:bg-monza-500 text-white rounded-full">
                            {{ tag.name }}
                        </span>
                    </div>
                </div>
            </ComponentContainer>
        </ComponentSection>

        <!-- Featured Image -->
        <ComponentSection v-if="currentPost.coverUrl" spacing="xs" background="transparent"
            style="padding-top: 0; padding-bottom: 0;">
            <ComponentContainer size="2xl" padding="none">
                <div class="max-w-4xl mx-auto">
                    <div class="aspect-video md:aspect-[16/10] overflow-hidden rounded-lg shadow-lg bg-gray-200">
                        <img :src="currentPost.coverUrl" :alt="currentPost.title"
                            class="w-full h-full object-cover min-w-full min-h-full"
                            style="object-fit: cover; object-position: center;" loading="eager" />
                    </div>
                </div>
            </ComponentContainer>
        </ComponentSection>

        <!-- Article Body -->
        <ComponentSection spacing="lg" background="transparent" style="padding-top: 0; padding-bottom: 0;">
            <ComponentContainer size="2xl" padding="md">
                <div class="max-w-4xl mx-auto">
                    <div class="text-pickled-bluewood-800 leading-relaxed max-w-none ">
                        <div v-html="currentPost.body" class="prose-content text-base md:text-lg leading-relaxed ">
                        </div>
                    </div>

                    <!-- Article Footer -->
                    <div class="mt-12 pt-8 border-t border-gray-200">
                        <div class="flex flex-wrap gap-4 text-sm text-pickled-bluewood-600">
                            <span v-if="currentPost.updatedAt && currentPost.updatedAt !== currentPost.publishedAt">
                                Updated {{ formatDate(currentPost.updatedAt) }}
                            </span>
                        </div>
                    </div>
                </div>
            </ComponentContainer>
        </ComponentSection>

        <!-- Company Info / SEO Section -->
        <ComponentSection spacing="lg" background="subtle" style="padding-top: 0;">
            <ComponentContainer size="2xl" padding="none">
                <div class="max-w-4xl mx-auto">
                    <h3 class="font-body text-xl font-bold text-pickled-bluewood-800 pb-4">
                        About E‑Sunrise Australia
                    </h3>
                    <p class="font-body text-pickled-bluewood-700 leading-relaxed">
                        As a leading supplier of premium dehydrated vegetables, pulses, and food ingredients,
                        <router-link to="/" class="underline">E‑Sunrise
                            Australia</router-link> sources, distributes, and delivers essential food solutions for
                        Australia's growing foodservice and food manufacturing industries. Backed by Jiangsu Liming
                        Food Group, one of China's largest agricultural exporters with over 30 years of expertise.
                        We
                        combine world-class production facilities, rigorous quality standards, and comprehensive
                        traceability systems to provide what is essential for your kitchen, trusted by leading chefs
                        and food manufacturers, and sourced sustainably from certified farms. E‑Sunrise Australia is
                        proudly based in Melbourne, with supply partnerships across Asia-Pacific and a portfolio
                        serving restaurants, caterers, food processors, and retail brands throughout Australia. With
                        our dedicated team of food industry specialists, we deliver quality, consistency, and
                        reliability every day, everywhere, for thousands of Australian businesses.
                    </p>
                    <div class="mt-6">
                        <router-link to="/our-company"
                            class="inline-flex items-center px-6 py-3 bg-pickled-bluewood-800 text-white font-medium text-sm rounded-lg hover:bg-pickled-bluewood-700 transition-colors duration-200">
                            Learn more about us
                            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                                </path>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </ComponentContainer>
        </ComponentSection>
    </template>

    <!-- Not Found State -->
    <ComponentSection v-else spacing="lg">
        <ComponentContainer size="xl" padding="md">
            <ComponentErrorState :message="'The requested news article could not be found.'" />
        </ComponentContainer>
    </ComponentSection>
</template>

<style>
/* Global styles for dynamic HTML content */
.prose-content h1,
.prose-content h2,
.prose-content h3,
.prose-content h4,
.prose-content h5,
.prose-content h6 {
    font-family: var(--font-family-heading);
    font-weight: 700;
    color: hsl(var(--pickled-bluewood-800));
    margin-bottom: 3rem;
}

.prose-content h1 {
    font-size: 1.75rem;
    line-height: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.prose-content h2 {
    font-size: 1.375rem;
    line-height: 1.875rem;
    margin-top: 1.25rem;
    margin-bottom: 0.875rem;
}

.prose-content h3 {
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
}

.prose-content h4 {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
}

.prose-content h5 {
    font-size: 1.125rem;
    line-height: 1.75rem;
}

.prose-content h6 {
    font-size: 1rem;
    line-height: 1.5rem;
}

@media (min-width: 768px) {
    .prose-content h1 {
        font-size: 2.25rem;
        line-height: 1.1;
        margin-top: 1.75rem;
        margin-bottom: 1.25rem;
    }

    .prose-content h2 {
        font-size: 1.75rem;
        line-height: 2rem;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
    }

    .prose-content h3 {
        font-size: 1.375rem;
        line-height: 1.875rem;
        margin-top: 1.25rem;
        margin-bottom: 0.875rem;
    }

    .prose-content h4 {
        font-size: 1.125rem;
        line-height: 1.5rem;
        margin-top: 1rem;
        margin-bottom: 0.75rem;
    }
}

.prose-content p {
    margin-bottom: 1.25rem;
    line-height: 1.75;
    color: hsl(var(--pickled-bluewood-700));
}

.prose-content ul,
.prose-content ol {
    margin: 0 0 1.25rem 0;
    padding-left: 1.25rem;
    color: hsl(var(--pickled-bluewood-700));
}

.prose-content li {
    margin-bottom: 0.5rem;
}

.prose-content blockquote {
    margin: 1.25rem 0;
    padding: 0.875rem 1rem;
    border-left: 4px solid hsl(var(--tree-poppy-400));
    background-color: #f9fafb;
    font-style: italic;
    color: hsl(var(--pickled-bluewood-600));
}

.prose-content a {
    color: hsl(var(--tree-poppy-600));
    text-decoration: underline;
    transition: color 0.2s ease;
}

.prose-content a:hover {
    color: hsl(var(--tree-poppy-700));
}

.prose-content strong {
    font-weight: 600;
    color: hsl(var(--pickled-bluewood-900));
}

.prose-content em {
    font-style: italic;
}

.prose-content code {
    padding: 0.2rem 0.4rem;
    background-color: #f3f4f6;
    border-radius: 0.25rem;
    font-size: 0.85rem;
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.prose-content pre {
    padding: 0.875rem 1rem;
    background-color: #111827;
    color: #f9fafb;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.25rem 0;
}

.prose-content img {
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    margin: 1rem 0;
    max-width: 100%;
    height: auto;
}

.prose-content table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #d1d5db;
    margin: 1.5rem 0;
}

.prose-content th,
.prose-content td {
    border: 1px solid #d1d5db;
    padding: 0.5rem 0.75rem;
    text-align: left;
}

.prose-content th {
    background-color: #f9fafb;
    font-weight: 600;
    color: hsl(var(--pickled-bluewood-800));
}

.prose-content td {
    color: hsl(var(--pickled-bluewood-700));
}
</style>
