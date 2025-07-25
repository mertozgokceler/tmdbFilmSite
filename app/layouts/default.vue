<script setup lang="ts">
import Header from '~/components/carousel/header/header.vue'
import FilmMovieMenu from '~/components/carousel/menu/film-movie-menu.vue'
</script>

<template>
  <Head>
    <title>NuxtFlix</title>
  </Head>

  <div class="h-screen flex flex-col text-white dark:bg-zinc-800 light:bg-zinc-300">
    <div class="w-full p-6 bg-zinc-700 flex items-center relative">
      <div class="absolute left-4 flex items-center">
        <img
          src="~/assets/css/icon-green.svg"
          alt="İcon Bulunamadı"
          class="w-[90px] h-[100px] object-contain"
        >
      </div>

      <h1
        class="mx-auto text-3xl font-bold text-white"
        style="font-family: Verdana, Geneva, Tahoma, sans-serif;"
      >
        NuxtFlix
      </h1>

      <div class="absolute right-4 flex items-center space-x-3">
        <Header />
      </div>
    </div>

    <div class="px-9 py-5">
      <FilmMovieMenu />
    </div>
    <main class="flex-1 overflow-auto p-4">
      <slot />
    </main>

    <footer class="bg-orange-400 text-zinc-950 font-semibold text-center py-2 border-t border-red-200">
      © 2025 NuxtFlix. Made with ❤️ by Mert Özgökçeler.
    </footer>
  </div>
</template>
