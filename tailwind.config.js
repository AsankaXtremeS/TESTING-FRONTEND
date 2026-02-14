/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sectionparts/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed-1': 'float 3s ease-in-out 0.3s infinite',
        'float-delayed-2': 'float 3s ease-in-out 0.5s infinite',
        'float-delayed-3': 'float 3s ease-in-out 0.7s infinite',
        'float-delayed-4': 'float 3s ease-in-out 1s infinite',
        'float-delayed-5': 'float 3s ease-in-out 1.2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}