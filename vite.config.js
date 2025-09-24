import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { wrapperEnv } from './src/utils/ENV-PROCESSOR__VITE--WRAPPER'
import { createVitePlugins } from './src/utils/PLUGINS__VITE--UNIFIED'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load and process environment variables
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PUBLIC_PATH } = viteEnv

  return {
    plugins: createVitePlugins({
      isDev: mode === 'development',
      enableAutoImport: true,
      componentResolvers: [],
      enableCompression: mode === 'production',
      enableBundleAnalysis: mode === 'production',
    }),

    base: VITE_PUBLIC_PATH || '/',

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@stores': path.resolve(__dirname, 'src/stores'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        'vue': 'vue/dist/vue.esm-bundler.js'
      },
      // File extensions to omit when importing files
      extensions: [
        '.mjs',
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
      ],
    },

    // Server configuration for development
    server: {
      host: '127.0.0.1', // Keep this as 127.0.0.1 to avoid permission issues
      port: 5174, // Changed from VITE_PORT (likely 8800) to 5174 to bypass the blocking issue
      open: false, // Automatically open application in browser when server starts
      strictPort: true, // Set to true to fail if port is already in use
      https: false, // Whether to enable HTTPS protocol
    },

    build: {
      target: 'esnext',
      sourcemap: false, // 生产环境关闭sourcemap
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      // 增加chunk大小警告限制
      chunkSizeWarningLimit: 1000,
      // 启用CSS代码分割
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // 优化代码分割以减少关键请求链
          manualChunks: {
            // 将Vue核心库分离
            'vue-vendor': ['vue', 'vue-router'],
            // 将UI库分离
            'ui-vendor': ['element-plus'],
            // 将工具库分离
            'utils-vendor': ['axios', 'qs']
          },
          // 优化资源文件名 - 支持WebP和现代图片格式
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.match(/\.(png|jpe?g|svg|gif|webp|avif)$/i)) {
              return 'assets/images/[name]-[hash][extname]'
            }
            if (assetInfo.name.match(/\.(woff2?|eot|ttf|otf)$/i)) {
              return 'assets/fonts/[name]-[hash][extname]'
            }
            if (assetInfo.name.match(/\.css$/i)) {
              return 'assets/css/[name]-[hash][extname]'
            }
            return 'assets/[name]-[hash][extname]'
          },
          // 优化chunk文件名
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js'
        }
      }
    },

    // 让依赖预打包遵循真实引用路径，避免把未使用的库（如 element-plus 全量）强行打入
    optimizeDeps: {}
  }
})