<script setup lang="ts">
import type { Media, MediaType } from '~/types'
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMediaStore } from '~/stores/storage'

const route = useRoute()
const router = useRouter()
const store = useMediaStore()

const type = computed(() => {
  const param = route.params.type as string
  return param === 'movie' || param === 'tv' ? (param as MediaType) : null
})

onMounted(() => {
  if (!store.movies.length)
    store.fetchPopular('movie')
  if (!store.tvShows.length)
    store.fetchPopular('tv')
})

function goToDetail(item: Media) {
  router.push(`/${item.media_type}/${item.id}`)
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-secondary-100 light:text-secondary-700 mb-6 capitalize">
      {{ type ? `${type} içerikleri` : 'Bilinmeyen içerik türü' }}
    </h1>

    <MediaCarouselMovie
      v-if="type === 'movie'"
      :movies="store.movies"
      @select="goToDetail"
    />
    <MediaCarouselTv
      v-else-if="type === 'tv'"
      :tv-shows="store.tvShows"
      @select="goToDetail"
    />

    <div v-else class="text-red-500">
      Bilinmeyen içerik türü: "{{ route.params.type }}"
    </div>
  </div>
</template>
