# DESIGN TOKENS (STARTER)

## Colors (CSS variables)
:root {
  /* Brand */
  --color-primary:           hsl(var(--monza-600));
  --color-primary-50:        hsl(var(--monza-50));
  --color-primary-100:       hsl(var(--monza-100));
  --color-primary-200:       hsl(var(--monza-200));
  --color-primary-300:       hsl(var(--monza-300));
  --color-primary-400:       hsl(var(--monza-400));
  --color-primary-500:       hsl(var(--monza-500));
  --color-primary-600:       hsl(var(--monza-600));
  --color-primary-700:       hsl(var(--monza-700));
  --color-primary-800:       hsl(var(--monza-800));
  --color-primary-900:       hsl(var(--monza-900));
  --color-primary-950:       hsl(var(--monza-950));

  --color-secondary:         hsl(var(--tree-poppy-500));
  --color-secondary-50:      hsl(var(--tree-poppy-50));
  --color-secondary-100:     hsl(var(--tree-poppy-100));
  --color-secondary-200:     hsl(var(--tree-poppy-200));
  --color-secondary-300:     hsl(var(--tree-poppy-300));
  --color-secondary-400:     hsl(var(--tree-poppy-400));
  --color-secondary-500:     hsl(var(--tree-poppy-500));
  --color-secondary-600:     hsl(var(--tree-poppy-600));
  --color-secondary-700:     hsl(var(--tree-poppy-700));
  --color-secondary-800:     hsl(var(--tree-poppy-800));
  --color-secondary-900:     hsl(var(--tree-poppy-900));
  --color-secondary-950:     hsl(var(--tree-poppy-950));

  /* Neutrals */
  --color-text:     #0f172a;
  --color-muted:    #334155;
  --color-border:   #e2e8f0;
  --color-bg:       #ffffff;
  --color-bg-soft:  #f8fafc;
}

/* Dark mode (optional later) */
/* .dark { */
/*   --color-text: #e2e8f0; */
/*   --color-bg:   #0b1220; */
/* } */

## Typography
:root {
  --font-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
  --font-size-base: 16px;
  --line-height-base: 1.6;
}

## Spacing
:root {
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
}

## Radius & Shadow
:root {
  --radius-sm: 6px;
  --radius-md: 10px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,.06);
  --shadow-md: 0 4px 10px rgba(0,0,0,.08);
}

## Mapping
- Tailwind: `colors.monza.*` and `colors['tree-poppy'].*` already wired in `tailwind.config.js`
- CSS usage: prefer `hsl(var(--monza-600))` and `hsl(var(--tree-poppy-500))` for custom styles
- Element Plus: primary maps to Monza; warning maps to Tree Poppy via CSS vars in `src/styles/global.css` 