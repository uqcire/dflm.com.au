import { getSupabase } from './supabaseClient'
import { getMockPosts, shouldUseMockData } from './fallbackData'

/**
 * Fetch posts with pagination and related data
 * @param {{ page?: number, pageSize?: number }} params
 * @returns {Promise<{ data: any[], meta: { page: number, pageSize: number, total: number, pageCount: number } }>} 
 */
export async function fetchPosts({ page = 1, pageSize = 10 } = {}) {
    // 检查是否应该使用模拟数据
    if (shouldUseMockData()) {
        console.warn('[Posts] Using mock data - Supabase not configured')
        await new Promise(resolve => setTimeout(resolve, 300))
        return getMockPosts({ page, pageSize })
    }

    try {
        const from = (page - 1) * pageSize
        const to = from + pageSize - 1

        const supabase = getSupabase()

        // 查询文章并关联分类数据
        const { data, error, count } = await supabase
            .from('posts')
            .select(`
                *,
                category:categories(id, name, slug),
                tags:post_tags(tag:tags(id, name, slug))
            `, { count: 'exact' })
            .eq('published', true)  // 只获取已发布的文章
            .order('published_at', { ascending: false, nullsFirst: false })
            .order('created_at', { ascending: false })
            .range(from, to)

        if (error) throw error

        // 转换数据格式以匹配前端期望
        const transformedData = (data || []).map(post => ({
            id: post.id,
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            body: post.body,
            coverUrl: post.cover_url,
            author: post.author,
            publishedAt: post.published_at,
            createdAt: post.created_at,
            updatedAt: post.updated_at,
            category: post.category,
            tags: post.tags?.map(tagRel => tagRel.tag) || [],
            // SEO 字段
            metaTitle: post.meta_title,
            metaDescription: post.meta_description,
            ogImage: post.og_image
        }))

        return {
            data: transformedData,
            meta: {
                page,
                pageSize,
                total: count || 0,
                pageCount: Math.ceil((count || 0) / pageSize)
            }
        }
    } catch (error) {
        console.error('[Posts] Supabase error:', error)
        // 如果 Supabase 连接失败，在开发环境中回退到模拟数据
        if (import.meta.env.DEV) {
            console.warn('[Posts] Supabase failed, falling back to mock data:', error.message)
            return getMockPosts({ page, pageSize })
        }
        throw error
    }
}

/**
 * Fetch single post by slug with related data
 * @param {string} slug
 * @returns {Promise<any>}
 */
export async function fetchPostBySlug(slug) {
    if (shouldUseMockData()) {
        console.warn('[Posts] Using mock data for single post - Supabase not configured')
        await new Promise(resolve => setTimeout(resolve, 200))
        const { getMockPostBySlug } = await import('./fallbackData')
        const post = getMockPostBySlug(slug)
        if (!post) {
            throw new Error(`Post with slug "${slug}" not found`)
        }
        return post
    }

    try {
        const supabase = getSupabase()

        const { data, error } = await supabase
            .from('posts')
            .select(`
                *,
                category:categories(id, name, slug, description),
                tags:post_tags(tag:tags(id, name, slug, description))
            `)
            .eq('slug', slug)
            .eq('published', true)  // 只获取已发布的文章
            .limit(1)
            .single()

        if (error) throw error

        // 转换数据格式
        const transformedPost = {
            id: data.id,
            slug: data.slug,
            title: data.title,
            excerpt: data.excerpt,
            body: data.body,
            coverUrl: data.cover_url,
            author: data.author,
            publishedAt: data.published_at,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
            category: data.category,
            tags: data.tags?.map(tagRel => tagRel.tag) || [],
            // SEO 字段
            metaTitle: data.meta_title,
            metaDescription: data.meta_description,
            ogImage: data.og_image,
            canonicalUrl: data.canonical_url
        }

        return transformedPost
    } catch (error) {
        console.error('[Posts] Supabase error for single post:', error)
        if (import.meta.env.DEV) {
            console.warn('[Posts] Supabase failed for single post, falling back to mock data:', error.message)
            const { getMockPostBySlug } = await import('./fallbackData')
            const post = getMockPostBySlug(slug)
            if (!post) {
                throw new Error(`Post with slug "${slug}" not found`)
            }
            return post
        }
        throw error
    }
}
