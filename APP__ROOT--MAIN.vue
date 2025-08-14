<!--
  Root Application Component
  
  This is the main application component that wraps all other components
  with error boundaries, notifications, and global error handling.
  
  BEM Naming: APP__ROOT--MAIN
  - Block: APP (application level)
  - Element: ROOT (root component)
  - Modifier: MAIN (primary application entry point)
-->

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import ErrorBoundary from '@/components/COMPONENT__ERROR-BOUNDARY--GLOBAL.vue'
import NotificationContainer from '@/components/COMPONENT__NOTIFICATION--CONTAINER.vue'
import ComponentHeaderSite from '@/components/COMPONENT__HEADER--SITE.vue'
import ComponentFooterSite from '@/components/COMPONENT__FOOTER--SITE.vue'
import { globalErrorHandler } from '@/utils/ERROR-HANDLER__GLOBAL--SYSTEM'

/**
 * Initialize application on mount
 */
onMounted(() => {
  console.log('🚀 Application initialized with error handling')

  // Add custom error handler for demonstration
  globalErrorHandler.addEventListener((errorInfo) => {
    console.log('Application received error event:', errorInfo)
  })
})

/**
 * Cleanup on unmount
 */
onUnmounted(() => {
  console.log('🔄 Application cleanup')
  globalErrorHandler.cleanup()
})

/**
 * Handle error boundary events
 */
function handleError(errorEvent) {
  console.log('Error boundary caught error:', errorEvent)

  // Show user-friendly notification
  if (window.notifications) {
    window.notifications.error(
      'A component error occurred. The page will attempt to recover automatically.',
      {
        title: 'Component Error',
        duration: 8000,
        actions: [
          {
            label: 'Reload Page',
            type: 'primary',
            handler: () => window.location.reload()
          }
        ]
      }
    )
  }
}

/**
 * Handle retry events from error boundary
 */
function handleRetry(retryCount) {
  console.log(`Retry attempt #${retryCount}`)

  if (window.notifications) {
    window.notifications.info(
      `Attempting to recover from error (attempt ${retryCount})...`,
      {
        duration: 3000
      }
    )
  }
}

/**
 * Handle reload events from error boundary
 */
function handleReload() {
  console.log('Reloading application due to error')

  if (window.notifications) {
    window.notifications.info('Reloading application...', {
      duration: 2000
    })
  }
}

import { ElConfigProvider } from 'element-plus'

const size = ref('small')
const zIndex = ref(3000)
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <div id="app" class="app">
      <el-container>

        <!-- Site Navigation -->
        <el-header>
          <ComponentHeaderSite />
        </el-header>

        <el-main>
          <!-- Global Error Boundary wraps the entire application -->
          <ErrorBoundary @error="handleError" @retry="handleRetry" @reload="handleReload"
            :enable-error-reporting="false" :auto-retry="false" :max-retries="3">
            <!-- Main Content Area -->
            <main class="app__main">
              <router-view v-slot="{ Component, route }">
                <Suspense>
                  <!-- Each route component is wrapped in its own error boundary -->
                  <div>
                    <component :is="Component" :key="route.path" />
                  </div>
                  <template #fallback>
                    <div class="app__loading">
                      <div class="app__loading-spinner"></div>
                      <p class="app__loading-text">Loading...</p>
                    </div>
                  </template>
                </Suspense>
              </router-view>
            </main>
          </ErrorBoundary>

          <!-- Global Notification System -->
          <NotificationContainer />
        </el-main>

        <!-- Site Footer -->
        <el-footer>
          <ComponentFooterSite />
        </el-footer>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style scoped>
.app {
  min-height: 100vh;
}

.app__loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: var(--space-8, 2rem);
}

.app__loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-border, #e5e7eb);
  border-top: 4px solid var(--color-primary, #3b82f6);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: var(--space-4, 1rem);
}

.app__loading-text {
  color: var(--color-text-secondary, #6b7280);
  font-size: var(--font-size-sm, 0.875rem);
  margin: 0;
}

.el-header,
.el-main,
.el-footer {
  padding: 0
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
  .app {
    background: var(--color-bg-dark, #111827);
    color: var(--color-text-dark, #f9fafb);
  }

  .app__loading-spinner {
    border-color: var(--color-border-dark, #374151);
    border-top-color: var(--color-primary, #3b82f6);
  }

  .app__loading-text {
    color: var(--color-text-secondary-dark, #d1d5db);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .app__loading-spinner {
    animation: none;
    border: 4px solid var(--color-primary, #3b82f6);
  }
}
</style>
