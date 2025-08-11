# CONTENT MODEL (STRAPI)

This models B2B corporate content with Products, Services, Industries, Certifications, Partners, and Blog.

## Global
- SiteSettings (Single Type)
  - siteName (string)
  - logo (media)
  - address (component: address)
  - email (string)
  - phone (string)
  - socials (repeatable component: name, url)
  - defaultSeo (component: seo — title, description, image)
  - schemaOrg (component: org — orgName, legalName, parentOrganization)

## Pages
- Page (Collection)
  - title (string)
  - slug (uid)
  - hero (component: hero — title, subtitle, image)
  - blocks (dynamic zone: richText, media, features, faq)
  - seo (component: seo)

## Services
- Service (Collection)
  - title (string)
  - slug (uid)
  - summary (text)
  - details (rich text)
  - features (repeatable component: title, text, icon)
  - ctaLabel (string)
  - seo (component: seo)

## Products
- Product (Collection)
  - name (string)
  - slug (uid)
  - category (enumeration): garlic | dehydrated‑vegetables | pulses | sauce | fresh‑vegetables
  - specs (component: productSpecs — origin, grade, moq, packaging)
  - certifications (relation many‑to‑many → Certification)
  - images (media multiple)
  - seo (component: seo)

## Industries
- Industry (Collection)
  - name (string)
  - slug (uid)
  - useCases (repeatable component: title, description)
  - recommendedProducts (relation many‑to‑many → Product)
  - seo (component: seo)

## Certifications
- Certification (Collection)
  - name (string)
  - type (string)
  - description (text)
  - certificateFile (media)
  - validFrom (date)
  - validTo (date)

## Partners
- Partner (Collection)
  - name (string)
  - logo (media)
  - type (enumeration): retail | distributor | manufacturer
  - quote (text)

## Blog
- Post (Collection)
  - title (string)
  - slug (uid)
  - author (string or relation to Author later)
  - category (relation → Category)
  - tags (many‑to‑many → Tag)
  - cover (media)
  - excerpt (text)
  - body (rich text or MDX via plugin)
  - publishedAt (datetime)
  - seo (component: seo)
- Category (Collection): name (string), slug (uid)
- Tag (Collection): name (string), slug (uid)

## Components
- seo: title (string), description (text), image (media)
- hero: title, subtitle, image
- org: orgName, legalName, parentOrganization
- productSpecs: origin (string), grade (string), moq (string), packaging (string)
- address: line1, line2, city, region, country, postcode
- feature: title, text, icon

## Permissions (Public API)
- Read‑only for Page, Service, Product, Industry, Certification, Partner, Post, Category, Tag (find, findOne)

## Webhooks (Vercel Deploy Hook)
- Trigger on publish/unpublish of: Page, Post, Product, Service, Industry, Certification, Partner

## Notes
- Media stored in Supabase Storage bucket `uploads`
- DB: Supabase Postgres (SSL required) 