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
  backgroundImage: '/assets/our-business__garlic-sorting-line.png',
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
    description: 'We connect global supply with local demand through reliable import and distribution services. From fresh produce to value-added ingredients, we ensure timely delivery, strict compliance, and consistent quality to support Australia’s evolving food industry.',
    image: '/assets/our-business__import-and-distribution.png',
    linkText: 'Explore more',
    linkUrl: '/our-businesses/import-and-distribution',
    imagePosition: 'left',
    id: 'import-and-distribution'
  },
  {
    title: 'OEM & Private Label',
    description: 'We empower brands and retailers with tailored OEM and private label solutions. From concept to shelf, our expertise in product development and manufacturing helps create distinctive, high-quality offerings that strengthen customer trust and market presence.',
    image: '/assets/our-business__oem-and-private-label.png',
    linkText: 'Explore more',
    linkUrl: '/our-businesses/oem-and-private-label',
    imagePosition: 'right',
    id: 'oem-and-private-label'
  }
]

const INDUSTRY_SECTIONS = [
  {
    title: 'From Farm to Shelf, Across Every Industry',
    description: 'Our journey doesn’t end at the harvest. From the farmer’s field to the supermarket aisle, we support every step of the supply chain. With tailored solutions for each industry, we make sure quality garlic reaches every table worldwide.',
    image: '/assets/our-business__industries.png',
    linkText: 'See all industries',
    linkUrl: '/our-businesses/industries',
    imagePosition: 'right',
    id: 'industry-solutions'
  }
]

// Industries data for service cards
const INDUSTRIES_DATA = [
  {
    title: 'Food Manufacturers & Processors',
    description: 'We supply dehydrated vegetables, garlic products, sauces, pulses, and legumes to food manufacturers and processors. With HACCP and ISO certifications, we ensure consistent, safe, and traceable ingredients for large-scale production.',
    image: '/assets/industries__card--food-processing.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/food-manufacturers-and-processors'
  },
  {
    title: 'Food Service & Distribution',
    description: 'From restaurants to catering suppliers, we support Australia\'s food service industry through strong distributor partnerships. Our cold-chain logistics and scalable supply guarantee freshness, efficiency, and long-term reliability.',
    image: '/assets/industries__card--food-service-distribution.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/food-service-and-distribution'
  },
  {
    title: 'Supermarkets & Custom Brands',
    description: 'We partner with retail chains and supermarkets to deliver tailored OEM solutions. From garlic sauces to packaged legumes, we help retailers build distinctive, compliant, and trusted private label products.Want to create foods and beverages that benefit health & wellbeing? We offer ingredients that support digestive health, immunity, and overall wellness.',
    image: '/assets/industries__card--supermarkets-custom-brands.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/supermarkets-and-custom-brands'
  },
  {
    title: 'Ingredient & Bulk Suppliers',
    description: 'Bulk pulses, legumes, and dehydrated vegetables are at the core of many ingredient suppliers. With 100,000+ tons annual production capacity, we offer stable, cost-effective, and large-scale supply for industrial applications.',
    image: '/assets/industries__card--ingredient-bulk-suppliers.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/ingredient-and-bulk-suppliers'
  },
  {
    title: 'Importers & Trade Partners',
    description: 'We work with global importers and trade partners to provide secure capacity, compliance support, and flexible cooperation models. Our proven expertise reduces supply chain risk and strengthens competitiveness in international markets.',
    image: '/assets/industries__card--importers-and-trade-partners.png',
    linkText: 'Learn more',
    linkUrl: '/our-businesses/industries/importers-and-trade-partners'
  }
]

// Main export object with optimized structure
export const businessesPage = {
  // Hero Section
  hero: HERO_CONFIG,

  // Services Navigation
  services: SERVICES_NAVIGATION,

  // Service Sections for alternating content
  serviceSections: SERVICE_SECTIONS,

  // Industries data for service cards
  industries: INDUSTRIES_DATA,

  // Industries sections for alternating content
  industrySections: INDUSTRY_SECTIONS
}

export default businessesPage 