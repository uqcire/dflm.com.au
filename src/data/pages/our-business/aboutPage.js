/**
 * About Page Content for E-Sunrise Australia
 * 
 * Static content for the about page including navigation,
 * hero sections, company information, and partner data.
 */

export const aboutPage = {
  // Navigation Configuration
  subNavigation: {
    items: [
      { id: 'who-are-we', title: 'Who are we', href: '#who-are-we' },
      { id: 'our-edge', title: 'Our Edge', href: '#our-edge' },
      { id: 'capabilities', title: 'Capabilities', href: '#capabilities' },
      { id: 'partners-clients', title: 'Partners & Clients', href: '#partners-clients' },
      { id: 'our-history', title: 'Our History', href: '#our-history' }
    ],
    mission: [
      { id: 'our-values', title: 'Our values', href: '#our-values' },
      { id: 'our-business-unit', title: 'Our business unit', href: '#our-business-unit' },
      { id: 'partner-with-us', title: 'Partner with us', href: '#partner-with-us' },
      { id: 'our-history', title: 'Our History', href: '#our-history' }
    ],
    sticky: true
  },

  // Hero Section
  hero: {
    title: 'Our company',
    subtitle: 'Combining global scale with local reliability, we secure the future of food supply through consistency, compliance, and collaboration.',
    fullWidth: true,
    backgroundImage: '/src/assets/about/hero.png',
    overlayOpacity: '50'
  },

  // Mission & Vision Section
  mission: {
    title: 'Mission & Vision',
    subtitle: 'Building a better legacy of global environmental leadership',
    fullWidth: true,
    backgroundImage: '/src/assets/about/hero.png',
    overlayOpacity: '30'
  },

  // Company History Section
  ourHistory: {
    title: 'Our History, From Local Roots to Global Growth',
    subtitle: 'Founded in 2002, Jiangsu Liming Food Group grew from an agricultural processor in China into a national leader in food manufacturing, exporting to more than 60 countries. In 2024, we established E-Sunrise Group Australia in Melbourne, bringing global scale and proven expertise closer to local partners with one mission — to build trusted, lasting value across food supply chains.',
    backgroundImage: '/src/assets/about/our-history.png',
    ctaText: 'Explore our history',
    ctaLink: '/our-company/history',
    fullWidth: true
  },

  // Partners & Clients Section
  partners: {
    title: 'Trusted by our customers & partners',
    items: [
      { name: 'Costco', logo: '/src/assets/partners/costco.svg' },
      { name: 'McCormick', logo: '/src/assets/partners/McCormick.png' },
      { name: 'Sam\'s Club', logo: '/src/assets/partners/sams-club.png' },
      { name: 'Chu Bang', logo: '/src/assets/partners/chubang.png' },
      { name: 'Jammy Chai', logo: '/src/assets/partners/jammy-chai.png' },
      { name: 'Haitian', logo: '/src/assets/partners/haitian.png' },
      { name: 'Zobon', logo: '/src/assets/partners/zobon.png' },
      { name: 'Yueshifu', logo: '/src/assets/partners/yueshifu.png' },
      { name: 'Totole', logo: '/src/assets/partners/totole.svg' },
      { name: 'Haidilao', logo: '/src/assets/partners/haidilao.png' }
    ],
    columns: { base: 2, md: 3, lg: 4 },
    gap: 'lg'
  }
}

export default aboutPage 