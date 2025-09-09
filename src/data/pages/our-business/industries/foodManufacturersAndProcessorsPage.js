export const foodManufacturersAndProcessorsPage = {
    hero: {
        title: 'Powering Food Production with Confidence',
        subtitle: 'Trusted garlic, vegetables, and pulses backed by HACCP and ISO.',
        backgroundImage: '/assets/industries__card--food-processing.png',
        overlayOpacity: '50',
        fullWidth: true
    },

    statement: {
        title: 'Empowering Food Manufacturers & Processors with Certified Ingredients, Scalable Supply Chains, and Trusted Global Partnerships',
        description: 'E-Sunrise Group Australia stands at the forefront of supplying premium ingredients to food manufacturers and processors worldwide. From dehydrated vegetables, garlic products, and sauces to pulses and legumes, our portfolio is designed to meet the evolving demands of modern food production. Every shipment is backed by HACCP, ISO, and Australian regulatory certifications, ensuring safety, consistency, and compliance at every stage. With decades of global sourcing experience, integrated cold-chain logistics, and pallet-to-container scale capabilities, we help manufacturers streamline operations, reduce risks, and secure reliable inputs for long-term growth. By bridging international networks with local expertise, we deliver more than just ingredients, we deliver confidence, efficiency, and sustainable value to every partner we serve.'
    },

    challenges: {
        title: 'Tackling Your Key Food Manufacturing Challenges',
        description: 'To create differentiated food products, you need a partner who understands the evolving demands of global consumers, and who can deliver consistent, certified, and scalable ingredient solutions. We help manufacturers and processors stay ahead with reliability, compliance, and innovation.',
        items: [
            {
                id: 'challenge-1',
                title: 'Consistent Quality at Scale',
                description: 'Maintaining uniform taste, texture, and nutritional value across high-volume production can be challenging. With HACCP and ISO-certified processes, we ensure every batch of dehydrated vegetables, garlic products, sauces, pulses, and legumes meets exacting standards.'
            },
            {
                id: 'challenge-2',
                title: 'Cost Efficiency Without Compromise',
                description: 'Manufacturers face constant pressure to balance product quality with competitive pricing. Our global sourcing network and optimized supply chain allow us to deliver premium ingredients at scale while keeping costs efficient.'
            },
            {
                id: 'challenge-3',
                title: 'Flexible Solutions for Diverse Needs',
                description: 'Whether you require bulk raw materials, tailored formulations, or semi-processed products, our portfolio adapts to your production demands. From dry granules to sauces, we support a wide range of applications across cuisines and categories.'
            },
            {
                id: 'challenge-4',
                title: 'Food Safety & Regulatory Compliance',
                description: 'Global markets demand strict adherence to safety and compliance. We guarantee full traceability and alignment with HACCP, ISO, and Australian standards, giving you peace of mind for both domestic and international distribution.'
            },
            {
                id: 'challenge-5',
                title: 'Reliable Supply & Cold-Chain Logistics',
                description: 'Interruptions in sourcing and delivery can disrupt entire operations. Our established cold-chain logistics and containerized distribution ensure timely, secure, and stable delivery of ingredients, protecting freshness and consistency.'
            }
        ]
    },

    // SEO Metadata
    seo: {
        title: 'Food Manufacturers & Processors - E-Sunrise Australia | Certified Food Ingredients',
        description: 'Premium food ingredients for manufacturers and processors. HACCP & ISO certified dehydrated vegetables, garlic products, sauces, and pulses. Reliable supply chain solutions for large-scale food production in Australia.',
        keywords: [
            'food manufacturers Australia',
            'food processors ingredients',
            'dehydrated vegetables suppliers',
            'garlic products manufacturers',
            'HACCP certified ingredients',
            'ISO 22000 food ingredients',
            'food production ingredients',
            'bulk food ingredients Australia',
            'food manufacturing suppliers',
            'certified food ingredients',
            'food safety compliance',
            'traceable food ingredients',
            'food industry suppliers',
            'manufacturing ingredients',
            'food processing solutions'
        ],
        canonical: 'https://dflm.com.au/our-businesses/industries/food-manufacturers-and-processors',
        og: {
            title: 'Food Manufacturers & Processors - E-Sunrise Australia',
            description: 'Premium certified food ingredients for manufacturers and processors. HACCP & ISO certified supply chain solutions.',
            image: 'https://dflm.com.au/assets/industries__card--food-processing.png',
            url: 'https://dflm.com.au/our-businesses/industries/food-manufacturers-and-processors',
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Food Manufacturers & Processors - E-Sunrise Australia',
            description: 'Premium certified food ingredients for manufacturers and processors. HACCP & ISO certified supply chain solutions.',
            image: 'https://dflm.com.au/assets/industries__card--food-processing.png'
        },
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'E-Sunrise Australia',
            description: 'Premium food ingredients supplier for manufacturers and processors in Australia',
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
                name: 'Food Manufacturing Ingredients',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Dehydrated Vegetables',
                            description: 'HACCP certified dehydrated vegetables for food manufacturing'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Garlic Products',
                            description: 'Premium garlic products for food processing applications'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Sauces & Condiments',
                            description: 'Custom formulated sauces and condiments for OEM applications'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Product',
                            name: 'Pulses & Legumes',
                            description: 'High-quality pulses and legumes for food manufacturing'
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