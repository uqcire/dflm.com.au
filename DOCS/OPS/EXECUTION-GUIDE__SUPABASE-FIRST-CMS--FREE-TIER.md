# 执行指南 — Supabase-First 博客与内容架构（免费方案，高性能与 SEO 优先）

> 目标：在保持现有站点风格与 SEO 能力的前提下，将博客/新闻的数据访问由 Strapi(Render) 迁移为“直接使用 Supabase API”，避免冷启动、降低复杂度，并保留可回滚能力。

---

## 0) 前置条件与成果预期
- 已有：Supabase 项目（Postgres + Storage）。
- 已有：`dflm.com.au` 前端项目（Vite + Vue 3）。
- 预期成果：
  - 运行时不再依赖 Strapi（可保留旧代码以便回滚）。
  - `News` 列表/详情直接从 Supabase 读取，性能稳定无冷启动。
  - 保持 SEO：动态 meta、OG/Twitter、JSON-LD、canonical、sitemap 支持。
  - 线路清晰，可逐步推广到其他内容类型。

---

## 1) 数据模型（Supabase）
> 如现已存量数据，仅核对字段与索引；无则按下述创建。

- 表 `posts`
  - 字段：
    - `id` bigint primary key
    - `slug` text unique not null
    - `title` text not null
    - `excerpt` text
    - `body` text
    - `cover_url` text
    - `category_id` bigint
    - `author` text
    - `published` boolean default true
    - `published_at` timestamptz
    - `updated_at` timestamptz default now()
  - 索引：
    - 唯一：`slug`
    - 排序：`published_at desc`

- 表 `categories`：`id`, `slug` unique, `name` text not null
- 表 `tags`：`id`, `slug` unique, `name` text not null
- 关系（可选）：`post_tags(post_id, tag_id)` 多对多

- RLS 策略（公开只读）：
  - 开启 RLS
  - 匿名角色：允许 `select` 且仅限 `published = true`

---

## 2) 环境变量与客户端初始化
在部署平台或本地 `.env` 中设置：
- `VITE_SUPABASE_URL=https://xxxx.supabase.co`
- `VITE_SUPABASE_ANON_KEY=xxxxx`

新建 `src/api/supabaseClient.js`：
```javascript
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)
```

---

## 3) API 层（以 Supabase 替代 Strapi）
新建 `src/api/postsSupabase.js`：
```javascript
import { supabase } from './supabaseClient'

export async function fetchPosts({ page = 1, pageSize = 10 } = {}) {
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1

  const { data, error, count } = await supabase
    .from('posts')
    .select('*', { count: 'exact' })
    .eq('published', true)
    .order('published_at', { ascending: false })
    .range(from, to)

  if (error) throw error
  return { data, meta: { page, pageSize, total: count, pageCount: Math.ceil((count || 0) / pageSize) } }
}

export async function fetchPostBySlug(slug) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .limit(1)
    .single()

  if (error) throw error
  return data
}
```

如需分类/标签：按同样方式新增 `categoriesSupabase.js`、`tagsSupabase.js`。

---

## 4) 组合式函数与导出改造（最小改动）
将现有 API 统一出口 `src/api/index.js` 指向 Supabase 实现，保持函数名不变：
```javascript
export { fetchPosts as getPosts, fetchPostBySlug as getPostBySlug } from './postsSupabase'
```
保留旧 Strapi 文件，暂不再导出（便于随时回滚）。

---

## 5) 页面与路由（现已使用 News 组件）
- `PAGE__NEWS--LIST.vue`：`usePosts().loadPosts()`（底层调用 `getPosts`）。
- `PAGE__NEWS--DETAIL.vue`：`usePosts().loadPostBySlug(slug)`。
- `SEO-MANAGER__DYNAMIC.js` 继续负责 meta/OG/JSON-LD/canonical。

---

## 6) 缓存与容错
- 保持 `useDataFetching` 的内存缓存（默认 TTL 5 分钟）。
- 可按需增加 `localStorage` 只读缓存层（列表、详情均可）。
- 对 Supabase SDK 的错误进行统一捕获与提示（项目已具备全局错误处理）。

---

## 7) SSG/SSR 与 SEO（可选增强）
- A) 保持 CSR + 动态注入 SEO（当前已满足基本 SEO）。
- B) 增加 SSG（推荐）：
  - 使用 `vite-plugin-ssg` 或迁移 Nuxt。
  - 构建阶段脚本（例如 `scripts/prebuild-fetch-posts.js`）拉取所有文章，生成静态 JSON/HTML 与 sitemap。
- C) SSR：部署到 Cloudflare Pages Functions/Workers（免费层可用）。

---

## 8) 性能要点
- 图片：Supabase Storage + `<img loading="lazy">`；必要时引入图像代理/裁剪。
- 分页：默认 10 条；滚动懒加载或分页跳转。
- 依赖：保持路由与组件懒加载。
- Tailwind v4：已通过 `safelist` 与 `global.css` 回退保障栅格稳定。

---

## 9) 安全与限流
- 仅开放匿名 `select`（RLS），强制 `published=true`。
- 写操作走 Edge Function 或后台受控入口，严禁在前端使用 Service Role。

---

## 10) 迁移步骤（可回滚，细化执行）
1. 新建 `src/api/supabaseClient.js`。
2. 新建 `src/api/postsSupabase.js` 并实现 `fetchPosts`、`fetchPostBySlug`。
3. 修改 `src/api/index.js`，将 `getPosts`、`getPostBySlug` 指向 Supabase 实现。
4. 本地运行与预览 `/news` 列表与详情，校验：加载速度、错误提示、空状态。
5. 检查 SEO：标题、描述、OG/Twitter、JSON-LD、canonical 是否正确注入。
6. 构建：`pnpm build`，打开 `dist/stats.html` 观察体积与拆包。
7. 若正常，保留 Strapi 代码但不使用；观察一段时间后按需清理。
8. 需要时停用 Render 上的 Strapi，彻底消除冷启动来源。

---

## 11) 运维与回滚
- 回滚：将 `src/api/index.js` 的导出改回 Strapi 版本，立即恢复旧链路。
- 监控：前端全局错误处理器 + 前端日志（可选接入）。
- 备份：启用 Supabase 数据库每日快照与对象存储版本化。

---

## 12) 验收清单（Checklist）
- [ ] `/news` 列表从 Supabase 渲染，分页正常。
- [ ] `/news/:slug` 详情正确，封面/作者/日期完整。
- [ ] SEO：title、description、OG/Twitter、JSON-LD、canonical 正确注入。
- [ ] 构建成功，`dist` 产物可用，主要警告已处理或记录。
- [ ] 下线/禁用 Strapi 后，站点仍稳定、无冷启动。

---

## 13) 后续增强（可选）
- CDN：使用 Cloudflare 缓存静态资源与 JSON 数据。
- 预渲染：为热门文章设置 SSG 白名单，进一步优化首屏。
- 搜索：启用 Supabase 全文检索（`pg_trgm`/`tsvector`）。
- 后台：如需录入端，可用 Supabase Auth + 轻后台（或 Payload 自托管）。

---

## 变更记录
- 2025-09-24：首版执行指南
