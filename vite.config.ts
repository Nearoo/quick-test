import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/quick-test/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2022',
    rollupOptions: {
      output: {
        format: 'es'
      }
    }
  },
  esbuild: {
    target: 'es2022'
  }
})
