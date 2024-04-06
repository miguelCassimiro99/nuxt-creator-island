<template>
  <div
    class="hero pt-24 min-h-screen flex justify-center items-start bg-base-200 bg-left bg-cover bg-[url('https://img.freepik.com/premium-photo/ingredients-making-toast-sandwich-white-background_23-2147925937.jpg?w=1060')]"
  >
    <div
      class="text-start flex flex-col gap-4 justify-start items-center px-2 py-3"
    >
      <div
        class="max-w-md flex flex-col justify-center items-center text-center"
      >
        <h1 class="text-3xl font-bold text-primary-content font-jelly">
          Não sabe qual tempero usar?
        </h1>
        <p class="py-6 text-sm font-raleway leading-relaxed">
          Veja com dicas e sugestões para transformar sua refeicao. Descubra
          combinações que encantam com os ingredientes que tiver em casa"
        </p>
        <button class="btn btn-error text-base-100">Veja como é fácil</button>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-2 mt-10">
        <div
          class="card w-32 md:w-52 shadow-xl bg- overflow-hidden"
          v-for="(card, index) in heroCards"
          :key="card.name"
        >
          <div class="card-body flex justify-center items-center">
            <Icon :name="card.icon" class="h-8 w-8 text-success" />
            <h2 class="card-title text-xl md:text-2xl font-jelly tracking-wide">
              {{ card.name }}
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const heroCards = [
  {
    icon: "game-icons:chicken-oven",
    name: "Aves",
    url: "#",
  },
  {
    icon: "fluent-emoji-high-contrast:cut-of-meat",
    name: "Bovino",
    url: "#",
  },
  {
    icon: "icon-park-outline:bowl-one",
    name: "Molhos",
    url: "#",
  },
];
</script>
