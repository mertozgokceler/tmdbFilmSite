<script setup lang="ts">
import type { Media, MediaType } from '~/types'

defineProps<{
  movies: Media[]
  tvShows: Media[]
  type: MediaType | 'home'
}>()

defineEmits<{
  (e: 'select', item: Media): void
}>()

function getFullImagePath(path: string | null | undefined): string {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : '/placeholder.jpg'
}
</script>

<template>
  <div class="space-y-10">
    <div v-if="type === 'home' || type === 'movie'">
      <h2 class="text-xl font-bold mb-4 text-white light:text-secondary-700">
        Popüler Filmler
      </h2>
      <UCarousel
        v-if="movies.length > 0"
        v-slot="{ item }"
        :items="movies"
        :ui="{ item: 'basis-2/3 sm:basis-1/3 md:basis-1/5 lg:basis-1/7' }"
      >
        <div
          class="flex flex-col items-center cursor-pointer p-4"
          @click="$emit('select', item)"
        >
          <img
            :src="getFullImagePath(item.poster_path)"
            alt="poster"
            class="rounded-lg w-[170px] h-[250px] object-cover transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-500"
          >
          <p class="text-md mt-5 text-center font-bold truncate w-[160px] light:text-secondary-700">
            {{ item.title || item.name }}
          </p>
          <p class="text-sm text-secondary-400 light:text-secondary-600 font-semibold">
            {{ item.release_date || item.first_air_date }}
          </p>
          <label class="light:text-secondary-600 font-semibold">Derece : {{ (item.vote_average / 2).toFixed(1) }} / 5</label>
          <MediaCarouselRating :rating="item.vote_average" class="mt-1" />
        </div>
      </UCarousel>
    </div>

    <div v-if="type === 'home'">
      <USeparator
        :avatar="{ src: 'https://github.com/nuxt.png' }"
        color="primary"
        size="md"
      />
    </div>

    <div v-if="type === 'home' || type === 'tv'">
      <h2 class="text-xl font-bold mb-4 text-white light:text-secondary-700">
        Popüler Diziler
      </h2>
      <UCarousel
        v-if="tvShows.length > 0"
        v-slot="{ item }"
        :items="tvShows"
        :ui="{ item: 'basis-2/3 sm:basis-1/3 md:basis-1/5 lg:basis-1/7' }"
      >
        <div
          class="flex flex-col items-center cursor-pointer p-4"
          @click="$emit('select', item)"
        >
          <img
            :src="getFullImagePath(item.poster_path)"
            alt="poster"
            class="rounded-lg w-[170px] h-[250px] object-cover transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-500"
          >
          <p class="text-md mt-5 text-center font-bold truncate w-[160px] light:text-secondary-700">
            {{ item.name || item.title }}
          </p>
          <p class="text-sm text-secondary-400 light:text-secondary-600 font-semibold">
            {{ item.first_air_date || item.release_date }}
          </p>
          <label class="light:text-secondary-600 font-semibold">Derece : {{ (item.vote_average / 2).toFixed(1) }} / 5</label>
          <MediaCarouselRating :rating="item.vote_average" class="mt-1" />
        </div>
      </UCarousel>
    </div>
  </div>
</template>
