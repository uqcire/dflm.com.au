<script setup>
import { onMounted, computed } from 'vue'
import { usePosts } from '@/composables/useDataFetching.js'
import ComponentSection from '@/components/layout/COMPONENT__SECTION.vue'
import ComponentContainer from '@/components/layout/COMPONENT__CONTAINER.vue'
import ComponentLoadingState from '@/components/system/COMPONENT__LOADING--STATE.vue'
import ComponentErrorState from '@/components/system/COMPONENT__ERROR--STATE.vue'
import ComponentHero from '@/components/layout/COMPONENT__HERO--PAGE.vue'
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
        console.log('🔄 Loading posts from Supabase...')
        await loadPosts({ page: 1, pageSize: 10 })
        console.log('✅ Posts loaded:', posts.value)

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
        console.error('❌ Error loading news page data:', error)
    }
})

// Get posts list
const postsList = computed(() => {
    console.log('📊 Computing posts list:', posts.value)
    return posts.value?.data || []
})

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
            <ComponentErrorState :message="errorDisplay?.message || 'An error occurred while loading news.'" />
        </ComponentContainer>
    </ComponentSection>

    <!-- Main Content -->
    <template v-else>
        <!-- Hero Section -->
        <ComponentSection spacing="xs" :fullWidth="true" :style="'padding-bottom: 0px; padding-top: 0px'">
            <ComponentHero title="News & Insights"
                subtitle="Stay updated with the latest company news, industry insights, and developments from E‑Sunrise Australia."
                :fullWidth="true" backgroundImage="/assets/landscape__crops--summer-fields.avif" overlayOpacity="50" />
        </ComponentSection>

        <!-- News Content -->
        <ComponentSection containerSize="full" spacing="sm" background="transparent">
            <ComponentContainer size="2xl" padding="responsive" :constrainWidth="false">
                <!-- Posts List -->
                <div v-if="postsList.length > 0" class="max-w-4xl mx-auto">
                    <h2 class="font-heading text-4xl md:text-4xl font-bold text-pickled-bluewood-800 pb-12">
                        Latest Releases
                    </h2>

                    <div class="space-y-12">
                        <article v-for="post in postsList" :key="post.id"
                            class="group border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                            <!-- Date -->
                            <div class="text-sm font-medium text-pickled-bluewood-600 mb-3">
                                {{ formatDate(post.publishedAt) }}
                            </div>

                            <!-- Title and Arrow -->
                            <h3
                                class="font-heading text-xl md:text-2xl font-bold text-pickled-bluewood-800 leading-tight flex-1 pb-4">
                                <router-link :to="{ name: 'news-detail', params: { slug: post.slug } }"
                                    class="no-underline text-pickled-bluewood-800 hover:text-pickled-bluewood-600 transition-colors duration-200">
                                    {{ post.title }}
                                </router-link>
                            </h3>


                            <!-- Excerpt -->
                            <div class="flex items-start justify-between gap-2">
                                <p class="font-body text-pickled-bluewood-700 leading-relaxed pb-2 pr-6">
                                    {{ post.excerpt }}
                                </p>
                                <div class="flex-shrink-0 mt-1">
                                    <router-link :to="{ name: 'news-detail', params: { slug: post.slug } }"
                                        class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-pickled-bluewood-600 hover:bg-pickled-bluewood-100 hover:text-pickled-bluewood-800 transition-all duration-200 group-hover:translate-x-1">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </router-link>
                                </div>
                            </div>


                            <!-- Meta Info -->
                            <div class="flex flex-wrap gap-2 text-xs text-pickled-bluewood-600 mt-3">
                                <!-- Tags -->
                                <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2">
                                    <span v-for="tag in post.tags" :key="tag.id"
                                        class="inline-flex items-center font-medium bg-monza-400 hover:bg-monza-500 text-white rounded-full px-3 py-1.5 text-xs transition-colors duration-200 shadow-sm">
                                        #{{ tag.name }}
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>

                    <!-- Pagination (placeholder for future implementation) -->
                    <div class="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-gray-200">
                        <button
                            class="px-3 py-2 text-sm text-pickled-bluewood-600 hover:text-pickled-bluewood-800 transition-colors">
                            ← Previous
                        </button>
                        <div class="flex gap-1">
                            <button class="w-8 h-8 rounded-full bg-pickled-bluewood-800 text-white text-sm font-medium">
                                1
                            </button>
                            <button
                                class="w-8 h-8 rounded-full text-pickled-bluewood-600 hover:bg-pickled-bluewood-100 text-sm font-medium transition-colors">
                                2
                            </button>
                            <button
                                class="w-8 h-8 rounded-full text-pickled-bluewood-600 hover:bg-pickled-bluewood-100 text-sm font-medium transition-colors">
                                3
                            </button>
                            <span class="w-8 h-8 flex items-center justify-center text-pickled-bluewood-400 text-sm">
                                ...
                            </span>
                            <button
                                class="w-8 h-8 rounded-full text-pickled-bluewood-600 hover:bg-pickled-bluewood-100 text-sm font-medium transition-colors">
                                10
                            </button>
                        </div>
                        <button
                            class="px-3 py-2 text-sm text-pickled-bluewood-600 hover:text-pickled-bluewood-800 transition-colors">
                            Next →
                        </button>
                    </div>
                </div>

                <!-- Empty State -->
                <div v-else class="py-16">
                    <div class="text-center space-y-6">
                        <h2 class="font-heading text-3xl font-bold text-pickled-bluewood-800">
                            No News Yet
                        </h2>
                        <p class="font-body text-lg text-pickled-bluewood-700 max-w-2xl mx-auto">
                            We're working on bringing you the latest news and insights. Check back soon for updates on
                            our products, services, and industry developments.
                        </p>
                        <div class="pt-4">
                            <router-link to="/our-company"
                                class="inline-flex items-center px-8 py-4 bg-transparent text-pickled-bluewood-700 font-medium text-sm rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-pickled-bluewood-700">
                                Learn more about our company
                            </router-link>
                        </div>
                    </div>
                </div>
            </ComponentContainer>
        </ComponentSection>
    </template>
</template>
