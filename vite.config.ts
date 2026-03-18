/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'happy-dom',
    globals: true,
  },
})

