/**
 * SEO Manager - Dynamic Meta Tags and Structured Data
 * 
 * This utility handles dynamic SEO meta tags, Open Graph data, Twitter Cards,
 * JSON-LD structured data, and other SEO-related functionality.
 */

const SITE_NAME = 'E-Sunrise Australia'
const DEFAULT_DESCRIPTION = 'E‑Sunrise Australia — B2B Agricultural Import & Distribution in Melbourne.'
const DEFAULT_OG_IMAGE = '/src/assets/brand__logo--icon.png'
const SITE_URL = import.meta.env.VITE_APP_URL || ''

/**
 * Set or create a meta tag
 * @param {string} attr - The attribute name (e.g., 'name', 'property')
 * @param {string} key - The attribute value (e.g., 'description', 'og:title')
 * @param {string} value - The content value
 */
export function setMetaTag(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

/**
 * Set or create a link tag
 * @param {string} rel - The rel attribute value
 * @param {string} href - The href value
 */
export function setLinkTag(rel, href) {
  let link = document.head.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

/**
 * Set or create JSON-LD structured data
 * @param {Object} data - The JSON-LD data object
 */
export function setJsonLd(data) {
  let script = document.head.querySelector('script[type="application/ld+json"]')
  if (!script) {
    script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(data, null, 2)
}

/**
 * Set page title
 * @param {string} title - The page title
 */
export function setTitle(title) {
  document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME
}

/**
 * Set canonical URL
 * @param {string} path - The current path
 */
export function setCanonical(path) {
  const url = SITE_URL + path
  setLinkTag('canonical', url)
}

/**
 * Generate basic JSON-LD structured data for the website
 * @param {string} url - The current URL
 * @returns {Object} - The JSON-LD data object
 */
export function generateBaseJsonLd(url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: DEFAULT_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}

/**
 * Generate JSON-LD for blog posts
 * @param {Object} post - The post data
 * @param {string} url - The post URL
 * @returns {Object} - The JSON-LD data object
 */
export function generateBlogPostingJsonLd(post, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    mainEntityOfPage: url,
    datePublished: post.publishedAt || new Date().toISOString(),
    dateModified: post.updatedAt || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: post.author || 'E-Sunrise Australia'
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: SITE_URL + DEFAULT_OG_IMAGE
      }
    },
    description: post.excerpt || post.description || DEFAULT_DESCRIPTION,
    image: post.cover ? SITE_URL + post.cover : SITE_URL + DEFAULT_OG_IMAGE
  }
}

/**
 * Generate JSON-LD for breadcrumb navigation
 * @param {Array} breadcrumbs - The breadcrumb items
 * @returns {Object} - The JSON-LD data object
 */
export function generateBreadcrumbJsonLd(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}

/**
 * Generate JSON-LD for organization
 * @param {Object} orgData - The organization data
 * @returns {Object} - The JSON-LD data object
 */
export function generateOrganizationJsonLd(orgData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: orgData.name || SITE_NAME,
    legalName: orgData.legalName || SITE_NAME,
    url: SITE_URL,
    logo: SITE_URL + DEFAULT_OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    address: orgData.address ? {
      '@type': 'PostalAddress',
      streetAddress: orgData.address.line1,
      addressLocality: orgData.address.city,
      addressRegion: orgData.address.region,
      postalCode: orgData.address.postcode,
      addressCountry: orgData.address.country
    } : undefined,
    contactPoint: orgData.email ? {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: orgData.email,
      telephone: orgData.phone
    } : undefined,
    sameAs: orgData.socials ? orgData.socials.map(social => social.url) : undefined
  }
}

/**
 * Set all basic meta tags for a page
 * @param {Object} options - The meta tag options
 */
export function setBasicMetaTags(options = {}) {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    image = DEFAULT_OG_IMAGE,
    url,
    type = 'website',
    noIndex = false
  } = options

  // Set title
  setTitle(title)

  // Set basic meta tags
  setMetaTag('name', 'description', description)
  setMetaTag('property', 'og:title', title ? `${title} | ${SITE_NAME}` : SITE_NAME)
  setMetaTag('property', 'og:description', description)
  setMetaTag('property', 'og:image', SITE_URL + image)
  setMetaTag('property', 'og:type', type)
  if (url) {
    setMetaTag('property', 'og:url', SITE_URL + url)
  }

  // Twitter Card meta tags
  setMetaTag('name', 'twitter:card', 'summary_large_image')
  setMetaTag('name', 'twitter:title', title ? `${title} | ${SITE_NAME}` : SITE_NAME)
  setMetaTag('name', 'twitter:description', description)
  setMetaTag('name', 'twitter:image', SITE_URL + image)

  // SEO meta tags
  setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
  setMetaTag('name', 'googlebot', noIndex ? 'noindex, nofollow' : 'index, follow')
  setMetaTag('name', 'author', SITE_NAME)

  // Set canonical URL
  if (url) {
    setCanonical(url)
  }

  // Set viewport
  setMetaTag('name', 'viewport', 'width=device-width, initial-scale=1')

  // Set charset
  let charset = document.head.querySelector('meta[charset]')
  if (!charset) {
    charset = document.createElement('meta')
    charset.setAttribute('charset', 'utf-8')
    document.head.insertBefore(charset, document.head.firstChild)
  }
}

/**
 * Update SEO for a specific route
 * @param {Object} route - The Vue route object
 * @param {Object} data - Additional data for the page
 */
export function updateRouteSEO(route, data = {}) {
  const {
    title = route.meta?.title,
    description = route.meta?.description,
    image = route.meta?.image,
    publishedAt,
    updatedAt,
    author,
    breadcrumbs,
    organization
  } = data

  // Set basic meta tags
  setBasicMetaTags({
    title,
    description,
    image,
    url: route.fullPath,
    type: route.name === 'post-detail' ? 'article' : 'website'
  })

  // Generate and set JSON-LD structured data
  const url = SITE_URL + route.fullPath
  let jsonLdData = generateBaseJsonLd(url)

  // Add specific structured data based on route
  if (route.name === 'post-detail') {
    jsonLdData = generateBlogPostingJsonLd({
      title,
      description,
      publishedAt,
      updatedAt,
      author,
      cover: image
    }, url)
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    jsonLdData = generateBreadcrumbJsonLd(breadcrumbs)
  }

  if (organization) {
    jsonLdData = generateOrganizationJsonLd(organization)
  }

  setJsonLd(jsonLdData)
}

/**
 * Initialize default SEO meta tags
 */
export function initDefaultSEO() {
  setBasicMetaTags({
    title: '',
    description: DEFAULT_DESCRIPTION,
    image: DEFAULT_OG_IMAGE,
    url: '/'
  })

  // Set favicon
  setLinkTag('icon', '/favicon.png')
  setLinkTag('apple-touch-icon', '/favicon.png')

  // Set default JSON-LD
  const jsonLdData = generateBaseJsonLd(SITE_URL)
  setJsonLd(jsonLdData)
} 