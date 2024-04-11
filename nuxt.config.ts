// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/pwa'],
  devtools: { enabled: true },
  pwa: {
    icon: {

    }
  }
})
