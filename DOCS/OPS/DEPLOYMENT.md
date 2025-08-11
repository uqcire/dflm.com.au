# DEPLOYMENT

## Frontend (Vercel)
- Repo: `dflm.com.au`
- Build: `pnpm install` → `pnpm build`
- Output: `dist/`
- Env vars (Project Settings → Environment Variables):
  - `VITE_API_BASE_URL=https://your-strapi.onrender.com`
- Create Deploy Hook (Settings → Git → Deploy Hooks) for branch `main`

## CMS (Strapi on Render)
- Connect Strapi repo; set region close to AU
- Build Command: `npm ci && npm run build`
- Start Command: `npm run start`
- Environment variables:
  - `NODE_ENV=production`
  - `HOST=0.0.0.0`
  - `PORT=1337`
  - `PUBLIC_URL=https://your-strapi.onrender.com`
  - `APP_KEYS, API_TOKEN_SALT, ADMIN_JWT_SECRET, TRANSFER_TOKEN_SALT`
  - `DATABASE_URL=postgresql://...supabase.co:5432/postgres?sslmode=require`
  - `SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_BUCKET=uploads`

## Webhooks
- In Strapi → Settings → Webhooks: add Vercel Deploy Hook URL
- Events: publish/unpublish for Page, Post, Product, Service, Industry, Certification, Partner

## Domain & DNS
- Point your domain to Vercel; add custom domain and set primary
- Ensure `PUBLIC_URL` in Strapi matches CMS public URL

## Post‑deploy
- Verify public API endpoints (CORS)
- Trigger a test publish in Strapi and confirm Vercel build 