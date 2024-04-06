<template>
  <div class="flex flex-col justify-start items-start">
    <label class="input input-bordered flex items-center w-full">
      <input
        type="text"
        v-model="stepTreeValue"
        class="grow placeholder:text-xs"
        placeholder="Digite um ingrediente"
      />

      <button @click="addCustomValue(stepTreeValue)">
        <Icon
          name="material-symbols:add-rounded"
          class="border rounded-full p-1 h-8 w-8 bg-accent text-white shadow-md"
        />
      </button>
    </label>

    <div class="flex flex-wrap h-10 justify-start items-center gap-2 w-full">
      <div
        v-if="customValues.length"
        v-for="item in customValues"
        :key="item"
        class="badge badge-accent text-sm md:text-base flex justify-center items-center gap-[2px] shadow-md"
        @click="removeCustomValue(item)"
      >
        <Icon name="maki:cross" class="h-3 w-3" />
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const stepTreeValue = ref<string>("");

const customValues = ref<string[]>([]);

const addCustomValue = (customValue: string) => {
  if (!customValue) return;
  customValues.value.push(customValue);
  stepTreeValue.value = "";
};

const removeCustomValue = (customValue: string) => {
  customValues.value = customValues.value.filter(
    (item: string) => item !== customValue
  );
};
</script>
<style scoped></style>
