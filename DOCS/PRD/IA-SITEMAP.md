# IA / SITEMAP

## Locale
- Language: English (en‑AU)

## Top Navigation
- Home (`/`)
- About (`/about`)
- Services (menu)
  - Import & Distribution (`/services/import-distribution`)
  - OEM / Private Label (`/services/oem`)
- Products (`/products`)
- Industries (`/industries`)
- Certifications & Quality (`/certifications`)
- Blog (`/blog`)
- Contact (`/contact`)

## Pages
- Home: hero, value props (vertical integration, capacity, certifications, AU presence), featured products, partners, latest posts
- About: parent background, AU subsidiary, milestones, global reach
- Services: overview + detail pages (Import/Distribution, OEM)
- Products: category overview + product detail (optional later)
  - Categories: garlic, dehydrated vegetables, pulses, sauce, fresh vegetables
- Industries: list + detail (use cases, recommended products)
- Certifications & Quality: certifications, systems, downloads
- Blog: list (pagination, filters) + post detail
- Contact: company details, mailto link
- 404: helpful links back to key areas

## Routes (examples)
- `/`
- `/about`
- `/services`
- `/services/import-distribution`
- `/services/oem`
- `/products`
- `/products/:slug` (optional detail later)
- `/industries`
- `/industries/:slug`
- `/certifications`
- `/blog`
- `/blog/:slug`
- `/contact`
- `/:pathMatch(.*)*` → 404

## Metadata Defaults
- Title suffix: “E‑Sunrise Australia”
- Open Graph image: site default from SiteSettings

## Future Expansion
- Case Studies: `/case-studies/:slug`
- Sustainability: `/sustainability`
- Multi‑locale/i18n 