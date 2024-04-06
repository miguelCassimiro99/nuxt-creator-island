<template>
  <div class="text-center h-screen">
    <h2 class="text-3xl font-jelly text-primary-content">
      Ou precisa de sugestões?
    </h2>
    <p class="text-sm mt-1 font-coming font-bold">
      Descubra um novo sabor em poucos passos
    </p>

    <HomeActionSteps />

    <div
      id="fullscreen-load"
      class="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm bg-black/45 z-40 flex justify-center items-center"
      v-if="isLoading"
    >
      <div class="text-white flex flex-col justify-center items-center gap-1">
        <UiLoadingIcons />
        <span class="font-jelly text-2xl tracking-wide animate-pulse"
          >Carregando...</span
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const isLoading = ref(false);

const loadingIcons = [
  "twemoji:garlic",
  "twemoji:onion",
  "twemoji:carrot",
  "twemoji:hot-pepper",
  "twemoji:bell-pepper",
  "twemoji:leaf-fluttering-in-wind",
  "twemoji:salt",
  "twemoji:cut-of-meat",
];
</script>
<style scoped></style>
