const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    // mode: 'all',
    preserveHtmlElements: false,
    content: [
      './src/components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
  },
  // purge: [
  //   './src/components/**/*.{js,ts,jsx,tsx}',
  //   './pages/**/*.{js,ts,jsx,tsx}',
  // ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      // height: {
      //   26: '7.5rem',
      // },
      width: {
        'fit-content': 'fit-content',
        //   26: '7.5rem',
      },
      fontFamily: {
        sans: [
          // 'Lato',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          '"Fjalla One"',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        // font-serif	font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        // font-mono	font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace']
      },
      colors: {
        // 'accent-1': '#333',
        accent: {
          DEFAULT: '#319795',
          dark: colors.yellow['400'],
        },
        // teal: {
        //   50: '#E6FFFA',
        //   100: '#B2F5EA',
        //   200: '#81E6D9',
        //   300: '#4FD1C5',
        //   400: '#38B2AC',
        //   500: '#319795',
        //   600: '#2C7A7B',
        //   700: '#285E61',
        //   800: '#234E52',
        //   900: '#1D4044',
        // },
      },
    },
  },
  variants: {
    extend: {
      // margin: ['first'],
    },
  },
  plugins: [],
}
