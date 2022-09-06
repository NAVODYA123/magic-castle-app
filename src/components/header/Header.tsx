// @ts-ignore
import {React} from 'react'
import '../customStyles/headerStyles.css'
import MagicCastleTheme from "../customStyles/theme/MagicCastleTheme";
import {ThemeProvider} from '@mui/material/styles';
import {Box, Container, Button, Typography,Fab } from '@mui/material'
import CastleIcon from '@mui/icons-material/Castle';
import IconButton from '@mui/material/IconButton';

const Header = () =>{
  return(
    <ThemeProvider theme={MagicCastleTheme}>
      <Box className="magic-castle-header" style={{backgroundColor:'#0F0D0E', height:'70px'}}>
        <IconButton sx={{ color: 'primary.main'}} ><CastleIcon/></IconButton>
      </Box>
    </ThemeProvider>
  )
}

export default Header
