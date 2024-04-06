<template>
  <div class="w-full flex flex-col justify-center items-center gap-4 py-4">
    <div>
      <h2 class="text-3xl font-jelly text-primary-content">
        Se sentindo ousado?
      </h2>
      <p class="text-sm mt-1 font-coming font-bold">
        Transforme sua criatividade em sabor
      </p>
    </div>
    <form class="w-3/4 md:w-1/2">
      <label class="input input-bordered flex items-center gap-2">
        <input
          type="text"
          class="grow placeholder:text-sm w-full"
          placeholder="Eu gostaria de um molho para..."
        />
        <button>
          <NuxtImg
            src="/q-tempero-icon-2.svg"
            class="w-8 h-8 md:w-10 md:h-10"
          />
        </button>
      </label>
    </form>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
