import { nextui } from "@nextui-org/react";

// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Inter'],
      display: ['"Work Sans"'],
      script: ['"Kaushan Script"'],
    },
    extend: {
      backgroundImage: {
        'home-first-section':
          "linear-gradient(to bottom, rgba(40, 38, 62, 50%), rgba(8, 4, 51, 80%)), url('./src/assets/firstSection-bg.jpg')",
        'tourpackage-first-section':
          "linear-gradient(to bottom, rgba(40, 38, 62, 50%), rgba(8, 4, 51, 80%)), url('./src/assets/beachHouses.jpg')",
        galeryItem:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%)), url('./src/assets/tourCardPlaceholder.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
