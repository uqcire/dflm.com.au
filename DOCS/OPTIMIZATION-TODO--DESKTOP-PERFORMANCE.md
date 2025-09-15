# DESKTOP PERFORMANCE OPTIMIZATION TODO LIST

Context: Reduce desktop PageSpeed Insights (PSI) network payload and improve LCP, TBT. Do not commit automatically; changes will be reviewed and committed manually.

## 1) Expand responsive images coverage
- Map additional large images to responsive sources (AVIF/WebP: 600/900/1200 or 768/1200/1600 for wide banners)
- Add explicit width/height on img to reduce CLS
- Acceptance:
  - All above-the-fold and large grid images use `<picture>` + `srcset` + `sizes`
  - No layout shifts from image loading

## 2) Static asset caching headers (Vercel)
- Add long‑term caching for hashed assets: `Cache-Control: public, max-age=31536000, immutable`
- Confirm Brotli is served (default on Vercel)
- Acceptance:
  - Response headers for hashed JS/CSS/images include the above cache policy

## 3) Fonts and critical CSS
- Keep `font-display: swap`
- Extract minimal critical CSS for navbar + hero (desktop) and load rest asynchronously
- Acceptance:
  - First render styles present without FOIT/flash of unstyled hero/nav

## 4) Further JS trimming
- Audit Element Plus usage; replace heavy widgets with lightweight equivalents where possible
- Keep `defineAsyncComponent` for non-critical sections
- Acceptance:
  - PSI “Reduce unused JavaScript” warning reduced or resolved

## 5) FullWidth hero background responsive sources
- When `fullWidth && backgroundImage`, mirror the hero `<picture>` approach with AVIF/WebP + `sizes`
- Only this LCP image keeps `fetchpriority="high"`; all others use `low`
- Acceptance:
  - LCP computed from hero image with minimized load delay

## 6) Image quality tuning
- Adjust encoding quality if acceptable visually: AVIF 42–46, WebP 58–60
- Constrain max widths where not required (e.g., avoid >1600px if layout never needs it)
- Acceptance:
  - Visual QA passed; payload reduced vs. current baselines

## 7) Build + verify
- Run production build; open `dist/stats.html` to compare bundle composition
- Re-run PSI (desktop) and record:
  - Total transfer size
  - LCP breakdown (TTFB/Load Delay/Load Time/Render Delay)
  - TBT
- Acceptance:
  - Network payload significantly reduced; LCP/TBT improved compared to current report

---

Notes:
- Keep only one `fetchpriority="high"` for the LCP image per page.
- Maintain lazy loading + low priority for non-critical images.
- Prefer `<picture>` with AVIF first, WebP fallback, and a reasonable JPEG/PNG fallback only when needed.

