<template>
  <div class="flex gap-4">
    <div class="form-control">
      <label class="label cursor-pointer flex justify-start gap-2">
        <input
          type="radio"
          name="radio-10"
          class="radio checked:bg-green-500"
          checked
        />
        <span class="label-text">Suave</span>
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer flex justify-start gap-2">
        <input
          type="radio"
          name="radio-10"
          class="radio checked:bg-yellow-500"
          checked
        />
        <span class="label-text">Moderado</span>
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer flex justify-start gap-2">
        <input
          type="radio"
          name="radio-10"
          class="radio checked:bg-red-500"
          checked
        />
        <span class="label-text">Forte</span>
      </label>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
