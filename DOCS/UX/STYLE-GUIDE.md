# STYLE GUIDE

## Brand
- Name: E‑Sunrise Australia
- Voice: professional, reliable, partnership‑oriented
- Tone: concise, factual, B2B‑friendly

## Typography
- Base: system sans or Inter/Source Sans (to confirm with logo/brand)
- Scale: 16px base; headings follow Tailwind defaults (responsive)
- Weights: 400, 600/700 for emphasis

## Color
- Primary: Monza — default `monza-600` = hsl(358 73% 41%) ≈ #B51C21
  - Scale: `monza-50..950` (see `src/styles/global.css` for HSL ramp)
- Secondary: Tree Poppy — default `tree-poppy-500` = hsl(37 89% 39%) ≈ #BC780B
  - Scale: `tree-poppy-50..950` (see `src/styles/global.css` for HSL ramp)
- Neutrals: use accessible grays; optionally `pickled-bluewood` / `cello` scales
- Tailwind tokens: `bg-monza-600`, `text-monza-600`, `bg-tree-poppy-500`, etc.
- Ensure WCAG contrast ≥ 4.5:1 for body text

## Spacing & Layout
- 8px spacing scale
- Container widths: `max-w-screen-xl` with generous whitespace

## Components (Element Plus + Tailwind)
- Buttons: Element Plus variants; Tailwind for spacing/layout; primary uses Monza, warning/accent uses Tree Poppy
- Inputs: Element Plus forms; clear labels and help text
- Cards/Sections: Tailwind utilities with BEM classes

## Imagery
- Use AVIF/WebP with fallbacks; descriptive alt text
- Product imagery: clean, neutral backgrounds

## Copy Guidelines
- Headline communicates value (vertical integration, capacity, certifications)
- Avoid jargon; use industry terms where necessary

## Accessibility
- One H1 per page; semantic headings
- Keyboard focus outlines visible; skip links

## Notes
- Finalize palette and type after logo handoff

### Logo usage
- Clear space: maintain at least the height of the bird mark around all sides
- Minimum sizes: 24px (favicon), 32/48px (browser icons), 180px (apple‑touch)
- Backgrounds: prefer neutral or `monza-50` backgrounds; avoid busy images; use reversed (white) mark on dark backgrounds
- Don’ts: no stretching, recoloring outside palette, drop shadows, or rotations

### Buttons
- Primary (Monza): default `monza-600`; hover `monza-500`; active `monza-700`; disabled at 40% opacity
- Secondary (Tree Poppy): default `tree-poppy-500`; hover `tree-poppy-400`; active `tree-poppy-600`; disabled at 40% opacity
- Guidance: use Secondary for alternative CTAs, not for warnings/errors

### States & interactions
- Links: underline on hover; focus outline 2px `monza-600` with 2px offset
- Cards: lift with `--shadow-md` on hover; keep accessible focus ring

### Typography lock
- Body: 16px/1.6; headings tighten to 1.2–1.3; letter‑spacing normal; increase sizes at md+
- Suggested families: system‑sans or Inter/Source Sans (confirm in branding)

### Elevation & radius
- Cards/sections: `--radius-md`, `--shadow-md`; small UI: `--radius-sm`, `--shadow-sm`

### Element Plus mapping
- Primary color = Monza (already mapped via `--el-color-primary`)
- Tree Poppy mapped to warning (`--el-color-warning`) for semantic warnings
- For a visual Secondary (non‑warning), apply Tailwind classes using Tree Poppy tokens to Element Plus buttons

### Imagery
- Hero ratio 16:9; cards 3:2; compress to AVIF/WebP with high quality and lazy‑load below fold; always provide descriptive alt

### Icons & favicons
- File: `/public/brand__logo--icon.png` used in `index.html` link tags
- Sizes: 16/32/48px PNG; 180px apple‑touch; mask‑icon color `#B51C21`