/**
 * Mock API Responses for Development
 * 
 * This file provides realistic mock API responses that simulate
 * Strapi API responses for all content types during frontend development.
 * These responses match the exact structure expected by the API client
 * and content models.
 */

import { mockSiteData } from '../data/mockData.js';

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Simulate API delay for realistic development experience
 * @param {number} min - Minimum delay in ms
 * @param {number} max - Maximum delay in ms
 * @returns {Promise<void>}
 */
function simulateApiDelay(min = 100, max = 500) {
  const delay = Math.random() * (max - min) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
}

/**
 * Create a standard API response wrapper
 * @param {any} data - Response data
 * @param {Object} meta - Metadata (pagination, etc.)
 * @returns {Object} Standardized API response
 */
function createApiResponse(data, meta = {}) {
  return {
    data,
    meta: {
      pagination: meta.pagination || null,
      ...meta
    }
  };
}

/**
 * Create pagination metadata
 * @param {number} page - Current page
 * @param {number} pageSize - Items per page
 * @param {number} total - Total items
 * @returns {Object} Pagination metadata
 */
function createPaginationMeta(page = 1, pageSize = 25, total = 0) {
  const pageCount = Math.ceil(total / pageSize);
  return {
    page,
    pageSize,
    pageCount,
    total
  };
}

// =============================================================================
// MOCK DATA GENERATION
// =============================================================================

/**
 * Generate mock pages data
 */
function generateMockPages() {
  const pages = [
    {
      id: 1,
      title: "Home",
      slug: "home",
      hero: {
        title: "E-Sunrise Australia",
        subtitle: "Quality Products, Trusted Service",
        image: "/src/assets/brand__logo--icon.png",
        ctaText: "Learn More",
        ctaLink: "/about"
      },
      blocks: [
        {
          type: "content",
          content: "Welcome to E-Sunrise Australia, your trusted partner for quality products and exceptional service."
        },
        {
          type: "features",
          features: [
            { title: "Global Sourcing", text: "We source products from trusted suppliers worldwide", icon: "🌍" },
            { title: "Quality Assurance", text: "Rigorous quality control processes ensure excellence", icon: "✅" },
            { title: "Reliable Delivery", text: "Timely delivery to meet your business needs", icon: "🚚" }
          ]
        }
      ],
      seo: {
        title: "E-Sunrise Australia - Quality Products, Trusted Service",
        description: "Leading supplier of quality products in Australia. Trusted service, reliable delivery, and exceptional customer support.",
        keywords: ["supplier", "australia", "quality", "products", "service"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 2,
      title: "About Us",
      slug: "about",
      hero: {
        title: "About E-Sunrise Australia",
        subtitle: "Our Story and Mission",
        image: "/src/assets/brand__logo--icon.png",
        ctaText: "Contact Us",
        ctaLink: "/contact"
      },
      blocks: [
        {
          type: "content",
          content: "E-Sunrise Australia has been serving the Australian market with quality products and exceptional service since our establishment."
        },
        {
          type: "content",
          content: "Our mission is to provide reliable, high-quality products while maintaining the highest standards of customer service and business integrity."
        }
      ],
      seo: {
        title: "About E-Sunrise Australia - Our Story and Mission",
        description: "Learn about E-Sunrise Australia's journey, mission, and commitment to quality products and exceptional service in Australia.",
        keywords: ["about", "company", "mission", "australia", "quality"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 3,
      title: "Contact",
      slug: "contact",
      hero: {
        title: "Contact Us",
        subtitle: "Get in Touch",
        image: "/src/assets/brand__logo--icon.png"
      },
      blocks: [
        {
          type: "contact",
          email: "hello@dflm.com.au",
          phone: "+61 03 1234 5678",
          address: {
            line1: "123 Business Street",
            city: "Melbourne",
            region: "Victoria",
            country: "Australia",
            postcode: "3000"
          }
        }
      ],
      seo: {
        title: "Contact E-Sunrise Australia - Get in Touch",
        description: "Contact E-Sunrise Australia for quality products and exceptional service. Reach out via phone, email, or visit our office.",
        keywords: ["contact", "phone", "email", "address", "australia"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    }
  ];

  return pages;
}

/**
 * Generate mock services data
 */
function generateMockServices() {
  const services = [
    {
      id: 1,
      title: "Import & Distribution",
      slug: "import-distribution",
      summary: "Comprehensive import and distribution services for quality products",
      details: "Our import and distribution service provides end-to-end solutions for businesses looking to source quality products from global markets. We handle everything from supplier identification to final delivery.",
      features: [
        { title: "Global Sourcing", text: "We source products from trusted suppliers worldwide", icon: "🌍" },
        { title: "Quality Control", text: "Rigorous quality assurance processes", icon: "✅" },
        { title: "Logistics Management", text: "Complete logistics and delivery solutions", icon: "📦" },
        { title: "Custom Clearance", text: "Expert handling of customs and compliance", icon: "📋" }
      ],
      ctaLabel: "Learn More About Import Services",
      seo: {
        title: "Import & Distribution Services - E-Sunrise Australia",
        description: "Professional import and distribution services for quality products. Global sourcing, quality control, and reliable delivery.",
        keywords: ["import", "distribution", "sourcing", "logistics", "australia"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 2,
      title: "OEM Services",
      slug: "oem-services",
      summary: "Original Equipment Manufacturer services for custom product development",
      details: "Our OEM services help businesses develop custom products tailored to their specific requirements. We work closely with manufacturers to ensure quality and compliance.",
      features: [
        { title: "Custom Design", text: "Tailored product design and development", icon: "🎨" },
        { title: "Manufacturing", text: "Professional manufacturing processes", icon: "🏭" },
        { title: "Quality Assurance", text: "Comprehensive quality control", icon: "🔍" },
        { title: "Compliance", text: "Regulatory compliance and certification", icon: "📜" }
      ],
      ctaLabel: "Explore OEM Services",
      seo: {
        title: "OEM Services - Custom Product Development - E-Sunrise Australia",
        description: "Professional OEM services for custom product development. Design, manufacturing, and quality assurance for your specific needs.",
        keywords: ["oem", "custom", "manufacturing", "design", "development"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    }
  ];

  return services;
}

/**
 * Generate mock products data
 */
function generateMockProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Garlic",
      slug: "premium-garlic",
      category: "garlic",
      description: "Premium quality garlic sourced from China. Available in bulk quantities with customizable packaging and full certifications.",
      specs: {
        origin: "China",
        grade: "Premium",
        moq: "1 ton",
        packaging: "Customizable",
        shelfLife: "12 months",
        certifications: ["ISO 22000", "HACCP"]
      },
      certifications: ["ISO 22000", "HACCP", "Organic"],
      images: [
        "/src/assets/brand__logo--icon.png",
        "/src/assets/brand__logo--icon.png"
      ],
      price: "Contact for pricing",
      featured: true,
      badge: "Premium",
      linkText: "View Details",
      linkUrl: "/products/premium-garlic",
      seo: {
        title: "Premium Garlic - High Quality Import - E-Sunrise Australia",
        description: "Premium quality garlic sourced from China. Available in bulk quantities with customizable packaging and full certifications.",
        keywords: ["garlic", "premium", "bulk", "import", "china"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 2,
      name: "Organic Ginger",
      slug: "organic-ginger",
      category: "ginger",
      description: "Organic ginger from Thailand. Premium quality with full organic certification and sustainable farming practices.",
      specs: {
        origin: "Thailand",
        grade: "Organic",
        moq: "500kg",
        packaging: "Standard",
        shelfLife: "18 months",
        certifications: ["Organic", "GAP"]
      },
      certifications: ["Organic", "GAP", "ISO 22000"],
      images: [
        "/src/assets/brand__logo--icon.png"
      ],
      price: "Contact for pricing",
      featured: false,
      badge: "Organic",
      linkText: "View Details",
      linkUrl: "/products/organic-ginger",
      seo: {
        title: "Organic Ginger - Premium Quality - E-Sunrise Australia",
        description: "Organic ginger from Thailand. Premium quality with full organic certification and sustainable farming practices.",
        keywords: ["ginger", "organic", "thailand", "premium", "certified"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    }
  ];

  return products;
}

/**
 * Generate mock industries data
 */
function generateMockIndustries() {
  const industries = [
    {
      id: 1,
      name: "Food & Beverage",
      slug: "food-beverage",
      useCases: [
        { title: "Restaurant Supply", text: "Quality ingredients for restaurants and food service", icon: "🍽️" },
        { title: "Manufacturing", text: "Raw materials for food manufacturing", icon: "🏭" },
        { title: "Retail", text: "Premium products for retail markets", icon: "🛒" }
      ],
      recommendedProducts: ["premium-garlic", "organic-ginger"],
      seo: {
        title: "Food & Beverage Industry Solutions - E-Sunrise Australia",
        description: "Quality products and solutions for the food and beverage industry. Reliable supply chain and premium ingredients.",
        keywords: ["food", "beverage", "industry", "supply", "ingredients"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 2,
      name: "Healthcare",
      slug: "healthcare",
      useCases: [
        { title: "Pharmaceutical", text: "Raw materials for pharmaceutical production", icon: "💊" },
        { title: "Supplements", text: "Natural ingredients for health supplements", icon: "💪" },
        { title: "Wellness", text: "Wellness and natural health products", icon: "🌿" }
      ],
      recommendedProducts: ["organic-ginger"],
      seo: {
        title: "Healthcare Industry Solutions - E-Sunrise Australia",
        description: "Quality ingredients and solutions for the healthcare industry. Pharmaceutical-grade materials and natural health products.",
        keywords: ["healthcare", "pharmaceutical", "supplements", "wellness", "natural"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    }
  ];

  return industries;
}

/**
 * Generate mock certifications data
 */
function generateMockCertifications() {
  const certifications = [
    {
      id: 1,
      name: "ISO 22000 Food Safety Management",
      type: "Food Safety",
      description: "International standard for food safety management systems",
      certificateFile: "/certificates/iso-22000.pdf",
      validFrom: "2023-01-01T00:00:00.000Z",
      validTo: "2026-01-01T00:00:00.000Z",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 2,
      name: "HACCP Certification",
      type: "Food Safety",
      description: "Hazard Analysis and Critical Control Points certification",
      certificateFile: "/certificates/haccp.pdf",
      validFrom: "2023-06-01T00:00:00.000Z",
      validTo: "2025-06-01T00:00:00.000Z",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    }
  ];

  return certifications;
}

/**
 * Generate mock partners data
 */
function generateMockPartners() {
  const partners = [
    {
      id: 1,
      name: "Global Foods Inc",
      logo: "/src/assets/brand__logo--icon.png",
      type: "Supplier",
      quote: "E-Sunrise Australia has been a reliable partner for over 5 years, consistently delivering quality products and exceptional service.",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 2,
      name: "Quality Assurance Labs",
      logo: "/src/assets/brand__logo--icon.png",
      type: "Certification",
      quote: "Working with E-Sunrise Australia ensures the highest standards of quality and compliance in all products.",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    }
  ];

  return partners;
}

/**
 * Generate mock blog posts data
 */
function generateMockPosts() {
  const posts = [
    {
      id: 1,
      title: "The Future of Food Import in Australia",
      slug: "future-food-import-australia",
      author: "E-Sunrise Team",
      category: { id: 1, name: "Industry Insights", slug: "industry-insights" },
      tags: [
        { id: 1, name: "Import", slug: "import" },
        { id: 2, name: "Food Industry", slug: "food-industry" }
      ],
      cover: "/src/assets/brand__logo--icon.png",
      excerpt: "Exploring the trends and challenges in food import for the Australian market.",
      body: "The Australian food import market is evolving rapidly with changing consumer preferences and regulatory requirements...",
      publishedAt: "2024-01-15T10:00:00.000Z",
      seo: {
        title: "The Future of Food Import in Australia - E-Sunrise Australia",
        description: "Explore the trends and challenges in food import for the Australian market. Industry insights and future predictions.",
        keywords: ["food import", "australia", "trends", "industry", "future"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 2,
      title: "Quality Assurance in Global Sourcing",
      slug: "quality-assurance-global-sourcing",
      author: "E-Sunrise Team",
      category: { id: 2, name: "Quality", slug: "quality" },
      tags: [
        { id: 3, name: "Quality", slug: "quality" },
        { id: 4, name: "Sourcing", slug: "sourcing" }
      ],
      cover: "/src/assets/brand__logo--icon.png",
      excerpt: "How we maintain quality standards across our global supply chain.",
      body: "Quality assurance is the cornerstone of our global sourcing strategy...",
      publishedAt: "2024-01-10T10:00:00.000Z",
      seo: {
        title: "Quality Assurance in Global Sourcing - E-Sunrise Australia",
        description: "Learn how we maintain quality standards across our global supply chain. Best practices and quality control processes.",
        keywords: ["quality assurance", "global sourcing", "supply chain", "standards"],
        ogImage: "/src/assets/brand__logo--icon.png"
      },
      createdAt: "2024-01-10T10:00:00.000Z",
      updatedAt: "2024-01-10T10:00:00.000Z"
    }
  ];

  return posts;
}

/**
 * Generate mock categories data
 */
function generateMockCategories() {
  const categories = [
    {
      id: 1,
      name: "Industry Insights",
      slug: "industry-insights",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 2,
      name: "Quality",
      slug: "quality",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 3,
      name: "Company News",
      slug: "company-news",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    }
  ];

  return categories;
}

/**
 * Generate mock tags data
 */
function generateMockTags() {
  const tags = [
    {
      id: 1,
      name: "Import",
      slug: "import",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 2,
      name: "Food Industry",
      slug: "food-industry",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 3,
      name: "Quality",
      slug: "quality",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    },
    {
      id: 4,
      name: "Sourcing",
      slug: "sourcing",
      createdAt: "2024-01-15T10:00:00.000Z",
      updatedAt: "2024-01-15T10:00:00.000Z"
    }
  ];

  return tags;
}

// =============================================================================
// MOCK API RESPONSE FUNCTIONS
// =============================================================================

/**
 * Mock API response for site settings
 */
export async function mockGetSiteSettings() {
  await simulateApiDelay();
  
  const siteSettings = {
    siteName: "E-Sunrise Australia",
    logo: "/src/assets/brand__logo--icon.png",
    address: {
      line1: "123 Business Street",
      city: "Melbourne",
      region: "Victoria",
      country: "Australia",
      postcode: "3000"
    },
    email: "hello@dflm.com.au",
    phone: "+61 03 1234 5678",
    socials: [
      { name: "Facebook", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "Instagram", url: "#" }
    ],
    defaultSeo: {
      title: "E-Sunrise Australia - Quality Products, Trusted Service",
      description: "Leading supplier of quality products in Australia",
      keywords: ["supplier", "australia", "quality", "products"],
      ogImage: "/src/assets/brand__logo--icon.png"
    },
    schemaOrg: {
      name: "E-Sunrise Australia",
      type: "Organization",
      url: "https://dflm.com.au",
      logo: "/src/assets/brand__logo--icon.png"
    }
  };

  return createApiResponse(siteSettings);
}

/**
 * Mock API response for pages
 */
export async function mockGetPages(params = {}) {
  await simulateApiDelay();
  
  const pages = generateMockPages();
  const { page = 1, pageSize = 25 } = params;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedPages = pages.slice(start, end);
  
  return createApiResponse(paginatedPages, {
    pagination: createPaginationMeta(page, pageSize, pages.length)
  });
}

/**
 * Mock API response for single page by slug
 */
export async function mockGetPageBySlug(slug) {
  await simulateApiDelay();
  
  const pages = generateMockPages();
  const page = pages.find(p => p.slug === slug);
  
  if (!page) {
    throw new Error('Page not found');
  }
  
  return createApiResponse(page);
}

/**
 * Mock API response for single page by ID
 */
export async function mockGetPageById(id) {
  await simulateApiDelay();
  
  const pages = generateMockPages();
  const page = pages.find(p => p.id === parseInt(id));
  
  if (!page) {
    throw new Error('Page not found');
  }
  
  return createApiResponse(page);
}

/**
 * Mock API response for services
 */
export async function mockGetServices(params = {}) {
  await simulateApiDelay();
  
  const services = generateMockServices();
  const { page = 1, pageSize = 25 } = params;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedServices = services.slice(start, end);
  
  return createApiResponse(paginatedServices, {
    pagination: createPaginationMeta(page, pageSize, services.length)
  });
}

/**
 * Mock API response for single service by slug
 */
export async function mockGetServiceBySlug(slug) {
  await simulateApiDelay();
  
  const services = generateMockServices();
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    throw new Error('Service not found');
  }
  
  return createApiResponse(service);
}

/**
 * Mock API response for single service by ID
 */
export async function mockGetServiceById(id) {
  await simulateApiDelay();
  
  const services = generateMockServices();
  const service = services.find(s => s.id === parseInt(id));
  
  if (!service) {
    throw new Error('Service not found');
  }
  
  return createApiResponse(service);
}

/**
 * Mock API response for products
 */
export async function mockGetProducts(params = {}) {
  await simulateApiDelay();
  
  const products = generateMockProducts();
  const { page = 1, pageSize = 25, category } = params;
  
  let filteredProducts = products;
  if (category) {
    filteredProducts = products.filter(p => p.category === category);
  }
  
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedProducts = filteredProducts.slice(start, end);
  
  return createApiResponse(paginatedProducts, {
    pagination: createPaginationMeta(page, pageSize, filteredProducts.length)
  });
}

/**
 * Mock API response for single product by slug
 */
export async function mockGetProductBySlug(slug) {
  await simulateApiDelay();
  
  const products = generateMockProducts();
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  return createApiResponse(product);
}

/**
 * Mock API response for single product by ID
 */
export async function mockGetProductById(id) {
  await simulateApiDelay();
  
  const products = generateMockProducts();
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  return createApiResponse(product);
}

/**
 * Mock API response for industries
 */
export async function mockGetIndustries(params = {}) {
  await simulateApiDelay();
  
  const industries = generateMockIndustries();
  const { page = 1, pageSize = 25 } = params;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedIndustries = industries.slice(start, end);
  
  return createApiResponse(paginatedIndustries, {
    pagination: createPaginationMeta(page, pageSize, industries.length)
  });
}

/**
 * Mock API response for single industry by slug
 */
export async function mockGetIndustryBySlug(slug) {
  await simulateApiDelay();
  
  const industries = generateMockIndustries();
  const industry = industries.find(i => i.slug === slug);
  
  if (!industry) {
    throw new Error('Industry not found');
  }
  
  return createApiResponse(industry);
}

/**
 * Mock API response for single industry by ID
 */
export async function mockGetIndustryById(id) {
  await simulateApiDelay();
  
  const industries = generateMockIndustries();
  const industry = industries.find(i => i.id === parseInt(id));
  
  if (!industry) {
    throw new Error('Industry not found');
  }
  
  return createApiResponse(industry);
}

/**
 * Mock API response for certifications
 */
export async function mockGetCertifications(params = {}) {
  await simulateApiDelay();
  
  const certifications = generateMockCertifications();
  const { page = 1, pageSize = 25 } = params;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedCertifications = certifications.slice(start, end);
  
  return createApiResponse(paginatedCertifications, {
    pagination: createPaginationMeta(page, pageSize, certifications.length)
  });
}

/**
 * Mock API response for single certification by ID
 */
export async function mockGetCertificationById(id) {
  await simulateApiDelay();
  
  const certifications = generateMockCertifications();
  const certification = certifications.find(c => c.id === parseInt(id));
  
  if (!certification) {
    throw new Error('Certification not found');
  }
  
  return createApiResponse(certification);
}

/**
 * Mock API response for partners
 */
export async function mockGetPartners(params = {}) {
  await simulateApiDelay();
  
  const partners = generateMockPartners();
  const { page = 1, pageSize = 25 } = params;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedPartners = partners.slice(start, end);
  
  return createApiResponse(paginatedPartners, {
    pagination: createPaginationMeta(page, pageSize, partners.length)
  });
}

/**
 * Mock API response for single partner by ID
 */
export async function mockGetPartnerById(id) {
  await simulateApiDelay();
  
  const partners = generateMockPartners();
  const partner = partners.find(p => p.id === parseInt(id));
  
  if (!partner) {
    throw new Error('Partner not found');
  }
  
  return createApiResponse(partner);
}

/**
 * Mock API response for blog posts
 */
export async function mockGetPosts(params = {}) {
  await simulateApiDelay();
  
  const posts = generateMockPosts();
  const { page = 1, pageSize = 25, category, tag } = params;
  
  let filteredPosts = posts;
  if (category) {
    filteredPosts = posts.filter(p => p.category?.slug === category);
  }
  if (tag) {
    filteredPosts = posts.filter(p => p.tags?.some(t => t.slug === tag));
  }
  
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedPosts = filteredPosts.slice(start, end);
  
  return createApiResponse(paginatedPosts, {
    pagination: createPaginationMeta(page, pageSize, filteredPosts.length)
  });
}

/**
 * Mock API response for single post by slug
 */
export async function mockGetPostBySlug(slug) {
  await simulateApiDelay();
  
  const posts = generateMockPosts();
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    throw new Error('Post not found');
  }
  
  return createApiResponse(post);
}

/**
 * Mock API response for single post by ID
 */
export async function mockGetPostById(id) {
  await simulateApiDelay();
  
  const posts = generateMockPosts();
  const post = posts.find(p => p.id === parseInt(id));
  
  if (!post) {
    throw new Error('Post not found');
  }
  
  return createApiResponse(post);
}

/**
 * Mock API response for categories
 */
export async function mockGetCategories(params = {}) {
  await simulateApiDelay();
  
  const categories = generateMockCategories();
  const { page = 1, pageSize = 25 } = params;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedCategories = categories.slice(start, end);
  
  return createApiResponse(paginatedCategories, {
    pagination: createPaginationMeta(page, pageSize, categories.length)
  });
}

/**
 * Mock API response for single category by slug
 */
export async function mockGetCategoryBySlug(slug) {
  await simulateApiDelay();
  
  const categories = generateMockCategories();
  const category = categories.find(c => c.slug === slug);
  
  if (!category) {
    throw new Error('Category not found');
  }
  
  return createApiResponse(category);
}

/**
 * Mock API response for single category by ID
 */
export async function mockGetCategoryById(id) {
  await simulateApiDelay();
  
  const categories = generateMockCategories();
  const category = categories.find(c => c.id === parseInt(id));
  
  if (!category) {
    throw new Error('Category not found');
  }
  
  return createApiResponse(category);
}

/**
 * Mock API response for tags
 */
export async function mockGetTags(params = {}) {
  await simulateApiDelay();
  
  const tags = generateMockTags();
  const { page = 1, pageSize = 25 } = params;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedTags = tags.slice(start, end);
  
  return createApiResponse(paginatedTags, {
    pagination: createPaginationMeta(page, pageSize, tags.length)
  });
}

/**
 * Mock API response for single tag by slug
 */
export async function mockGetTagBySlug(slug) {
  await simulateApiDelay();
  
  const tags = generateMockTags();
  const tag = tags.find(t => t.slug === slug);
  
  if (!tag) {
    throw new Error('Tag not found');
  }
  
  return createApiResponse(tag);
}

/**
 * Mock API response for single tag by ID
 */
export async function mockGetTagById(id) {
  await simulateApiDelay();
  
  const tags = generateMockTags();
  const tag = tags.find(t => t.id === parseInt(id));
  
  if (!tag) {
    throw new Error('Tag not found');
  }
  
  return createApiResponse(tag);
}

// =============================================================================
// ERROR SIMULATION
// =============================================================================

/**
 * Simulate network error
 */
export async function simulateNetworkError() {
  await simulateApiDelay(500, 1000);
  throw new Error('Network error - please check your connection');
}

/**
 * Simulate server error
 */
export async function simulateServerError() {
  await simulateApiDelay(1000, 2000);
  throw new Error('Server error - please try again later');
}

/**
 * Simulate not found error
 */
export async function simulateNotFoundError() {
  await simulateApiDelay(200, 500);
  throw new Error('Resource not found');
}

// =============================================================================
// EXPORT ALL MOCK FUNCTIONS
// =============================================================================

export const mockApiResponses = {
  // Site Settings
  getSiteSettings: mockGetSiteSettings,
  
  // Pages
  getPages: mockGetPages,
  getPageBySlug: mockGetPageBySlug,
  getPageById: mockGetPageById,
  
  // Services
  getServices: mockGetServices,
  getServiceBySlug: mockGetServiceBySlug,
  getServiceById: mockGetServiceById,
  
  // Products
  getProducts: mockGetProducts,
  getProductBySlug: mockGetProductBySlug,
  getProductById: mockGetProductById,
  
  // Industries
  getIndustries: mockGetIndustries,
  getIndustryBySlug: mockGetIndustryBySlug,
  getIndustryById: mockGetIndustryById,
  
  // Certifications
  getCertifications: mockGetCertifications,
  getCertificationById: mockGetCertificationById,
  
  // Partners
  getPartners: mockGetPartners,
  getPartnerById: mockGetPartnerById,
  
  // Blog Posts
  getPosts: mockGetPosts,
  getPostBySlug: mockGetPostBySlug,
  getPostById: mockGetPostById,
  
  // Categories
  getCategories: mockGetCategories,
  getCategoryBySlug: mockGetCategoryBySlug,
  getCategoryById: mockGetCategoryById,
  
  // Tags
  getTags: mockGetTags,
  getTagBySlug: mockGetTagBySlug,
  getTagById: mockGetTagById,
  
  // Error simulation
  simulateNetworkError,
  simulateServerError,
  simulateNotFoundError
}; 