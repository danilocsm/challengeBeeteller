/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        horizontalBounce: {
          '0%': { transform: 'translateX(-50px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        horizontalBounce: 'horizontalBounce 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
