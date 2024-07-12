import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://openapi.kepco.co.kr/service/EvInfoServiceV2/getEvSearchList",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      },
    },
  },
})
