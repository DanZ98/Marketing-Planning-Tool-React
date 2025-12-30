import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/styles/abstracts/_variables.scss" as *; @use "./src/styles/abstracts/_mixins.scss" as *;`
      }
    }
  },
  publicDir: 'public'
})
