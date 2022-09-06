// @ts-ignore
import {React} from 'react'
import '../customStyles/headerStyles.css'
import MagicCastleTheme from "../customStyles/theme/MagicCastleTheme";
import {ThemeProvider} from '@mui/material/styles';
import {Box, Container, Button, Typography,Fab } from '@mui/material'
import CastleIcon from '@mui/icons-material/Castle';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import {useNavigate} from "react-router-dom";

const Header = () =>{
  
  const navigate = useNavigate()
  
  const viewFavourites =(e:any)=>{
    e.preventDefault()
    navigate("/favourite-spells")
  }
  
  const moveHome =(e:any)=>{
    e.preventDefault()
    navigate("/")
  }
  
  return(
    <ThemeProvider theme={MagicCastleTheme}>
      <Box className="magic-castle-header" style={{backgroundColor:'#0F0D0E', height:'70px'}}>
        <IconButton sx={{ color: 'primary.main', width:'25%'}} onClick={(e)=>moveHome(e)}><CastleIcon/></IconButton>
        <IconButton sx={{ color: 'primary.main', width:'25%'}} onClick={(e)=>viewFavourites(e)}><FavoriteBorderSharpIcon/></IconButton>
      </Box>
    </ThemeProvider>
  )
}

export default Header
