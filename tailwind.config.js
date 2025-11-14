/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Spa website colors
        'spa-white': '#ffffff',
        'spa-black': '#050505',
        'spa-dark': '#333333',
        'spa-gray': '#666666',
        'spa-light-gray': '#e6e6e6',
        'spa-fafa': '#fafafa',
        'spa-green': '#1b6440',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}