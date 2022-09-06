// @ts-ignore
import {React, FC, useState, useContext} from 'react'
import {useNavigate} from "react-router-dom";
import MagicSpellDetails from './MagicSpellDetails';
import {FavouritesContext} from '../context/FavouritesContext'
import {ThemeProvider} from '@mui/material/styles';
import {Box, Container, Button, Typography,Fab } from '@mui/material'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MagicCastleTheme from "./customStyles/theme/MagicCastleTheme";


type Props = {
  spellName: string
  spellIndex: string
}

type favList = string[]

const MagicSpellItem: FC<Props> = ({spellName, spellIndex}) => {
  const navigate = useNavigate();
  
  // const [favoritesList, setFavouritesList] =useState<any[]>([])
  
  const {favoritesList, setFavouritesList} = useContext(FavouritesContext)
  
  
  const viewDetails = (spellIndex:string, e:any) => {
    e.preventDefault()
    navigate("/spell-information", {state: {selectedSpellIndex: spellIndex}})
    console.log('spell index printed ', spellIndex)
    return (<MagicSpellDetails/>)
  }
  
  const AddToFavourites = (spellName:string, e:any) => {
    e.preventDefault()
    const alreadyInList = favoritesList.includes(spellName)
 
    !alreadyInList ? favoritesList.push(spellName) : favoritesList
      setFavouritesList(favoritesList)
    alreadyInList ? alert('Already added to list favourites') : ''
    // !alreadyInList ? setFavouritesList((prevFavouriteList) => [...prevFavouriteList, spellName])
    //   : alert('Already added to list favourites')
    // console.log(favoritesList)
  }
  
  return (
    <ThemeProvider theme={MagicCastleTheme}>
      <Box className="spell-container-wrapper"
           sx={{
             display: 'flex',
             flexDirection: {xs:'column', sm:'row',md:'row',lg:'row'},
             justifyContent: 'space-between',
             height: {xs:'auto', sm:'auto',md:'50px',lg:'50px'},
             maxHeight:{xs:'auto', sm:'70px',md:'50px',lg:'50px'}
           }}>
        <Typography className="spell-container" variant='h6'
           sx={{
             width: {lg:'50%',md:'50%',sm:'100%',xs:'100%'},
             display: 'flex',
             justifyContent:'flex-start',
             alignItems:'center'
           }}
        >{spellName}</Typography>
        <Box sx={{width: {lg:'50%', md:'50%', sm:'100%',xs:'100%'}, display:'flex', justifyContent:'space-around', alignItems:'center'}}>
          <Button
            size='small' variant='contained' color='info' className="View-detail-button" onClick={(e) => viewDetails(spellIndex, e)}>View
            details</Button>
          <Fab  color='info' size="small" aria-label="add" onClick={(e) => AddToFavourites(spellName, e)}>
            <FavoriteOutlinedIcon sx={{ color: 'primary.main'}} />
          </Fab>
          </Box>
      </Box>
    </ThemeProvider>
  )
  
}

export default MagicSpellItem
