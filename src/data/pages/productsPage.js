/**
 * Products Page Content for E-Sunrise Australia
 * 
 * This file contains structured data for the products page including:
 * - Hero section with title, subtitle, and background
 * - Product categories with detailed specifications
 * - Challenge section highlighting key business solutions
 * - SEO metadata for search optimization
 * 
 * Structure:
 * - Hero section configuration
 * - Product categories array
 * - Challenge items with solutions
 * - SEO metadata
 */

// Hero section configuration
const HERO_CONFIG = {
  title: 'Global Food Ingredients You Can Rely On',
  subtitle: 'E-Sunrise Group Australia delivers fresh garlic, dehydrated vegetables, pickled and black garlic, sauces, pulses, legumes, and fresh produce at industrial scale. Backed by HACCP and ISO systems, we simplify sourcing with safe, reliable, and versatile ingredients trusted across global food and retail markets.',
  backgroundImage: '/assets/about/hero.png',
  overlayOpacity: '50',
  fullWidth: true
}

// Product categories data
const PRODUCT_CATEGORIES = [
  {
    id: 1,
    title: 'Fresh Produce',
    slug: 'fresh-produce',
    description: 'Premium fresh vegetables and fruits sourced directly from trusted farms. Our cold-chain logistics ensure peak freshness and extended shelf life for retail and food service applications.',
    image: '/assets/home/home__product-card--fresh-vegetables.png',
    link: '/products/fresh-produce'
  },
  {
    id: 2,
    title: 'Processed Garlic',
    slug: 'processed-garlic',
    description: 'From fresh garlic to dehydrated, pickled, and black garlic varieties. Our garlic products are processed under strict quality controls for consistent flavor and safety across all applications.',
    image: '/assets/home/home__product-card--garlic.jpg',
    link: '/products/processed-garlic'
  },
  {
    id: 3,
    title: 'Condiments & Sauces',
    slug: 'condiments-sauces',
    description: 'Premium sauces and condiments crafted for food service and retail markets. Our range includes garlic sauces, specialty condiments, and custom formulations for diverse culinary applications.',
    image: '/assets/home/home__product-card--dehydrated-vegetables.png',
    link: '/products/condiments-sauces'
  },
  {
    id: 4,
    title: 'Snacks & Consumer Products',
    slug: 'snacks-consumer',
    description: 'Ready-to-eat snacks and consumer products designed for modern lifestyles. From healthy snack options to convenient meal solutions, we deliver quality and taste that consumers trust.',
    image: '/assets/home/home__product-card--pulses.png',
    link: '/products/snacks-consumer'
  },
  {
    id: 5,
    title: 'Broader Agriculture',
    slug: 'broader-agriculture',
    description: 'Comprehensive agricultural products including pulses, legumes, and specialty crops. Our broad portfolio supports diverse food manufacturing needs with reliable supply and consistent quality.',
    image: '/assets/explore/explore__card--our-business.png',
    link: '/products/broader-agriculture'
  }
]

// Challenge section data
const CHALLENGE_SECTION = {
  title: 'Tackling Your Key Food Ingredient Challenges',
  description: 'To create differentiated food products, you need a partner that secures reliable sourcing, delivers consistent quality, and understands industry-specific needs. At E-Sunrise Group Australia, we combine large-scale manufacturing with global expertise to power your supply chain with confidence.',
  items: [
    {
      id: 'delivering-consistency',
      title: 'Delivering consistency',
      description: 'Manufacturers demand ingredients that are uniform in flavor, texture, and safety. Our garlic, sauces, and vegetables are processed under HACCP and ISO certifications to ensure every batch meets exacting standards.'
    },
    {
      id: 'cost-and-scale-advantage',
      title: 'Cost and scale advantage',
      description: 'Food businesses need competitive pricing without sacrificing quality. With annual production exceeding 100,000 tons, we deliver economies of scale that reduce costs across supply chains.'
    },
    {
      id: 'diverse-applications',
      title: 'Diverse applications',
      description: 'From ready-to-eat meals to retail condiments and industrial foodservice, our portfolio covers fresh garlic, dehydrated vegetables, sauces, pulses, legumes, and snacks—tailored for multiple industries.'
    },
    {
      id: 'cleaner-labels',
      title: 'Cleaner labels',
      description: 'Consumers want products that are simple, natural, and authentic. Our clean-label solutions—from garlic pastes to pickled products—help brands differentiate in a health-conscious marketplace.'
    },
    {
      id: 'secure-supply',
      title: 'Secure supply',
      description: 'Unreliable sourcing disrupts growth. With strong local operations in Australia and direct links to global production bases, we provide a resilient, traceable, and compliant supply chain.'
    },
    {
      id: 'sustainable-sourcing',
      title: 'Sustainable sourcing',
      description: 'As the food industry prioritizes sustainability, we focus on environmentally conscious farming and processing practices, reducing waste and supporting long-term ecological balance.'
    }
  ]
}

// SEO metadata configuration
const SEO_CONFIG = {
  title: 'Products - E-Sunrise Australia | Agricultural Ingredients',
  description: 'Premium agricultural ingredients including garlic products, dehydrated vegetables, pulses, and legumes for food processing and retail markets.',
  keywords: 'agricultural ingredients, garlic, dehydrated vegetables, pulses, legumes'
}

// Main export object with optimized structure
export const productsPage = {
  // Hero Section
  hero: HERO_CONFIG,
  
  // Products Section
  products: PRODUCT_CATEGORIES,
  
  // Challenge Section
  challenges: CHALLENGE_SECTION,
  
  // SEO Section
  seo: SEO_CONFIG
}

export default productsPage 