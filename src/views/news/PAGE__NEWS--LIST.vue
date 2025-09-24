<script setup>
import { onMounted, computed } from 'vue'
import { usePosts } from '@/composables/useDataFetching.js'
import ComponentLoadingState from '@/components/system/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/system/COMPONENT__ERROR--STATE.vue'
import { updateRouteSEO } from '@/utils/SEO-MANAGER__DYNAMIC.js'

// Posts data
const {
    posts,
    isLoading,
    hasError,
    errorDisplay,
    loadPosts
} = usePosts()

// Load data on mount
onMounted(async () => {
    try {
        await loadPosts({ page: 1, pageSize: 10 })
        // SEO for News list
        updateRouteSEO({
            title: 'News & Insights',
            description: 'Latest company news and industry insights from E‑Sunrise Australia.',
            breadcrumbs: [
                { name: 'Home', url: '/' },
                { name: 'News', url: '/news' }
            ]
        })
    } catch (error) {
        console.error('Error loading news page data:', error)
    }
})

// Get posts list
const postsList = computed(() => posts.value?.data || [])
</script>

<template>
    <ComponentLoadingState v-if="isLoading" />
    <ComponentErrorState v-else-if="hasError"
        :message="errorDisplay?.message || 'An error occurred while loading news.'" />
    <section v-else class="page-news">
        <header class="page-news__header">
            <h1 class="page-news__title">News</h1>
        </header>
        <div class="page-news__content">
            <div v-if="postsList.length > 0" class="page-news__grid">
                <article v-for="post in postsList" :key="post.id" class="page-news__post">
                    <h2 class="page-news__post-title">
                        <router-link :to="{ name: 'news-detail', params: { slug: post.slug } }">
                            {{ post.title }}
                        </router-link>
                    </h2>
                    <p class="page-news__post-excerpt">{{ post.excerpt }}</p>
                    <div class="page-news__post-meta">
                        <time :datetime="post.publishedAt">{{ new Date(post.publishedAt).toLocaleDateString() }}</time>
                        <span v-if="post.category" class="page-news__post-category">{{ post.category.name }}</span>
                    </div>
                </article>
            </div>
            <div v-else class="page-news__empty">
                <p class="page-news__text">News coming soon.</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.page-news {
    padding: var(--space-8, 2rem) var(--space-6, 1.5rem);
}

.page-news__title {
    margin: 0 0 var(--space-4, 1rem) 0;
    font-size: var(--font-size-2xl, 1.5rem);
    font-weight: 600;
}

.page-news__grid {
    display: flex;
    flex-direction: column;
    gap: var(--space-8, 2rem);
    margin-top: var(--space-6, 1.5rem);
}

.page-news__post {
    padding: var(--space-6, 1.5rem);
    border: 1px solid var(--color-border, #e5e7eb);
    border-radius: var(--border-radius-lg, 0.5rem);
    background: var(--color-background, #ffffff);
}

.page-news__post-title {
    margin: 0 0 var(--space-3, 0.75rem) 0;
    font-size: var(--font-size-xl, 1.25rem);
    font-weight: 600;
}

.page-news__post-title a {
    color: var(--color-text-primary, #111827);
    text-decoration: none;
}

.page-news__post-title a:hover {
    color: var(--color-primary, #3b82f6);
}

.page-news__post-excerpt {
    margin: 0 0 var(--space-4, 1rem) 0;
    color: var(--color-text-secondary, #6b7280);
    line-height: 1.6;
}

.page-news__post-meta {
    display: flex;
    gap: var(--space-4, 1rem);
    font-size: var(--font-size-sm, 0.875rem);
    color: var(--color-text-tertiary, #9ca3af);
}

.page-news__post-category {
    color: var(--color-primary, #3b82f6);
    font-weight: 500;
}

.page-news__empty {
    text-align: center;
    padding: var(--space-8, 2rem);
}

.page-news__text {
    color: var(--color-text-secondary, #6b7280);
    font-size: var(--font-size-lg, 1.125rem);
}
</style>
