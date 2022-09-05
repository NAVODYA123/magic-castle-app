import { createTheme } from '@mui/material/styles';

const MagicCastleTheme = createTheme({
  palette:{
    primary : {
      main:'#ff4162',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary:{
      main : '#000000'
    }
  },
  typography: {
    h2:{
      fontFamily: 'Harry Potter'
    },
    h6:{
      fontFamily: 'Harry Potter'
    },
    button: {
      fontFamily:'Xiphos',
      fontSize:'24px'
    }
  },
  
  
})


export default MagicCastleTheme
