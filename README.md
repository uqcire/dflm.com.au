# E‑Sunrise Australia — Corporate Website

## Overview
Corporate website for E‑Sunrise Australia, built with Vue 3, Vite, Tailwind CSS v4, Element Plus, and BEM conventions. Focus: fast, secure, accessible, maintainable delivery for marketing and corporate communications.

Status: In progress (actively building PRD and UI/UX specs)

## Tech Stack
- Vue 3.5 + Vite 7
- Tailwind CSS v4 (via @tailwindcss/vite)
- Element Plus (auto-imported via resolvers)
- Pinia 3, Vue Router 4
- Axios for HTTP
- ESLint (Stylistic), unified error handling

## Getting Started
- Requirements: Node 18+ (LTS), pnpm
- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`
- Preview: `pnpm preview`

If pnpm has local config issues, you can temporarily run `npx vite` for development.

## Project Structure (key parts)
- `APP__ROOT--MAIN.vue`: root wrapper with error boundary and notifications
- `src/components/`: UI components (BEM-style names)
- `src/views/`: pages (BEM-style names)
- `src/router/`: routes and document title handling
- `src/store/`: Pinia
- `src/styles/global.css`: CSS reset + Tailwind v4
- `src/utils/`:
  - `ERROR-HANDLER__GLOBAL--SYSTEM.js`: global error pipeline
  - `HTTP-CLIENT__API--UNIFIED.js`: axios instance + helpers
  - `ENV-PROCESSOR__VITE--WRAPPER.js`: env parsing
  - `PLUGINS__VITE--UNIFIED.js`: build plugins (prod/dev)

Naming: file names are uppercase; classes follow BEM (`block__element--modifier`).

## Environment
- `VITE_API_BASE_URL` (optional) — backend API base
- Used in `HTTP-CLIENT__API--UNIFIED.js` and `vite.config.js`

## Branding
Use “E‑Sunrise Australia” across titles/metadata. The router already sets the document title to “E‑Sunrise Australia”.

## Tailwind v4 Notes
- Import only: `@import "tailwindcss";` in `src/styles/global.css`
- Avoid legacy `@layer`, `@theme`, `@custom-variant`
- Use CSS variables in `:root` and `.dark` when needed

## Element Plus Usage
- Components and APIs are auto-imported via resolvers (no manual imports).
- Styles are on-demand via resolver (CSS). Optional theming can be added via CSS variables.

### Element Plus configuration (already wired)
```js
// src/utils/PLUGINS__VITE--UNIFIED.js
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

AutoImport({
  // ... existing code ...
  resolvers: [
    ElementPlusResolver({ importStyle: 'css' })
  ]
})

Components({
  // ... existing code ...
  resolvers: [
    ElementPlusResolver({ importStyle: 'css' })
  ]
})
```

## Error Handling & Notifications
- Global error boundary around the app
- Centralized error handling (`globalErrorHandler`)
- Notification container with success/error/warning/info

## Optimization Options
- Vite dependency pre-bundling (faster dev cold start):
```js
// vite.config.js
optimizeDeps: {
  include: ['vue', 'vue-router', 'pinia', 'axios', 'element-plus']
}
```
- Separate vendor chunks (smaller app chunk, better caching):
```js
// vite.config.js
rollupOptions: {
  output: {
    manualChunks: {
      'vue-vendor': ['vue', 'vue-router', 'pinia'],
      'utils-vendor': ['axios'],
      'element-plus-vendor': ['element-plus']
    }
  }
}
```
- Production compression and bundle analysis are already enabled via `vite-plugin-compression` and `rollup-plugin-visualizer` in `createProdPlugins()`.

## Improvement Roadmap (track as issues)
- Performance
  - Image optimization (AVIF/WebP, responsive `srcset`)
  - Font strategy (subsets, `display=swap`, preloads)
  - Code-splitting & route-level prefetch; audit dynamic imports
  - HTTP caching headers; gzip/brotli (already enabled in prod)
  - Remove dev logs in prod; bundle visualizer for audits
- Security
  - CSP, Referrer-Policy, X-Content-Type-Options; COOP/COEP if needed
  - Sanitize/validate inputs; strict axios timeouts
  - Dependency audits in CI; pin critical deps
  - Keep secrets out of repo; use env/deployment secrets
- Accessibility (WCAG 2.1 AA)
  - Keyboard navigation, focus states, skip links
  - Semantic HTML + ARIA
  - Color contrast and reduced-motion support
- SEO
  - Consistent titles/descriptions; Open Graph/Twitter tags
  - Sitemap.xml, robots.txt, canonical URLs
  - Structured data for org/website
- Analytics & Monitoring
  - Analytics (GA4 or privacy-friendly)
  - Error tracking (e.g., Sentry) integrated with handler
- Internationalization (optional)
  - Plan for i18n routing/content
- DevOps
  - CI: lint/build/test on PRs
  - Preview deploys per branch; prod deploy with caching & SSL
  - Automated dependency checks (weekly)

## Troubleshooting (Windows / pnpm)
- If `pnpm dev` fails with null-byte config errors and `npx vite` works:
  - Clear pnpm vars: `pnpm store prune`
  - Remove bad config: `pnpm config delete node-linker`
  - Reset env in PowerShell: `$env:npm_config___n_o_d_e___l_i_n_k_e_r_ = $null`
  - Or temporarily use `npx vite` while you fix pnpm config

## PRD & UI/UX (to be produced together)
We will collaborate to create:
- PRD: goals, personas, IA, content map, KPIs
- UI/UX specs: tokens, components inventory, states, responsive rules, grid, a11y guidelines, assets, interaction patterns, content templates
- Deliverables: annotated wireframes, hi‑fi mockups, component specs, copy guidelines

Folder proposal:
- `DOCS/PRD/` — PRD, IA, content schemas
- `DOCS/UX/` — wireframes, specs, tokens, component docs
- `DOCS/OPS/` — deployment, CI/CD, monitoring

## Conventions
- BEM class naming
- File names uppercase (project rule)
- Conventional commits (see `.cursor/rules`)
- Functional programming preference; explicit error handling

## License
MIT

