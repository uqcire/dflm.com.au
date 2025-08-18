/**
 * About Page Content for E-Sunrise Australia
 */

export const aboutPage = {
  hero: {
    title: 'About E-Sunrise Australia',
    subtitle: 'Delivering quality food products to businesses across Australia since 2023',
    image: null,
    ctaText: 'Contact Us',
    ctaLink: '/contact'
  },
  blocks: [
    {
      type: 'content',
      title: 'Our Story',
      text: `
        <p>E-Sunrise Australia is a subsidiary of Jiangsu Liming Food Group, a global leader in food processing and distribution. Established in 2023, we bring our parent company's extensive experience and global network to serve the Australian market.</p>
        <p>Our mission is to provide Australian businesses with access to premium agricultural ingredients while maintaining the highest standards of quality, reliability, and customer service.</p>
      `
    },
    {
      type: 'features',
      features: {
        title: 'Our Services',
        features: [
          {
            title: 'Import & Distribution',
            text: 'Comprehensive import and distribution services for food products across Australia. We handle customs clearance, warehousing, and nationwide delivery to ensure your products reach customers efficiently.'
          },
          {
            title: 'OEM / Private Label Services',
            text: 'Custom private label and OEM solutions for your brand. We work with you to develop, source, and package products under your own brand name with quality assurance and compliance.'
          },
          {
            title: 'Quality Assurance',
            text: 'Rigorous quality control processes and certifications to ensure all products meet Australian food safety standards. We maintain the highest quality benchmarks throughout our supply chain.'
          },
          {
            title: 'Reliable Supply Chain',
            text: 'Established relationships with trusted suppliers and efficient logistics networks. We ensure consistent product availability and timely delivery to meet your business needs.'
          }
        ]
      }
    }
  ],
  seo: {
    title: 'About Us - E-Sunrise Australia | Food Import & Distribution',
    description: 'Learn about E-Sunrise Australia\'s mission to provide premium food products to Australian businesses. Our commitment to quality, reliability, and customer service sets us apart.',
    keywords: 'about us, food import, distribution, Australia, quality assurance'
  }
}

export default aboutPage 