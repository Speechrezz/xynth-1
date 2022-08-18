/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'base-1': '#1A1D24',
        'base-2': '#20242D',
        'base-3': '#252933',
        'base-4': '#363B4A',
        'base-5': '#3C4353',
        'neutral-1': '#A8ADB9',
        'header-1': '#D4D5DA',
        'accent-1': '#35A4DA',
        'accent-1-hover': '#42ABDD',
        'accent-1-bright': '#61BAE4',
        'accent-2': '#702EB2'
      },

      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
            transform: 'translateY(10%)'
          },

          to: {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },

      animation: {
        fadeIn: 'fadeIn 500ms',
      }
    },

    fontFamily: {
      'sans': ['Montserrat', 'font-sans']
    }
  },
  plugins: [],
}