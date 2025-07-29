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
  return param === 'movie' || param === 'tv' ? (param as MediaType) : 'home'
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
    <h1 class="text-2xl font-bold text-white mb-6 capitalize">
      {{
        type === 'movie'
          ? 'Haftanın En Popüler Filmleri'
          : type === 'tv'
            ? 'Haftanın En Popüler Dizileri'
            : 'Bilinmeyen Tür'
      }}
    </h1>

    <MediaCarouselHome
      :type="type"
      :movies="store.movies"
      :tv-shows="store.tvShows"
      @select="goToDetail"
    />
  </div>
</template>
