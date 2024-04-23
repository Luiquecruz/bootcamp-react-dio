/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ["Open Sans", "sans-serif"]
      },
      colors: {
        primary: '#E4105D',
        secondary: '#E5E145',
        tertiary: {
          'DEFAULT': '#7F28B5',
          light: '#a44dda'
        },
        menu: {
          'DEFAULT': '#151515',
          dark: '#0a0a0a'
        },
        content: {
          'DEFAULT': '#1e192c',
          user: '#15161b'
        }
      }
    },
  },
  plugins: [],
}

