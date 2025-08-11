# E‑SUNRISE AUSTRALIA — CORPORATE WEBSITE PRD

## Summary
- Brand: E‑Sunrise Australia (Melbourne subsidiary of Jiangsu Liming Food Group)
- Audience: B2B buyers (manufacturers, processors, distributors, retail private‑label teams)
- Tech: Vue 3 + Vite + Element Plus + Tailwind CSS v4; Strapi CMS on Render; DB: Supabase Postgres; Media: Supabase Storage; Hosting: Vercel (frontend)
- Contact: mailto only (no PII storage)
- Locale: English (en‑AU)
- Initial sitemap: Home, About, Services (Import/Distribution, OEM), Products, Industries, Certifications & Quality, Blog, Contact
- Product lines: garlic, dehydrated vegetables, pulses, sauce, fresh vegetables
- SEO: SSG, per‑page meta, canonical, OG/Twitter, JSON‑LD, sitemap, robots; GSC
- Analytics: Plausible (recommended) or GA4; track “Contact Email Click”

## Objectives
- Establish credibility (vertical integration, capacity, certifications, global reach, AU presence)
- Grow organic traffic and impressions for core B2B keywords
- Enable easy content publishing via CMS (blog + pages)
- Mobile‑first, fast, accessible UX (Lighthouse ≥ 90 mobile)

## KPIs
- Organic sessions MoM; non‑branded keyword rankings for core terms
- Indexed pages growth; blog output cadence
- Engagement on key pages (Services, Products); contact link clicks

## Audience & Use Cases
- Procurement and technical evaluators researching suppliers on mobile/desktop
- Distributors seeking OEM/private label partners
- Media/partners seeking background, certifications, scale

## Scope (Phase 1)
- Pages: Home, About, Services (Import/Distribution, OEM), Products, Industries, Certifications & Quality, Blog (list + post), Contact, 404
- Blog: categories/tags, SEO metadata, RSS
- Technical SEO: SSG, meta, canonical, sitemap, robots, JSON‑LD
- Analytics + GSC

Out of scope (Phase 1): Auth, complex workflows, multilingual, advanced search, forms (no data storage)

## Information Architecture
- See IA‑SITEMAP.md for full route and navigation details

## Functional Requirements
- Static generation for all routes
- Blog listing with pagination; filters by category/tag
- Post detail with SEO meta + `BlogPosting` JSON‑LD
- Global nav/footer; breadcrumb optional
- Contact via `mailto:` (no backend form)

## Non‑Functional Requirements
- Performance: Lighthouse mobile ≥ 90; code‑splitting; image optimization (AVIF/WebP, srcset); lazy‑load below the fold
- Accessibility: WCAG 2.1 AA; keyboard navigable; proper semantics/landmarks
- Security: CSP/headers at edge; minimal 3rd‑party scripts; no PII storage
- Reliability: static hosting with CDN; Strapi uptime via Render
- Maintainability: componentized UI; BEM naming; functional code style

## Architecture
- Frontend: Vue 3 + Vite; Element Plus auto‑import; Tailwind v4; SSG recommended (vite‑ssg). Vercel build/deploy
- CMS: Strapi on Render; DB: Supabase Postgres; Uploads: Supabase Storage via provider
- Data flow: Frontend reads public Strapi API; publish in Strapi triggers Vercel Deploy Hook → rebuild → CDN invalidate
- Environments: Dev, Production (Staging optional later)

## Content Model (overview)
- SiteSettings; Page; Service; Product; Industry; Certification; Partner; Post; Category; Tag; CaseStudy (later)
- See CONTENT‑MODEL.md for fields and relations

## SEO Plan (high‑level)
- Technical: per‑page meta; canonical; OG/Twitter; robots.txt; dynamic sitemap.xml; JSON‑LD: Organization (+ parent), WebSite/SearchAction, BlogPosting, BreadcrumbList
- Content: topic clusters around Services, Products, Industries, Certifications/Quality, Logistics/Compliance, Market Insights; internal linking strategy
- Monitoring: GSC coverage/performance; monthly audit

## Analytics
- Option A (recommended now): Plausible (lightweight, privacy‑friendly)
- Option B: GA4 (advanced reporting, Ads integrations)
- Track event: Contact Email Click; see ANALYTICS.md

## Delivery & Workflow
- Content: Create in Strapi → publish → webhook triggers Vercel rebuild → CDN invalidate
- Versioning: conventional commits; PR review optional
- Testing: accessibility checks; performance spot checks

## Risks & Mitigations
- CMS cold starts on free tiers → choose appropriate Render plan
- Build latency on large content sets → consider incremental builds later
- Content cadence → maintain simple editorial calendar

## Open Items
- Final domain + DNS on Vercel
- Certificates page assets (to be provided later)
- Logo/brand tokens to be finalized in UX docs 