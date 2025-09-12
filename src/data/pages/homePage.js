/**
 * Home Page Content for E-Sunrise Australia
 * 
 * Static content for the home page including hero section,
 * content blocks, features, and SEO metadata.
 */

export const homePage = {
  // Hero Section
  hero: {
    title: 'Scalable Supply You Can Trust',
    subtitle: 'Delivering certified, cost-efficient food ingredients with industrial scale and consistent quality for Australia\'s market.',
    image: '/assets/home__hero--factory-building.webp',
    imageSize: 'xl'
  },

  // Our Businesses Section
  ourBusinesses: {
    sections: [
      {
        title: 'Strength in Supply Chain Solutions',
        description: 'With vertically integrated operations and advanced logistics, we provide seamless import, distribution, and supply chain management across Australia. From customs clearance to cold-chain delivery, our expertise ensures products arrive safely, efficiently, and at scale.',
        image: '/assets/home__service-card--supply-chain.webp',
        linkText: 'Discover End-to-End Distribution',
        linkUrl: '/our-businesses/import-and-distribution',
        imagePosition: 'right',
        imageSize: 'lg'
      },
      {
        title: 'Manufacturing You Can Count On',
        description: 'As a full-scale producer, we control every step from cultivation to processing, guaranteeing consistent quality and compliance. Our modern facilities and certified systems allow us to deliver tailored solutions for manufacturers, distributors, and retail partners.',
        image: '/assets/home__service-card--manufacturing.webp',
        linkText: 'Partner With Us for Tailored Solutions',
        linkUrl: '/our-businesses/oem-and-private-label',
        imagePosition: 'left',
        imageSize: 'lg'
      }
    ]
  },

  // Get in Touch Section
  getInTouch: {
    title: 'Get in touch',
    description: 'Did you know that you can contact different departments and functions from E-Sunrise Australia such as media team, sustainability team and our investors team?',
    buttonText: 'Contact us',
    buttonLink: '/contact',
    background: 'transparent',
    backgroundColor: 'monza-100',
    backgroundStyle: ''
  },

  // SEO Metadata
  seo: {
    title: 'E-Sunrise Australia | Premium Food Import & Distribution',
    description: 'Leading food import and distribution company serving Australian businesses with premium agricultural ingredients, quality assurance, and reliable supply chain solutions.',
    keywords: 'food import, distribution, agricultural ingredients, Australia, quality assurance'
  }
}

export default homePage 