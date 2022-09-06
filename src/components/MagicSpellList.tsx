// @ts-ignore
import React, {FC,useState} from 'react'
import { useQuery } from '@apollo/client';
import {GET_SPELL_LIST} from '../graphql/grapqlQueries.js'
import MagicSpellItem from './MagicSpellItem';
import {FavouritesContext} from '../context/FavouritesContext'
import FavouriteMagicList from './FavouriteMagicList';
import { ThemeProvider } from '@mui/material/styles';
import { Box,Container,Button,Typography  } from '@mui/material'
import MagicCastleTheme from "./customStyles/theme/MagicCastleTheme";
import './customStyles/customStyles.css'
import { Paper } from '@mui/material';
import {useNavigate} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

type Props = {

}

export type spells = {
  index : string
  name: string
}


const MagicSpellList:FC <Props>= () => {
  const navigate = useNavigate()
  const [renderSpellList, setSpellList] = useState([''])
  
  const [favoritesList, setFavouritesList] =useState<any[]>([])
  
  const { loading:MagicSpellListLoading, error:MagicSpellListError, data: MagicSpellListData } = useQuery(GET_SPELL_LIST);
  if (MagicSpellListLoading) return (<CircularProgress color="primary"/>);
  if (MagicSpellListError) return <p>Error :</p>;

  const DisplayAllSpells = async () => {
    await setSpellList(MagicSpellListData?.spells?.map((item:spells, index:number) => {
      return (
        <MagicSpellItem key={index} spellName ={item.name}  spellIndex={item.index} />
      )
    }))
  }
  
  const ClearSpellList = async () => {
    await setSpellList([''])
  }
  
  // const paperBackground = {
  //   paperContainer: {
  //     backgroundImage: `url(${scroll})`,
  //
  //   }
  // }
  
return(
  <ThemeProvider theme={MagicCastleTheme}>
  <FavouritesContext.Provider value={{favoritesList, setFavouritesList}}>
  <Box style={{height:'100vh'}}
       sx={{
         bgcolor: 'primary.dark',
         display:'flex',
         flexDirection:'column',
         justifyContent:'center',
         alignItems:'center'
  }}>
    <Typography sx={{
      paddingBottom:'20px'
    }} variant='h2' color='primary.main' >Magic spells</Typography>
    <Paper elevation={5}
           sx={{
             width:'50%',
             display:'flex',
             justifyContent:'center',
             backgroundColor:'#DCCB9F'
            
    }} >
    <Box className="spell-list-container"
         sx={{
           width:'80%',
           display:'flex',
           justifyContent:'center'
           }}>
    
        <Box className="spell-list"
        sx={{
          maxHeight:'400px',
          overflowY:'auto',
          width:'100%',
          marginBottom:'20px',
          marginTop:'20px'
        }}
      >{renderSpellList}</Box>
    </Box></Paper>
    <Box sx={{ width:'50%', paddingTop:'20px'}} className="spells-button-container">
    <Button sx={{
      margin:'10px',
      '&:hover': {
        backgroundColor: '#000000',
        color:'#ff4162',
        boxShadow: 'none',
        borderWidth:'2px',
        borderColor:'#ff4162'
      },
    }} size='medium' variant='contained' onClick={DisplayAllSpells}>Read all spells</Button>
    <Button sx={{
      backgroundColor:'#ffffff',
      color:'#000000',
      borderColor:'#000000',
      margin:'10px',
      '&:hover': {
        backgroundColor: '#000000',
        color:'#ffffff',
        borderColor:'#ffffff'
      }
      
    }} size='medium' variant='outlined' onClick={ClearSpellList}>Clear all Spells</Button>
    </Box>
    <Button sx={{
      fontSize: '18px',
      paddingLeft: '20px'
    }} variant='text' startIcon={<ArrowBackRoundedIcon/>} onClick={() => navigate(-1)}>Go Back</Button>
  </Box>
 </FavouritesContext.Provider>
  </ThemeProvider>

)


}

export default MagicSpellList
