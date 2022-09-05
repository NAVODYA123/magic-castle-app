// @ts-ignore
import {React,FC, useState,useEffect} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_SPELL_DETAILS} from '../graphql/grapqlQueries'
import './customStyles/customStyles.css'
import { ThemeProvider } from '@mui/material/styles';
import { Box,Container,Button,Typography  } from '@mui/material'
// @ts-ignore
import MagicCastleTheme from "./customStyles/theme/MagicCastleTheme.tsx";

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
    <ThemeProvider theme={MagicCastleTheme}>
    <div className="spell-information">
    <div className="spell-detail-container">
    <div className="spell-details-list">
    <div className="spell-detail-row">
      <Typography variant='h6'
                  sx={{
                    width: '50%',
                    display: 'flex',
                    justifyContent:'flex-start',
    
                  }}
      className="spell-detail-spell-name">{MagicSpellData?.spell?.name}</Typography> </div>
    <div className="spell-detail-row"><div className="spell-detail-cell-left">School Name</div><div className="spell-detail-cell-right">{MagicSpellData?.spell?.school.name} </div></div>
    <div className="spell-detail-row"><div className="spell-detail-cell-left">Duration</div><div className="spell-detail-cell-right">{MagicSpellData?.spell?.duration} </div></div>
    <div className="spell-detail-row"><div className="spell-detail-cell-left">Material</div><div className="spell-detail-cell-right">{MagicSpellData?.spell?.material ?? 'none'} </div></div>
    <div className="spell-detail-row"><div className="spell-detail-cell-left">Range</div><div className="spell-detail-cell-right">{MagicSpellData?.spell?.range} </div></div>
    <div className="spell-detail-row"><div className="spell-detail-cell-left">Level</div><div className="spell-detail-cell-right">{MagicSpellData?.spell?.level} </div></div>
    <div className="spell-detail-row"><div className="spell-detail-cell-left">HigherLevel</div><div className="spell-detail-cell-right">{MagicSpellData?.spell?.higher_level ?? 'none'} </div></div>
    <div className="spell-detail-row"><div className="spell-detail-cell-left">Damage type</div><div className="spell-detail-cell-right">test</div></div>
      </div>
    <Button className="back-button" onClick={() => navigate(-1)}>Go Back</Button>
    
  </div>
 </div>
    </ThemeProvider>
  )
  
}


export default MagicSpellDetails
