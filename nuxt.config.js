// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/prismic'],
  prismic: { endpoint: 'your_repository_id' },
})
