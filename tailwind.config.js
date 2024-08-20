// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter'],
      'display': ['"Work Sans"'],
      'script': ['"Kaushan Script"'],
    },
    extend: {
      backgroundImage: {
        'home-first-section': "linear-gradient(to bottom, rgba(40, 38, 62, 50%), rgba(8, 4, 51, 80%)), url('./src/assets/firstSection-bg.jpg')",
        'galeryItem': "linear-gradient(to bottom, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%)), url('./src/assets/tourCardPlaceholder.png')",
      },
    },
  },
  plugins: [],
};