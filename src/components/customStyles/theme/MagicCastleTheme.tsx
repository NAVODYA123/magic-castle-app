import { createTheme } from '@mui/material/styles';


const breakpoints = {
  values: {
    xs: 390,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
}

const MagicCastleTheme = createTheme({
  breakpoints,
  palette:{
    primary : {
      main:'#ff4162',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary:{
      main : '#000000',
      contrastText: '#ffffff',
    },
    info:{
      main : '#000000',
      contrastText:'#ff4162'
    }
  },
  typography: {
    h2: {
      fontFamily: 'Harry Potter'
    },
    h6: {
      fontFamily: 'Harry Potter',
        [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: '14px'
       },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: '18px'
      }
    },
    body1: {
      fontFamily: 'Witches Magic',
      color:'#ffffff'
    },
    button: {
      fontFamily:'Xiphos',
    }
  },
})


export default MagicCastleTheme
