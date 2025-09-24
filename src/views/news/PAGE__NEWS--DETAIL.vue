<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePosts } from '@/composables/useDataFetching.js'
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
</script>

<template>
    <ComponentLoadingState v-if="isLoading" />
    <ComponentErrorState v-else-if="hasError"
        :message="errorDisplay?.message || 'An error occurred while loading the news article.'" />
    <section v-else-if="currentPost" class="page-article">
        <header class="page-article__header">
            <h1 class="page-article__title">{{ currentPost.title }}</h1>
            <div class="page-article__meta">
                <time :datetime="currentPost.publishedAt">{{ new Date(currentPost.publishedAt).toLocaleDateString()
                }}</time>
                <span v-if="currentPost.category" class="page-article__category">{{ currentPost.category.name }}</span>
                <span v-if="currentPost.author" class="page-article__author">By {{ currentPost.author }}</span>
            </div>
        </header>
        <div class="page-article__content">
            <div v-if="currentPost.cover" class="page-article__image">
                <img :src="currentPost.cover" :alt="currentPost.title" />
            </div>
            <div class="page-article__body" v-html="currentPost.body"></div>
        </div>
    </section>
    <div v-else>
        <ComponentErrorState :message="'The requested news article could not be found.'" />
    </div>
</template>

<style scoped>
.page-article {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-article__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-3xl, 1.875rem);
    font-weight: 700;
    line-height: 1.2;
}

.page-article__meta {
    display: flex;
    gap: var(--space-4, 1rem);
    margin-bottom: var(--space-6, 1.5rem);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-tertiary, #9ca3af);
}

.page-article__category {
    color: var(--color-primary, #3b82f6);
    font-weight: 500;
}

.page-article__author {
    font-style: italic;
}

.page-article__image {
    margin-bottom: var(--space-6, 1.5rem);
}

.page-article__image img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-lg, 0.5rem);
}

.page-article__body {
    line-height: 1.7;
    color: var(--color-text-primary, #111827);
}

.page-article__body h2,
.page-article__body h3,
.page-article__body h4 {
    margin: var(--space-6, 1.5rem) 0 var(--space-4, 1rem) 0;
    font-weight: 600;
}

.page-article__body p {
    margin-bottom: var(--space-4, 1rem);
}

.page-article__body ul,
.page-article__body ol {
    margin-bottom: var(--space-4, 1rem);
    padding-left: var(--space-6, 1.5rem);
}

.page-article__body blockquote {
    margin: var(--space-6, 1.5rem) 0;
    padding: var(--space-4, 1rem);
    border-left: 4px solid var(--color-primary, #3b82f6);
    background: var(--color-background-secondary, #f9fafb);
    font-style: italic;
}
</style>
