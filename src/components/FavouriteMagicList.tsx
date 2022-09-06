// @ts-ignore
import {React, FC, useState, useContext} from 'react'
import {useNavigate} from "react-router-dom";
import {ThemeProvider} from '@mui/material/styles';
import {Box, Container, Button, Typography,Fab } from '@mui/material'
import MagicCastleTheme from "./customStyles/theme/MagicCastleTheme";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";


type Props = {
  spellName: string
}


const FavouriteMagicList: FC<Props> = ({spellName}) => {
  const navigate = useNavigate();
  
 
  return (
    <ThemeProvider theme={MagicCastleTheme}>
      <Box style={{height:'100vh'}}
           sx={{
             bgcolor: 'primary.dark',
             display:'flex',
             flexDirection:'column',
             justifyContent:'center',
             alignItems:'center'
           }}>
      <Box className="spell-container-wrapper"
           sx={{
             display: 'flex',
             flexDirection: {xs:'column', sm:'column',md:'column',lg:'column'},
             justifyContent: 'space-between',
             height: {xs:'auto', sm:'auto',md:'50px',lg:'50px'},
             maxHeight:{xs:'auto', sm:'70px',md:'50px',lg:'50px'}
           }}>
        <Typography sx={{
          paddingBottom:'20px'
        }} variant='h2' color='primary.main' >Favourite spells</Typography>
        <Typography className="spell-container" variant='h6'
                    sx={{
                      width: {lg:'50%',md:'50%',sm:'100%',xs:'100%'},
                      display: 'flex',
                      flexDirection:'column',
                      justifyContent:'flex-start',
                      alignItems:'center',
                      color:'#ffffff'
                    }}
        >{spellName}</Typography>
        <Button sx={{
          fontSize: '18px',
          paddingLeft: '20px'
        }} variant='text' startIcon={<ArrowBackRoundedIcon/>} onClick={() => navigate(-1)}>Go Back</Button>
      </Box>
      </Box>
    </ThemeProvider>
  )
  
}

export default FavouriteMagicList
