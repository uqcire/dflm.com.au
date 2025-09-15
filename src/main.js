import { setupRouter } from '@/router'
import { createApp } from 'vue'
import App from '/APP__ROOT--MAIN.vue'
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
// 动态加载以减少初始包体积

const app = createApp(App)

// 轻量占位，避免初始化前访问报错
window.globalErrorHandler = {
  initialize: () => { },
  handleVueError: (e) => { if (import.meta.env.DEV) console.error(e) },
  getStatistics: () => ({})
}

// 将非关键初始化推迟到浏览器空闲时执行，缩短首屏长任务
const runWhenIdle = (callback) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    window.requestIdleCallback(() => callback(), { timeout: 1500 })
  } else {
    setTimeout(() => callback(), 0)
  }
}

runWhenIdle(() => {
  // 动态加载错误处理并初始化
  import('@/utils/ERROR-HANDLER__GLOBAL--SYSTEM').then(({ globalErrorHandler }) => {
    try {
      globalErrorHandler.initialize()
      window.globalErrorHandler = globalErrorHandler
    } catch (e) { if (import.meta.env.DEV) console.error(e) }
  })

  // 动态加载并初始化默认 SEO（非阻塞）
  import('@/utils/SEO-MANAGER__DYNAMIC').then(({ initDefaultSEO }) => {
    try { initDefaultSEO() } catch (e) { if (import.meta.env.DEV) console.error(e) }
  })
})

// Element Plus 不再全局注册；依赖按需自动导入（unplugin-auto-import & unplugin-vue-components）

// Setup Vue error handler integration
app.config.errorHandler = (error, componentInstance, errorInfo) => {
  const geh = window.globalErrorHandler
  if (geh && typeof geh.handleVueError === 'function') {
    geh.handleVueError(error, componentInstance, errorInfo)
  } else if (import.meta.env.DEV) {
    console.error(error)
  }
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
