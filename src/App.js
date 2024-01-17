import React, { createContext, useReducer, useContext, useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ContentPage from './Pages/ContentPage/ContentPage';
import Footer from './Components/Footer/Footer';
import { AppReducer, initialState } from './reducers/AppReducer';
import PopUp from './Components/PopUp/PopUp';
import QuesAndAns from './Pages/Q&A/QuesAndAns';
import Reviews from './Pages/Reviews/Reviews';
import About from './Pages/AboutPage/About';
import { IonIcon } from '@ionic/react'
import { locationOutline } from 'ionicons/icons'
import { searchOutline } from 'ionicons/icons'
import { locate } from 'ionicons/icons'
import { closeCircleOutline } from 'ionicons/icons'
import Seperator from './Components/Seperator/Seperator';
import images from './Components/Constants/images';


export const PopupContext = createContext()



const EnablePopup = () => {
  const [isPopupOn, setIsPopupOn] = useState(false)
  const { state, dispatch } = useContext(PopupContext)
  const [searchName, setSearchName] = useState('')
  useEffect(() => {
    if (state.popUp === true) {
      setIsPopupOn(true)
    }
  })
  return (
    <div>
      {
        isPopupOn ?
          <div className='pop_background' style={{height:window.innerHeight}}>
            <PopUp setIsPopupOn={setIsPopupOn}>
              <div className='location_search_box'>
                <IonIcon style={{ height: 22, width: 22, color: 'grey' }} size={44} icon={searchOutline} />
                <Seperator width={10} />
                <input style={{ border: 'none', outline: 0, fontSize: 16, width: '400px' }} placeholder='Search for your location/society/apartment' type="text" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
                <Seperator width={5} />
                {
                  searchName ?
                    <IonIcon style={{ height: 18, width: 18, color: 'black', display: 'grid', justifyItems: 'end' }} icon={closeCircleOutline} onClick={() => setSearchName('')} />
                    :
                    ''
                }
              </div>
              <Seperator height={15} />
              <div style={{display:'flex',alignItems:'center',alignSelf:'start',color:'rgb(110, 66, 229)',padding:'0 0 0 5px'}}>
                <IonIcon style={{cursor:'pointer',height:20,width:20}} icon={locate} />
                <p style={{cursor:'pointer',fontWeight:'500'}}>Use current location</p>
              </div>
              <Seperator height={15} />
              <div style={{height:'8px',width:'100%',background:'#d3d3d336'}}></div>
              <Seperator height={15} />
              <div style={{minHeight:100,display:'flex',alignItems:'center'}}>
                <p style={{margin:0,fontSize:14,fontWeight:'500'}}>powered by</p>
                <img style={{height:20,padding:'2px 0 0 0'}} src={images.GOOGLE_LOGO} alt="" />
              </div>
            </PopUp>
          </div>
          :
          <div>

          </div>
      }
    </div>
  )
}

function App() {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <div className="App" style={{width:window.innerWidth-18}}>
      <PopupContext.Provider value={{ state, dispatch }}>
        <NavBar />
        <ContentPage />
        <EnablePopup />
        <QuesAndAns />
        <Reviews />
        <About />
        <Footer />
      </PopupContext.Provider>
    </div>
  );
}

export default App;
