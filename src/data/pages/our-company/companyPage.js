/**
 * About Page Content for E-Sunrise Australia
 * 
 * Static content for the about page including navigation,
 * hero sections, company information, and partner data.
 */

export const companyPage = {
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
    backgroundImage: '/assets/about__hero--display.webp',
    overlayOpacity: '50'
  },

  // Mission & Vision Section
  mission: {
    title: 'Shaping the Future of Food Supply',
    subtitle: 'Our mission is to provide reliable food ingredients and solutions that empower manufacturers, distributors, and retailers. Through innovation and collaboration, we build sustainable supply chains for long-term growth.',
    fullWidth: true,
    backgroundImage: '/assets/mission-values__hero--supply-chain-scale.webp',
    overlayOpacity: '50'
  },

  // Company History Section
  ourHistory: {
    title: 'Two Decades of Trust and Transformation',
    subtitle: 'Founded in 2002 as Jiangsu Liming Food Group, we’ve grown from an agricultural pioneer in China to a trusted international food manufacturer. In 2024, E-Sunrise Group Australia was established, bringing our global strength closer to the Australian market.',
    backgroundImage: '/assets/about__section--our-history.webp',
    fullWidth: true,
    overlayOpacity: '50',
    ctaText: 'Explore Our History',
    ctaLink: '/our-company/history'
  },

  // Partners & Clients Section
  partners: {
    title: 'Trusted by our customers & partners',
    items: [
      { name: 'Costco', logo: '/assets/partners/costco.svg' },
      { name: 'McCormick', logo: '/assets/partners/McCormick.png' },
      { name: 'Sam\'s Club', logo: '/assets/partners/sams-club.png' },
      { name: 'Chu Bang', logo: '/assets/partners/chubang.png' },
      { name: 'Jammy Chai', logo: '/assets/partners/jammy-chai.png' },
      { name: 'Haitian', logo: '/assets/partners/haitian.png' },
      { name: 'Zobon', logo: '/assets/partners/zobon.png' },
      { name: 'Yueshifu', logo: '/assets/partners/yueshifu.png' },
      { name: 'Totole', logo: '/assets/partners/totole.svg' },
      { name: 'Haidilao', logo: '/assets/partners/haidilao.png' }
    ],
    columns: { base: 2, md: 3, lg: 4 },
    gap: 'lg'
  },

  // Capabilities Section
  capabilities: {
    sections: [
      {
        title: 'Delivering Reliability from Production to Partnership',
        description: 'As a vertically integrated manufacturer, we manage everything from cultivation and processing to large-scale supply. With proven international experience and strong local operations in Australia, we deliver certified quality, consistent capacity, and trusted partnerships that create long-term value.',
        image: '/assets/about__section--our-edge.webp',
        linkText: 'Discover Our Capabilities',
        linkUrl: '/our-businesses',
        imagePosition: 'right',
        imageSize: 'lg'
      },
      {
        title: 'Capabilities That Power Food Supply Chains',
        description: 'E-Sunrise Group Australia delivers certified food ingredients with manufacturing strength, cold-chain logistics, and OEM solutions, ensuring reliable supply, full traceability, and compliance for Australia\'s food industry.',
        image: '/assets/about__section--capabilities.webp',
        linkText: 'Partner With Us for Reliable Supply',
        linkUrl: '/our-businesses/oem-and-private-label',
        imagePosition: 'left',
        imageSize: 'lg'
      }
    ]
  }
}

export default companyPage 