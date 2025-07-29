<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(path: string) {
  router.push(path)
}
</script>

<template>
  <USlideover
    side="left"
    title="NuxtFlix Menü"
    description="Aşağıdan dilediğiniz türü seçebilirsiniz. Filmler, TV Şovları ve çok daha fazlası şimdi NuxtFlix'te!"
  >
    <UButton
      label="Menü"
      color="success"
      variant="solid"
      class="font-semibold w-30 flex justify-center items-center"
      size="xl"
    />

    <template #body>
      <div class="p-4 space-y-3">
        <UButton label="Ana Sayfa" color="success" block @click="goTo('/')" />
        <UButton label="Filmler" color="success" block @click="goTo('/movie')" />
        <UButton label="TV Şovları" color="success" block @click="goTo('/tv')" />
      </div>
    </template>
  </USlideover>
</template>
