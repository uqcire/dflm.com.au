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

    server: {
      host: true, // Specify server hostname - allows access from any host
      port: VITE_PORT, // Specify server port number
      open: false, // Automatically open application in browser when server starts
      strictPort: false, // Set to false to try next available port if current port is occupied
      https: false, // Whether to enable HTTPS protocol
      cors: true, // Configure CORS for development server - enabled by default and allows any origin
      proxy: {
        '/api': {
          target: 'http://localhost:8800', // Assuming your dev server is running on port 8800
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path
        }
      }
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
          manualChunks: {
            'vue-vendor': ['vue', 'vue-router'],
            'ui-vendor': ['element-plus'],
            'utils-vendor': ['axios']
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
          }
        }
      }
    },

    optimizeDeps: {
      include: ['vue', 'vue-router', 'axios', 'element-plus']
    }
  }
})