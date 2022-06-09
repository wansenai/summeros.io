import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#EAA516", //全局样式
        },
        javascriptEnabled: true,
      },
    },
  },
})
