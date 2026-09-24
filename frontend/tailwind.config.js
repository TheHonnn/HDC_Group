
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hdc: {
          teal: '#0d3039',
          dark: '#08242c',
          darker: '#082d37',
          cyan: '#0d9bb4',
          cyanDark: '#0b8faa',
          cyanDeep: '#168ca5',
          cyanLight: '#73d8e5',
          cyanSoft: '#7ee0eb',
          gold: '#e4c36f',
          linen: '#f6f7f4',
          tintLight: '#dfe9ed',
          tintSoft: '#e2eff1',
          tintGray: '#eaf0f2',
          textMain: '#102a32',
          textMuted: '#597077',
          borderLight: '#bfd5d9'
        }
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
