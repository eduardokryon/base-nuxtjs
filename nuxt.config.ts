export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/image', '@pinia/nuxt'],
  css: ['~/assets/css/index.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern-compiler'
        }
      }
    }
  },
  image: {
    quality: 80,
    format: ['webp']
  }
})
