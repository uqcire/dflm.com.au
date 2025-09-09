/**
 * Content Index for E-Sunrise Australia Website
 * 
 * This file exports all static content organized by individual files
 * for better separation of concerns and easier content management.
 */

// Main page content
export { homePage } from './pages/homePage.js'
export { companyPage } from './pages/our-company/companyPage.js'
export { historyPage } from './pages/our-company/historyPage.js'
export { businessesPage } from './pages/our-business/businessesPage.js'
export { productsPage } from './pages/our-products/productsPage.js'
export { freshProduce } from './pages/our-products/freshProducePage.js'
export { processedGarlic } from './pages/our-products/processedGarlicPage.js'
export { condimentsSauces } from './pages/our-products/condimentsSaucesPage.js'
export { snacksConsumer } from './pages/our-products/snacksConsumerPage.js'
export { broaderAgriculture } from './pages/our-products/broaderAgriculturePage.js'
export { industriesPage } from './pages/our-business/industries/industriesPage.js'
export { foodManufacturersAndProcessorsPage } from './pages/our-business/industries/foodManufacturersAndProcessorsPage.js'
export { foodServiceAndDistributionPage } from './pages/our-business/industries/foodServiceAndDistributionPage.js'
export { ingredientAndBulkSuppliersPage } from './pages/our-business/industries/ingredientAndBulkSuppliersPage.js'
export { importersAndTradePartnersPage } from './pages/our-business/industries/importersAndTradePartnersPage.js'
export { supermarketsAndCustomBrandsPage } from './pages/our-business/industries/supermarketsAndCustomBrandsPage.js'
export { contactPage } from './pages/contactPage.js'

// Service detail pages
export { serviceImportDistribution } from './pages/our-business/importDistribution.js'
export { serviceOEM } from './pages/our-business/oemPrivateLabel.js'

// Component data
export { exploreCards } from './components/exploreCards.js'
export { footerLinks, socialLinks } from './components/footerLinks.js'

// Alternative import paths (choose one approach)
// Option 1: Import from individual files (recommended)
// import { homePage } from '@/data/pages/homePage.js'

// Option 2: Import from index (for convenience)
// import { homePage } from '@/data/index.js'