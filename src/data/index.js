/**
 * Content Index for E-Sunrise Australia Website
 * 
 * This file exports all static content organized by individual files
 * for better separation of concerns and easier content management.
 */

// Site-wide settings
export { siteSettings } from './siteSettings.js'

// Main page content
export { homePage } from './pages/homePage.js'
export { aboutPage } from './pages/aboutPage.js'
export { servicesPage } from './pages/servicesPage.js'
export { productsPage } from './pages/productsPage.js'
export { industriesPage } from './pages/industriesPage.js'
export { certificationsPage } from './pages/certificationsPage.js'
export { contactPage } from './pages/contactPage.js'

// Service detail pages
export { serviceImportDistribution } from './pages/services/importDistribution.js'
export { serviceOEM } from './pages/services/oemPrivateLabel.js'

// Alternative import paths (choose one approach)
// Option 1: Import from individual files (recommended)
// import { homePage } from '@/data/pages/homePage.js'

// Option 2: Import from index (for convenience)
// import { homePage } from '@/data/index.js'

// Option 3: Import from legacy staticContent.js (temporary) 