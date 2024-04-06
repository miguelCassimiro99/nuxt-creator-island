<template>
  <div class="flex justify-center items-center">
    <!-- Renderiza o ícone atual com transição -->
    <transition name="fade" mode="out-in">
      <Icon :name="currentIcon" key="currentIcon" class="w-10 h-10" />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const loadingIcons = [
  "twemoji:garlic",
  "twemoji:onion",
  "noto:tomato",
  "twemoji:carrot",
  "twemoji:hot-pepper",
  "fluent-emoji-flat:lemon",
  "twemoji:bell-pepper",
  "emojione:green-salad",
  "twemoji:leaf-fluttering-in-wind",
  "twemoji:salt",
  "noto-v1:roasted-sweet-potato",
  "twemoji:cut-of-meat",
  "emojione-v1:steaming-bowl",
];

const currentIconIndex = ref(0);
const currentIcon = ref(loadingIcons[currentIconIndex.value]);

onMounted(() => {
  setInterval(() => {
    currentIconIndex.value = (currentIconIndex.value + 1) % loadingIcons.length;
    currentIcon.value = loadingIcons[currentIconIndex.value];
  }, 800);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
