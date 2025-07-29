<template>
  <div class="flex items-center gap-3 mr-4">
    <UButton
      :icon="isDark ? 'lucide:sun' : 'lucide:moon'"
      class="rounded-full"
      size="xl"
      @click="toggleTheme"
    />

    <div class="text-xl font-bold mx-2 select-none">
      |
    </div>

    <UAvatarGroup>
      <ULink
        to="https://github.com/mertozgokceler"
        target="_blank"
        class="hover:ring-primary transition"
      >
        <UAvatar
          size="2xl"
          src="https://avatars.githubusercontent.com/u/114679306?v=4"
          alt="Mert Özgökçeler"
        />
      </ULink>
    </UAvatarGroup>
  </div>
</template>
