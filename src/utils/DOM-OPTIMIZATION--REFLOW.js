/**
 * DOM Reflow Optimization Utilities
 * 
 * 提供工具函数来减少强制回流，提升性能
 */

/**
 * 批量执行 DOM 测量操作，使用 requestAnimationFrame 避免强制回流
 * 
 * @param {Function} measureFn - 测量函数
 * @returns {Promise<any>} 测量结果
 */
export function measureWithoutReflow(measureFn) {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // 两次 RAF 确保在浏览器完成布局后再测量
        const result = measureFn()
        resolve(result)
      })
    })
  })
}

/**
 * 批量执行 DOM 修改，避免多次回流
 * 
 * @param {Function} modifyFn - 修改函数
 */
export function batchDOMModifications(modifyFn) {
  requestAnimationFrame(() => {
    // 先读取所有需要的值（批量读取）
    modifyFn()
    // 然后批量修改（在下一个 RAF 中）
  })
}

/**
 * 使用 ResizeObserver 替代 resize 事件（避免频繁回流）
 * 
 * @param {HTMLElement} element - 要观察的元素
 * @param {Function} callback - 回调函数
 * @returns {ResizeObserver} ResizeObserver 实例
 */
export function observeResize(element, callback) {
  if (!window.ResizeObserver) {
    // Fallback 到 debounced resize
    let rafId = null
    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        callback()
      })
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return { disconnect: () => window.removeEventListener('resize', handleResize) }
  }

  const observer = new ResizeObserver((entries) => {
    requestAnimationFrame(() => {
      callback(entries)
    })
  })
  
  observer.observe(element)
  return observer
}

/**
 * 安全获取元素尺寸（避免强制回流）
 * 
 * @param {HTMLElement} element - DOM 元素
 * @returns {Promise<DOMRect>} 元素尺寸
 */
export async function getElementSize(element) {
  return measureWithoutReflow(() => {
    return element.getBoundingClientRect()
  })
}

/**
 * 使用 matchMedia 替代直接读取窗口大小（避免回流）
 * 
 * @param {string} query - 媒体查询字符串
 * @param {Function} callback - 变化时的回调
 * @returns {Object} 清理函数
 */
export function useMediaQuery(query, callback) {
  const mediaQuery = window.matchMedia(query)
  
  const handler = (event) => {
    requestAnimationFrame(() => {
      callback(event.matches, event)
    })
  }
  
  if (mediaQuery.addListener) {
    mediaQuery.addListener(handler)
  } else {
    mediaQuery.addEventListener('change', handler)
  }
  
  // 初始调用
  handler(mediaQuery)
  
  return {
    matches: mediaQuery.matches,
    disconnect: () => {
      if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handler)
      } else {
        mediaQuery.removeEventListener('change', handler)
      }
    }
  }
}
