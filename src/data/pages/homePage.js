/**
 * Home Page Content for E-Sunrise Australia
 * 
 * Static content for the home page including hero section,
 * content blocks, features, and SEO metadata.
 */

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

export default homePage 