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
import { onMounted, onUnmounted } from 'vue'
import ErrorBoundary from '@/components/COMPONENT__ERROR-BOUNDARY--GLOBAL.vue'
import NotificationContainer from '@/components/COMPONENT__NOTIFICATION--CONTAINER.vue'
import { globalErrorHandler } from '@/utils/ERROR-HANDLER__GLOBAL--SYSTEM'

/**
 * Initialize application on mount
 */
onMounted(() => {
  console.log('🚀 Application initialized with error handling')

  // Ensure global error handler is initialized
  if (!globalErrorHandler.isInitialized) {
    globalErrorHandler.initialize()
  }

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
</script>

<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <div id="app" class="app">
      <!-- Site Navigation -->
      <header class="app__header" role="navigation" aria-label="Primary">
        <el-menu class="app__nav" mode="horizontal" :default-active="$route.path" router background-color="transparent"
          active-text-color="#B51C21" text-color="var(--color-text, #1f2937)">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
          <el-sub-menu index="/services">
            <template #title>Services</template>
            <el-menu-item index="/services/import-distribution">Import & Distribution</el-menu-item>
            <el-menu-item index="/services/oem">OEM / Private Label</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/products">Products</el-menu-item>
          <el-menu-item index="/industries">Industries</el-menu-item>
          <el-menu-item index="/certifications">Certifications</el-menu-item>
          <el-menu-item index="/blog">Blog</el-menu-item>
          <el-menu-item index="/contact">Contact</el-menu-item>
        </el-menu>
      </header>

      <!-- Global Error Boundary wraps the entire application -->
      <ErrorBoundary @error="handleError" @retry="handleRetry" @reload="handleReload" :enable-error-reporting="true"
        :auto-retry="false" :max-retries="3">
        <!-- Main Content Area -->
        <main class="app__main">
          <router-view v-slot="{ Component, route }">
            <Suspense>
              <!-- Each route component is wrapped in its own error boundary -->
              <component :is="Component" :key="route.path" />
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
    </div>
  </el-config-provider>
</template>

<style scoped>
.app {
  min-height: 100vh;
  font-family: var(--font-family-primary, 'Inter', sans-serif);
  color: var(--color-text, #1f2937);
  background: var(--color-bg, #ffffff);
  line-height: 1.6;
}

.app__header {
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: saturate(180%) blur(8px);
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid var(--color-border, #e5e7eb);
}

.app__nav {
  padding: 0 var(--space-4, 1rem);
}

.app__main {
  display: flex;
  flex-direction: column;
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

  .app__header {
    background: rgba(17, 24, 39, 0.7);
    border-bottom-color: #374151;
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
