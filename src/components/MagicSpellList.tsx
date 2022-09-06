// @ts-ignore
import React, {FC,useState} from 'react'
import { useQuery } from '@apollo/client';
import {GET_SPELL_LIST} from '../graphql/grapqlQueries.js'
// @ts-ignore
import MagicSpellItem from './MagicSpellItem.tsx';
import {FavouritesContext} from '../context/FavouritesContext.js'
// @ts-ignore
import FavouriteMagicList from './FavouriteMagicList.tsx';
import { ThemeProvider } from '@mui/material/styles';
import { Box,Container,Button,Typography  } from '@mui/material'
// @ts-ignore
import MagicCastleTheme from "./customStyles/theme/MagicCastleTheme.tsx";
import './customStyles/customStyles.css'
import { Paper } from '@mui/material';
// @ts-ignore
import scroll from '../bg_scroll_1.jpeg'
import {useNavigate} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

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
  
  const imagUrl = ''
  
  const paperBackground = {
    paperContainer: {
      backgroundImage: `url(${scroll})`,
     
    }
  }
  
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
    <Typography variant='h2' color='primary.main' >Magic spells</Typography>
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
    <Box sx={{ width:'50%'}} className="spells-button-container">
    <Button sx={{
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
      '&:hover': {
        backgroundColor: '#000000',
        color:'#ffffff',
        borderColor:'#ffffff'
      }
      
    }} size='medium' variant='outlined' onClick={ClearSpellList}>Clear all Spells</Button>
    </Box>
    <Button className="back-button" onClick={() => navigate(-1)}>Go Back</Button>
  </Box>
 </FavouritesContext.Provider>
  </ThemeProvider>

)


}

export default MagicSpellList
