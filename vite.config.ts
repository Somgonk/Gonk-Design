import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({ include: ['lib'] }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      input: Object.fromEntries(
        glob.sync('{lib/main.ts,lib/components/**/*.vue}').map(file => [
        relative(
          'lib',
          file.slice(0, file.length - extname(file).length)
        ),
        fileURLToPath(new URL(file, import.meta.url))
        ])),
        output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        globals: {
          vue: 'Vue'
        }
      }
    },
    copyPublicDir: false,
  }
})
