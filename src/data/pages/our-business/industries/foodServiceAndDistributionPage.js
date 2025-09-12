export const foodServiceAndDistributionPage = {
    hero: {
        title: 'Supporting Food Service & Distribution Excellence',
        subtitle: 'From restaurants and catering groups to wholesale distributors, E-Sunrise Group Australia delivers safe, certified, and consistent ingredients at scale. With a strong cold-chain network and regulatory expertise, we keep your kitchens stocked and your business moving.',
        backgroundImage: '/assets/industries__card--food-service-distribution.webp',
        overlayOpacity: '50',
        fullWidth: true
    },

    statement: {
        title: 'Seamless Distribution for Food Service Success',
        description: 'In today’s fast-paced food service industry, reliability, compliance, and quality are non-negotiable. E-Sunrise Group Australia is your trusted partner for bulk supply and tailored distribution of sauces, garlic products, dehydrated vegetables, pulses, and condiments. Our HACCP and ISO-certified operations guarantee food safety, while our advanced cold-chain logistics ensure freshness from port to plate. By combining global sourcing with local distribution expertise, we empower restaurants, catering services, and wholesalers to reduce costs, streamline operations, and consistently meet customer expectations.'
    },

    challenges: {
        title: 'Overcoming Your Daily Hurdles',
        description: 'Food service operators face daily challenges balancing cost, quality, compliance, and customer satisfaction. We provide solutions that ensure your supply chain stays reliable, efficient, and ready to serve.',
        items: [
            {
                id: 'challenge-1',
                title: 'Consistent Supply Reliability',
                description: 'Shortages can disrupt menus and operations. Our established global sourcing and distribution network guarantee a steady, uninterrupted flow of key ingredients.'
            },
            {
                id: 'challenge-2',
                title: 'Food Safety & Compliance',
                description: 'HACCP, ISO, and Australian food regulations are fully integrated into our processes, ensuring every product meets strict food safety standards.'
            },
            {
                id: 'challenge-3',
                title: 'Maintaining Freshness',
                description: 'Cold-chain logistics preserve product integrity from import to delivery, giving food service businesses the confidence of stable quality.'
            },
            {
                id: 'challenge-4',
                title: 'Cost Pressures & Efficiency',
                description: 'Rising operational costs demand smarter supply chains. Through bulk purchasing and streamlined logistics, we help reduce costs without compromising quality.'
            },
            {
                id: 'challenge-5',
                title: 'Menu Flexibility & Innovation',
                description: 'Changing consumer tastes require adaptability. Our diverse portfolio of sauces, garlic-based products, pulses, and condiments gives chefs and distributors more options to innovate.'
            },
            {
                id: 'challenge-6',
                title: 'Scaling for Growth',
                description: 'Whether supplying a single restaurant or a national catering chain, our palletized distribution and container handling scale with your business as it grows.'
            }
        ]
    },

    // SEO Metadata
    seo: {
        title: 'Food Service & Distribution - E-Sunrise Australia | Restaurant & Catering Suppliers',
        description: 'Premium food ingredients for restaurants, caterers, and food service distributors. Reliable supply chain solutions with cold-chain logistics for fresh, consistent ingredients across Australia.',
        keywords: [
            'food service suppliers Australia',
            'restaurant ingredients suppliers',
            'catering food suppliers',
            'food distribution Australia',
            'restaurant supply chain',
            'food service logistics',
            'catering ingredients',
            'restaurant food suppliers',
            'food service distribution',
            'cold chain logistics',
            'food service quality',
            'restaurant supply solutions',
            'catering supply chain',
            'food service reliability',
            'restaurant ingredient sourcing'
        ],
        canonical: 'https://dflm.com.au/our-businesses/industries/food-service-and-distribution',
        og: {
            title: 'Food Service & Distribution - E-Sunrise Australia',
            description: 'Premium food ingredients for restaurants, caterers, and food service distributors. Reliable supply chain solutions with cold-chain logistics.',
            image: 'https://dflm.com.au/assets/industries__card--food-service-distribution.webp',
            url: 'https://dflm.com.au/our-businesses/industries/food-service-and-distribution',
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Food Service & Distribution - E-Sunrise Australia',
            description: 'Premium food ingredients for restaurants, caterers, and food service distributors. Reliable supply chain solutions with cold-chain logistics.',
            image: 'https://dflm.com.au/assets/industries__card--food-service-distribution.webp'
        },
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'E-Sunrise Australia',
            description: 'Premium food ingredients supplier for food service and distribution in Australia',
            url: 'https://dflm.com.au',
            logo: 'https://dflm.com.au/assets/brand__logo--icon.webp',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'AU'
            },
            serviceArea: {
                '@type': 'Country',
                name: 'Australia'
            },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Food Service & Distribution Ingredients',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Fresh Produce',
                            description: 'Premium fresh vegetables and fruits for food service applications'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Processed Garlic',
                            description: 'Fresh and processed garlic products for restaurant and catering use'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Sauces & Condiments',
                            description: 'Premium sauces and condiments for food service operations'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Pulses & Legumes',
                            description: 'High-quality pulses and legumes for food service applications'
                        }
                    }
                ]
            },
            certification: [
                'HACCP',
                'ISO 22000',
                'Food Standards Australia New Zealand (FSANZ)'
            ]
        }
    }
}