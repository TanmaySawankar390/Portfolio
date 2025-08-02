/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          'balloon-sway': {
            '0%': { transform: 'rotate(-3deg) scale(1)' },
            '50%': { transform: 'rotate(3deg) scale(1.2)' },
            '100%': { transform: 'rotate(-3deg) scale(1)' }
          }
        },
        animation: {
          'balloon-sway': 'balloon-sway 6s ease-in-out infinite'
        }
      }
    },
    plugins: [],
  }