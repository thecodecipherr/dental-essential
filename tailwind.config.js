/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        primaryDark: "#2563EB",
        accent: "#EC4899",
        lightBlue: "#DBEAFE",
      },
    },
  },
  plugins: [],
};
