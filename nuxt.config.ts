export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxt/image', '@pinia/nuxt', 'aeo.js/nuxt'],
  css: ['~/assets/css/index.sass'],
  app: {
    head: {
      title: 'Nome do Projeto',
      titleTemplate: '%s | Nome do Projeto',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://link-do-projeto.com'
    }
  },
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
  },
  aeo: {
    title: 'Base NuxtJs',
    description: 'Base template NuxtJS com SASS, SSR, Otimização de imagens e Pinia — otimizado para descoberta por IA e mecanismos de resposta.',
    url: 'https://eduardolecdt.com.br',
    schema: {
      organization: {
        name: 'Eduardo Brito',
        url: 'https://github.com/eduardolecdt'
      }
    },
    og: {
      enabled: true,
      twitterHandle: '@eduardolecdt'
    },
    widget: {
      enabled: false
    }
  }
})
