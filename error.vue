<template>
  <section class="erro">
    <div class="erro-content">
      <h1>{{ error?.statusCode || 'Erro' }}</h1>
      <p>{{ error?.statusMessage || 'Página não encontrada' }}</p>
      <NuxtLink to="/">Voltar ao início</NuxtLink>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    default: () => ({})
  }
})

const statusLabel = computed(() => props.error?.statusCode || 'Erro')

useSeoMeta({
  title: `Erro ${statusLabel.value}`,
  description: 'Página não encontrada.',
  robots: 'noindex,nofollow',
  googlebot: 'noindex,nofollow'
})
</script>

<style lang="sass" scoped>
section.erro
  display: flex
  align-items: center
  justify-content: center
  min-height: 100dvh
  padding: 2rem

  .erro-content
    text-align: center

    h1
      font-size: 4rem
      margin: 0

    p
      font-size: 1.25rem
      margin: 1rem 0

    a
      display: inline-block
      margin-top: 1rem
      padding: 0.75rem 1.5rem
      background: #2563eb
      color: #fff
      border-radius: 8px
      text-decoration: none
</style>
