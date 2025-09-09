/**
 * Supermarkets & Custom Brands Page Content for E-Sunrise Australia
 * 
 * Static content for the supermarkets and custom brands industry page including:
 * - Hero section with industry-specific messaging
 * - Industry overview and value propositions
 * - Private label and OEM solutions
 * - Retail partnership benefits
 * - Health and wellness positioning
 * - SEO metadata optimized for supermarkets and custom brands
 */

export const supermarketsAndCustomBrandsPage = {
    // Hero Section
    hero: {
        title: 'Building Retail Brands That Win on Every Shelf',
        subtitle: 'Our expertise in product development and private label manufacturing helps supermarkets create distinctive offerings that stand out, strengthen loyalty, and increase category share.',
        backgroundImage: '/assets/industries__card--supermarkets-custom-brands.png',
        overlayOpacity: '50',
        fullWidth: true
    },

    statement: {
        title: 'Supermarket Success Starts with the Right Partner',
        description: 'In today’s competitive retail environment, supermarkets and custom brand owners need suppliers who can deliver quality, consistency, and differentiation. E-Sunrise Australia empowers retailers with garlic-based sauces, dehydrated vegetables, and specialty condiments designed to meet shifting consumer preferences. With HACCP, ISO, and Australian compliance, we ensure every product is safe, reliable, and ready for the shelf. Our expertise in private label development, packaging versatility, and trend-driven innovation allows supermarkets to capture more value from their categories and build enduring trust with shoppers.'
    },

    // Challenges Section
    challenges: {
        title: 'Turning Retail Pressures into Market Advantages',
        description: 'Supermarkets face daily challenges balancing cost, quality, consumer demand, and brand reputation. We help retailers transform these hurdles into opportunities for growth.',
        items: [
            {
                id: 'challenge-1',
                title: 'Price Competitiveness',
                description: 'Compete on price without eroding quality or margins by leveraging our global sourcing, optimized freight, and efficiencies that lower landed cost while preserving certified standards across every private-label line.'
            },
            {
                id: 'challenge-2',
                title: 'Shelf Differentiation',
                description: 'Create shelf impact with distinctive garlic-based sauces and condiments, tailored flavor profiles, and premium packaging systems that elevate private-label perception, drive category growth, and encourage repeat purchases across banners.'
            },
            {
                id: 'challenge-3',
                title: 'Quality Consistency & Brand Trust',
                description: 'Protect brand trust through rigorous HACCP and ISO programs, ingredient traceability, and validated specifications that ensure uniform taste, texture, safety, and performance across batches, facilities, and national retail distribution.'
            },
            {
                id: 'challenge-4',
                title: 'Packaging Flexibility',
                description: 'Balancing quality with cost efficiency is essential for private label profitability. Our economies of scale and efficient manufacturing processes deliver competitive pricing without compromising quality.'
            },
            {
                id: 'challenge-5',
                title: 'Supply Reliability',
                description: 'Stabilize availability through integrated sourcing, cold-chain warehousing, and multi-modal logistics; our forecasting and safety-stock programs reduce out-of-stocks, shorten lead times, and protect category performance during demand spikes.'
            }
        ]
    },

    // SEO Metadata
    seo: {
        title: 'Supermarkets & Custom Brands - E-Sunrise Australia | Private Label Solutions',
        description: 'Private label solutions for supermarkets and retail chains. Custom OEM products, garlic sauces, packaged legumes, and health-focused ingredients. Build distinctive private label brands that drive customer loyalty.',
        keywords: [
            'private label manufacturers Australia',
            'supermarket private label',
            'retail private label solutions',
            'OEM food manufacturing',
            'custom brand products',
            'private label condiments',
            'retail food suppliers',
            'supermarket suppliers Australia',
            'private label development',
            'custom food formulations',
            'retail brand solutions',
            'private label packaging',
            'supermarket partnerships',
            'retail food manufacturing',
            'private label innovation'
        ],
        canonical: 'https://dflm.com.au/our-businesses/industries/supermarkets-and-custom-brands',
        og: {
            title: 'Supermarkets & Custom Brands - E-Sunrise Australia',
            description: 'Private label solutions for supermarkets and retail chains. Custom OEM products and health-focused ingredients for distinctive private label brands.',
            image: 'https://dflm.com.au/assets/industries__card--supermarkets-custom-brands.png',
            url: 'https://dflm.com.au/our-businesses/industries/supermarkets-and-custom-brands',
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Supermarkets & Custom Brands - E-Sunrise Australia',
            description: 'Private label solutions for supermarkets and retail chains. Custom OEM products and health-focused ingredients for distinctive private label brands.',
            image: 'https://dflm.com.au/assets/industries__card--supermarkets-custom-brands.png'
        },
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'E-Sunrise Australia',
            description: 'Private label solutions provider for supermarkets and retail chains in Australia',
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
                name: 'Private Label Solutions',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Private Label Development',
                            description: 'Custom product development and formulation for private label programs'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'OEM Manufacturing',
                            description: 'Original Equipment Manufacturing for retail private label products'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Custom Formulations',
                            description: 'Tailored product formulations for specific retail requirements'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Health & Wellness Products',
                            description: 'Functional food ingredients for health and wellness applications'
                        }
                    }
                ]
            },
            certification: [
                'HACCP',
                'ISO 22000',
                'Food Standards Australia New Zealand (FSANZ)',
                'Retail Quality Standards'
            ]
        }
    }
}
