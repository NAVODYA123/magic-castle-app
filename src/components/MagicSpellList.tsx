// @ts-ignore
import React, {FC,useState} from 'react'
import { useQuery } from '@apollo/client';
import {GET_SPELL_LIST} from '../graphql/grapqlQueries.js'
// @ts-ignore
import MagicSpellItem from './MagicSpellItem.tsx';
import {FavouritesContext} from '../context/FavouritesContext.js'
// @ts-ignore
import FavouriteMagicList from './FavouriteMagicList.tsx';



type Props = {

}
const MagicSpellList:FC <Props>= () => {
  
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
  
return(
  <FavouritesContext.Provider value={{favoritesList, setFavouritesList}}>
  <div className="spell-page-container">
    <h3 className="spell-list-heading">Magic spells</h3>
    <div className="spell-list-container">
      <div className="spell-list-background">
      <div className="spell-list">{renderSpellList}</div>
    </div>
    </div>
    <div className="spells-button-container">
    <button onClick={DisplayAllSpells}>Read all spells</button>
    <button onClick={ClearSpellList}>Clear all Spells</button>
    </div>
  </div>
</FavouritesContext.Provider>)


}

export default MagicSpellList
