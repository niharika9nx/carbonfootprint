/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        comic: {
          green: '#22c55e',
          'green-dark': '#15803d',
          yellow: '#facc15',
          blue: '#38bdf8',
          'blue-dark': '#0284c7',
          orange: '#f97316',
          red: '#ef4444',
          cream: '#fffbeb',
          dark: '#1e293b'
        }
      },
      fontFamily: {
        comic: ['"Fredoka"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'comic': '4px 4px 0px 0px #000000',
        'comic-lg': '8px 8px 0px 0px #000000',
        'comic-sm': '2px 2px 0px 0px #000000',
      }
    },
  },
  plugins: [],
}
