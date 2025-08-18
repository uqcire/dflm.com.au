<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePosts } from '@/composables/useDataFetching.js'
import ComponentLoadingState from '@/components/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/COMPONENT__ERROR--STATE.vue'

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
            await loadPostBySlug(slug)
        }
    } catch (error) {
        console.error('Error loading blog post data:', error)
    }
})

// Get current post
const currentPost = computed(() => posts.value || null)
</script>

<template>
    <ComponentLoadingState v-if="isLoading" />
    <ComponentErrorState v-else-if="hasError"
        :message="errorDisplay?.message || 'An error occurred while loading the blog post.'" />
    <section v-else-if="currentPost" class="page-post">
        <header class="page-post__header">
            <h1 class="page-post__title">{{ currentPost.title }}</h1>
            <div class="page-post__meta">
                <time :datetime="currentPost.publishedAt">{{ new Date(currentPost.publishedAt).toLocaleDateString()
                }}</time>
                <span v-if="currentPost.category" class="page-post__category">{{ currentPost.category.name }}</span>
                <span v-if="currentPost.author" class="page-post__author">By {{ currentPost.author }}</span>
            </div>
        </header>
        <div class="page-post__content">
            <div v-if="currentPost.cover" class="page-post__image">
                <img :src="currentPost.cover" :alt="currentPost.title" />
            </div>
            <div class="page-post__body" v-html="currentPost.body"></div>
        </div>
    </section>
    <div v-else>
        <ComponentErrorState :message="'The requested blog post could not be found.'" />
    </div>
</template>

<style scoped>
.page-post {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-post__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-3xl, 1.875rem);
    font-weight: 700;
    line-height: 1.2;
}

.page-post__meta {
    display: flex;
    gap: var(--space-4, 1rem);
    margin-bottom: var(--space-6, 1.5rem);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-tertiary, #9ca3af);
}

.page-post__category {
    color: var(--color-primary, #3b82f6);
    font-weight: 500;
}

.page-post__author {
    font-style: italic;
}

.page-post__image {
    margin-bottom: var(--space-6, 1.5rem);
}

.page-post__image img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-lg, 0.5rem);
}

.page-post__body {
    line-height: 1.7;
    color: var(--color-text-primary, #111827);
}

.page-post__body h2,
.page-post__body h3,
.page-post__body h4 {
    margin: var(--space-6, 1.5rem) 0 var(--space-4, 1rem) 0;
    font-weight: 600;
}

.page-post__body p {
    margin-bottom: var(--space-4, 1rem);
}

.page-post__body ul,
.page-post__body ol {
    margin-bottom: var(--space-4, 1rem);
    padding-left: var(--space-6, 1.5rem);
}

.page-post__body blockquote {
    margin: var(--space-6, 1.5rem) 0;
    padding: var(--space-4, 1rem);
    border-left: 4px solid var(--color-primary, #3b82f6);
    background: var(--color-background-secondary, #f9fafb);
    font-style: italic;
}
</style>