import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { createApp } from 'vue'
import App from '/APP__ROOT--MAIN.vue'
import { globalErrorHandler } from '@/utils/ERROR-HANDLER__GLOBAL--SYSTEM'
import ElementPlus from 'element-plus'
import '@/styles/global.css'
import { initDefaultSEO } from '@/utils/SEO-MANAGER__DYNAMIC'

const app = createApp(App)

// Initialize global error handling before everything else
globalErrorHandler.initialize()

// Initialize default SEO meta tags
initDefaultSEO()

// Add Element Plus plugin
app.use(ElementPlus)

// Make global error handler accessible globally for HTTP client and other utilities
window.globalErrorHandler = globalErrorHandler

// Setup Vue error handler integration
app.config.errorHandler = (error, componentInstance, errorInfo) => {
  globalErrorHandler.handleVueError(error, componentInstance, errorInfo)
}

// Setup application
setupRouter(app)
setupStore(app)

// Mount application
app.mount('#app')

// Log successful initialization
console.log('🚀 Application started with comprehensive error handling')
console.log('📊 Error statistics available at: window.globalErrorHandler.getStatistics()')
console.log('🔍 SEO initialized with dynamic meta tags and structured data')
