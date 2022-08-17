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
        'accent-1-hover': '#42ABDD',
        'accent-1-bright': '#61BAE4',
        'accent-2': '#702EB2'
      }
    },
    fontFamily: {
      'sans': ['Montserrat', 'font-sans']
    }
  },
  plugins: [],
}