// @ts-ignore
import React, {FC,useState} from 'react'
import { useQuery } from '@apollo/client';
import {SPELLS_QUERY} from '../graphql/grapqlQueries.js'


type Props = {

}

// type MagicSpellData ={
//   index: string
//   name: string
// }

const MagicSpell:FC <Props>= () => {
  
  const [renderSpellList, setSpellList] = useState([''])
  
  const { loading:MagicSpellLoading, error:MagicSpellError, data: MagicSpellData } = useQuery(SPELLS_QUERY);
  if (MagicSpellLoading) return <p>Loading...</p>;
  if (MagicSpellError) return <p>Error :</p>;
  if (MagicSpellData){
    console.log('Hooray!!')
  }
  
  
  const DisplayAllSpells = async () => {
    await setSpellList(MagicSpellData?.spells?.map((item, index) => {
      return (<div className="spell-container" key={index}>{item.name}</div>)
    }))
  }
  
  const ClearSpellList = async () => {
    await setSpellList([''])
  }

  
return(
  <div className="spell-page-container">
    <h3 className="spell-list-heading">Magic spells</h3>
    <div className="spell-list-container"> <div className="spell-list">{renderSpellList}</div>  </div>
    {/*<div>{spellList.map((spell)=>{return(spell.)})}</div>*/}
      <div className="spells-button-container">
    <button onClick={DisplayAllSpells}>Read all spells</button>
    <button onClick={ClearSpellList}>Clear All Spells</button>
      </div>
  
  </div>)
  
  
}

export default MagicSpell
