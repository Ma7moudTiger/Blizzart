/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wigz: {
          '0%, 100%': { transform: 'translateY(10%)'},
          '50%': { transform: 'translateY(-10%)' },
        }
      },
      animation: {
        wigz: "wigz 3s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}

