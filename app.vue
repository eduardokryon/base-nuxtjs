<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  // Default
  charset: 'utf-8',
  xUaCompatible: 'IE=edge',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  formatDetection: 'telephone=no',
  handheldfriendly: 'true',

  // Title e Description
  title: 'Nome do Projeto',
  ogTitle: 'Nome do Projeto',
  description: 'Descrição do Projeto',
  ogDescription: 'Descrição do Projeto',
  keywords: 'palavras-chave do projeto',
  robots: 'index, follow',
  googlebot: 'index, follow, max-image-preview:large',
  author: 'Nome do Autor',

  // Theme
  themeColor: '#000000',
  msapplicationTileColor: '#000000',
  msapplicationNavbuttonColor: '#000000',
  appleMobileWebAppCapable: 'yes',
  appleMobileWebAppStatusBarStyle: 'black-translucent',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppTitle: 'Nome do Projeto',
  applicationName: 'Nome do Projeto',

  // Open Graph
  ogType: 'website',
  ogUrl: 'https://link-do-projeto.com',
  ogSiteName: 'Nome do Projeto',
  ogLocale: 'pt_BR',
  ogImage: 'https://link-do-projeto.com/share.png',
  ogImageType: 'image/png',
  ogImageWidth: '1920',
  ogImageHeight: '1080',
  ogImageAlt: 'Nome do Projeto',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nome do Projeto',
  twitterDescription: 'Descrição do Projeto',
  twitterImage: 'https://link-do-projeto.com/share.png'
})

useHead({
  htmlAttrs: {
    lang: 'pt-BR'
  },
  link: [
    { rel: 'canonical', href: 'https://link-do-projeto.com' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '194x194', href: '/favicon-194x194.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '36x36', href: '/android-chrome-36x36.png' },
    { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/android-chrome-48x48.png' },
    { rel: 'icon', type: 'image/png', sizes: '72x72', href: '/android-chrome-72x72.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/android-chrome-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/android-chrome-144x144.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '256x256', href: '/android-chrome-256x256.png' },
    { rel: 'icon', type: 'image/png', sizes: '384x384', href: '/android-chrome-384x384.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})

onMounted(() => {
  if (process.client) {
    watch(
      () => useRoute().path,
      () => {
        window.scrollTo(0, 0)
      }
    )
  }
})
</script>