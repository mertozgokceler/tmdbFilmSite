<script setup lang="ts">
import type { Media, Video } from '~/types'
import { computed } from 'vue'

const { media } = defineProps<{ media: Media }>()

function getFullImagePath(path: string | null | undefined) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : '/placeholder.jpg'
}
const trailerVideo = computed(() => {
  return media.videos?.results.find(
    (v: Video) => v.site === 'YouTube' && v.type === 'Trailer',
  )
})
</script>

<template>
  <div class="flex gap-25 mt-8">
    <div class="text-center">
      <img
        :src="getFullImagePath(media.poster_path)"
        alt="Poster"
        class="mt-20 flex justify-center items-center w-90 h-auto rounded-lg mx-auto transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-500"
      >
      <div class="text-center">
        <div class="mt-10 text-left text-secondary-100 light:text-secondary-800 space-y-4 text-lg">
          <p>
            <span class="font-bold">Orijinal Başlık</span><br>
            {{ media.original_title }}
          </p>
          <p>
            <span class="font-bold">Durum</span><br>
            {{ media.status }}
          </p>
          <p>
            <span class="font-bold">Orijinal Dili</span><br>
            {{ media.original_language === 'en' ? 'İngilizce' : media.original_language }}
          </p>
          <p>
            <span class="font-bold">Bütçe</span><br>
            {{ media.budget?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
          </p>
          <p>
            <span class="font-bold">Kazanç</span><br>
            {{ media.revenue?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-6 text-secondary-100 light:text-secondary-800 mt-6 w-300">
      <h1 class="text-4xl font-bold">
        {{ media.title || media.name }} ({{ (media.first_air_date || media.release_date)?.slice(0, 4) }})
      </h1>

      <p v-if="media.runtime" class="text-xl text-secondary-100 light:text-secondary-800 font-semibold ml-2">
        Süre : {{ Math.floor(media.runtime / 60) }}h {{ media.runtime % 60 }}m
      </p>

      <p class="text-xl text-secondary-100 light:text-secondary-800 ml-2 font-semibold">
        ⭐ {{ (media.vote_average / 2).toFixed(1) }}
      </p>

      <div v-if="media.genres" class="flex flex-wrap gap-2 ml-2">
        <span
          v-for="genre in media.genres"
          :key="genre.id"
          class="bg-primary-500 text-secondary-100 light:text-secondary-800 font-semibold text-lg px-5 py-1 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-500"
        >
          {{ genre.name }}
        </span>
      </div>

      <p class="text-lg text-secondary-100 light:text-secondary-800 leading-relaxed font-semibold ml-2">
        {{ media.overview }}
      </p>
      <p class="text-lg text-secondary-100 light:text-secondary-800 leading-relaxed font-semibold ml-2">
        Oyuncular :
      </p>
      <div v-if="media.credits?.cast" class="flex flex-wrap gap-3 ml-2">
        <span
          v-for="cast in media.credits.cast"
          :key="cast.id"
          class="bg-primary-500 text-secondary-100 light:text-secondary-800 font-semibold text-lg px-5 py-1 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-500"
        >
          {{ cast.name }}
        </span>
      </div>
      <div v-if="media.videos?.results?.length" class="w-full mt-12">
        <h2 class="text-2xl font-bold text-secondary-100 light:text-secondary-800 ml-2 mb-4">
          Fragman
        </h2>
        <iframe
          v-if="trailerVideo"
          :src="`https://www.youtube.com/embed/${trailerVideo.key}`"
          class="w-full h-[500px] rounded-lg shadow-xl mx-auto flex justify-center items-center"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
  </div>
</template>
