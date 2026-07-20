<template>
  <section class="section container sitemap-page">
    <header class="sitemap-head">
      <h1>Mapa do Site</h1>
      <p>Links para as páginas principais do projeto.</p>
    </header>

    <nav aria-label="Mapa do site" class="sitemap-grid">
      <article class="sitemap-card">
        <h2>Páginas</h2>
        <ul>
          <li><NuxtLink to="/">Início</NuxtLink></li>
        </ul>
      </article>
    </nav>
  </section>
</template>

<script setup>
import { usePageSeo } from '~/composables/usePageSeo'

usePageSeo({
  title: 'Sitemap',
  description: 'Mapa do site com links para todas as páginas.',
  path: '/sitemap'
})
</script>

<style lang="sass" scoped>
.sitemap-page
  padding: 2rem 1rem
  max-width: 1200px
  margin: 0 auto

.sitemap-head
  margin-bottom: 2rem

  h1
    font-size: 2rem
    margin: 0 0 0.5rem

.sitemap-grid
  display: grid
  gap: 1.5rem
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))

.sitemap-card
  border: 1px solid #e2e8f0
  border-radius: 8px
  padding: 1.5rem

  h2
    font-size: 1.25rem
    margin: 0 0 1rem

  ul
    list-style: none
    padding: 0
    margin: 0

    li
      margin-bottom: 0.5rem

      a
        color: #2563eb
        text-decoration: none

        &:hover
          text-decoration: underline
</style>
