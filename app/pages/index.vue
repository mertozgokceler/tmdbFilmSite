<script setup lang="ts">
import type { Media } from '~/types'
import { MediaCarouselHome } from '#components'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMediaStore } from '~/stores/storage'

const store = useMediaStore()
const router = useRouter()

onMounted(() => {
  if (store.movies.length === 0)
    store.fetchPopular('movie')

  if (store.tvShows.length === 0)
    store.fetchPopular('tv')
})

function goToDetail(item: Media) {
  router.push(`/${item.media_type}/${item.id}`)
}
</script>

<template>
  <MediaCarouselHome
    :movies="store.movies"
    :tv-shows="store.tvShows"
    @select="goToDetail"
  />
</template>
