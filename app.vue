<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#ffffff' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
  ]
})

useSeoMeta({
  description: 'Descrição do Projeto — template base NuxtJS.',
  robots: 'index,follow',
  googlebot: 'index,follow,max-image-preview:large',
  themeColor: '#ffffff',
  ogType: 'website',
  ogTitle: 'Nome do Projeto',
  ogDescription: 'Descrição do Projeto — template base NuxtJS.',
  ogLocale: 'pt_BR',
  ogSiteName: 'Nome do Projeto',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nome do Projeto',
  twitterDescription: 'Descrição do Projeto — template base NuxtJS.'
})

// JSON-LD: Organization
useHead({
  script: [
    {
      key: 'ld-organization',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Nome do Projeto',
        url: 'https://link-do-projeto.com',
        logo: 'https://link-do-projeto.com/logo.png'
      })
    },
    {
      key: 'ld-website',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Nome do Projeto',
        url: 'https://link-do-projeto.com',
        inLanguage: 'pt-BR'
      })
    }
  ]
})

watch(
  () => useRoute().path,
  () => {
    if (process.client) {
      window.scrollTo(0, 0)
    }
  }
)
</script>
