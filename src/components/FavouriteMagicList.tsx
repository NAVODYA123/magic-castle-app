// @ts-ignore
import React, {useContext} from 'react'
import {FavouritesContext} from '../context/FavouritesContext'
import {spells} from "./MagicSpellList";
import {Typography} from "@mui/material";

const FavouriteMagicList = () => {
  
  // const {favoritesList} = useContext(FavouritesContext)
  
  return (
    <div>
      <Typography>Favourite Magic Spell List</Typography>
      {/*<div>{favoritesList.length===!0 ? favoritesList.map((item: string) => {*/}
      {/*  return (<div>{item}</div>)*/}
      {/*}):'No favourites to show'}</div>*/}
      
    </div>
  )
}


export default FavouriteMagicList
