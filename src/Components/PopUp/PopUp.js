import React, { useContext } from 'react'
import './PopUp.css'
import { IonIcon } from '@ionic/react'
import { closeOutline } from 'ionicons/icons'
import { PopupContext } from '../../App'


const PopUp = ({ children, setIsPopupOn }) => {

  const { state, dispatch } = useContext(PopupContext)

  const handleClose = () => {
    setIsPopupOn(false)
    dispatch({ type: 'POPUP', payload: false })
  }
  return (
    <div className='popup_on'>
      <div className='popup-container'>
        <div className='popup-close-btn' onClick={() => handleClose()} >
          <IonIcon style={{ height: 22, width: 22, color: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }} icon={closeOutline} />
        </div>
        <div className=''>
          <div className="popup-contents">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp