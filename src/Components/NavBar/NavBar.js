import React,{useState,useContext} from 'react'
import './NavBar.css'
import images from '../Constants/images'
import Seperator from '../Seperator/Seperator'
import { IonIcon } from '@ionic/react'
import { locationOutline } from 'ionicons/icons'
import {searchOutline} from 'ionicons/icons'
import {chevronDownOutline} from 'ionicons/icons'
import {closeCircleOutline} from 'ionicons/icons'
import { PopupContext } from '../../App'

const NavBar = () => {

  const {state,dispatch} = useContext(PopupContext)
  const [location,setLocation] = useState('Trivandrum, Kerala')
  const [searchName,setSearchName] = useState('')
  const [popup,setPopup] = useState(false)

  const enablePop = ()=>{
    setPopup(true)
    dispatch({type:'POPUP', payload: true})
  }

  return (
    <div className='navbar_container'>
        <div className="logo">
            <img style={{height:'42px'}} src={images.UC_LOGO} alt="" />
        </div>
        <div className="spacer">

        </div>
        <div className='right_nav_container'>
          <div className='location_box' onClick={()=>enablePop()}>
            <div className='location_logo'>
              <IonIcon style={{height:22,width:22,color:'grey'}} icon={locationOutline} />
              <Seperator width={5} />
              <div style={{textAlign:'center',display:'flex',alignItems:'center'}}>{location}</div>
            </div>
            <div style={{display:'flex',alignItems:'flex-start'}}>
              <IonIcon style={{height:22,width:22,color:'grey'}} icon={chevronDownOutline} />
            </div>
          </div>
          <Seperator width={10} />
          <div className='search_box'>
              <IonIcon style={{height:22,width:22,color:'grey'}} size={44} icon={searchOutline} />
              <Seperator width={10} />
              <input style={{border:'none',outline:0,fontSize:16,width:'300px'}} placeholder='Search your content' type="text" value={searchName} onChange={(e)=>setSearchName(e.target.value)} />
              <Seperator width={5} />
              {
                searchName?
              <IonIcon style={{height:18,width:18,color:'black',display:'grid',justifyItems:'end'}} icon={closeCircleOutline} onClick={()=>setSearchName('')} />
              :
              ''
              }
          </div>
        </div>
    </div>
  )
}

export default NavBar