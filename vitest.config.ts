/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat all q-* tags as custom elements globally in tests
          isCustomElement: (tag) => tag.startsWith('q-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
      tests: fileURLToPath(new URL('./tests', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
  },
})
