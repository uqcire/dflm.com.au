/**
 * Services Page Content for E-Sunrise Australia
 * 
 * This file contains structured data for the services page including:
 * - Hero section with title, subtitle, and background
 * - Services navigation items for sub-navigation
 * - Service sections with alternating content
 * - Industries grid with service cards
 * 
 * Structure:
 * - Hero section configuration
 * - Services navigation configuration
 * - Service sections data
 * - Industries data
 */

// Hero section configuration
const HERO_CONFIG = {
  title: 'Our Businesses',
  subtitle: 'We power Australia\'s food industry with world-class manufacturing, reliable supply chains, and trusted solutions that deliver consistent quality and lasting value.',
  backgroundImage: '/src/assets/about/hero.png',
  overlayOpacity: '50',
  fullWidth: true
}

// Services navigation configuration
const SERVICES_NAVIGATION = {
  items: [
    { id: 'import-and-distribution', title: 'Import & Distribution', href: '#import-and-distribution' },
    { id: 'oem-and-private-label', title: 'OEM & Private Label', href: '#oem-and-private-label' },
    { id: 'industry-solutions', title: 'Industry Solutions', href: '#industry-solutions' },
  ],
  sticky: true
}

// Service sections data for alternating content
const SERVICE_SECTIONS = [
  {
    title: 'Import & Distribution',
    description: 'Smell that? That\'s the scent of conscious perfumery and beauty – all with a more positive impact on people and planet. Using outstanding ingredients, we bring together the best of nature and science through a responsible and sustainable approach.',
    image: '/src/assets/hero/visual__garlic--realistic-conceptual-balance.jpg',
    linkText: 'Explore more',
    linkUrl: '/our-businesses/import-and-distribution',
    imagePosition: 'left',
    id: 'import-and-distribution'
  },
  {
    title: 'OEM & Private Label',
    description: 'At E-Sunrise Australia we have the recipe to lead a new era in Taste, Texture and Health. Our boundless creativity and broad portfolio of unique and nutritious ingredients ensures consumer preferred food and beverages for every taste and occasion. We bring progress to life by co-creating with our customers to transform how the world eats.',
    image: '/src/assets/hero/visual__garlic--realistic-conceptual-balance.jpg',
    linkText: 'Explore more',
    linkUrl: '/our-businesses/oem-and-private-label',
    imagePosition: 'right',
    id: 'oem-and-private-label'
  }
]

// Industries data for service cards
const INDUSTRIES_DATA = [
  {
    title: 'Food Manufacturers & Processors',
    description: 'We supply dehydrated vegetables, garlic products, sauces, pulses, and legumes to food manufacturers and processors. With HACCP and ISO certifications, we ensure consistent, safe, and traceable ingredients for large-scale production.',
    image: '/src/assets/explore/our-business.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/food-manufacturers-and-processors'
  },
  {
    title: 'Food Service & Distribution',
    description: 'From restaurants to catering suppliers, we support Australia\'s food service industry through strong distributor partnerships. Our cold-chain logistics and scalable supply guarantee freshness, efficiency, and long-term reliability.',
    image: '/src/assets/explore/our-company.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/food-service-and-distribution'
  },
  {
    title: 'Supermarkets & Custom Brands',
    description: 'We partner with retail chains and supermarkets to deliver tailored OEM solutions. From garlic sauces to packaged legumes, we help retailers build distinctive, compliant, and trusted private label products.Want to create foods and beverages that benefit health & wellbeing? We offer ingredients that support digestive health, immunity, and overall wellness.',
    image: '/src/assets/explore/newsroom.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/supermarkets-and-custom-brands'
  },
  {
    title: 'Ingredient & Bulk Suppliers',
    description: 'Bulk pulses, legumes, and dehydrated vegetables are at the core of many ingredient suppliers. With 100,000+ tons annual production capacity, we offer stable, cost-effective, and large-scale supply for industrial applications.',
    image: '/src/assets/explore/newsroom.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/ingredient-and-bulk-suppliers'
  },
  {
    title: 'Importers & Trade Partners',
    description: 'We work with global importers and trade partners to provide secure capacity, compliance support, and flexible cooperation models. Our proven expertise reduces supply chain risk and strengthens competitiveness in international markets.',
    image: '/src/assets/explore/newsroom.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/importers-and-trade-partners'
  }
]

// Main export object with optimized structure
export const servicesPage = {
  // Hero Section
  hero: HERO_CONFIG,
  
  // Services Navigation
  services: SERVICES_NAVIGATION,
  
  // Service Sections for alternating content
  serviceSections: SERVICE_SECTIONS,
  
  // Industries data for service cards
  industries: INDUSTRIES_DATA
}

export default servicesPage 