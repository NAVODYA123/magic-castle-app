// @ts-ignore
import React, {useContext} from 'react'
import {FavouritesContext} from '../context/FavouritesContext'
import {spells} from "./MagicSpellList";
import {Typography} from "@mui/material";

const FavouriteMagicList = () => {
  
  const {favoritesList} = useContext(FavouritesContext)
  console.log('favoritesList',favoritesList)
  return (
    <div>
      <Typography>Favourite Magic Spell List</Typography>
      <div>{(favoritesList.length)> 0 ? favoritesList.map((item: string) => {
        return (<div key={item}>{item}</div>)
      }):'No favourites to show'}</div>
      
    </div>
  )
}


export default FavouriteMagicList
