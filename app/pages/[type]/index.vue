<script setup lang="ts">
import { useRoute } from 'vue-router'
import MediaCarouselTv from '~/components/carousel/media-carousel-tv.vue'
import MediaCarouselMovie from '~/components/media-carousel-movie.vue'

const route = useRoute()
const type = route.params.type
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-white mb-6 capitalize">
      {{ type }} içerikleri
    </h1>

    <MediaCarouselMovie v-if="type === 'movie'" />
    <MediaCarouselTv v-else-if="type === 'tv'" />

    <div v-else class="text-red-500">
      Bilinmeyen içerik türü: {{ type }}
    </div>
  </div>
</template>
