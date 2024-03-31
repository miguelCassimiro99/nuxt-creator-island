/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "pastel"],
  },
  plugins: [require("daisyui")],
};
