import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { apiUrl, apiKey } = useRuntimeConfig().public

  const type = query.type === 'tv' ? 'tv' : 'movie'
  const page = query.page || 1

  const url = `${apiUrl}/discover/${type}?api_key=${apiKey}&language=tr-TR&page=${page}`

  try {
    const data = await $fetch(url)
    return data
  }
  catch (error) {
    console.error('TMDB Discover API Hatası:', error)
    return {
      error: 'Veri alınamadı',
    }
  }
})
