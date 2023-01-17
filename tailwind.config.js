/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/comps/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-green": "#00FF00",
        "lime-green": "#32CD32",
        "dark-green": "#006400",
        "spring-green": "#00FF7F",
      },
    },
  },
  plugins: [],
};
