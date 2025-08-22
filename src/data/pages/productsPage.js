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
      title: 'Fresh Vegetables',
      slug: 'fresh-vegetables',
      description: 'Consistently sourced and processed at the highest standards, our fresh vegetables deliver reliable quality for Australia’s food industry. With strict cold chain and compliance systems, we ensure freshness from farm to table.',
      image: '/src/assets/home/product-card__fresh-vegetables.png',
      specs: null,
      link: '/products/fresh-vegetables'
    },
    {
      id: 2,
      title: 'Dehydrated Vegetables',
      slug: 'dehydrated-vegetables',
      description: 'Our range of dehydrated vegetables includes onions, carrots, and mixed vegetables, perfect for food processing applications. With strict quality control and compliance systems, we ensure consistency and reliability for every batch.',
      price: 'Contact for pricing',
      image: '/src/assets/home/product-card__dehydrated-vegetables.png',
      specs: null,
      link: '/products/dehydrated-vegetables'
    },
    {
      id: 3,
      title: 'Pulses & Legumes',
      slug: 'pulses-legumes',
      description: 'From chickpeas to lentils, our pulses and legumes are processed to meet global standards for safety and consistency. We provide bulk volumes with full traceability, supporting both industrial applications and retail supply chains.',
      image: '/src/assets/home/product-card__pulses.png',
      specs: null,
      link: '/products/pulses-legumes'
    }
  ],
  seo: {
    title: 'Products - E-Sunrise Australia | Agricultural Ingredients',
    description: 'Premium agricultural ingredients including garlic products, dehydrated vegetables, pulses, and legumes for food processing and retail markets.',
    keywords: 'agricultural ingredients, garlic, dehydrated vegetables, pulses, legumes'
  }
}

export default productsPage 