<template>
  <div
    class="mt-10 backdrop-blur-sm p-3 bg-gray-500/10 rounded-2xl flex flex-col gap-2"
  >
    <div class="collapse bg-base-200 text-left">
      <input type="radio" name="my-accordion-1" checked />
      <div class="collapse-title text-lg md:text-xl font-medium">
        1. Escolha do tipo
      </div>
      <div class="collapse-content">
        <FormStepOne />
      </div>
    </div>

    <div class="collapse bg-base-200 text-left">
      <input type="radio" name="my-accordion-1" />
      <div class="collapse-title text-lg md:text-xl font-medium">
        2. Selecione a proteína ou prato principal
      </div>
      <div class="collapse-content">
        <FormStepTwo />
      </div>
    </div>

    <div class="collapse bg-base-200 text-left">
      <input type="radio" name="my-accordion-1" />
      <div class="collapse-title text-lg md:text-xl font-medium">
        3. Preferencia de ingredientes
      </div>
      <div class="collapse-content">
        <FormStepTree />
      </div>
    </div>

    <div class="collapse bg-base-200 text-left">
      <input type="radio" name="my-accordion-1" />
      <div class="collapse-title text-lg md:text-xl font-medium">
        4. Intensidade de Sabor
      </div>
      <div class="collapse-content">
        <FormStepFour />
      </div>
    </div>

    <button class="btn btn-neutral flex justify-center items-center">
      <span class="font-coming text-xl uppercase">sugerir</span>
    </button>
  </div>
</template>
<script setup lang="ts">
const stepOneChoice = [];
</script>
<style scoped></style>
