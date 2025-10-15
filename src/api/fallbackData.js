/**
 * 后备数据和模拟数据
 * Fallback Data and Mock Data for Development
 */

// 模拟新闻文章数据
export const mockPosts = [
    {
        id: 1,
        slug: 'welcome-to-e-sunrise-australia',
        title: 'Welcome to E-Sunrise Australia',
        excerpt: 'We are excited to introduce E-Sunrise Australia, your trusted partner in agricultural and food industry solutions.',
        content: `
      <h2>About E-Sunrise Australia</h2>
      <p>E-Sunrise Australia is committed to providing high-quality agricultural products and food industry solutions across Australia. Our mission is to support sustainable farming practices and deliver exceptional products to our customers.</p>
      
      <h3>Our Services</h3>
      <ul>
        <li>Premium agricultural products</li>
        <li>Food industry consulting</li>
        <li>Sustainable farming solutions</li>
        <li>Supply chain management</li>
      </ul>
      
      <p>We look forward to serving the Australian market with dedication and excellence.</p>
    `,
        published: true,
        published_at: '2024-09-24T10:00:00.000Z',
        created_at: '2024-09-24T10:00:00.000Z',
        updated_at: '2024-09-24T10:00:00.000Z',
        author: 'E-Sunrise Australia Team',
        featured_image: null,
        categories: ['Company News', 'Agriculture'],
        tags: ['announcement', 'australia', 'agriculture', 'sustainability']
    },
    {
        id: 2,
        slug: 'sustainable-farming-practices-2024',
        title: 'Sustainable Farming Practices for 2024',
        excerpt: 'Explore the latest sustainable farming techniques that are shaping the future of agriculture in Australia.',
        content: `
      <h2>The Future of Sustainable Agriculture</h2>
      <p>As we move into 2024, sustainable farming practices are becoming increasingly important for Australian farmers. Here are the key trends we're seeing:</p>
      
      <h3>Key Sustainable Practices</h3>
      <ul>
        <li>Precision agriculture using IoT sensors</li>
        <li>Water-efficient irrigation systems</li>
        <li>Organic soil management</li>
        <li>Integrated pest management</li>
        <li>Renewable energy adoption</li>
      </ul>
      
      <p>E-Sunrise Australia is committed to supporting these initiatives and helping farmers implement sustainable solutions.</p>
    `,
        published: true,
        published_at: '2024-09-20T14:30:00.000Z',
        created_at: '2024-09-20T14:30:00.000Z',
        updated_at: '2024-09-20T14:30:00.000Z',
        author: 'Agricultural Expert Team',
        featured_image: null,
        categories: ['Agriculture', 'Sustainability'],
        tags: ['sustainability', 'farming', 'technology', 'environment']
    },
    {
        id: 3,
        slug: 'food-industry-innovations',
        title: 'Latest Innovations in Food Industry Technology',
        excerpt: 'Discover cutting-edge technologies that are revolutionizing food processing and distribution.',
        content: `
      <h2>Technology Transformation in Food Industry</h2>
      <p>The food industry is experiencing rapid technological advancement. Here are the innovations making the biggest impact:</p>
      
      <h3>Emerging Technologies</h3>
      <ul>
        <li>AI-powered quality control systems</li>
        <li>Blockchain for supply chain transparency</li>
        <li>Advanced packaging solutions</li>
        <li>Automated processing equipment</li>
        <li>Cold chain optimization</li>
      </ul>
      
      <p>Our team at E-Sunrise Australia stays at the forefront of these developments to better serve our clients.</p>
    `,
        published: true,
        published_at: '2024-09-18T09:15:00.000Z',
        created_at: '2024-09-18T09:15:00.000Z',
        updated_at: '2024-09-18T09:15:00.000Z',
        author: 'Technology Team',
        featured_image: null,
        categories: ['Technology', 'Food Industry'],
        tags: ['innovation', 'technology', 'food-processing', 'automation']
    }
]

// 模拟分类数据
export const mockCategories = [
    { id: 1, name: 'Company News', slug: 'company-news', description: 'Latest updates from E-Sunrise Australia' },
    { id: 2, name: 'Agriculture', slug: 'agriculture', description: 'Agricultural industry insights and trends' },
    { id: 3, name: 'Sustainability', slug: 'sustainability', description: 'Sustainable practices and environmental initiatives' },
    { id: 4, name: 'Technology', slug: 'technology', description: 'Technology innovations in agriculture and food industry' },
    { id: 5, name: 'Food Industry', slug: 'food-industry', description: 'Food industry news and developments' }
]

// 模拟标签数据
export const mockTags = [
    { id: 1, name: 'announcement', slug: 'announcement' },
    { id: 2, name: 'australia', slug: 'australia' },
    { id: 3, name: 'agriculture', slug: 'agriculture' },
    { id: 4, name: 'sustainability', slug: 'sustainability' },
    { id: 5, name: 'farming', slug: 'farming' },
    { id: 6, name: 'technology', slug: 'technology' },
    { id: 7, name: 'environment', slug: 'environment' },
    { id: 8, name: 'innovation', slug: 'innovation' },
    { id: 9, name: 'food-processing', slug: 'food-processing' },
    { id: 10, name: 'automation', slug: 'automation' }
]

/**
 * 获取模拟文章列表（带分页）
 */
export function getMockPosts({ page = 1, pageSize = 10 } = {}) {
    const from = (page - 1) * pageSize
    const to = from + pageSize
    const paginatedPosts = mockPosts.slice(from, to)

    return {
        data: paginatedPosts,
        meta: {
            page,
            pageSize,
            total: mockPosts.length,
            pageCount: Math.ceil(mockPosts.length / pageSize)
        }
    }
}

/**
 * 根据slug获取模拟文章
 */
export function getMockPostBySlug(slug) {
    return mockPosts.find(post => post.slug === slug) || null
}

/**
 * 获取模拟分类列表
 */
export function getMockCategories() {
    return mockCategories
}

/**
 * 获取模拟标签列表
 */
export function getMockTags() {
    return mockTags
}

/**
 * 检查是否应该使用模拟数据
 */
export function shouldUseMockData() {
    // 在开发环境中，如果没有配置 Supabase，则使用模拟数据
    const hasSupabaseConfig = import.meta.env.VITE_SUPABASE_URL &&
        import.meta.env.VITE_SUPABASE_ANON_KEY &&
        !import.meta.env.VITE_SUPABASE_URL.includes('demo') &&
        !import.meta.env.VITE_SUPABASE_URL.includes('your-supabase')

    return import.meta.env.DEV && !hasSupabaseConfig
}

export default {
    mockPosts,
    mockCategories,
    mockTags,
    getMockPosts,
    getMockPostBySlug,
    getMockCategories,
    getMockTags,
    shouldUseMockData
}

