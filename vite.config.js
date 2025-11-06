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
    plugins: [
      ...createVitePlugins({
        isDev: mode === 'development',
        enableAutoImport: true,
        componentResolvers: [],
        enableCompression: mode === 'production',
        enableBundleAnalysis: mode === 'production',
      }),
      // 自定义插件：异步加载 CSS
      {
        name: 'async-css-loader',
        enforce: 'post', // 确保在所有其他插件之后执行
        transformIndexHtml(html, ctx) {
          // 只在生产环境处理
          if (mode !== 'production') return html;
          
          // 替换所有 stylesheet 链接为异步加载
          return html.replace(
            /<link([^>]*rel=["']stylesheet["'][^>]*)>/gi,
            (match, attrs) => {
              // 跳过已处理的标签（已有 onload 或 media="print" 的）
              if (attrs.includes('onload') || attrs.includes('media="print"')) {
                return match;
              }
              
              // 创建异步加载的链接
              return `<link${attrs} media="print" onload="this.media='all'; this.onload=null;"><noscript><link${attrs}></noscript>`;
            }
          );
        }
      },
      // 自定义插件：添加模块预加载以优化关键请求链
      {
        name: 'module-preload',
        enforce: 'post',
        transformIndexHtml(html, ctx) {
          // 只在生产环境处理
          if (mode !== 'production') return html;
          
          const viteManifest = ctx.bundle
          if (!viteManifest) return html;
          
          // 查找入口 JS 文件
          const entryJs = Object.keys(viteManifest).find(key => 
            key.includes('index') && key.endsWith('.js')
          )
          
          if (entryJs && viteManifest[entryJs]) {
            const entryFile = viteManifest[entryJs]
            const entryPath = entryFile.file || entryJs
            
            // 查找入口文件依赖的 JS 模块（Vue core, router 等）
            const dependencies = entryFile.imports || []
            
            // 添加模块预加载链接
            let preloadLinks = ''
            
            // 预加载入口文件本身
            preloadLinks += `<link rel="modulepreload" href="/${entryPath}" crossorigin>\n    `
            
            // 预加载关键依赖（Vue core, router）
            dependencies.forEach(dep => {
              if (viteManifest[dep] && viteManifest[dep].file) {
                const depFile = viteManifest[dep].file
                // 只预加载关键的同步依赖，避免预加载太多
                if (depFile.includes('vue-core') || depFile.includes('vue-router')) {
                  preloadLinks += `<link rel="modulepreload" href="/${depFile}" crossorigin>\n    `
                }
              }
            })
            
            // 在 </head> 之前插入预加载链接
            return html.replace('</head>', `    ${preloadLinks}</head>`)
          }
          
          return html
        }
      }
    ],

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
      allowedHosts: ['webhook.dflm.com.au'],
      // 禁用 HMR overlay 来避免错误干扰（可选）
      hmr: {
        overlay: false
      }
    },

    build: {
      target: 'esnext',
      sourcemap: false, // 生产环境关闭sourcemap
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
        }
      },
      // 增加chunk大小警告限制
      chunkSizeWarningLimit: 1000,
      // 启用CSS代码分割
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // 优化代码分割以减少关键请求链
          manualChunks(id) {
            if (id.includes('node_modules')) {
              // Vue 核心（单独拆分，优先加载）
              if (id.includes('vue/dist') || (id.includes('vue') && !id.includes('vue-router'))) {
                return 'vue-core'
              }
              
              // Vue Router（单独拆分）
              if (id.includes('vue-router')) {
                return 'vue-router'
              }
              
              // Element Plus 及其依赖（保持在一起避免导入问题）
              if (id.includes('element-plus') || id.includes('dayjs')) {
                return 'ui-vendor'
              }
              
              // 其他工具库
              if (id.includes('axios') || id.includes('qs')) {
                return 'utils-vendor'
              }
              
              if (id.includes('@supabase')) {
                return 'supabase-vendor'
              }
              
              // 其他第三方库
              return 'vendor'
            }
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
    optimizeDeps: {
      include: [
        'vue',
        'vue-router'
      ],
    },
    define: {
      // 确保环境变量被正确传递
      __VITE_SUPABASE_URL__: JSON.stringify(env.VITE_SUPABASE_URL),
      __VITE_SUPABASE_ANON_KEY__: JSON.stringify(env.VITE_SUPABASE_ANON_KEY),
    }
  }
})