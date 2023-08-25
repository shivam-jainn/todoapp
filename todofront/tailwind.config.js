/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
        content: "hsl(var(--color-content) / <alpha-value>)",
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
