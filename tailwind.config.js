import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [],
  theme: {
    // container: {
    // 	center: true,
    // 	padding: '1rem'
    // },
    extend: {
      fontFamily: {
        antonio: ["'Antonio'", ...fontFamily.sans],
        sans: ["'Spartan'", ...fontFamily.sans],
      },
      colors: {
        accent: 'var(--accent-color)',
        dark: '#070724',
        'dark-grey': '#38384F',
        'light-grey': '#838391',
      },
    },
  },
};
