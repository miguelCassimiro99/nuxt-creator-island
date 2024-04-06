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
        <span class="label-text">Tempero</span>
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
        <span class="label-text">Molho</span>
      </label>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
