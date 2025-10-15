// Lightweight .env.local reader (no external deps)
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@supabase/supabase-js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function loadEnvLocal(rootDir) {
    const envPath = path.join(rootDir, '.env.local')
    if (!fs.existsSync(envPath)) {
        console.error('[test-supabase] .env.local not found:', envPath)
        process.exit(1)
    }
    const content = fs.readFileSync(envPath, 'utf8')
    const parsedKeys = []
    for (const raw of content.split(/\r?\n/)) {
        const line = raw.trim()
        if (!line || line.startsWith('#')) continue
        const idx = line.indexOf('=')
        if (idx === -1) continue
        const key = line.slice(0, idx).trim()
        let value = line.slice(idx + 1).trim()
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\''))) {
            value = value.slice(1, -1)
        }
        process.env[key] = value
        parsedKeys.push(`${key}(${value.length})`)
    }
    console.log('[test-supabase] parsed keys:', parsedKeys.join(', '))
}

async function main() {
    const root = path.join(__dirname, '..')
    loadEnvLocal(root)
    const url = process.env.VITE_SUPABASE_URL
    const key = process.env.VITE_SUPABASE_ANON_KEY
    console.log('[test-supabase] url length:', url ? url.length : 0, ' key length:', key ? key.length : 0)
    if (!url || !key) {
        console.error('[test-supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY')
        process.exit(1)
    }
    const supabase = createClient(url, key)
    const { data, error, count } = await supabase
        .from('posts')
        .select('id, slug, title, published, published_at', { count: 'exact' })
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(1)

    if (error) {
        console.error('[test-supabase] Error:', error)
        process.exit(1)
    }
    console.log('[test-supabase] OK: sample row =', JSON.stringify(data, null, 2))
    console.log('[test-supabase] total count (if available):', count)
}

main().catch((e) => {
    console.error('[test-supabase] Unexpected error:', e)
    process.exit(1)
})
