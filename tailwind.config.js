/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        thick: "url('/src/assets/images/tick.png')",
      },
    },
  },
  plugins: [],
};
