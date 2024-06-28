/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    
  ],
  theme: {
    extend: {
  fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
},
  },
  darkMode: "class",
  plugins: [flowbite.plugin(), nextui()]
}

