// @ts-ignore
import {React} from 'react'
import {useNavigate} from "react-router-dom";
import HomePageMagic from "./HomePageMagic";

const HomePage = () => {
  
  const navigate = useNavigate()
  
  const RedirectToSpellRoom = () => {
    navigate("/spell-room")
  }
  
  
  return (
    <div>
    <div>Welcome to magic castle</div>
      <div><HomePageMagic/></div>
    <button onClick={()=>RedirectToSpellRoom()}>Visit spell room</button>
  </div>
  )


}

export default  HomePage
