import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import postcssPresetEnv from 'postcss-preset-env'
import postcssPrefixer from 'postcss-prefixer'

const classPrefix = {
  name: 'class-prefixer',
  transform(code, id) {
    if (!/\.vue$/.test(id)) {
      return
    }
    return code.replaceAll(/(<style)([^<]*>)/g, (_, a, b) => a + ' scoped' + b)
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    classPrefix,
    vue(),
    qiankun('app-2', {
      useDevMode: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5175
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
        postcssPrefixer({
          prefix: 'app-2-',
          ignore: [/^(?!\.el-)/]
        }),
      ]
    }
  }
})
