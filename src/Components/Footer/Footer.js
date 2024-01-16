import React from 'react'
import './Footer.css'
import images from '../Constants/images'
import Seperator from '../Seperator/Seperator'
import { IonIcon } from '@ionic/react'
import { logoLinkedin } from 'ionicons/icons'
import { logoTwitter } from 'ionicons/icons'
import { logoInstagram} from 'ionicons/icons'
import { logoFacebook } from 'ionicons/icons'

const Footer = () => {
  return (
    <div className='footer_container'>
      <Seperator height={30} />
      <div style={{ display: 'flex', justifyContent: 'flex-start',padding:'0 16px 0 16px' }}>
        <img style={{ height: '42px' }} src={images.UC_LOGO} alt="" />
      </div>
      <Seperator height={40} />
      <div style={{display:'flex',width:'100%',justifyContent:'flex-start',borderBottom:'.5px solid #D3D3D3',padding:'0 0 32px 0'}}>
        <div style={{width:'276px',padding:'0 32px 0 16px'}}>
          <p style={{ fontWeight: '600', fontSize: 20 }}>Company</p>
          <Seperator height={15} />
          <div>
            <p className='cursor' style={{color:'blue'}}>About us</p>
            <p className='cursor' style={{color:'blue'}}>Terms & conditions </p>
            <p className='cursor' style={{color:'blue'}}>Privacy policy </p>
            <p className='cursor' style={{color:'blue'}}>Anti-discrimination policy </p>
            <p className='cursor' style={{color:'blue'}}>UC impact </p>
            <p className='cursor' style={{color:'blue'}}>Careers</p>
          </div>
        </div>
        <div style={{width:'276px',padding:'0 32px 0 16px'}}>
          <p style={{ fontWeight: '600', fontSize: 20 }}>For customers</p>
          <Seperator height={15} />
          <div>
            <p style={{color:'blue'}}>UC reviews </p>
            <p style={{color:'blue'}}>Categories near you </p>
            <p style={{color:'blue'}}>Blog </p>
            <p style={{color:'blue'}}>Contact us </p>
          </div>
        </div>
        <div style={{width:'276px',padding:'0 32px 0 16px'}}>
          <p style={{ fontWeight: '600', fontSize: 20 }}>For partners</p>
          <Seperator height={15} />
          <div>
            <p style={{color:'blue'}}>Register as a professional </p>
          </div>
        </div>
        <div style={{width:'276px',padding:'0 32px 0 16px' }}>
          <p style={{ fontWeight: '600', fontSize: 20 }}>Social links</p>
          <Seperator height={15} />
          <div style={{display:'flex'}}>
            <div style={{padding:10,border:'.5px solid #D3D3D3',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}><IonIcon style={{height:25,width:25}} icon={logoTwitter} /></div>
            <Seperator width={5} />
            <div style={{padding:10,border:'.5px solid #D3D3D3',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}><IonIcon style={{height:25,width:25}} icon={logoFacebook} /></div>
            <Seperator width={5} />
            <div style={{padding:10,border:'.5px solid #D3D3D3',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}><IonIcon style={{height:25,width:25}} icon={logoInstagram} /></div>
            <Seperator width={5} />
            <div style={{padding:10,border:'.5px solid #D3D3D3',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'50%'}}><IonIcon style={{height:25,width:25}} icon={logoLinkedin} /></div>
          </div>
          <Seperator height={10} />
          <div style={{display:'flex',justifyContent:'start'}}>
            <img style={{height:60}} src={images.APPSTORE_LOGO} alt="" />
          </div>
          <Seperator height={10} />
          <div style={{display:'flex',justifyContent:'start'}}>
            <img style={{height:53}} src={images.PLAYSTORE_LOGO} alt="" />
          </div>
        </div>
      </div>
      <Seperator height={50} />
      <div>
        <p style={{fontSize:12,color:'grey'}}>© copyright 2023 Urban company. All rights reserved</p>
      </div>
      <Seperator height={20} />
    </div>
  )
}

export default Footer