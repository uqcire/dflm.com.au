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
    image: '/assets/explore/explore__card--our-company.png',
    alt: 'Our Company',
    link: '/our-company'
  },
  
  ourNewsroom: {
    title: 'Our Newsroom',
    description: 'Stay updated with the latest news, company announcements, and industry insights. Explore milestones, product launches, and strategic developments that highlight our continued growth, innovation, and commitment to building stronger food supply chains for the future.',
    image: '/assets/explore/explore__card--newsroom.png',
    alt: 'Our Newsroom',
    link: '/blog'
  },
  
  ourBusinesses: {
    title: 'Our Businesses',
    description: 'Discover our core business divisions that power the E-Sunrise Group. From large-scale manufacturing and OEM solutions to import, distribution, and logistics, we deliver integrated services that create value across the entire food supply chain.',
    image: '/assets/explore/explore__card--our-business.png',
    alt: 'Our Businesses',
    link: '/our-businesses'
  },
  
  ourIndustries: {
    title: 'Industries We Serve',
    description: 'Explore the industries we serve, including food manufacturers, processors, distributors, retailers, supermarkets, and trade partners. Learn how our scale, reliability, and supply chain expertise help support long-term growth and resilience across the food sector.',
    image: '/assets/explore/explore__card--industries.png',
    alt: 'Industries We Serve',
    link: '/our-businesses/industries'
  },
  
  ourProducts: {
    title: 'Our Products',
    description: 'Browse our comprehensive portfolio of food ingredients, from fresh and dehydrated vegetables to garlic specialties, sauces, pulses, legumes, and snacks. Designed to meet industrial demand, our products deliver consistent quality and versatility across global and local markets.',
    image: '/assets/home/home__product-card--garlic.jpg',
    alt: 'Our Products',
    link: '/products'
  },
    
  missionAndValues: {
    title: 'Mission & Values',
    description: 'Discover our mission to build trusted, lasting value across food supply chains and explore the core values that drive our commitment to quality, innovation, and sustainable partnerships. Learn how our purpose guides every aspect of our business operations and relationships.',
    image: '/assets/explore/explore__card--our-company.png',
    alt: 'Mission & Values',
    link: '/our-company/mission-and-vision'
  },

  ourHistory: {
    title: 'Our History',
    description: 'Explore our journey from humble beginnings to global scale, from local roots to global growth. Learn about our milestones, innovations, and the journey that led us to where we are today.',
    image: '/assets/about/about__section--our-history.png',
    alt: 'Our History',
    link: '/our-company/history'
  }
  
}

// Page-specific card configurations
const PAGE_CONFIGS = {
  // Home page - show company, newsroom, and businesses
  home: {
    cards: ['ourCompany', 'ourNewsroom', 'ourBusinesses']
  },
  
  // Our Company page - show newsroom, industries, and businesses
  ourCompany: {
    cards: ['ourNewsroom', 'ourIndustries', 'ourBusinesses']
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
    cards: ['ourNewsroom', 'ourIndustries', 'ourBusinesses']
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
    cards: ['ourProducts', 'ourServices', 'ourCompany']
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
  
  ourBusinesses: createSection(PAGE_CONFIGS.ourBusinesses.cards),
  
  products: createSection(PAGE_CONFIGS.products.cards, {
    title: PAGE_CONFIGS.products.title,
    background: PAGE_CONFIGS.products.background,
    backgroundStyle: PAGE_CONFIGS.products.backgroundStyle
  }),
  
  industries: createSection(PAGE_CONFIGS.industries.cards, {
    background: PAGE_CONFIGS.industries.background,
    backgroundStyle: PAGE_CONFIGS.industries.backgroundStyle
  }),
  
  contact: createSection(PAGE_CONFIGS.contact.cards)
}

export default exploreCards 
