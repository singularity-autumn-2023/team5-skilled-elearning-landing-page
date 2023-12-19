/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',  // default for 'sm'
      'md': '376px',  // default for 'md'
      'lg': '1440px', // default for 'lg'
    },
    plugins: [],
  }
}

