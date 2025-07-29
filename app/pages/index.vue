<script setup lang="ts">
import type { Media } from '~/types'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMediaStore } from '~/stores/storage'

const store = useMediaStore()
const router = useRouter()

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
    <h1 class="text-2xl font-bold text-secondary-100 light:text-secondary-600 mb-6">
      Ana Sayfa
    </h1>

    <MediaCarouselHome
      type="home"
      :movies="store.movies"
      :tv-shows="store.tvShows"
      @select="goToDetail"
    />
  </div>
</template>
