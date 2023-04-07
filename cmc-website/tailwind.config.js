/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#251749",
        secondary: "#263159",
        tertiary: "#495579",
        white: "#FFFBEB",
      },
      fontFamily: {
        mono: ["mono", "sans-serif"],
        "mono-light": ["mono-light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
