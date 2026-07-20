<template>
  <div ref="container" />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const container = ref<HTMLElement>()

let root: any = null

onMounted(async () => {
  if (!import.meta.client) return

  const [{ default: React }, { createRoot }, { Retune }] = await Promise.all([
    import('react'),
    import('react-dom/client'),
    import('retune'),
  ])

  const element = React.createElement(Retune)
  root = createRoot(container.value!)
  root.render(element)
})

onBeforeUnmount(() => {
  root?.unmount()
})
</script>
