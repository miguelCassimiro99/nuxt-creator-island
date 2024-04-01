// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },

  googleFonts: {
    display: "swap",
    families: {
      "Shadows+Into+Light+Two": true,
    },
  },
});
