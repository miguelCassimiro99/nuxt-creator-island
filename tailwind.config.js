/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        jelly: "Shadows Into Light Two",
        coming: "Coming Soon",
        raleway: "Raleway",
      },
      backgroundImage: {
        hero: "url('/hero/q-tempero-hero.jpeg')",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "pastel", "fantasy"],
  },
  plugins: [require("daisyui")],
};
