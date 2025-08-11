# HOSTING OVERVIEW

## Frontend — Vercel
- Static site hosting with global CDN
- Build from Git (`pnpm build` → `dist/`)
- Custom domain + HTTPS
- Deploy Hook to rebuild on CMS publish

## CMS — Strapi on Render
- Node web service
- Database: Supabase Postgres (managed)
- Media: Supabase Storage via upload provider

## Integration
- Strapi Webhook → Vercel Deploy Hook (SSG rebuild + cache invalidation)
- Frontend reads public Strapi API at `VITE_API_BASE_URL`

## DNS & Domains
- Point apex and `www` to Vercel; add domain in Vercel
- Set `PUBLIC_URL` for Strapi to its Render URL

## Environments
- Dev and Production (Staging optional later) 