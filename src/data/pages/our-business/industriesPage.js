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
    backgroundImage: '/assets/industries__hero--infrastructure-scale.png',
    overlayOpacity: '50',
    fullWidth: true
  },

  // Industries Data
  industries: [
    {
      title: 'Food Manufacturers & Processors',
      description: 'We supply dehydrated vegetables, garlic products, sauces, pulses, and legumes to food manufacturers and processors. With HACCP and ISO certifications, we ensure consistent, safe, and traceable ingredients for large-scale production.',
      image: '/assets/explore/explore__card--our-business.png',
      linkUrl: '/our-businesses/industries/food-manufacturers-and-processors'
    },
    {
      title: 'Food Service & Distribution',
      description: 'From restaurants to catering suppliers, we support Australia\'s food service industry through strong distributor partnerships. Our cold-chain logistics and scalable supply guarantee freshness, efficiency, and long-term reliability.',
      image: '/assets/explore/explore__card--our-company.png',
      linkUrl: '/our-businesses/industries/food-service-and-distribution'
    },
    {
      title: 'Supermarkets & Custom Brands',
      description: 'We partner with retail chains and supermarkets to deliver tailored OEM solutions. From garlic sauces to packaged legumes, we help retailers build distinctive, compliant, and trusted private label products.Want to create foods and beverages that benefit health & wellbeing? We offer ingredients that support digestive health, immunity, and overall wellness.',
      image: '/assets/explore/explore__card--newsroom.png',
      linkUrl: '/our-businesses/industries/supermarkets-and-custom-brands'
    },
    {
      title: 'Ingredient & Bulk Suppliers',
      description: 'Bulk pulses, legumes, and dehydrated vegetables are at the core of many ingredient suppliers. With 100,000+ tons annual production capacity, we offer stable, cost-effective, and large-scale supply for industrial applications.',
      image: '/assets/explore/explore__card--newsroom.png',
      linkUrl: '/our-businesses/industries/ingredient-and-bulk-suppliers'
    },
    {
      title: 'Importers & Trade Partners',
      description: 'We work with global importers and trade partners to provide secure capacity, compliance support, and flexible cooperation models. Our proven expertise reduces supply chain risk and strengthens competitiveness in international markets.',
      image: '/assets/explore/explore__card--newsroom.png',
      linkUrl: '/our-businesses/industries/importers-and-trade-partners'
    }
  ],

  // CTA Section
  cta: {
    title: 'Let’s Build Stronger Partnerships and Grow Together',
    description: 'Your business deserves a partner that delivers more than products. We deliver reliability, scale, and innovation. From manufacturers to retailers, we power success across industries. Connect with us today and turn supply chain challenges into new opportunities.',
    buttonText: 'Start the Conversation',
    buttonLink: '/contact',
    background: 'transparent',
    backgroundColor: 'tree-poppy-200',
    backgroundStyle: ''
  },

  // SEO Metadata
  seo: {
    title: 'Industries - E-Sunrise Australia | Food Industry Solutions',
    description: 'Serving food manufacturing, retail, and food service industries with premium ingredients and reliable supply chain solutions.',
    keywords: 'food manufacturing, retail, food service, ingredients, supply chain'
  }
}

export default industriesPage 