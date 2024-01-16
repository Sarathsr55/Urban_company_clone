import React, { useState, useEffect, useRef } from 'react'
import './ContentPage.css'
import { IonIcon } from '@ionic/react'
import { star } from 'ionicons/icons'
import { checkmarkOutline } from 'ionicons/icons'
import Seperator from '../../Components/Seperator/Seperator'
import images from '../../Components/Constants/images'
import ServiceCategories from '../../Components/Constants/ServiceCategories'
import Slider from '../../Components/Slider/Slider'

const ContentPage = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const [servicesCat, setServicesCat] = useState(ServiceCategories)
  const [services, setServices] = useState([])
  const [categories, setCategories] = useState([])
  const [height, setHeight] = useState(100)

  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight - 120)
  })


  useEffect(() => {

    servicesCat ?
      setServices([servicesCat.Services])
      :
      setServices([])
  }, [])

  useEffect(() => {
    services ?
      services.map((obj) => {
        setCategories(Object.values(obj));
      })
      :
      setCategories([])
  }, [services])


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='contentpage_container'>
        <div className="left_section">
          <div>
            <div>
              <h1 style={{ margin: '15px 0 2px 0', textAlign: 'left' }}>Full Home Cleaning</h1>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IonIcon style={{ height: 22, width: 22, color: 'grey' }} icon={star} color='primary' />
                <p style={{ margin: '0 5px 0 5px' }}>4.75 (855K booking)</p>
              </div>
            </div>
            <Seperator height={40} />

            <div style={{ height: `${height}px` }}>
              <div className={scrollPosition < 100 ? 'sub_category' : 'sticky-left'}>
                <Seperator height={15} />
                <div style={{ display: 'flex', padding: '0 20px 0 20px', alignItems: 'center' }}>
                  <p style={{ fontSize: 12, color: 'gray', fontWeight: 'bold' }}>select a service</p>
                  <Seperator width={10} />
                  <div style={{ height: '.1px', width: '175px', borderBottom: '.01px solid #D3D3D3', display: 'flex', alignItems: 'center' }}></div>
                </div>
                <Seperator height={15} />
                <div className='sub_category_list'>
                  {
                    categories.map((obj) => {
                      return (
                        <div key={obj.title}>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '80px', height: '120px' }}>
                            <img style={{ height: '60px', width: '60px', borderRadius: '10%' }} src={obj.img} alt="" />
                            <p style={{ margin: 0, fontSize: 12, lineBreak: '40px', width: '80px', textAlign:'center' }}>{obj.title}</p>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>


          </div>
        </div>
        <div className="right_section">
          <div ref={ref}>
            <Seperator height={20} />
            <div className="poster_conatiner">
              <Slider />
            </div>
            <Seperator height={45} />
            <div style={{ borderBottom: '0.1px solid #D3D3D3' }}> </div>
            <div style={{ display: 'flex' }} >
              <div className='service_category_details' >
                {
                  categories.map((obj) => {
                    return (
                      <div  className='main_box'>
                        <h2 style={{margin:0,padding:'5px 0 0 0'}}>{obj.title}</h2>
                        <Seperator height={10} />
                        {
                          Object.values(obj.range).map(item => {

                            return (
                              <div className='range_box' >
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', minWidth: '350px' }}>
                                  <div style={{ borderBottom: '2px solid #D3D3D3', width: '340px', borderBottomStyle: 'dotted' }}>
                                    <Seperator height={35}/>
                                    <h4 style={{ margin:2}}>{item.title}</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                      <IonIcon style={{ height: 12, width: 12 }} icon={star} color='primary' />
                                      <p style={{ fontSize: 12,margin:1 }}>{item.rating}</p>
                                    </div>
                                    <h5 style={{ margin:3 }}>starts @ ₹{item.price}</h5>
                                  </div>
                                  <div>
                                    {
                                      item.description.map(ob => {
                                        return (
                                          <div key={ob}>
                                            <p style={{fontSize:12,lineBreak:'300px',width:'300px'}}>{ob}</p>
                                            
                                          </div>
                                        )
                                      })
                                    }
                                    <div style={{display:'flex',justifyContent:'start',padding:'5px',cursor:'pointer'}}>
                                      <Seperator width={10} />
                                      <p style={{color:'blueviolet',margin:0}}>View Details</p>  
                                    </div>
                                  </div>
                                  <Seperator height={20} />
                                </div>
                                <div>
                                  <img style={{height:'120px',width:'120px',borderRadius:'10px'}} src={obj.img} alt="" />
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
              <div style={{ position: 'relative' }}>
                <div className={scrollPosition < 566 ? 'right_side_card' : 'sticky-right'}>
                  <Seperator height={35} />
                  <div className='cart_item_box'>
                    <img style={{height:90}} src={images.EMPTY_CART} alt="" />
                    <p style={{margin:1,fontSize:14,textAlign:'center'}}>No items in your cart</p>
                  </div>
                  <Seperator height={25} />
                  <div className='offer_box'>
                    <div>
                      <img style={{height:50,width:50}} src={images.DISCOUNT_LOGO} alt="" />
                    </div>
                    <Seperator width={10} />
                    <div>
                      <p style={{margin:0,fontSize:14,fontWeight:'bold'}}>20% off on kotak silk cards</p>
                      <p style={{margin:0,fontSize:14}}>20% off up to INR 350</p>
                    </div>
                  </div>
                  <Seperator height={25} />
                  <div className='promise_box'>
                    <div>
                      <p style={{fontSize:22,margin:14}}>UC Assurance</p>
                      <div style={{display:'flex',alignItems:'center'}}>
                        <IonIcon style={{height:20,width:20}} icon={checkmarkOutline} />
                        <Seperator width={5} />
                        <p style={{margin:1}}>Verified Professionals</p>
                      </div>
                      <div style={{display:'flex',alignItems:'center'}}>
                        <IonIcon style={{height:20,width:20}} icon={checkmarkOutline} />
                        <p style={{margin:1}}>Safe Chemicals</p>
                      </div>
                      <div style={{display:'flex',alignItems:'center'}}>
                        <IonIcon style={{height:20,width:20}} icon={checkmarkOutline} />
                        <p style={{margin:1}}>Superior Stain Removal</p>
                      </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                      <Seperator height={10} />
                      <img style={{height:75,width:75}} src={images.QUALITY_BADGE} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', top: `${height + 220}px`, left: 0, right: 0, borderTop: '4px solid #D3D3D3', margin: '0 145px 0 145px' }}></div>
    </div>
  )
}

export default ContentPage