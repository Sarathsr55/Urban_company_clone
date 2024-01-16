import React from 'react'
import './Slider.css'
import images from '../Constants/images'

const Slider = () => {
  return (
    <div>
        <img style={{height:'480px',width:'870px',borderRadius:'10px'}} src={images.COVER_PIC1} alt="" />
    </div>
  )
}

export default Slider