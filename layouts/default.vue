<template>
  <main
    data-theme="pastel"
    class="h-screen w-full p-4 bg-base-200 flex flex-col justify-start items-center"
  >
    <div class="navbar rounded-2xl container flex justify-start items-center">
      <NuxtLink to="/" class="flex gap-1 justify-center items-center">
        <NuxtImg src="/q-tempero-icon.svg" class="w-12 h-12" />
        <h1 class="text-2xl font-bold font-jelly">QTempero</h1>
      </NuxtLink>
    </div>
    <slot />
  </main>
</template>
<script lang="ts" setup></script>
