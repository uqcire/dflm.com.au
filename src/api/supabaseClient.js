import { createClient } from '@supabase/supabase-js'

let cachedClient = null

function resolveEnv() {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

    // 检查是否有环境变量
    if (!supabaseUrl || !supabaseAnonKey) {
        // eslint-disable-next-line no-console
        console.warn('[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables')
        console.warn('[Supabase] Please check ENV-SETUP-GUIDE.md for setup instructions')

        // 在开发环境提供更详细的指导
        if (import.meta.env.DEV) {
            console.warn('[Supabase] 🔧 Development Setup Guide:')
            console.warn('[Supabase] 1. Create .env.local file in project root')
            console.warn('[Supabase] 2. Add: VITE_SUPABASE_URL=your-project-url')
            console.warn('[Supabase] 3. Add: VITE_SUPABASE_ANON_KEY=your-anon-key')
            console.warn('[Supabase] 4. Restart dev server')
        }

        return { supabaseUrl: '', supabaseAnonKey: '' }
    }
    return { supabaseUrl, supabaseAnonKey }
}

export function getSupabase() {
    if (cachedClient) return cachedClient
    const { supabaseUrl, supabaseAnonKey } = resolveEnv()

    if (!supabaseUrl || !supabaseAnonKey) {
        const errorMessage = 'Supabase env not found. Ensure .env.local has VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, then restart the dev server/build.'

        // 在开发环境中提供更详细的错误信息
        if (import.meta.env.DEV) {
            const detailedError = new Error(`${errorMessage}

🔧 Quick Setup Guide:
1. Create .env.local in project root (dflm.com.au/.env.local)
2. Add these lines:
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
3. Get your credentials from https://supabase.com (Settings > API)
4. Restart dev server

📖 Check ENV-SETUP-GUIDE.md for detailed instructions`)
            throw detailedError
        }

        throw new Error(errorMessage)
    }

    // 验证 URL 格式，避免使用占位符 URL
    if (supabaseUrl.includes('demo.supabase.co') || supabaseUrl.includes('your-supabase')) {
        const placeholderError = new Error(`🚨 Supabase配置使用了占位符URL: ${supabaseUrl}

❌ 当前问题: 你使用的是演示/占位符URL，无法连接到真实的数据库

✅ 解决方案:
1. 访问 https://supabase.com 创建免费项目
2. 获取真实的项目URL和API密钥
3. 更新 .env.local 文件中的配置
4. 重启开发服务器

💡 或者，如果你想使用本地数据，可以切换到 Strapi 后端`)

        if (import.meta.env.DEV) {
            console.error('[Supabase] 配置错误:', placeholderError.message)
        }

        throw placeholderError
    }

    cachedClient = createClient(supabaseUrl, supabaseAnonKey)
    return cachedClient
}

export default {
    getSupabase
}
