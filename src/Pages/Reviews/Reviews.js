import React, { useEffect, useState } from 'react'
import './Reviews.css'
import { IonIcon } from '@ionic/react'
import { star } from 'ionicons/icons'
import { ellipse } from 'ionicons/icons'
import Seperator from '../../Components/Seperator/Seperator'
import reviews from '../../Components/Constants/reviews'
import images from '../../Components/Constants/images'
import { chevronDownOutline } from 'ionicons/icons'

const Reviews = () => {


    return (
        <div>
            <div className='reviews_container'>
            <div className="reviews_left">
                <h1>Customer reviews</h1>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 70px 0 0',width:'720px' }}>
                    <div>
                        <h1>Avg. user rating</h1>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IonIcon icon={star} />
                            <h1 style={{ margin: '0 0 0 0' }}>4.76</h1>
                        </div>
                        <p style={{ margin: 0 }}>206K bookings review</p>
                    </div>
                    <div style={{ padding: '24px 0 0 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IonIcon icon={star} />
                            <h5 className='rating_margin'>5</h5>
                            <Seperator width={15} />
                            <div style={{ width: '200px', height: '5px', background: 'black' }}></div>
                            <div style={{ width: '50px', height: '5px', background: '#D3D3D3' }}></div>
                            <Seperator width={15} />
                            <p className='rating_margin font_grey_color'>187K ...</p>
                        </div>
                        <Seperator height={10} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IonIcon icon={star} />
                            <h5 className='rating_margin'>4</h5>
                            <Seperator width={15} />
                            <div style={{ width: '20px', height: '5px', background: 'black' }}></div>
                            <div style={{ width: '230px', height: '5px', background: '#D3D3D3' }}></div>
                            <Seperator width={15} />
                            <p className='rating_margin font_grey_color'>8K ...</p>
                        </div>
                        <Seperator height={10} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IonIcon icon={star} />
                            <h5 className='rating_margin'>3</h5>
                            <Seperator width={15} />
                            <div style={{ width: '15px', height: '5px', background: 'black' }}></div>
                            <div style={{ width: '235px', height: '5px', background: '#D3D3D3' }}></div>
                            <Seperator width={15} />
                            <p className='rating_margin font_grey_color'>4K ...</p>
                        </div>
                        <Seperator height={10} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IonIcon icon={star} />
                            <h5 className='rating_margin'>2</h5>
                            <Seperator width={15} />
                            <div style={{ width: '5px', height: '5px', background: 'black' }}></div>
                            <div style={{ width: '245px', height: '5px', background: '#D3D3D3' }}></div>
                            <Seperator width={15} />
                            <p className='rating_margin font_grey_color'>3K ...</p>
                        </div>
                        <Seperator height={10} />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <IonIcon icon={star} />
                            <h5 className='rating_margin'>1</h5>
                            <Seperator width={15} />
                            <div style={{ width: '10px', height: '5px', background: 'black' }}></div>
                            <div style={{ width: '240px', height: '5px', background: '#D3D3D3' }}></div>
                            <Seperator width={15} />
                            <p className='rating_margin font_grey_color'>4K ...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews_right">
                {
                    reviews.reviews.map((obj) => {
                        return (
                            <div key={obj.id} style={{ margin: '0 0 10px 0', display:'flex',flexDirection:'column',alignContent:'space-between',borderTop:'1px solid #D3D3D3',width:'390px' }}>
                                    <Seperator height={20} />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ height: 50, width: 50, background: '#D3D3D3', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                                            <img style={{ height: 30, width: 30 }} src={images.AVATAR_LOGO} alt="" />
                                        </div>
                                        <Seperator width={10} />
                                        <div>
                                            <p className='marg1' style={{ fontSize: 14, fontWeight: 'normal' }}>{obj.name}</p>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p className='marg1' style={{ fontSize: 12, fontWeight: 'normal' }} >{obj.date}</p>
                                                <Seperator width={5} />
                                                <IonIcon style={{ height: 5, width: 5, color: 'grey' }} icon={ellipse} />
                                                <Seperator width={5} />
                                                <p className='marg1' style={{ fontSize: 12, fontWeight: 'normal' }}>{obj.location.slice(0, 33)} ...</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <IonIcon style={{ height: 12, width: 12 }} icon={star} />
                                        <h5>{obj.rating}</h5>
                                    </div>
                                </div>
                                <Seperator height={10} />
                                <div>
                                    <p className='marg1' style={{fontSize:14,width:360}}>{obj.review}</p>
                                </div>
                                <Seperator height={30} />
                            </div>
                        )
                    })
                }

                <div style={{display:'flex',alignSelf:'start'}}>
                    <p className='show_more_btn' style={{padding:'10px 15px 10px 15px',border:'.5px solid #D3D3D3',display:'flex',alignItems:'center', color:'rgb(110, 66, 229)',cursor:'pointer'}}>Show more reviews <Seperator width={15} /> <IonIcon icon={chevronDownOutline} /></p>
                    
                </div>
            </div>
        </div>
        <div style={{borderBottom:'1px solid #D3D3D3',margin:'0 145px 0 145px'}}></div>
        </div>
    )
}

export default Reviews