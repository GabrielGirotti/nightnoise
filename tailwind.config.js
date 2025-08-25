/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
        fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heavy: ['heavy', 'sans-serif'],
        fty: ['fty', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
