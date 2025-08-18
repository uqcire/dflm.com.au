/**
 * Industries Page Content for E-Sunrise Australia
 * 
 * Static content for the industries page including hero section,
 * industry information, and SEO metadata.
 */

export const industriesPage = {
  hero: {
    title: 'Industries We Serve',
    subtitle: 'Supporting businesses across the food industry with quality ingredients',
    image: null,
    ctaText: 'Partner With Us',
    ctaLink: '/contact'
  },
  industries: [
    {
      id: 1,
      title: 'Food Manufacturing',
      description: 'Supply premium ingredients to food manufacturers for processing and production',
      features: ['Quality assurance', 'Consistent supply', 'Technical support']
    },
    {
      id: 2,
      title: 'Retail & Supermarkets',
      description: 'Provide branded and private label products for retail distribution',
      features: ['Private labeling', 'Packaging solutions', 'Quality compliance']
    },
    {
      id: 3,
      title: 'Food Service',
      description: 'Supply ingredients to restaurants, cafes, and food service providers',
      features: ['Reliable delivery', 'Quality products', 'Flexible ordering']
    }
  ],
  seo: {
    title: 'Industries - E-Sunrise Australia | Food Industry Solutions',
    description: 'Serving food manufacturing, retail, and food service industries with premium ingredients and reliable supply chain solutions.',
    keywords: 'food manufacturing, retail, food service, ingredients, supply chain'
  }
}

export default industriesPage 