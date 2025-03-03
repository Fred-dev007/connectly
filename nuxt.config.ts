// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/content'],
  runtimeConfig: {
    public:{
      app_url: process.env.NUXT_PUBLIC_APP_URL,
    }
  },
})
