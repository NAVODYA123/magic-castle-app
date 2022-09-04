// @ts-ignore
import {React,FC, useState,useEffect} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_SPELL_DETAILS} from '../graphql/grapqlQueries'

type magicDamage = {
  name:string,
  desc:string
}

type magicSpellItemType = {
  
  area_of_effect: string,
  attack_type: string,
  casting_time: string,
  duration: string,
  index:string,
  level: number,
  material: string,
  name: string,
  range: string
  ritual: boolean
  higher_level:string,
  damage:magicDamage,
  school: MagicSchool
}

type MagicSchool = {
  index:string,
  name:string
}

interface StateType {
  selectedSpellIndex: string
}

type NavigatorData ={
  selectedSpellIndex:string
}

const MagicSpellDetails:FC = () => {
  
  // const [magicSpellItemData,setMagicSpellItemData] = useState<magicSpellItemType>()
  // const [IndexValueReturned, setIndex] =useState('')
  
  const navigate = useNavigate()
  // @ts-ignore
  const location = useLocation<StateType>();
  
  // @ts-ignore
  const itemIndex = location.state.selectedSpellIndex
  
  const {
    loading:MagicSpellLoading,
    error:MagicSpellError,
    data: MagicSpellData } = useQuery(GET_SPELL_DETAILS,{
    variables:{ index:itemIndex }
  });
  if (MagicSpellLoading) return <p>Loading...</p>;
  if (MagicSpellError) return <p>Error :</p>;
 
  
  return(
    <div className="spell-detail-container">
     <div className="spell-detail-row"><div>{MagicSpellData?.spell?.name}</div></div>
      <div className="spell-detail-row"><div>School Name</div><div>{MagicSpellData?.spell?.school.name} </div></div>
    <div className="spell-detail-row"><div>Duration</div><div>{MagicSpellData?.spell?.duration} </div></div>
    <div className="spell-detail-row"><div>Material</div><div>{MagicSpellData?.spell?.material ?? 'none'} </div></div>
    <div className="spell-detail-row"><div>Range</div><div>{MagicSpellData?.spell?.range} </div></div>
    <div className="spell-detail-row"><div>Level</div><div>{MagicSpellData?.spell?.level} </div></div>
    <div className="spell-detail-row"><div>HigherLevel</div><div>{MagicSpellData?.spell?.higher_level ?? 'none'} </div></div>
    
    <div className="spell-detail-row"><div>Damage type</div><div></div>
      <div></div><div>level </div><div>damage</div>
      <div>Damage at character level</div><div>level </div><div>damage</div>
    </div>
    <button onClick={() => navigate(-1)}>Go Back</button>
    
  </div>)
  
}


export default MagicSpellDetails
