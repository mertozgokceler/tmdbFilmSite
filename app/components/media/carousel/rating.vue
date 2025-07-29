<script setup lang="ts">
defineProps<{
  rating: number
}>()
</script>

<template>
  <div class="flex text-primary text-xl">
    <span v-for="i in 5" :key="i">

      <span v-if="rating / 2 >= i">★</span>

      <span v-else-if="rating / 2 >= i - 0.5">⯪</span>

      <span v-else>☆</span>
    </span>
  </div>
</template>
