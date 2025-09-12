/**
 * Explore Cards Data for E-Sunrise Australia
 * 
 * This file contains structured data for "Explore More" sections across different pages.
 * Each section includes cards that provide navigation to related content areas.
 * 
 * Structure:
 * - Global defaults (title, columns, gap)
 * - Unified card library with 7 standard cards
 * - Page-specific configurations that select which cards to display
 * - Each card has title, description, image, and navigation properties
 */

// Global defaults for all explore sections
const DEFAULT_CONFIG = {
  title: 'Explore more',
  columns: { base: 1, md: 3 },
  gap: 'lg',
  background: 'transparent',
  backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))'
}

// Unified card library - all available explore cards
const CARD_LIBRARY = {
  ourCompany: {
    title: 'Our Company',
    description: 'Learn more about who we are as a company, our mission and values, and how we combine global manufacturing expertise with local operations to deliver certified, reliable food solutions for partners across Australia and international markets.',
    image: '/assets/explore__card--our-company.webp',
    alt: 'Our Company',
    link: '/our-company'
  },

  ourNewsroom: {
    title: 'Our Newsroom',
    description: 'Stay updated with the latest news, company announcements, and industry insights. Explore milestones, product launches, and strategic developments that highlight our continued growth, innovation, and commitment to building stronger food supply chains for the future.',
    image: '/assets/explore__card--newsroom.webp',
    alt: 'Our Newsroom',
    link: '/blog'
  },

  ourBusinesses: {
    title: 'Our Businesses',
    description: 'Discover our core business divisions that power the E-Sunrise Group. From large-scale manufacturing and OEM solutions to import, distribution, and logistics, we deliver integrated services that create value across the entire food supply chain.',
    image: '/assets/explore__card--our-business.webp',
    alt: 'Our Businesses',
    link: '/our-businesses'
  },

  ourIndustries: {
    title: 'Industries We Serve',
    description: 'Explore the industries we serve, including food manufacturers, processors, distributors, retailers, supermarkets, and trade partners. Learn how our scale, reliability, and supply chain expertise help support long-term growth and resilience across the food sector.',
    image: '/assets/explore__card--industries.webp',
    alt: 'Industries We Serve',
    link: '/our-businesses/industries'
  },

  ourProducts: {
    title: 'Our Products',
    description: 'Browse our comprehensive portfolio of food ingredients, from fresh and dehydrated vegetables to garlic specialties, sauces, pulses, legumes, and snacks. Designed to meet industrial demand, our products deliver consistent quality and versatility across global and local markets.',
    image: '/assets/explore__card--our-product.webp',
    alt: 'Our Products',
    link: '/products'
  },

  missionAndValues: {
    title: 'Mission & Values',
    description: 'Discover our mission to build trusted, lasting value across food supply chains and explore the core values that drive our commitment to quality, innovation, and sustainable partnerships. Learn how our purpose guides every aspect of our business operations and relationships.',
    image: '/assets/explore__card--our-company.webp',
    alt: 'Mission & Values',
    link: '/our-company/mission-and-vision'
  },

  ourHistory: {
    title: 'Our History',
    description: 'Explore our journey from humble beginnings to global scale, from local roots to global growth. Learn about our milestones, innovations, and the journey that led us to where we are today.',
    image: '/assets/explore__card--our-history.webp',
    alt: 'Our History',
    link: '/our-company/history'
  },

  importDistribution: {
    title: 'Import & Distribution',
    description: 'Explore our import and distribution services, including global sourcing, certified operations, cold-chain logistics, and scale & efficiency. Learn how we simplify complex supply chains while ensuring safety, scale, and efficiency for industries across Australia.',
    image: '/assets/import__hero--importers-trade-partners-port.webp',
    alt: 'Import & Distribution',
    link: '/our-businesses/import-and-distribution'
  },

  oemPrivateLabel: {
    title: 'OEM & Private Label',
    description: 'Explore our OEM and private label services, including custom formulations, flexible packaging, regulatory compliance, and end-to-end service. Learn how we help businesses create unique products that combine market insight with industrial scale.',
    image: '/assets/oem-private-label__hero--product-packaging-lineup.webp',
    alt: 'OEM & Private Label',
    link: '/our-businesses/oem-and-private-label'
  }
}

// Page-specific card configurations
const PAGE_CONFIGS = {
  // Home page - show company, newsroom, and businesses
  home: {
    cards: ['ourCompany', 'ourBusinesses', 'ourNewsroom']
  },

  // Our Company page - show newsroom, industries, and businesses
  ourCompany: {
    cards: ['ourBusinesses', 'ourProducts', 'ourNewsroom']
  },

  // Mission and Vision page - show businesses, industries, and company
  missionAndValues: {
    cards: ['ourBusinesses', 'ourIndustries', 'ourCompany']
  },

  // Our History page - show newsroom, industries, and businesses
  ourHistory: {
    cards: ['ourCompany', 'ourBusinesses', 'ourProducts']
  },

  // Our Businesses page - show newsroom, industries, and businesses
  ourBusinesses: {
    title: 'Expand Your Possibilities',
    cards: ['ourCompany', 'ourHistory', 'ourIndustries']
  },

  // Products page - show businesses, industries, and mission & values
  products: {
    title: 'Discover More About Our Business',
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))',
    cards: ['ourBusinesses', 'ourIndustries', 'missionAndValues']
  },

  // Industries page - show products, services, and company
  industries: {
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--pickled-bluewood-100))',
    cards: ['ourBusinesses', 'ourProducts', 'ourCompany'],
  },

  // Contact page - show products, services, and company
  contact: {
    cards: ['ourProducts', 'ourBusinesses', 'ourHistory']
  },

  // Import & Distribution page - show businesses, industries, and company
  importDistribution: {
    cards: ['ourCompany', 'ourProducts', 'ourIndustries']
  },

  // OEM & Private Label page - show businesses, industries, and company
  oemPrivateLabel: {
    title: 'Beyond OEM & Private Label',
    cards: ['importDistribution', 'ourCompany', 'ourIndustries']
  }
}

// Helper function to create section configuration
const createSection = (cardKeys, customConfig = {}) => {
  const cards = cardKeys.map(key => CARD_LIBRARY[key])
  return {
    ...DEFAULT_CONFIG,
    ...customConfig,
    cards
  }
}

// Main export object with optimized structure
export const exploreCards = {
  // Global defaults
  ...DEFAULT_CONFIG,

  // Page-specific sections
  home: createSection(PAGE_CONFIGS.home.cards),

  ourCompany: createSection(PAGE_CONFIGS.ourCompany.cards),

  missionAndValues: createSection(PAGE_CONFIGS.missionAndValues.cards),

  ourHistory: createSection(PAGE_CONFIGS.ourHistory.cards),

  ourBusinesses: createSection(PAGE_CONFIGS.ourBusinesses.cards, {
    title: PAGE_CONFIGS.ourBusinesses.title,
  }),

  products: createSection(PAGE_CONFIGS.products.cards, {
    title: PAGE_CONFIGS.products.title,
  }),

  industries: createSection(PAGE_CONFIGS.industries.cards, {
    title: PAGE_CONFIGS.industries.title,
  }),

  contact: createSection(PAGE_CONFIGS.contact.cards),

  importDistribution: createSection(PAGE_CONFIGS.importDistribution.cards, {
    title: PAGE_CONFIGS.importDistribution.title,
  }),

  oemPrivateLabel: createSection(PAGE_CONFIGS.oemPrivateLabel.cards, {
    title: PAGE_CONFIGS.oemPrivateLabel.title,
  })
}

export default exploreCards 
