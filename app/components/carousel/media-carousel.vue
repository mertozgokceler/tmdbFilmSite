<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Media, PageResult } from '~/types'

const movies = ref<Media[]>([])
const tvShows = ref<Media[]>([])

const config = useRuntimeConfig()

onMounted(async () => {
  const movieRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.public.tmdbApiKey}`)
  const movieJson: PageResult<Media> = await movieRes.json()
  movies.value = movieJson.results

  const tvRes = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${config.public.tmdbApiKey}`)
  const tvJson: PageResult<Media> = await tvRes.json()
  tvShows.value = tvJson.results
})

function getFullImagePath(path: string | null | undefined): string {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : '/placeholder.jpg'
}
</script>

<template>
  <div class="space-y-10">
    <div>
      <h2 class="text-xl font-bold mb-4 text-white">Popüler Filmler</h2>
      <UCarousel
        v-if="movies.length > 0"
        :items="movies"
        :ui="{ item: 'basis-1/6' }"
        v-slot="{ item }"
      >
        <div class="flex flex-col items-center">
          <img
            :src="getFullImagePath(item.poster_path)"
            alt="poster"
            class="rounded-lg w-[170px] h-[250px] object-cover"
          />
          <p class="text-sm mt-2 text-center font-semibold truncate w-[160px]">
            {{ item.title || item.name }}
          </p>
          <p class="text-xs text-gray-400">
            {{ item.release_date || item.first_air_date }}
          </p>
        </div>
      </UCarousel>
    </div>

    <div>
      <h2 class="text-xl font-bold mb-4 text-white">Popüler Diziler</h2>
      <UCarousel
        v-if="tvShows.length > 0"
        :items="tvShows"
        :ui="{ item: 'basis-1/6' }"
        v-slot="{ item }"
      >
        <div class="flex flex-col items-center">
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
