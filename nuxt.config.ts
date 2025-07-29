// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiKey: process.env.NUXT_PUBLIC_TMDB_API_KEY,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },
})
