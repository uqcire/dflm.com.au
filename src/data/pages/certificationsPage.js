/**
 * Certifications Page Content for E-Sunrise Australia
 */

export const certificationsPage = {
  hero: {
    title: 'Certifications & Quality',
    subtitle: 'Maintaining the highest standards in food safety and quality',
    image: null,
    ctaText: 'Download Certificates',
    ctaLink: '/contact'
  },
  content: {
    title: 'Our Quality Commitment',
    text: `
      <p>E-Sunrise Australia maintains the highest standards of quality and food safety. Our products meet or exceed Australian food safety standards and international quality benchmarks.</p>
      <p>We work with certified suppliers and maintain rigorous quality control processes throughout our supply chain to ensure the safety and quality of all our products.</p>
    `,
    certifications: [
      {
        name: 'HACCP Certification',
        description: 'Hazard Analysis and Critical Control Points certification for food safety management',
        status: 'Certified'
      },
      {
        name: 'ISO 22000',
        description: 'Food safety management system certification',
        status: 'Certified'
      },
      {
        name: 'Australian Food Standards',
        description: 'Compliance with Food Standards Australia New Zealand (FSANZ)',
        status: 'Compliant'
      }
    ]
  },
  seo: {
    title: 'Certifications & Quality - E-Sunrise Australia',
    description: 'Learn about our quality assurance processes, food safety certifications, and commitment to maintaining the highest standards in food safety and quality.',
    keywords: 'food safety, quality assurance, HACCP, ISO 22000, certifications'
  }
}

export default certificationsPage 