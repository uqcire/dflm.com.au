# DOCS TODO — NEXT STEPS

Date: 2025-08-12
Status: Build strategy chosen: SSG + on-demand rebuilds (webhooks). Frontend deployed on Vercel; apex + www domains configured. Strapi permissions configured on Render.

## NEXT ACTIONS (WEEK OF 2025-08-13)
- [x] Decide analytics stack (align with `OPS/ANALYTICS.md`) — Umami Cloud chosen (snippet present in `index.html`)
- [x] PRD sign‑off (gate to start page builds)
  - [ ] `PRD/PRD.md`: finalize scope, acceptance criteria, success metrics
  - [ ] `PRD/IA-SITEMAP.md`: lock sitemap with route slugs and URL patterns
  - [ ] `PRD/CONTENT-MODEL.md`: finalize fields and validations (pages, blog, shared components)
- [ ] CMS prep (in parallel)
  - [ ] Create Strapi content types per `PRD/CONTENT-MODEL.md`
  - [ ] Define reusable components (media, SEO, CTA)
  - [ ] Configure Vercel Deploy Hook and Strapi webhook for publish/unpublish

### Page build kickoff
- Target start: 2025-08-15 (immediately after PRD sign‑off)
- Pre‑req: PHASE 1 items above are checked
- Initial tasks:
  - [x] Scaffold routes and empty page shells per sitemap
  - [x] Wire document titles/meta per route
  - [ ] Create base layout components:
    - [x] Navigation (Element Plus menu as shared component)
    - [ ] Header
    - [ ] Footer
  - [ ] Connect page shells to Strapi stubs or mock data

## PHASE 0 — CORE DECISIONS (BLOCKERS)
- [x] Decide site build strategy: SSG (with on-demand rebuilds via Strapi publish/unpublish)
- [x] Confirm frontend host (Vercel) and domains (apex + www)
- [x] Decide analytics stack (align with `OPS/ANALYTICS.md`)

## PHASE 1 — PRODUCT (PRD)
- [ ] `PRD/PRD.md`: Finalize scope, acceptance criteria, and success metrics
- [ ] `PRD/IA-SITEMAP.md`: Lock sitemap with route slugs and URL patterns
- [ ] `PRD/CONTENT-MODEL.md`: Finalize fields and validations for:
  - [ ] Page, Service, Product, Industry, Certification, Partner
  - [ ] Blog: Post, Category, Tag
  - [ ] Shared components (media, SEO, rich text, CTA)

## PHASE 2 — CMS (STRAPI + SUPABASE)
- [ ] Create content types per `PRD/CONTENT-MODEL.md`
- [ ] Define reusable components (media, SEO, CTA) in Strapi
- [ ] Configure Supabase Storage bucket `uploads` (verify public access rules as needed)
- [ ] `cms/config/plugins.js`: Ensure Supabase upload provider values set
- [ ] `cms/config/server.js`: Set `PUBLIC_URL` for Render
- [ ] Render env vars: `DATABASE_URL`, `HOST`, `PORT`, `PUBLIC_URL`, `APP_KEYS`, salts
- [ ] Permissions: Public role checks match Step 4 in `OPS/CMS-SETUP__STRAPI.md` (done; re-verify after content types)
- [ ] Webhooks plan (SSG on-demand rebuilds):
  - [ ] Create Vercel Deploy Hook; save URL as `VERCEL_DEPLOY_HOOK_URL`
  - [ ] In Strapi → Settings → Webhooks: add webhook
    - [ ] Name: Site Rebuild
    - [ ] URL: `VERCEL_DEPLOY_HOOK_URL`
    - [ ] Events: `entry.publish`, `entry.unpublish`
  - [ ] Test webhook from Strapi; confirm Vercel build starts
  - [ ] Publish/unpublish a test entry; confirm site updates

## PHASE 3 — UX (DESIGN SYSTEM)
- [ ] `UX/DESIGN-TOKENS.md`: Finalize tokens (colors, spacing, type scale)
- [ ] Map tokens in codebase (`dflm.com.au/src/styles/global.css`)
- [ ] `UX/COMPONENTS.md`: Define base components + props/states (Button, Card, Header, Footer, Nav, Grid, Form)
- [ ] `UX/ACCESSIBILITY-GUIDELINES.md`: Add WCAG targets and test checklist
- [ ] `UX/RESPONSIVE-RULES.md`: Breakpoints and container rules confirmed

## PHASE 4 — OPS (DELIVERY)
- [ ] `OPS/HOSTING.md`: Add domain config, SSL, redirects (apex → www or vice versa), cache strategy
- [ ] `OPS/DEPLOYMENT.md`: Build commands, envs, preview vs production flow, rollback procedure
- [x] `OPS/ANALYTICS.md`: Document chosen analytics (Umami) and snippet insertion location (`index.html`)
- [ ] `OPS/SEO-CHECKLIST.md`: Expand page-level metadata, Open Graph, sitemap, robots

## PHASE 5 — READINESS / QA
- [ ] Content entry: create sample entries for each type and publish
- [ ] If SSG: verify webhook triggers Vercel build and site updates
- [ ] Accessibility sweep: keyboard nav, focus states, color contrast
- [ ] Performance: images (formats/sizes), code-splitting, cache headers
- [ ] SEO: validate metadata, structured data where applicable

## HANDOFF NOTES
- Continue from `OPS/CMS-SETUP__STRAPI.md` Step 5 when build strategy is decided
- Prefer publish/unpublish webhooks only for SSG to reduce unnecessary builds
- Keep filenames UPPERCASE for new docs and checklists 