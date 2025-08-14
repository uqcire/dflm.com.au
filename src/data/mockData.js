export const mockSiteData = {
  siteSettings: {
    siteName: "E-Sunrise Australia",
    email: "hello@dflm.com.au",
    phone: "+61 03 1234 5678",
    address: {
      line1: "123 Business Street",
      city: "Melbourne",
      region: "Victoria",
      country: "Australia",
      postcode: "3000"
    },
    socials: [
      { name: "Facebook", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "Instagram", url: "#" }
    ]
  },
  pages: {
    home: {
      title: "Home",
      hero: {
        title: "E-Sunrise Australia",
        subtitle: "Quality Products, Trusted Service",
        image: "/src/assets/brand__logo--icon.png"
      },
      // ... other home page content
    },
    about: {
      title: "About Us",
      hero: {
        title: "About E-Sunrise Australia",
        subtitle: "Our Story and Mission"
      },
      // ... other about page content
    }
    // ... other pages
  },
  services: [
    {
      title: "Import & Distribution",
      slug: "import-distribution",
      summary: "Comprehensive import and distribution services...",
      details: "Detailed information about import and distribution...",
      features: [
        { title: "Global Sourcing", text: "We source products globally...", icon: "🌍" },
        // ... other features
      ]
    },
    // ... other services
  ],
  products: [
    {
      name: "Premium Garlic",
      slug: "premium-garlic",
      category: "garlic",
      specs: {
        origin: "China",
        grade: "Premium",
        moq: "1 ton",
        packaging: "Customizable"
      },
      // ... other product data
    },
    // ... other products
  ],
  // ... other content types
} 