import { setupRouter } from '@/router'
import { createApp } from 'vue'
import App from '/APP__ROOT--MAIN.vue'
import { globalErrorHandler } from '@/utils/ERROR-HANDLER__GLOBAL--SYSTEM'
import '@/styles/global.css'
// 默认将 touch 与 wheel 事件设置为 passive，以提升滚动性能（移动端）
(() => {
  const defaultPassiveEvents = ['touchstart', 'touchmove', 'wheel']
  const originalAddEventListener = EventTarget.prototype.addEventListener
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    try {
      if (defaultPassiveEvents.includes(type)) {
        if (options === undefined) {
          options = { passive: true }
        } else if (options === false) {
          options = { passive: true }
        } else if (typeof options === 'object' && options.passive === undefined) {
          options = { ...options, passive: true }
        }
      }
    } catch (_) {
      // 安全兜底：出现异常则按原逻辑注册
    }
    return originalAddEventListener.call(this, type, listener, options)
  }
})()
import { initDefaultSEO } from '@/utils/SEO-MANAGER__DYNAMIC'

const app = createApp(App)

// Initialize global error handling before everything else
globalErrorHandler.initialize()

// 将非关键初始化推迟到浏览器空闲时执行，缩短首屏长任务
const runWhenIdle = (callback) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => callback(), { timeout: 1500 })
  } else {
    setTimeout(() => callback(), 0)
  }
}

runWhenIdle(() => {
  // Initialize default SEO meta tags (非阻塞)
  initDefaultSEO()
})

// Element Plus 不再全局注册；依赖按需自动导入（unplugin-auto-import & unplugin-vue-components）

// Make global error handler accessible globally for HTTP client and other utilities
window.globalErrorHandler = globalErrorHandler

// Setup Vue error handler integration
app.config.errorHandler = (error, componentInstance, errorInfo) => {
  globalErrorHandler.handleVueError(error, componentInstance, errorInfo)
}

// Setup application
setupRouter(app)

// Mount application
app.mount('#app')

// 将日志输出推迟到空闲时间，避免阻塞渲染
runWhenIdle(() => {
  console.log('🚀 Application started with comprehensive error handling')
  console.log('📊 Error statistics available at: window.globalErrorHandler.getStatistics()')
  console.log('🔍 SEO initialized with dynamic meta tags and structured data')
})
