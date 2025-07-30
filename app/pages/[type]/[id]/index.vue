<script setup lang="ts">
import type { Media, MediaType } from '~/types'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const media = ref<Media | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

async function fetchMedia() {
  loading.value = true
  error.value = null

  try {
    const type = route.params.type as MediaType
    const id = route.params.id as string

    const result = await $fetch<Media>('/api/tmdb/details', {
      query: { type, id },
    })

    media.value = result
  }
  catch (err) {
    console.error('Veri alınamadı:', err)
    error.value = 'Veri alınırken bir hata oluştu.'
  }
  finally {
    loading.value = false
  }
}

onMounted(fetchMedia)
</script>

<template>
  <div class="p-6">
    <template v-if="loading">
      <p class="text-white">
        Yükleniyor...
      </p>
    </template>

    <template v-else-if="error">
      <p class="text-red-500">
        {{ error }}
      </p>
    </template>

    <template v-else-if="media">
      <MediaDetails :media="media" />
    </template>
  </div>
</template>
