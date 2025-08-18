/**
 * Static Content for E-Sunrise Australia Website
 * 
 * This file contains all static content for the website pages.
 * Content is organized by page type and includes all necessary data
 * that was previously managed through Strapi CMS.
 */

// Site Settings
export const siteSettings = {
  siteName: 'E-Sunrise Australia',
  logo: '/brand__logo--icon.png',
  email: 'hello@dflm.com.au',
  phone: '+61 3 1234 5678',
  address: {
    line1: '123 Business Street',
    city: 'Melbourne',
    region: 'VIC',
    country: 'Australia',
    postcode: '3000'
  },
  socials: [
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/company/e-sunrise-australia',
      icon: 'linkedin'
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com/esunriseaustralia',
      icon: 'facebook'
    }
  ]
}

// Home Page Content
export const homePage = {
  hero: {
    title: 'Your Strategic Partner for Premium Agricultural Ingredients',
    subtitle: 'Delivering quality food products to businesses across Australia since 2023',
    image: null,
    ctaText: 'Explore Our Services',
    ctaLink: '/services'
  },
  blocks: [
    {
      type: 'content',
      title: 'Welcome to E-Sunrise Australia',
      text: `
        <p>We are a leading food import and distribution company, serving businesses across Australia with premium agricultural ingredients and exceptional service.</p>
        <p>As a subsidiary of Jiangsu Liming Food Group, we bring global expertise and local market knowledge to help your business succeed.</p>
      `
    },
    {
      type: 'features',
      features: {
        title: 'Why Choose E-Sunrise Australia',
        features: [
          {
            title: 'Global Network',
            text: 'Access to premium suppliers worldwide through our parent company network'
          },
          {
            title: 'Quality Assurance',
            text: 'Rigorous quality control and compliance with Australian food safety standards'
          },
          {
            title: 'Reliable Supply',
            text: 'Consistent product availability and timely delivery across Australia'
          },
          {
            title: 'Expert Support',
            text: 'Dedicated team with deep industry knowledge and personalized service'
          }
        ]
      }
    }
  ],
  seo: {
    title: 'E-Sunrise Australia | Premium Food Import & Distribution',
    description: 'Leading food import and distribution company serving Australian businesses with premium agricultural ingredients, quality assurance, and reliable supply chain solutions.',
    keywords: 'food import, distribution, agricultural ingredients, Australia, quality assurance'
  }
}

// About Page Content
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

// Services Page Content
export const servicesPage = {
  hero: {
    title: 'Our Services',
    subtitle: 'Comprehensive solutions for your food import and distribution needs',
    image: null,
    ctaText: 'Get in Touch',
    ctaLink: '/contact'
  },
  services: [
    {
      id: 1,
      title: 'Import & Distribution',
      slug: 'import-distribution',
      summary: 'End-to-end import and distribution services for food products across Australia',
      details: 'We handle the complete import process including customs clearance, warehousing, and nationwide distribution to ensure your products reach customers efficiently and cost-effectively.',
      features: [
        'Customs clearance and documentation',
        'Warehousing and inventory management',
        'Nationwide distribution network',
        'Quality control and compliance'
      ],
      ctaLabel: 'Learn More',
      image: null
    },
    {
      id: 2,
      title: 'OEM / Private Label Services',
      slug: 'oem-private-label',
      summary: 'Custom private label and OEM solutions for your brand',
      details: 'We work with you to develop, source, and package products under your own brand name with quality assurance and compliance with Australian standards.',
      features: [
        'Product development and sourcing',
        'Custom packaging and labeling',
        'Quality assurance and compliance',
        'Brand protection and support'
      ],
      ctaLabel: 'Learn More',
      image: null
    }
  ],
  seo: {
    title: 'Services - E-Sunrise Australia | Food Import & Distribution',
    description: 'Comprehensive food import and distribution services including customs clearance, warehousing, OEM solutions, and private label services across Australia.',
    keywords: 'food import services, distribution, OEM, private label, Australia'
  }
}

// Products Page Content
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

// Industries Page Content
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

// Certifications Page Content
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

// Contact Page Content
export const contactPage = {
  hero: {
    title: 'Contact Us',
    subtitle: 'Get in touch with our team for your food import and distribution needs',
    image: null,
    ctaText: 'Send Email',
    ctaLink: 'mailto:hello@dflm.com.au'
  },
  content: {
    title: 'Get in Touch',
    text: `
      <p>Ready to partner with E-Sunrise Australia? Our team is here to help you with your food import and distribution needs.</p>
      <p>Contact us today to discuss your requirements and learn how we can support your business.</p>
    `,
    contactInfo: {
      email: 'hello@dflm.com.au',
      phone: '+61 3 1234 5678',
      address: {
        line1: '123 Business Street',
        city: 'Melbourne',
        region: 'VIC',
        country: 'Australia',
        postcode: '3000'
      }
    }
  },
  seo: {
    title: 'Contact Us - E-Sunrise Australia | Food Import & Distribution',
    description: 'Contact E-Sunrise Australia for your food import and distribution needs. Get in touch with our team for quality ingredients and reliable service.',
    keywords: 'contact, food import, distribution, Australia, customer service'
  }
}

// Service Detail Pages
export const serviceImportDistribution = {
  hero: {
    title: 'Import & Distribution',
    subtitle: 'End-to-end import and distribution services for food products across Australia',
    image: null,
    ctaText: 'Get Quote',
    ctaLink: '/contact'
  },
  content: {
    title: 'Comprehensive Import & Distribution Solutions',
    text: `
      <p>Our import and distribution services cover the complete supply chain from international sourcing to final delivery. We handle all aspects of the import process to ensure your products reach customers efficiently and cost-effectively.</p>
      <p>With our extensive network and expertise, we can help you navigate the complexities of international trade while maintaining the highest standards of quality and compliance.</p>
    `,
    features: [
      {
        title: 'Customs Clearance',
        text: 'Expert handling of all customs documentation and clearance procedures'
      },
      {
        title: 'Warehousing',
        text: 'Secure storage facilities with temperature-controlled options available'
      },
      {
        title: 'Distribution Network',
        text: 'Nationwide distribution network covering all major Australian cities'
      },
      {
        title: 'Quality Control',
        text: 'Rigorous quality control processes throughout the supply chain'
      }
    ]
  },
  seo: {
    title: 'Import & Distribution Services - E-Sunrise Australia',
    description: 'Comprehensive import and distribution services including customs clearance, warehousing, and nationwide distribution for food products across Australia.',
    keywords: 'import services, distribution, customs clearance, warehousing, Australia'
  }
}

export const serviceOEM = {
  hero: {
    title: 'OEM / Private Label Services',
    subtitle: 'Custom private label and OEM solutions for your brand',
    image: null,
    ctaText: 'Start Project',
    ctaLink: '/contact'
  },
  content: {
    title: 'Custom Branding Solutions',
    text: `
      <p>Our OEM and private label services help you develop and market products under your own brand name. We work closely with you to understand your requirements and deliver solutions that meet your quality standards and business objectives.</p>
      <p>From product development to final packaging, we provide comprehensive support to help you succeed in the market.</p>
    `,
    features: [
      {
        title: 'Product Development',
        text: 'Collaborative product development to meet your specific requirements'
      },
      {
        title: 'Custom Packaging',
        text: 'Professional packaging design and production for your brand'
      },
      {
        title: 'Quality Assurance',
        text: 'Rigorous quality control and compliance with Australian standards'
      },
      {
        title: 'Brand Support',
        text: 'Ongoing support and consultation for your brand development'
      }
    ]
  },
  seo: {
    title: 'OEM / Private Label Services - E-Sunrise Australia',
    description: 'Custom OEM and private label solutions for food products. Professional product development, packaging, and quality assurance services.',
    keywords: 'OEM, private label, product development, packaging, branding'
  }
} 