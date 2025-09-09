/**
 * Ingredient & Bulk Suppliers Page Content for E-Sunrise Australia
 * 
 * Static content for the ingredient and bulk suppliers industry page including:
 * - Hero section with industry-specific messaging
 * - Industry overview and value propositions
 * - Product categories and solutions
 * - Manufacturing capabilities and scale
 * - Partnership benefits and capabilities
 * - SEO metadata optimized for ingredient and bulk suppliers
 */

export const ingredientAndBulkSuppliersPage = {
    // Hero Section
    hero: {
        title: 'Supplying Ingredients and Bulk Commodities with Scale and Reliability',
        subtitle: 'E-Sunrise Group Australia partners with bulk suppliers and ingredient traders, delivering garlic, dehydrated vegetables, pulses, and condiments at scale. With HACCP and ISO certifications, we guarantee consistency, compliance, and reliable supply.',
        backgroundImage: '/assets/industries__card--ingredient-bulk-suppliers.png',
        overlayOpacity: '50',
        fullWidth: true
    },

    statement: {
        title: 'Bulk Supply Solutions Built for Global Scale',
        description: 'Bulk buyers demand consistent quality, compliance, and efficiency at every step of the supply chain. At E-Sunrise Group Australia, we supply garlic, dehydrated vegetables, pulses, legumes, and sauces in bulk volumes, optimized for industrial-scale distribution. Every shipment is backed by HACCP and ISO certifications, ensuring safety and traceability. Our integrated sourcing, palletized distribution, and cold-chain logistics give ingredient traders and bulk suppliers confidence to serve their own customers with speed and reliability. By combining global reach with local Australian expertise, we help partners reduce costs, improve efficiency, and secure dependable long-term supply.'
    },

    // Challenges Section
    challenges: {
        title: 'Transforming Bulk Supply Challenges into Competitive Advantages',
        description: 'Bulk suppliers and ingredient traders face complex challenges in price stability, compliance, and volume reliability. We deliver certified, scalable, and efficient solutions that protect margins and strengthen customer trust.',
        items: [
            {
                id: 'challenge-1',
                title: 'Stabilizing Price Volatility',
                description: 'Global commodity prices swing constantly. Our long-term contracts, diversified sourcing, and optimized shipping models secure predictable costs, protecting bulk suppliers from sudden market disruptions.'
            },
            {
                id: 'challenge-2',
                title: 'Guaranteeing Quality at Scale',
                description: 'Maintaining uniform quality across large volumes is difficult. With HACCP and ISO certifications, we ensure every shipment is safe, traceable, and fully compliant.'
            },
            {
                id: 'challenge-3',
                title: 'Ensuring Volume Reliability',
                description: 'Seasonal peaks often strain supply. Our containerized distribution, palletized handling, and large-scale warehousing guarantee stable volumes to meet growing customer demand.'
            },
            {
                id: 'challenge-4',
                title: 'Compliance & Documentation',
                description: 'Navigating regulations slows operations. We provide full documentation, food safety protocols, and compliance support to reduce risk and accelerate international trade.'
            },
            {
                id: 'challenge-5',
                title: 'Driving Operational Efficiency',
                description: 'Inefficient logistics cut into margins. Through integrated cold-chain systems, optimized routes, and scalable packaging, we shorten lead times and improve turnover rates.'
            },
            {
                id: 'challenge-6',
                title: 'Strengthening Customer Retention',
                description: 'Bulk buyers demand reliability. Our consistent product quality, on-time delivery, and tailored solutions help distributors retain clients and build long-term trust.'
            }
        ]
    },

    // SEO Metadata
    seo: {
        title: 'Ingredient & Bulk Suppliers - E-Sunrise Australia | Industrial Food Ingredients',
        description: 'Bulk food ingredients for industrial applications. 100,000+ tons annual capacity of pulses, legumes, and dehydrated vegetables. Cost-effective, large-scale supply solutions for ingredient suppliers.',
        keywords: [
            'bulk food ingredients Australia',
            'industrial food ingredients',
            'bulk pulses suppliers',
            'bulk legumes suppliers',
            'dehydrated vegetables bulk',
            'ingredient suppliers Australia',
            'bulk food processing',
            'industrial food supply',
            'bulk garlic suppliers',
            'food ingredient manufacturing',
            'bulk food distributors',
            'industrial food ingredients',
            'bulk food supply chain',
            'food ingredient processing',
            'bulk food logistics'
        ],
        canonical: 'https://dflm.com.au/our-businesses/industries/ingredient-and-bulk-suppliers',
        og: {
            title: 'Ingredient & Bulk Suppliers - E-Sunrise Australia',
            description: 'Bulk food ingredients for industrial applications. 100,000+ tons annual capacity of pulses, legumes, and dehydrated vegetables.',
            image: 'https://dflm.com.au/assets/industries__card--ingredient-bulk-suppliers.png',
            url: 'https://dflm.com.au/our-businesses/industries/ingredient-and-bulk-suppliers',
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Ingredient & Bulk Suppliers - E-Sunrise Australia',
            description: 'Bulk food ingredients for industrial applications. 100,000+ tons annual capacity of pulses, legumes, and dehydrated vegetables.',
            image: 'https://dflm.com.au/assets/industries__card--ingredient-bulk-suppliers.png'
        },
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'E-Sunrise Australia',
            description: 'Bulk food ingredients supplier for industrial applications in Australia',
            url: 'https://dflm.com.au',
            logo: 'https://dflm.com.au/assets/brand__logo--icon.png',
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
                name: 'Industrial Food Ingredients',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Bulk Pulses & Legumes',
                            description: 'Large-scale supply of pulses and legumes for industrial processing'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Dehydrated Vegetables',
                            description: 'Bulk dehydrated vegetables for industrial food applications'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Garlic Products',
                            description: 'Bulk garlic products for industrial ingredient applications'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Specialty Ingredients',
                            description: 'Custom bulk ingredients for specific industrial applications'
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
