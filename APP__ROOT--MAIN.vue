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
import ErrorBoundary from '@/components/system/COMPONENT__ERROR-BOUNDARY--GLOBAL.vue'
import NotificationContainer from '@/components/system/COMPONENT__NOTIFICATION--CONTAINER.vue'
import DevStatusBanner from '@/components/system/COMPONENT__DEV-STATUS--BANNER.vue'
import ComponentHeaderSite from '@/components/navigation/COMPONENT__HEADER--SITE.vue'
import ComponentFooterSite from '@/components/navigation/COMPONENT__FOOTER--SITE.vue'
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
    <!-- Development Status Banner -->
    <DevStatusBanner />

    <div id="app" class="app min-h-screen bg-white text-slate-900">
      <el-container class="min-h-screen">
        <!-- Site Navigation -->
        <el-header class="p-0">
          <ComponentHeaderSite />
        </el-header>

        <el-main class="p-0">
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
                    <div class="flex flex-col items-center justify-center min-h-[400px] p-8">
                      <!-- Loading Spinner -->
                      <div
                        class="app__loading-spinner w-10 h-10 border-4 border-slate-200 border-t-monza-600 rounded-full animate-spin mb-4 motion-reduce:animate-none motion-reduce:border-monza-600">
                      </div>
                      <!-- Loading Text -->
                      <p class="text-slate-600 text-sm m-0 dark:text-slate-400">Loading...</p>
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
        <el-footer class="p-0 m-0">
          <ComponentFooterSite />
        </el-footer>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style scoped>
/* Keyframes for loading spinner - keep as CSS since Tailwind doesn't support custom keyframes directly */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* Custom animation class for loading spinner */
.app__loading-spinner {
  animation: spin 1s linear infinite;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .app__loading-spinner {
    animation: none;
    border-color: var(--color-monza-600);
  }
}
</style>
