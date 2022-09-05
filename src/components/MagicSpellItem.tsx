// @ts-ignore
import {React, FC, useState, useContext} from 'react'
import {useNavigate} from "react-router-dom";
// @ts-ignore
import MagicSpellDetails from './MagicSpellDetails.tsx';
import {FavouritesContext} from '../context/FavouritesContext.js'
import {ThemeProvider} from '@mui/material/styles';
import {Box, Container, Button, Typography} from '@mui/material'
// @ts-ignore
import MagicCastleTheme from "./customStyles/theme/MagicCastleTheme.tsx";


type Props = {
  spellName: string
  spellIndex: string
}


const MagicSpellItem: FC<Props> = ({spellName, spellIndex}) => {
  const navigate = useNavigate();
  
  // const [favoritesList, setFavouritesList] =useState<any[]>([])
  
  const {favoritesList, setFavouritesList} = useContext(FavouritesContext)
  
  
  const viewDetails = (spellIndex, e) => {
    e.preventDefault()
    navigate("/spell-information", {state: {selectedSpellIndex: spellIndex}})
    console.log('spell index printed ', spellIndex)
    return (<MagicSpellDetails/>)
  }
  
  const AddToFavourites = (spellName, e) => {
    e.preventDefault()
    const alreadyInList = favoritesList.includes(spellName)
    
    !alreadyInList ? setFavouritesList((prevFavouriteList) => [...prevFavouriteList, spellName])
      : alert('Already added to list favourites')
    
    console.log(favoritesList)
  }
  
  return (
    <ThemeProvider theme={MagicCastleTheme}>
      <Box className="spell-container-wrapper"
           sx={{
             display: 'flex',
             flexDirection: 'row',
             justifyContent: 'space-between',
             height: '50px'
           }}>
        <Typography className="spell-container" variant='h6'
           sx={{
             width: '50%',
             display: 'flex',
             justifyContent:'flex-start',
             
           }}
        >{spellName}</Typography>
        <Box sx={{width: '50%'}}>
          <Button sx={{
            height: '24px',
            fontSize: '14px'
            
          }} variant='contained' className="View-detail-button" onClick={(e) => viewDetails(spellIndex, e)}>View
            details</Button>
          <Button
            sx={{
              height: '24px',
              fontSize: '14px',
              color:'#ff4162',
            }}
            variant='outlined' className="View-detail-button" onClick={(e) => AddToFavourites(spellName, e)}>Favourites
            list</Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
  
}

export default MagicSpellItem
