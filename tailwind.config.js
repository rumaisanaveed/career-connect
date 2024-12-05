/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-maroon": "#A9313C",
        "custom-maroom-dark": "#9A0F19",
        "custom-orange": "#FFA74B",
      },
    },
  },
  plugins: [],
};
