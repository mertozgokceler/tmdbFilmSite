<script setup lang="ts">
import type { MediaType } from '~/types'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const type = computed(() => {
  const t = route.params.type as string
  return t === 'movie' || t === 'tv' ? (t as MediaType) : null
})

const id = computed(() => {
  return route.params.id
})
</script>

<template>
  <div class="p-6">
    <template v-if="type && id">
      <h1 class="text-2xl font-bold mb-2 capitalize light:text-secondary-600">
        {{ type }} detay sayfası
      </h1>
      <p class="text-lg light:text-secondary-600 font-semibold">
        ID: {{ id }}
      </p>
    </template>

    <div v-else class="text-red-500 font-semibold">
      Geçersiz içerik türü veya ID!
    </div>
  </div>
</template>
