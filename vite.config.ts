import { defineConfig } from 'vite'
import { VitePluginFonts } from 'vite-plugin-fonts'
import * as path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ['Volkhov'],
      },
    }),
  ],
  server: {
    port: 3002
  },
  resolve: {
    alias: [
      { find: /@src/, replacement: path.resolve(__dirname, './src') },
      { find: "/image", replacement: "src/assets/images" },
      { find: "image", replacement: "src/assets/images" },
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "primary-color": "#67B83C", //全局样式
        },
        javascriptEnabled: true,
      },
    },
  },
})
