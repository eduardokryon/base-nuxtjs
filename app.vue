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
  title: 'Nome do Projeto',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
    { name: 'description', content: 'Descrição do Projeto' },
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#ffffff' },
    { name: 'author', content: 'Nome do Autor' },
    { property: 'og:title', content: 'Nome do Projeto' },
    { property: 'og:description', content: 'Descrição do Projeto' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://link-do-projeto.com' },
    { property: 'og:site_name', content: 'Nome do Projeto' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:image', content: 'https://link-do-projeto.com/share.png' },
    { property: 'og:image:width', content: '1920' },
    { property: 'og:image:height', content: '1080' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Nome do Projeto' },
    { name: 'twitter:description', content: 'Descrição do Projeto' },
    { name: 'twitter:image', content: 'https://link-do-projeto.com/share.png' }
  ],
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

watch(
  () => useRoute().path,
  () => {
    if (process.client) {
      window.scrollTo(0, 0)
    }
  }
)
</script>
