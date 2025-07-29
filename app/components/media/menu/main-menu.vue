<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)

function goTo(path: string) {
  router.push(path)
  isOpen.value = false
}
</script>

<template>
  <UButton
    label="Menü"
    color="success"
    variant="solid"
    class="font-semibold w-30 flex justify-center items-center"
    size="xl"
    @click="isOpen = true"
  />

  <USlideover
    v-model:open="isOpen"
    side="left"
    title="NuxtFlix'e Hoş Geldiniz !"
    description="Aşağıdan dilediğiniz türü seçebilirsiniz. Filmler, TV Şovları ve çok daha fazlası şimdi NuxtFlix'te!"
    class="font-semibold light:text-secondary-500"
  >
    <template #body>
      <div class="p-4 space-y-3">
        <UButton label="Ana Sayfa" class="light:text-secondary-800 font-bold hover:bg-secondary-400" color="success" block @click="goTo('/')" />
        <UButton label="Filmler" class="light:text-secondary-800 font-bold hover:bg-secondary-400" color="success" block @click="goTo('/movie')" />
        <UButton label="TV Şovları" class="light:text-secondary-800 font-bold hover:bg-secondary-400" color="success" block @click="goTo('/tv')" />
      </div>
    </template>
  </USlideover>
</template>
