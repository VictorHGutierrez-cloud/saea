/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#07A2AD',
          'primary-dark': '#05949c',
          'primary-light': '#05c4d0',
          secondary: '#FFB940',
          'secondary-dark': '#f59e0b',
          danger: '#FF355E',
          'danger-light': '#fb7185',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
