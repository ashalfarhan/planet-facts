import { Configuration } from 'twind';

const colors = {
  dark: '#070724',
  'dark-grey': '#38384F',
  'light-grey': '#838391',
  accent: 'var(--accent-color)',
};

const config: Configuration = {
  important: true,
  theme: {
    extend: {
      fontFamily: {
        'antonio': ['\'Antonio\'', 'sans-serif'],
      },
      colors,
    },
  },
  preflight: {
    '@font-face': [
      {
        fontFamily: 'Spartan',
        fontWeight: '400',
        src: 'url(/fonts/Spartan-Regular.ttf) format(truetype)',
      },
      {
        fontFamily: 'Spartan',
        fontWeight: '700',
        src: 'url(/fonts/Spartan-Bold.ttf) format(truetype)',
      },
    ],
    html: {
      fontFamily: 'Spartan, sans-serif',
      colorScheme: 'dark',
    },
    body: {
      backgroundColor: colors.dark,
      backgroundImage: 'url(/stars.svg)',
    },
  },
};

export default config;
