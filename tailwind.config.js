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
  },
  darkMode: "class",
  plugins: [nextui()],
};
