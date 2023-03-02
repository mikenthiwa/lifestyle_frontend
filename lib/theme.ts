import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: `'Open Sans', sans-serif`
  },
  colors:{
    primary: '#5680E9',
    secondary: '#F7F9FB'
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  breakpoints: {
    sm: '30em',
    md: '56em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
});

export default theme;
