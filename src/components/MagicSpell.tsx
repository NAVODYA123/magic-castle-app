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
      return (<div key={index}>{item.name}</div>)
    }))
  }
  
  const ClearSpellList = async () => {
    await setSpellList([''])
  }

  
return(
  <div>
    <h3>Magic spells</h3>
    <div>{renderSpellList}</div>
    {/*<div>{spellList.map((spell)=>{return(spell.)})}</div>*/}
    <button onClick={DisplayAllSpells}>Read all spells</button>
    <button onClick={ClearSpellList}>Clear All Spells</button>
  </div>)
  
  
}

export default MagicSpell
