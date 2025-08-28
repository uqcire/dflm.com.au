/**
 * Services Page Content for E-Sunrise Australia
 */

export const servicesPage = {
  hero: {
    title: 'Our Businesses',
    subtitle: 'We power Australia’s food industry with world-class manufacturing, reliable supply chains, and trusted solutions that deliver consistent quality and lasting value.',
    backgroundImage: '/src/assets/about/hero.png',
    overlayOpacity: '50',
    fullWidth: true
  },
  services: {
    items: [
      { id: 'import-and-distribution', title: 'Import & Distribution', href: '#import-and-distribution' },
      { id: 'oem-and-private-label', title: 'OEM & Private Label', href: '#oem-and-private-label' },
      { id: 'industry-solutions', title: 'Industry Solutions', href: '#industry-solutions' },
    ],
    sticky: true
  }
}

export default servicesPage 