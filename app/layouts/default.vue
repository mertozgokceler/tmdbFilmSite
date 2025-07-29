<script setup lang="ts">
import { MediaMenuMainMenu } from '#components'
</script>

<template>
  <Head>
    <title>Mertflix | En popüler filmler, tv şovları ve çok daha fazlası...</title>
  </Head>

  <div class="h-screen flex flex-col text-white dark:bg-zinc-800 light:bg-zinc-300">
    <div class="w-full p-4 bg-zinc-700 relative flex items-center justify-between">
      <div class="z-10">
        <MediaMenuMainMenu />
      </div>

      <div class="absolute left-1/2 transform -translate-x-1/2 z-0">
        <img
          src="~/assets/css/mertflix3.png"
          alt="Logo"
          class="w-[180px] h-[180px] object-contain"
        >
      </div>

      <div class="z-10">
        <AppHeader />
      </div>
    </div>

    <main class="flex-1 overflow-auto px-9 py-5">
      <slot />
    </main>

    <footer class="bg-orange-400 text-secondary-950 font-semibold text-center py-1 border-t border-red-200">
      © 2025 Mertflix. Made with ❤️ by Mert Özgökçeler.
    </footer>
  </div>
</template>
