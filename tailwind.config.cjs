/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'base-1': '#1A1D24',
        'base-2': '#20242D',
        'base-3': '#252933',
        'neutral-1': '#A8ADB9',
        'header-1': '#D4D5DA',
        'accent-1': '#35A4DA',
        'accent-1-hover': '#2B98CC',
        'accent-2': '#702EB2'
      }
    },
    fontFamily: {
      'sans': ['Montserrat']
    }
  },
  plugins: [],
}