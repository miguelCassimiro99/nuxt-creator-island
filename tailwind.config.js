/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        jelly: "Shadows Into Light Two",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "pastel", "fantasy"],
  },
  plugins: [require("daisyui")],
};
