/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moonNight: '#0A0E1A',  // Dark blue, reminiscent of a moonlit night
        moonGlow: '#2A2F45',   // Slightly lighter for contrast
      },
    },
  },
  plugins: [require('daisyui'), ],
}