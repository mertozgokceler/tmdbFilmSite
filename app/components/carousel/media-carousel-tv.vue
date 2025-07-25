<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Media, PageResult } from '~/types'
import { useRouter } from 'vue-router'

const tvShows = ref<Media[]>([])
const config = useRuntimeConfig()
const router = useRouter()

onMounted(async () => {
  const tvRes = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${config.public.tmdbApiKey}`)
  const tvJson: PageResult<Media> = await tvRes.json()
  tvShows.value = tvJson.results.map(item => ({
    ...item,
    media_type: 'tv'
  }))
})

function getFullImagePath(path: string | null | undefined): string {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : '/placeholder.jpg'
}

function goToTvDetail(id: number | string) {
  router.push(`/tv/${id}`)
}
</script>

<template>
  <div>
    <h2 class="text-xl font-bold mb-4 text-white">Popüler Diziler</h2>

    <div class="overflow-x-auto">
      <UCarousel
        v-if="tvShows.length > 0"
        :items="tvShows"
        :ui="{ item: 'basis-2/3 sm:basis-1/3 md:basis-1/5 lg:basis-1/7' }"
        v-slot="{ item }"
      >
        <div
          class="flex flex-col items-center cursor-pointer hover:opacity-80 transition"
          @click="goToTvDetail(item.id)"
        >
          <img
            :src="getFullImagePath(item.poster_path)"
            alt="poster"
            class="rounded-lg w-[170px] h-[250px] object-cover"
          />
          <p class="text-sm mt-2 text-center font-semibold truncate w-[160px]">
            {{ item.name || item.title }}
          </p>
          <p class="text-xs text-gray-400">
            {{ item.first_air_date || item.release_date }}
          </p>
        </div>
      </UCarousel>
    </div>
  </div>
</template>
