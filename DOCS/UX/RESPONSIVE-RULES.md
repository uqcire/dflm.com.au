# RESPONSIVE RULES

## Breakpoints (Tailwind defaults)
- sm: 640px — mobile landscape
- md: 768px — small tablet
- lg: 1024px — tablet/desktop
- xl: 1280px — desktop
- 2xl: 1536px — large desktop

## Layout
- Container: `max-w-screen-xl` with `px-4 sm:px-6 lg:px-8`
- Grids: switch from 1‑col (mobile) → 2‑col (md) → 3/4‑col (lg+)
- Nav: hamburger on mobile, inline on md+

## Images
- Use responsive `srcset` and sizes; lazy‑load below the fold
- Maintain aspect ratios with `object-cover`

## Typography
- 16px base; scale up heading sizes at md+
- Line length target: 60–80 chars

## Touch Targets
- Min 44×44px tappable areas

## Performance
- Defer noncritical scripts; code‑split routes; preload key assets 