import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { apiUrl, apiKey } = useRuntimeConfig().public

  const rawType = (query.type || '').toString().toLowerCase()
  const type = rawType === 'tv' ? 'tv' : 'movie'

  const id = query.id
  if (!id) {
    return { error: 'ID parametresi eksik!' }
  }

  const url = `${apiUrl}/${type}/${id}?append_to_response=videos,images,credits,external_ids&language=tr-TR&api_key=${apiKey}`

  try {
    const data = await $fetch(url)
    return data
  }
  catch (error) {
    console.error('TMDB Detail API Hatası:', error)
    return {
      error: 'Detay verisi alınamadı',
    }
  }
})
