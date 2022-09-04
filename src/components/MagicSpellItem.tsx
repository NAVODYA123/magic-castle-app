// @ts-ignore
import {React, FC, useState, useContext} from 'react'
import { useNavigate  } from "react-router-dom";
// @ts-ignore
import MagicSpellDetails from './MagicSpellDetails.tsx';
import {FavouritesContext} from '../context/FavouritesContext.js'

type Props = {
  spellName: string
  spellIndex:string
}




const MagicSpellItem:FC<Props> = ({spellName,spellIndex}) => {
  const navigate = useNavigate();
  
  // const [favoritesList, setFavouritesList] =useState<any[]>([])
  
  const { favoritesList, setFavouritesList} = useContext(FavouritesContext)

  
  const viewDetails = (spellIndex,e) => {
    e.preventDefault()
    navigate("/spell-information",{state:{selectedSpellIndex:spellIndex}})
    console.log('spell index printed ',spellIndex)
    return(<MagicSpellDetails/>)
  }
  
  const AddToFavourites = (spellName,e) => {
    e.preventDefault()
    const alreadyInList = favoritesList.includes(spellName)

    !alreadyInList ? setFavouritesList((prevFavouriteList)=>[...prevFavouriteList,spellName])
      : alert('Already added to list favourites')
    
    console.log(favoritesList)
  }
  
  return(
    <div className="flex spell-container-wrapper">
      <div className="spell-container"  >{spellName}</div>
      <button className="View-detail-button"  onClick={(e)=>viewDetails(spellIndex,e)} >View details</button>
      <button className="View-detail-button" onClick={(e)=>AddToFavourites(spellName,e)}>Add to favourites list</button>
    </div>
  )
  
}

export default MagicSpellItem
