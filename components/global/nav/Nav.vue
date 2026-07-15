<template>
  <nav class="nav">
    <Svgs nome="lecdt" />
  </nav>
</template>

<script setup>
const state = reactive({
  aberto: false
})
</script>

<style lang="sass" scoped>
.nav
  display: flex
  width: 100%

@media screen and (max-width: 1000px)
</style>
