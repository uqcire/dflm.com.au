import { getSupabase } from './supabaseClient'
import { getMockPosts, shouldUseMockData } from './fallbackData'

/**
 * Fetch posts with pagination
 * @param {{ page?: number, pageSize?: number }} params
 * @returns {Promise<{ data: any[], meta: { page: number, pageSize: number, total: number, pageCount: number } }>} 
 */
export async function fetchPosts({ page = 1, pageSize = 10 } = {}) {
    // 检查是否应该使用模拟数据
    if (shouldUseMockData()) {
        console.warn('[Posts] Using mock data - Supabase not configured')
        // 模拟异步延迟以保持一致的用户体验
        await new Promise(resolve => setTimeout(resolve, 300))
        return getMockPosts({ page, pageSize })
    }

    try {
        const from = (page - 1) * pageSize
        const to = from + pageSize - 1

        const supabase = getSupabase()

        const { data, error, count } = await supabase
            .from('posts')
            .select('*', { count: 'exact' })
            .order('published_at', { ascending: false, nullsFirst: false })
            .order('created_at', { ascending: false })
            .range(from, to)

        if (error) throw error

        return {
            data: data || [],
            meta: {
                page,
                pageSize,
                total: count || 0,
                pageCount: Math.ceil((count || 0) / pageSize)
            }
        }
    } catch (error) {
        // 如果 Supabase 连接失败，在开发环境中回退到模拟数据
        if (import.meta.env.DEV) {
            console.warn('[Posts] Supabase failed, falling back to mock data:', error.message)
            return getMockPosts({ page, pageSize })
        }
        throw error
    }
}

/**
 * Fetch single post by slug
 * @param {string} slug
 * @returns {Promise<any>}
 */
export async function fetchPostBySlug(slug) {
    // 检查是否应该使用模拟数据
    if (shouldUseMockData()) {
        console.warn('[Posts] Using mock data for single post - Supabase not configured')
        // 模拟异步延迟
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
            .select('*')
            .eq('slug', slug)
            .limit(1)
            .single()

        if (error) throw error
        return data
    } catch (error) {
        // 如果 Supabase 连接失败，在开发环境中回退到模拟数据
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
