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
        progressAnimation: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '75%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        horizontalBounce: 'horizontalBounce 1s ease-in-out infinite',
        progressAnimation: 'progressAnimation 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
