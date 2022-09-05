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


type Props = {

}
const MagicSpellList:FC <Props>= () => {
  const navigate = useNavigate()
  const [renderSpellList, setSpellList] = useState([''])
  
  const [favoritesList, setFavouritesList] =useState<any[]>([])
  
  const { loading:MagicSpellListLoading, error:MagicSpellListError, data: MagicSpellListData } = useQuery(GET_SPELL_LIST);
  if (MagicSpellListLoading) return <p>Loading...</p>;
  if (MagicSpellListError) return <p>Error :</p>;

  const DisplayAllSpells = async () => {
    await setSpellList(MagicSpellListData?.spells?.map((item, index) => {
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
             backgroundRepeat:'no-repeat',
             backgroundPosition:'center',
             backgroundSize:'cover'
    }} style={paperBackground.paperContainer}>
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
    <div className="spells-button-container">
    <Button sx={{
      '&:hover': {
        backgroundColor: '#000000',
        color:'#ff4162',
        boxShadow: 'none',
        borderWidth:'2px',
        borderColor:'#ff4162'
      },
    }} variant='contained' onClick={DisplayAllSpells}>Read all spells</Button>
    <Button sx={{
      backgroundColor:'#ffffff',
      color:'#000000',
      borderColor:'#000000',
      '&:hover': {
        backgroundColor: '#000000',
        color:'#ffffff',
        borderColor:'#ffffff'
      }
      
    }} variant='outlined' onClick={ClearSpellList}>Clear all Spells</Button>
    </div>
    <Button className="back-button" onClick={() => navigate(-1)}>Go Back</Button>
  </Box>
 </FavouritesContext.Provider>
  </ThemeProvider>

)


}

export default MagicSpellList
