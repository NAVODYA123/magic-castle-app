// @ts-ignore
import React, {useContext} from 'react'
import {FavouritesContext} from '../context/FavouritesContext.js'

const FavouriteMagicList = () => {
  
  const { favoritesList } = useContext(FavouritesContext)
  
  return(<div>
  <div>Favourite Magic Spell List</div>
  <div>{favoritesList.map((item)=>{
    return (<div>{item}</div>)
  })}</div>
  
  </div>)
}


export default FavouriteMagicList
