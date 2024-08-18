/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        silent_pink1: "#8D008D",
      },
      backgroundImage: {
        "hero-bg": "url('../../public/assets/herobanner/SilentScreamBGLarge.png')",
      },
    },
  },
  plugins: [],
};
