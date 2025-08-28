/**
 * Explore Cards Data for E-Sunrise Australia
 * Contains card data for the "Explore More" section across different pages
 */

export const exploreCards = {
  title: 'Explore more',
  columns: { base: 1, md: 3 },
  gap: 'lg',
  home: {
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))',
    cards: [
      {
        title: 'Our Company',
        description: 'Discover how we bring progress to life through purpose-led science.',
        image: '/src/assets/explore/our-company.png',
        alt: 'Our Company',
        link: '/about'
      },
      {
        title: 'Our Newsroom',
        description: 'Read more about news from DFLM Group and its businesses. Explore company updates, industry insights, and announcements that reflect our growth and innovation. Stay informed on milestones, product launches, and the latest developments shaping our future.',
        image: '/src/assets/explore/newsroom.png',
        alt: 'Newsroom',
        link: '/blog'
      },
      {
        title: 'Our Businesses',
        description: 'Four complementary businesses, all powered by purpose, people, and innovation.',
        image: '/src/assets/explore/our-business.png',
        alt: 'Our Businesses',
        link: '/services'
      }
    ],
  },
  about: {
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))',
    cards: [
      {
        title: 'Our Newsroom',
        description: 'Read more about news from DFLM Group and its businesses. Explore company updates, industry insights, and announcements that reflect our growth and innovation. Stay informed on milestones, product launches, and the latest developments shaping our future.',
        image: '/src/assets/explore/newsroom.png',
        alt: 'Newsroom',
        link: '/news'
      },
      {
        title: 'Our Industries',
        description: 'Explore how our manufacturing strength and supply chain expertise support manufacturers, distributors, and retailers in building reliable food supply chains.',
        image: '/src/assets/explore/industries.png',
        alt: 'Industries',
        link: '/industries'
      },
      {
        title: 'Our Businesses',
        description: 'Four complementary businesses, all powered by purpose, people, and innovation.',
        image: '/src/assets/explore/our-business.png',
        alt: 'Our Businesses',
        link: '/services'
      }
    ],
  },
  
  ourBusinesses: {
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))',
    cards: [
      {
        title: 'Our Newsroom',
        description: 'Read more about news from DFLM Group and its businesses. Explore company updates, industry insights, and announcements that reflect our growth and innovation. Stay informed on milestones, product launches, and the latest developments shaping our future.',
        image: '/src/assets/explore/newsroom.png',
        alt: 'Newsroom',
        link: '/blog'
      },
      {
        title: 'Our Industries',
        description: 'Explore how our manufacturing strength and supply chain expertise support manufacturers, distributors, and retailers in building reliable food supply chains.',
        image: '/src/assets/explore/industries.png',
        alt: 'Industries',
        link: '/industries'
      },
      {
        title: 'Our Businesses',
        description: 'Four complementary businesses, all powered by purpose, people, and innovation.',
        image: '/src/assets/explore/our-business.png',
        alt: 'Our Businesses',
        link: '/services'
      }
    ],
  },

  products: {
    title: 'Explore more',
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))',
    cards: [
      {
        title: 'Our Services',
        description: 'Discover our comprehensive supply chain solutions and OEM services.',
        image: '/src/assets/home/explore-card__our-business.jpg',
        link: '/services'
      },
      {
        title: 'Industries We Serve',
        description: 'Learn how we support food manufacturers, distributors, and retailers.',
        image: '/src/assets/explore/industries.png',
        link: '/industries'
      },
      {
        title: 'About Our Company',
        description: 'Understand our global scale and local reliability approach.',
        image: '/src/assets/home/explore-card__our-company.jpg',
        link: '/about'
      }
    ],
  },
  
  services: {
    title: 'Explore more',
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))',
    cards: [
      {
        title: 'Our Products',
        description: 'Explore our range of dehydrated vegetables, garlic products, and more.',
        image: '/src/assets/home/product-card__garlic.jpg',
        link: '/products'
      },
      {
        title: 'Industries We Serve',
        description: 'See how we support various food industry sectors.',
        image: '/src/assets/explore/industries.png',
        link: '/industries'
      },
      {
        title: 'Our Company',
        description: 'Learn about our global manufacturing capabilities.',
        image: '/src/assets/home/explore-card__our-company.jpg',
        link: '/about'
      }
    ],
  },
  
  industries: {
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))',
    cards: [
      {
        title: 'Our Products',
        description: 'Discover our high-quality food ingredients and solutions.',
        image: '/src/assets/home/product-card__garlic.jpg',
        link: '/products'
      },
      {
        title: 'Our Services',
        description: 'Explore our comprehensive supply chain and OEM services.',
        image: '/src/assets/home/service-card__supply-chain.png',
        link: '/services'
      },
      {
        title: 'About Us',
        description: 'Learn about our global manufacturing expertise.',
        image: '/src/assets/home/explore-card__our-company.jpg',
        link: '/about'
      }
    ],
  },
  
  contact: {
    background: 'transparent',
    backgroundStyle: 'background-color: hsl(var(--tree-poppy-100))',
    cards: [
      {
        title: 'Our Products',
        description: 'Explore our range of food ingredients and solutions.',
        image: '/src/assets/home/product-card__garlic.jpg',
        link: '/products'
      },
      {
        title: 'Our Services',
        description: 'Discover our supply chain and manufacturing services.',
        image: '/src/assets/home/service-card__supply-chain.png',
        link: '/services'
      },
      {
        title: 'About Our Company',
        description: 'Learn about our global manufacturing capabilities.',
        image: '/src/assets/home/explore-card__our-company.jpg',
        link: '/about'
      }
    ],
  }
}

export default exploreCards 
