<template>
  <div class="flex flex-wrap gap-2">
    <div
      v-for="item in stepTwoOptions"
      :key="item.name"
      class="card bg-base-100 shadow-xl cursor-pointer transition-all"
      :class="selectedOption.value === item.value ? 'ring-4 ring-accent' : ''"
      @click="selectStepTwoOption(item)"
    >
      <div class="card-body">
        <!-- <Icon  /> -->
        <h2 class="card-title text-sm md:text-base font-jelly">
          {{ item.name }}
        </h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IStepTwoOption {
  name: string;
  value: string;
  icon: string;
}

const stepTwoOptions = [
  {
    name: "Carne vermelha",
    value: "meat",
    icon: "",
  },
  {
    name: "Frango",
    value: "chicken",
    icon: "",
  },
  {
    name: "Marinho",
    value: "sea",
    icon: "",
  },
  {
    name: "Vegetais",
    value: "vegetables",
    icon: "",
  },
  {
    name: "Massas",
    value: "pasta",
    icon: "",
  },
] as IStepTwoOption[];

const selectedOption = ref<IStepTwoOption>(stepTwoOptions[0]);

const selectStepTwoOption = (option: IStepTwoOption) => {
  selectedOption.value = option;
};
</script>
<style scoped></style>
