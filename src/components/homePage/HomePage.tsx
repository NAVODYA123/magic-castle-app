// @ts-ignore
import {React} from 'react'
import {useNavigate} from "react-router-dom";
// @ts-ignore
import HomePageMagic from "./HomePageMagic.tsx";
import { ThemeProvider } from '@mui/material/styles';
import { Box,Container,Button,Typography  } from '@mui/material'
import { sizing } from '@mui/system';
// @ts-ignore
import MagicCastleTheme from "../customStyles/theme/MagicCastleTheme.tsx";

const HomePage = () => {
  
  const navigate = useNavigate()
  
  const RedirectToSpellRoom = () => {
    navigate("/spell-room")
  }
  
  
  return (
    <ThemeProvider theme={MagicCastleTheme}>
    <Box style={{height:'100vh'}}>
    
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: 'primary.dark',
        display: 'flex',
        flexDirection: 'column'
      }}>
    <Box sx ={{
      display: 'flex',
      justifyContent: 'center',
      marginTop:'20px'
    }}>
      <Typography variant='h2' color='primary.main'>Welcome to magic castle</Typography>
    </Box>
   <div><HomePageMagic/></div>
      <Box sx={{
        display:'flex',
        justifyContent:'center',
        width: '100%',
        height: '100%',}}>
    <Button sx={{
      '&:hover': {
        backgroundColor: '#000000',
        color:'#ff4162',
        boxShadow: 'none',
        borderWidth:'2px',
        borderColor:'#ff4162'
      },
    }} style={{width:'300px', height:'50px', fontSize:'24px'}} variant="contained" onClick={()=>RedirectToSpellRoom()}>Visit spell room</Button>
      </Box>
    </Box>
    
   </Box>
   </ThemeProvider>
  )


}

export default  HomePage
