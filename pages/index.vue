<template>
  <SectionHero />
</template>

<script setup>
import { usePageSeo } from '~/composables/usePageSeo'

usePageSeo({
  title: 'Início',
  description: 'Descrição do Projeto — template base NuxtJS.',
  path: '/'
})
</script>
