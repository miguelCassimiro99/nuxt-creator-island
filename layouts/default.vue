<template>
  <div
    data-theme="pastel"
    class="w-full bg-base-200 flex flex-col justify-start items-center relative"
  >
    <div
      class="navbar rounded-2xl container flex justify-start items-center absolute"
    >
      <NuxtLink to="/" class="flex gap-1 justify-center items-center">
        <NuxtImg src="/q-tempero-icon-2.svg" class="w-12 h-12" />
        <h1 class="text-2xl font-bold font-jelly tracking-wider">QTempero</h1>
      </NuxtLink>
    </div>
    <main class="flex flex-col w-full">
      <slot />
    </main>
  </div>
</template>
<script lang="ts" setup></script>
