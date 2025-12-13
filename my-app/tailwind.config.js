// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',      // For App Router pages and layouts
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    // For Pages Router pages
    './components/**/*.{js,ts,jsx,tsx,mdx}', // For shared components
  ],
  theme: {
    extend: {
       fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
}