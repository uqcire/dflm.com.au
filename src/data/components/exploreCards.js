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
    image: '/src/assets/explore/our-company.png',
    alt: 'Our Company',
    link: '/our-company'
  },
  
  ourNewsroom: {
    title: 'Our Newsroom',
    description: 'Stay updated with the latest news, company announcements, and industry insights. Explore milestones, product launches, and strategic developments that highlight our continued growth, innovation, and commitment to building stronger food supply chains for the future.',
    image: '/src/assets/explore/newsroom.png',
    alt: 'Our Newsroom',
    link: '/blog'
  },
  
  ourBusinesses: {
    title: 'Our Businesses',
    description: 'Discover our core business divisions that power the E-Sunrise Group. From large-scale manufacturing and OEM solutions to import, distribution, and logistics, we deliver integrated services that create value across the entire food supply chain.',
    image: '/src/assets/explore/our-business.png',
    alt: 'Our Businesses',
    link: '/our-businesses'
  },
  
  ourIndustries: {
    title: 'Industries We Serve',
    description: 'Explore the industries we serve, including food manufacturers, processors, distributors, retailers, supermarkets, and trade partners. Learn how our scale, reliability, and supply chain expertise help support long-term growth and resilience across the food sector.',
    image: '/src/assets/explore/industries.png',
    alt: 'Industries We Serve',
    link: '/our-businesses/industries'
  },
  
  ourProducts: {
    title: 'Our Products',
    description: 'Browse our comprehensive portfolio of food ingredients, from fresh and dehydrated vegetables to garlic specialties, sauces, pulses, legumes, and snacks. Designed to meet industrial demand, our products deliver consistent quality and versatility across global and local markets.',
    image: '/src/assets/home/product-card__garlic.jpg',
    alt: 'Our Products',
    link: '/products'
  },
    
  certifications: {
    title: 'Certifications',
    description: 'Explore our international certifications, including HACCP and ISO, which guarantee consistent quality, full traceability, and compliance with global and Australian food standards. These certifications reinforce our commitment to reliability, safety, and excellence in food production.',
    image: '/src/assets/explore/our-company.png',
    alt: 'Certifications',
    link: '/our-company/certifications'
  }
}

// Page-specific card configurations
const PAGE_CONFIGS = {
  // Home page - show company, newsroom, and businesses
  home: {
    cards: ['ourCompany', 'ourNewsroom', 'ourBusinesses']
  },
  
  // About page - show newsroom, industries, and businesses
  about: {
    cards: ['ourNewsroom', 'ourIndustries', 'ourBusinesses']
  },
  
  // Our Businesses page - show newsroom, industries, and businesses
  ourBusinesses: {
    cards: ['ourNewsroom', 'ourIndustries', 'ourBusinesses']
  },
  
  // Products page - show businesses, industries, and certifications
  products: {
    title: 'Discover More About Our Business',
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))',
    cards: ['ourBusinesses', 'ourIndustries', 'certifications']
  },
  
  // Services page - show products, industries, and company
  services: {
    cards: ['ourProducts', 'ourIndustries', 'ourCompany']
  },
  
  // Industries page - show products, services, and company
  industries: {
    cards: ['ourProducts', 'ourServices', 'ourCompany']
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
  
  about: createSection(PAGE_CONFIGS.about.cards),
  
  ourBusinesses: createSection(PAGE_CONFIGS.ourBusinesses.cards),
  
  products: createSection(PAGE_CONFIGS.products.cards, {
    title: PAGE_CONFIGS.products.title,
    background: PAGE_CONFIGS.products.background,
    backgroundStyle: PAGE_CONFIGS.products.backgroundStyle
  }),
  
  services: createSection(PAGE_CONFIGS.services.cards),
  
  industries: createSection(PAGE_CONFIGS.industries.cards),
  
  contact: createSection(PAGE_CONFIGS.contact.cards)
}

export default exploreCards 
