/**
 * Products Page Content for E-Sunrise Australia
 */

export const productsPage = {
  hero: {
    title: 'Our Products',
    subtitle: 'Premium agricultural ingredients for your business',
    image: null,
    ctaText: 'Request Quote',
    ctaLink: '/contact'
  },
  products: [
    {
      id: 1,
      title: 'Garlic Products',
      slug: 'garlic-products',
      summary: 'Premium garlic products for food processing and retail',
      description: 'High-quality garlic products including fresh garlic, dehydrated garlic, and garlic powder suitable for various food applications.',
      price: 'Contact for pricing',
      featured: true,
      badge: 'Popular',
      image: null,
      specs: {
        origin: 'China',
        grade: 'Premium',
        moq: '1 tonne',
        packaging: '25kg bags',
        shelfLife: '24 months'
      }
    },
    {
      id: 2,
      title: 'Dehydrated Vegetables',
      slug: 'dehydrated-vegetables',
      summary: 'Quality dehydrated vegetables for food manufacturing',
      description: 'Range of dehydrated vegetables including onions, carrots, and mixed vegetables for food processing applications.',
      price: 'Contact for pricing',
      featured: false,
      badge: null,
      image: null,
      specs: {
        origin: 'China',
        grade: 'Food Grade',
        moq: '500kg',
        packaging: '20kg bags',
        shelfLife: '18 months'
      }
    },
    {
      id: 3,
      title: 'Pulses & Legumes',
      slug: 'pulses-legumes',
      summary: 'Premium pulses and legumes for various applications',
      description: 'High-quality pulses including chickpeas, lentils, and beans suitable for food processing and retail markets.',
      price: 'Contact for pricing',
      featured: false,
      badge: null,
      image: null,
      specs: {
        origin: 'Australia/Imported',
        grade: 'Premium',
        moq: '1 tonne',
        packaging: '25kg bags',
        shelfLife: '36 months'
      }
    }
  ],
  seo: {
    title: 'Products - E-Sunrise Australia | Agricultural Ingredients',
    description: 'Premium agricultural ingredients including garlic products, dehydrated vegetables, pulses, and legumes for food processing and retail markets.',
    keywords: 'agricultural ingredients, garlic, dehydrated vegetables, pulses, legumes'
  }
}

export default productsPage 