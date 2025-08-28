/**
 * Industries Page Content for E-Sunrise Australia
 * 
 * Static content for the industries page including hero section,
 * industry information, and SEO metadata.
 */

export const industriesPage = {
  hero: {
    title: 'Powering Food Supply Across Industries',
    subtitle: 'We combine large-scale manufacturing with trusted supply chain expertise to deliver certified, reliable, and versatile food solutions. Serving manufacturers, distributors, supermarkets, and trade partners, we power growth across the entire food industry.',
    backgroundImage: '/src/assets/industries__hero--infrastructure-scale.png',
    overlayOpacity: '50',
    fullWidth: true
  },
  industries: [
    {
      id: 1,
      title: 'Taste & Texture',
      description: 'Are you a manufacturer looking to boost taste and texture – even in food products with reduced sugar, salt, or fat? Our portfolio of natural ingredients and functional solutions helps create products that consumers love.',
      image: '/src/assets/explore/our-business.png',
      linkText: 'Learn more',
      linkUrl: '/our-businesses/oem-and-private-label'
    },
    {
      id: 2,
      title: 'Sugar reduction',
      description: 'Discover how we can help navigate the complexities of sugar reduction to help you create products that meet consumer demand for healthier options without compromising on taste.',
      image: '/src/assets/explore/our-company.png',
      linkText: 'Learn more',
      linkUrl: '/our-businesses/import-and-distribution'
    },
    {
      id: 3,
      title: 'Health & Wellbeing',
      description: 'Want to create foods and beverages that benefit health & wellbeing? We offer ingredients that support digestive health, immunity, and overall wellness.',
      image: '/src/assets/explore/newsroom.png',
      linkText: 'Learn more',
      linkUrl: '/products'
    }
  ],
  seo: {
    title: 'Industries - E-Sunrise Australia | Food Industry Solutions',
    description: 'Serving food manufacturing, retail, and food service industries with premium ingredients and reliable supply chain solutions.',
    keywords: 'food manufacturing, retail, food service, ingredients, supply chain'
  }
}

export default industriesPage 