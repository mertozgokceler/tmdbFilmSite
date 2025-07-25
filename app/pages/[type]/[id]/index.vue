<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const tvId = route.params.id
</script>

<template>
  <div class="p-6 text-white">
    <h1 class="text-2xl font-bold mb-2">
      TV Show ID
    </h1>
    <p class="text-lg">
      ID: {{ tvId }}
    </p>
  </div>
</template>
