/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'base-1': '#1A1D24',
        'base-2': '#20242D',
        'base-3': '#252933',
        'base-4': '#373A42',
        'neutral-1': '#A8ADB9',
        'neutral-2': '#B1B5C0',
        'header-1': '#D4D5DA',
        'accent-1': '#35A4DA',
        'accent-1-hover': '#42ABDD',
        'accent-1-bright': '#61BAE4',
        'accent-2': '#702EB2',
        'trans-black': 'rgba(0, 0, 0, 0.3)'
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
      },

      screens: {
        '3xl': '1800px',
        '4xl': '2000px',
        // => @media (min-width: 1800px) { ... }
      },
    },

    fontFamily: {
      'sans': ['Montserrat', 'font-sans']
    },
  },
  plugins: [],
}