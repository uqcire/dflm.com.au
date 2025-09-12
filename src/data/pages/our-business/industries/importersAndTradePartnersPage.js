/**
 * Importers & Trade Partners Page Content for E-Sunrise Australia
 * 
 * Static content for the importers and trade partners industry page including:
 * - Hero section with industry-specific messaging
 * - Industry overview and value propositions
 * - Partnership models and solutions
 * - Global capabilities and compliance
 * - Risk mitigation and supply chain security
 * - SEO metadata optimized for importers and trade partners
 */

export const importersAndTradePartnersPage = {
    // Hero Section
    hero: {
        title: 'Building Strong Partnerships With Global Importers & Trade Networks',
        subtitle: 'E-Sunrise Group Australia partners with importers and trade professionals worldwide, supplying certified garlic, dehydrated vegetables, pulses, and sauces. With reliable logistics and compliance expertise, we make global trade simpler and more secure.',
        backgroundImage: '/assets/industries__card--importers-and-trade-partners.webp',
        overlayOpacity: '50',
        fullWidth: true
    },

    statement: {
        title: 'Global Trade Partnerships Backed by Scale and Trust',
        description: 'In international trade, trust and reliability are everything. E-Sunrise Group Australia collaborates with importers and trade partners across more than 60 countries, providing garlic, dehydrated vegetables, pulses, sauces, and bulk commodities. Every shipment is backed by HACCP, ISO, and Australian certifications, ensuring food safety, regulatory compliance, and seamless documentation. Our vertically integrated supply chain and container-scale logistics simplify global imports, while our experience in customs clearance, packaging, and distribution enables partners to save time and reduce risk. With E-Sunrise, importers gain a proven supplier that strengthens relationships and drives long-term business success.'
    },

    // Challenges Section
    challenges: {
        title: 'Overcoming the Complexities of Global Trade',
        description: 'Importers and trade partners face challenges in compliance, documentation, and stable supply. We streamline global trade with certified products, transparent processes, and reliable logistics systems.',
        items: [
            {
                id: 'challenge-1',
                title: 'Managing Compliance Across Borders',
                description: 'Different markets have strict regulations. We simplify trade with HACCP and ISO certifications, ensuring every shipment meets local and international food safety standards.'
            },
            {
                id: 'challenge-2',
                title: 'Handling Complex Documentation',
                description: 'Customs paperwork can delay imports. Our experienced team provides complete documentation, certificates, and regulatory support, ensuring faster, smoother clearance.'
            },
            {
                id: 'challenge-3',
                title: 'Securing Reliable Supply',
                description: 'Trade networks demand predictability. With diversified sourcing, containerized shipping, and global-scale facilities, we guarantee consistent supply through seasonal and market fluctuations.'
            },
            {
                id: 'challenge-4',
                title: 'Reducing Operational Risk',
                description: 'Unexpected delays or shortages disrupt partnerships. Our integrated logistics and forecasting systems reduce risk, providing importers stability in their supply chain.'
            },
            {
                id: 'challenge-5',
                title: 'Protecting Margins in Trade',
                description: 'Fluctuating freight and commodity costs impact profits. Our global contracts and optimized logistics help trade partners secure stable costs and competitive pricing.'
            },
            {
                id: 'challenge-6',
                title: 'Strengthening Global Partnerships',
                description: 'Trust is the foundation of trade. Through consistent delivery, certified quality, and responsive communication, we help importers strengthen long-term relationships with their customers.'
            }
        ]
    },

    // SEO Metadata
    seo: {
        title: 'Importers & Trade Partners - E-Sunrise Australia | Global Food Trade Solutions',
        description: 'Global food trade partnerships for importers and trade partners. Secure capacity, compliance support, and flexible cooperation models. Reduce supply chain risk and strengthen international market competitiveness.',
        keywords: [
            'food importers Australia',
            'global food trade partners',
            'international food suppliers',
            'food export partnerships',
            'global food distribution',
            'international food trade',
            'food import export',
            'global food supply chain',
            'international food compliance',
            'food trade partnerships',
            'global food logistics',
            'international food markets',
            'food export documentation',
            'global food sourcing',
            'international food partnerships'
        ],
        canonical: 'https://dflm.com.au/our-businesses/industries/importers-and-trade-partners',
        og: {
            title: 'Importers & Trade Partners - E-Sunrise Australia',
            description: 'Global food trade partnerships for importers and trade partners. Secure capacity, compliance support, and flexible cooperation models.',
            image: 'https://dflm.com.au/assets/industries__card--importers-and-trade-partners.webp',
            url: 'https://dflm.com.au/our-businesses/industries/importers-and-trade-partners',
            type: 'website'
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Importers & Trade Partners - E-Sunrise Australia',
            description: 'Global food trade partnerships for importers and trade partners. Secure capacity, compliance support, and flexible cooperation models.',
            image: 'https://dflm.com.au/assets/industries__card--importers-and-trade-partners.webp'
        },
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'E-Sunrise Australia',
            description: 'Global food trade partner for importers and international trade partners',
            url: 'https://dflm.com.au',
            logo: 'https://dflm.com.au/assets/brand__logo--icon.webp',
            address: {
                '@type': 'PostalAddress',
                addressCountry: 'AU'
            },
            serviceArea: {
                '@type': 'Place',
                name: 'Global'
            },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Global Food Trade Solutions',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Exclusive Distribution Partnerships',
                            description: 'Exclusive regional distribution rights with dedicated support'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Flexible Supply Agreements',
                            description: 'Adaptable supply arrangements for international markets'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Joint Venture Opportunities',
                            description: 'Strategic joint ventures for market development'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Private Label Solutions',
                            description: 'Custom private label products for specific markets'
                        }
                    }
                ]
            },
            certification: [
                'HACCP',
                'ISO 22000',
                'International Export Certifications',
                'Food Standards Australia New Zealand (FSANZ)'
            ]
        }
    }
}
