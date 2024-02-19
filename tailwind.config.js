/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        sm: '750px',
        md: '970px',
        lg: '1170px',
      },
      screens: {
        sm: 0,
        md: '640px',
        lg: '768px',
        xl: '1024px',
        '2xl': '1280px'
      },
      colors: {
        grayC: '#ececec',
        mainColor:'#2196f3'
      },

      keyframes: {
        wiggle: {
          '0% ,100%': { top: '0' },
          '50%': { top: '-50px' },
        },
        linksLine: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
        leftMove: {
          '50%': { left: '0', width: '12px', height: '12px' },
          '100%': { width: '50%', height: '100%', left: '0', borderRadius: '0' }
        },
        rightMove: {
          '50%': { right: '0', width: '12px', height: '12px' },
          '100%': { width: '50%', height: '100%', right: '0', borderRadius: '0' }
        },
        team: {
          '0%': { width: '0' },
          '100%': { width: '100%', opacity: 5},
        },

      },
    },
  },
  plugins: [],
}
