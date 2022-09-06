// @ts-ignore
import {React, FC, useState, useEffect} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_SPELL_DETAILS} from '../graphql/grapqlQueries'
import './customStyles/customStyles.css'
import {ThemeProvider} from '@mui/material/styles';
import {Box, Container, Button, Typography} from '@mui/material'
import MagicCastleTheme from "./customStyles/theme/MagicCastleTheme";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

type magicDamage = {
  damage_type: magicDamgeType,
  damage_at_character_level: string,
  damage_at_slot_level: string
}

type magicDamgeType = {
  name: string,
  desc: string
}

type magicSpellItemType = {
  
  area_of_effect: string,
  attack_type: string,
  casting_time: string,
  duration: string,
  index: string,
  level: number,
  material: string,
  name: string,
  range: string
  ritual: boolean
  higher_level: string,
  damage: magicDamage,
  school: MagicSchool
}

type MagicSchool = {
  index: string,
  name: string
}

interface StateType {
  selectedSpellIndex: string
}

type NavigatorData = {
  selectedSpellIndex: string
}

const MagicSpellDetails: FC = () => {
  
  const navigate = useNavigate()
  // @ts-ignore
  const location = useLocation<StateType>();
  
  // @ts-ignore
  const itemIndex = location.state.selectedSpellIndex
  
  const {
    loading: MagicSpellLoading,
    error: MagicSpellError,
    data: MagicSpellData
  } = useQuery(GET_SPELL_DETAILS, {
    variables: {index: itemIndex}
  });
  if (MagicSpellLoading) return (<CircularProgress color="primary"/>);
  ;
  if (MagicSpellError) return <p>Error :</p>;
  
  const damageName = MagicSpellData?.spell?.damage?.damage_type?.name ?? 'unknown'
  const damageDescription = MagicSpellData?.spell?.damage?.damage_type?.desc ?? 'unknown'

  return (
    <ThemeProvider theme={MagicCastleTheme}>
      <Box style={{height: '100vh'}}
           sx={{
             bgcolor: 'primary.dark',
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
             alignItems: 'center'
           }}>
        <div className="spell-information">
          <div className="spell-detail-container">
            <div className="spell-details-list">
              <div className="spell-detail-row">
                <Typography variant='h6'
                            sx={{
                              width: '50%',
                              display: 'flex',
                              justifyContent: 'flex-start',
                              color: 'primary.main'
                  
                            }}
                            className="spell-detail-spell-name">{MagicSpellData?.spell?.name}</Typography></div>
              <Typography variant='body1'>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">School Name</div>
                  <div className="spell-detail-cell-right">{MagicSpellData?.spell?.school.name}</div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">Duration</div>
                  <div className="spell-detail-cell-right">{MagicSpellData?.spell?.duration}</div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">Area of effect</div>
                  <div className="spell-detail-cell-right">{MagicSpellData?.spell?.area_of_effect ?? 'unknown'}</div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">Attack type</div>
                  <div className="spell-detail-cell-right">{MagicSpellData?.spell?.attack_type ?? 'unknown'}</div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">Casting time</div>
                  <div className="spell-detail-cell-right">{MagicSpellData?.spell?.casting_time}</div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">Material</div>
                  <div className="spell-detail-cell-right">{MagicSpellData?.spell?.material ?? 'none'}</div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">Range</div>
                  <div className="spell-detail-cell-right">{MagicSpellData?.spell?.range} </div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">Level</div>
                  <div className="spell-detail-cell-right">{MagicSpellData?.spell?.level} </div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">HigherLevel</div>
                  <div className="spell-detail-cell-right">{MagicSpellData?.spell?.higher_level ?? 'none'} </div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">Damage type</div>
                  <div className="spell-detail-cell-right">{damageName}</div>
                </div>
                <div className="spell-detail-row">
                  <div className="spell-detail-cell-left">Damage description</div>
                  <div className="spell-detail-cell-right">{damageDescription}</div>
                </div>
              </Typography>
            </div>
          
          
          </div>
        
        </div>
        <Box sx={{
          width: '100%',
          height: '10%',
          display: 'flex'
        }}>
          <Button sx={{
            fontSize: '18px',
            paddingLeft: '20px'
          }} variant='text' startIcon={<ArrowBackRoundedIcon/>} onClick={() => navigate(-1)}>Go Back</Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
  
}


export default MagicSpellDetails
