/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },

    extend: {
      minHeight: {
        "vh-164": "calc(100vh - 164px)",
      },
    },
  },
  plugins: [],
};
