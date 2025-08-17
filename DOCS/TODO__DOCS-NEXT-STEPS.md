# DOCS TODO — NEXT STEPS

Date: 2025-08-12
Status: Build strategy chosen: SSG + on-demand rebuilds (webhooks). Frontend deployed on Vercel; apex + www domains configured. Strapi permissions configured on Render. Base layout components (Header, Navigation, Footer) completed. PRD documentation finalized and locked.

## NEXT ACTIONS (WEEK OF 2025-08-13)
- [x] Decide analytics stack (align with `OPS/ANALYTICS.md`) — Umami Cloud chosen (snippet present in `index.html`)
- [x] PRD sign‑off (gate to start page builds)
  - [x] `PRD/PRD.md`: finalize scope, acceptance criteria, success metrics
  - [x] `PRD/IA-SITEMAP.md`: lock sitemap with route slugs and URL patterns
  - [x] `PRD/CONTENT-MODEL.md`: finalize fields and validations (pages, blog, shared components)
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
    - [x] Header
    - [x] Footer
      - [x] Connect page shells to Strapi stubs or mock data
      - [x] Create mock data structure mirroring Strapi content model
      - [x] Create data service/composable for centralized data access
      - [x] Update page components to consume data
      - [x] Create reusable content components (hero, features, etc.)
        - [x] Hero component (COMPONENT__HERO--PAGE.vue)
        - [x] Loading state component (COMPONENT__LOADING--STATE.vue)
        - [x] Error state component (COMPONENT__ERROR--STATE.vue)
        - [x] Contact info component (COMPONENT__CONTACT--INFO.vue)
        - [x] Social links component (COMPONENT__SOCIAL--LINKS.vue)
        - [x] Feature list component (COMPONENT__FEATURE--LIST.vue)
        - [x] Service card component (COMPONENT__SERVICE--CARD.vue)
        - [x] Product card component (COMPONENT__PRODUCT--CARD.vue)
        - [x] Content section component (COMPONENT__CONTENT--SECTION.vue)
      - [x] Implement dynamic routing and meta tags
      - [x] Create API client for future Strapi integration
        - [x] Analyze existing HTTP client utility and identify enhancement needs
        - [x] Create JavaScript data models for all content types based on CONTENT-MODEL.md
        - [x] Implement API service methods for each content type
        - [x] Add mock data API responses for development
        - [x] Create API client configuration for Strapi integration
        - [x] Add error handling specific to API responses
        - [x] Create data fetching composables for Vue components
        - [x] Update existing components to use new API client
        - [x] Test API client with mock data
        - [x] Document API client usage and integration guide
      - [x] Test layouts and components with mock data

## PHASE 0 — CORE DECISIONS (BLOCKERS)
- [x] Decide site build strategy: SSG (with on-demand rebuilds via Strapi publish/unpublish)
- [x] Confirm frontend host (Vercel) and domains (apex + www)
- [x] Decide analytics stack (align with `OPS/ANALYTICS.md`)

## PHASE 1 - PRODUCT (PRD)
- [x] `PRD/PRD.md`: Finalize scope, acceptance criteria, and success metrics
- [x] `PRD/IA-SITEMAP.md`: Lock sitemap with route slugs and URL patterns
- [x] `PRD/CONTENT-MODEL.md`: Finalize fields and validations for:
  - [x] Page, Service, Product, Industry, Certification, Partner
  - [x] Blog: Post, Category, Tag
  - [x] Shared components (media, SEO, rich text, CTA)

## RECENT COMPLETED WORK (2025-01-27)
### Data Loading Fixes ✅
- [x] Fixed data structure mismatches across all pages
  - [x] About page: Fixed `pages.value?.data` → `pages.value` (single item)
  - [x] Home page: Fixed `pages.value?.data` → `pages.value` (single item)
  - [x] Blog detail page: Fixed `posts.value?.data` → `posts.value` (single item)
  - [x] Contact page: Fixed `siteSettings.value?.data` → `siteSettings.value` (single item)
  - [x] Products page: Fixed Product model to include component-expected properties
  - [x] Blog list page: Already correct (collection access)
  - [x] Services page: Already correct (collection access)
- [x] Fixed error handling across all pages
  - [x] Updated all `ComponentErrorState` usage to use `message` prop instead of `error` object
  - [x] Added proper fallback error messages for all pages
- [x] Fixed component prop validation issues
  - [x] Updated Product model with getter methods for component compatibility
  - [x] Simplified component prop validators to be less strict
  - [x] Added missing properties to mock data (description, price, featured, badge, etc.)
- [x] All mock data now working correctly across the entire application

### Data Flow Summary ✅
- **Collections**: `loadPosts()`, `loadServices()`, `loadProducts()` → `{data: Array, meta: Object}` → access with `.data`
- **Single Items**: `loadPageBySlug()`, `loadPostBySlug()` → single model instance → access directly
- **Site Settings**: `loadSiteSettings()` → single model instance → access directly

## NEXT IMMEDIATE STEPS (2025-01-27)
### Priority 1: CMS Setup
- [x] **Strapi Content Types**: Create all content types per `PRD/CONTENT-MODEL.md`
  - [x] Page (Single Type for site settings)
  - [x] Service (Collection)
  - [x] Product (Collection)
  - [x] Industry (Collection)
  - [x] Certification (Collection)
  - [x] Partner (Collection)
  - [x] Post (Collection) - Updated with missing fields
  - [x] Category (Collection) - Already existed
  - [x] Tag (Collection) - Already existed
- [x] **Strapi Components**: Define reusable components
  - [x] SEO Component (title, description, keywords, ogImage)
  - [x] Hero Component (title, subtitle, image, ctaText, ctaLink)
  - [x] Address Component (line1, city, region, country, postcode)
  - [x] Social Link Component (platform, url, icon)
  - [x] Feature Component (title, text, icon)
  - [x] Product Specs Component (origin, grade, moq, packaging, shelfLife)
  - [x] Use Case Component (title, text, icon)
  - [x] Organization Component (orgName, legalName, parentOrganization)

### Priority 2: Infrastructure Setup
- [x] **Supabase Configuration**
  - [x] Create Storage bucket `uploads` with public access rules (guide provided)
  - [x] Configure Strapi upload provider in `cms/config/plugins.js` (already configured)
- [x] **Render Environment**
  - [x] Set environment variables: `DATABASE_URL`, `HOST`, `PORT`, `PUBLIC_URL`, `APP_KEYS`, salts (complete list provided)
  - [x] Configure `cms/config/server.js` with `PUBLIC_URL` for Render (already configured)
- [x] **Permissions Setup**
  - [x] Configure public role permissions for all content types (bootstrap.js created)
  - [x] Verify permissions match Step 4 in `OPS/CMS-SETUP__STRAPI.md` (ready for verification)

### Priority 3: Integration Testing
- [x] **API Integration**
  - [x] Update API client to use real Strapi endpoints instead of mock data
  - [x] Test all data fetching composables with real Strapi data
  - [x] Verify all pages load correctly with Strapi content
- [x] **Webhook Setup** ✅
  - [x] Create Vercel Deploy Hook; save URL as `VERCEL_DEPLOY_HOOK_URL`
  - [x] Configure Strapi webhook for `entry.publish` and `entry.unpublish` events
  - [x] Test webhook triggers Vercel builds (✅ Tested and working)

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
- Keep filenames UPPERCASE for new docs and checklists ## PHASE 1 — PRODUCT (PRD)
- [ ] `PRD/PRD.md`: Finalize scope, acceptance criteria, and success metrics
- [ ] `PRD/IA-SITEMAP.md`: Lock sitemap with route slugs and URL patterns
- [ ] `PRD/CONTENT-MODEL.md`: Finalize fields and validations for:
  - [ ] Page, Service, Product, Industry, Certification, Partner
  - [ ] Blog: Post, Category, Tag
  - [ ] Shared components (media, SEO, rich text, CTA)