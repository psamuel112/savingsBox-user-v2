import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  css: [
    'vuetify/styles',
    '~/assets/css/tailwind.css',      // <-- Add this line
    '~/assets/scss/main.scss'
  ],
  build: {
    transpile: ['vuetify']
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Remove additionalData to prevent circular dependency
        }
      }
    }
  },

  compatibilityDate: '2025-05-03'
})