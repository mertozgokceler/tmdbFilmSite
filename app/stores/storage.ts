import type { Media, MediaType, PageResult } from '~/types'
import { defineStore } from 'pinia'

export const useMediaStore = defineStore('media', {
  state: () => ({
    tvShows: [] as Media[],
    movies: [] as Media[],
  }),

  actions: {
    async fetchPopular(type: MediaType, page = 1) {
      try {
        const res: PageResult<Media> = await $fetch(`/api/tmdb/discover?type=${type}&page=${page}`)
        const veriCekResults = res.results.map(item => ({
          ...item,
          media_type: type,
        }))

        if (type === 'tv')
          this.tvShows = veriCekResults
        else if (type === 'movie')
          this.movies = veriCekResults
      }
      catch (error) {
        console.error(`${type.toUpperCase()} verisi alınamadı:`, error)
      }
    },
  },
})
