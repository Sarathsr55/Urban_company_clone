import React, { useState } from 'react'
import './About.css'
import Seperator from '../../Components/Seperator/Seperator'
import { IonIcon } from '@ionic/react'
import { chevronDownOutline } from 'ionicons/icons'
import { chevronUpOutline } from 'ionicons/icons'

const About = () => {

    const [isClicked,setIsClicked] = useState(-1)

    const handleClick = (id)=>{
        if(isClicked === id){
            setIsClicked(-1)
        }else{
            setIsClicked(id)
        }
    }

  return (
    <div className='about_container'>
        <h1>About Full Home Cleaning</h1>
        <div>
            <h3>Home Deep Cleaning in Bangalore, India</h3>
            <Seperator height={10} />
            <p className='small_font'>Does deep cleaning your house seem like an overwhelming chore to you, and you do not know where to start? Don’t worry! Plenty of people feel that way when it comes to cleaning their homes. The good news is that there is a simple solution to this problem which is hiring professionals offering home cleaning services in Bangalore, India from Urban Company. We also offer specific services like kitchen deep cleaning, bathroom deep cleaning or sofa/mattress cleaning if you don’t want to get your entire house cleaned.</p>
        </div>
        <Seperator height={10} />
        <div >
            <h3>4 Reasons to Hire Professional cleaning service</h3>
            <Seperator height={10} />
            <div style={{padding:'0 10px 0 10px'}}>
            <div style={{display:'flex'}}>
                <p className='small_font'>1.</p>
                <Seperator width={20} />
                <p className='small_font'> Reduce Stress: If you get stressed out by all the cleaning chores you need to do to maintain your home, you should book a professional home cleaning service for yourself. The cleaning p  rofessionals can carry out the tasks effectively while you get some time out for yourself and relax at home.</p>
            </div>
            <div style={{display:'flex'}}>
                <p className='small_font'>2.</p>
                <Seperator width={20} />
                <p className='small_font'> Maintain Hygiene: Dust, allergens and germs may lead to breathing difficulties, allergies and diseases. If you have pets at home, regular pressure vacuuming of carpets and sofa helps remove the fur which, if not cleaned regularly, also leads to breathing difficulties. The cleaning professionals sanitize your bathroom, kitchen, floors, carpets and sofa so that all the germs and allergens are removed or killed from your home.</p>
            </div>
            <div style={{display:'flex'}}>
                <p className='small_font'>3.</p>
                <Seperator width={20} />
                <p className='small_font'> Effective Cleaning: The cleaning professionals are trained in using different tools and products to clean your home. Some of them are quite harsh and only professionals know how to handle such products. Therefore, it is a better bet to hire professionals for house cleaning services rather than struggling to do it yourself.</p>
            </div>
            <div style={{display:'flex'}}>
                <p className='small_font'>4.</p>
                <Seperator width={20} />
                <p className='small_font'> Improves Health: After home deep cleaning, the air in your home gets cleaner due to the removal of dust. The furniture becomes germ-free because of pressure vacuuming and your home gets bacteria and pest-free. Your house smells fresh and looks clean as well. And, there are no spots that can act as a breeding ground for these germs.</p>
            </div>
            </div>
        </div>
        <Seperator height={10} />
        <div>
            <h3>When Should You Book A Full Home Deep Cleaning Service?</h3>
            <Seperator height={10} />
            <div style={{padding:'0 10px 0 10px'}}>
                <div style={{display:'flex'}}>
                    <p className='small_font'>1.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Every 2 months, to keep your home clean and allergen free for your family.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>2.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Before moving into a new home or after renovation work.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>3.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Before or after a party or get together.</p>
                </div>
            </div>
        </div>
        <Seperator height={10} />
        <div>
            <h3>Why Urban Company?</h3>
            <Seperator height={10} />
            <div style={{padding:'0 10px 0 10px'}}>
                <div style={{display:'flex'}}>
                    <p className='small_font'>1.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Complete cleaning and sanitation: From pressure vacuuming to sanitizing the entire house, the Urban Company cleaning professionals make sure to deep clean your home thoroughly that provides lasting effects for 2-3 months.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>2.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Insurance Against Damage: With Urban Company you get insurance coverage up to Rs. 10,000 on every booking against any damage.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>3.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Flexibility: Urban Company provides you a comprehensive professional home cleaning service to meet all your cleaning needs at your chosen location and time.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>4.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Well-Trained & Verified Cleaners: All Urban Company professionals are trained and taken through levels of background verification before getting on board to ensure the quality of work.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p  className='small_font'>5.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Usage of Professional grade chemicals: Considering the hygiene of your house, we at Urban Company only use Professional grade  non-hazardous chemicals for home deep cleaning.</p>
                </div>
            </div>
        </div>
        <Seperator height={10} />
        <div>
            <h3>What does our Professional Home Deep Cleaning Include?</h3>
            <Seperator height={10} />
            <div style={{padding:'0 10px 0 10px'}}>
                <div style={{display:'flex'}}>
                    <p className='small_font'>1.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Bathroom Deep Cleaning: Deep cleaning of floor, WC seat, sink, fittings and walls.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>2.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Other areas: Cleaning of doors, cupboards, handles, wardrobe exteriors, fans, lights, windows, railings, cabinets, and switchboards.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>3.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Living Room, Dining Room & Bedroom Cleaning: Deep cleaning of floor, windows, furniture, light fittings.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>4.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Sofa & furnishing Cleaning: Sofa vacuuming/shampoo and dry vacuum cleaning of carpets, and curtains.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>5.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Kitchen Deep Cleaning: Deep cleaning of external surfaces, cabinets and appliance exteriors, and removal of grease and oil stains.</p>
                </div>
                <div style={{display:'flex'}}>
                    <p className='small_font'>6.</p>
                    <Seperator width={20}/>
                    <p className='small_font'>Balcony Deep Cleaning: Deep cleaning of floor, grill work and windows.</p>
                </div>
            </div>
        </div>
        <Seperator height={120} />
        <div style={{width:'600px'}}>
            <h1>Quick Links</h1>
            <div onClick={()=>handleClick(0)} style={{borderBottom:'.5px solid #D3D3D3',cursor:'pointer'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0 10px 0' }}>
                    <p style={{fontSize:18,fontWeight:'700px',color:'black'}}>Serving in</p>
                    {
                        isClicked === 0 ?
                        <IonIcon style={{height:20,width:20}} icon={chevronUpOutline} />
                        :
                        <IonIcon style={{height:20,width:20}} icon={chevronDownOutline} />
                    }
                </div>
                {
                    isClicked === 0 ?
                    <div>
                        <p style={{textAlign:'left',color:'black',fontSize:14}}> 
                        Kota, India • Ludhiana, India • Dehradun, India • Vadodara, India • Chennai, India • Ranchi, India • Sonipat, India • Kakinada, India • Chandigarh Tricity, India • Lucknow, India • Agra, India • Ratnagiri, India • Varanasi, India • Bhopal, India • Guntur, India • Madurai, India • Bangalore, India • Jamshedpur, India • Kochi, India • Hyderabad, India • Patna, India • Kolkata, India • Nagpur, India • Vijayawada, India • Jaipur, India • Coimbatore, India • Gwalior, India • Ahmedabad, India • Amritsar, India • Mumbai, India • Raipur, India • Alwar, India • Delhi NCR, India • Warangal, India • Surat, India • Bhubaneswar, India • Rohtak, India • Visakhapatnam, India • Jabalpur, India • Udaipur, India • Kanpur, India • Cuttack, India • Pune, India • Meerut, India • Karnal, India • Mysore, India • Indore, India • Nashik, India • Prayagraj, India • Rajahmundry, India • Thiruvananthapuram, India • Jodhpur, India • Aurangabad, India • Panipat, India • Guwahati, India 
                        </p>
                        <Seperator height={15} />
                    </div>
                    :
                    <div>

                    </div>
                }
            </div>
            <div onClick={()=>handleClick(1)} style={{borderBottom:'.5px solid #D3D3D3',cursor:'pointer'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0 10px 0'}}>
                    <p style={{fontSize:18,fontWeight:'700px',color:'black'}}>Categories</p>
                    {
                        isClicked === 1 ?
                        <IonIcon style={{height:20,width:20}} icon={chevronUpOutline} />
                        :
                        <IonIcon style={{height:20,width:20}} icon={chevronDownOutline} />
                    }
                </div>
                {
                    isClicked === 1 ?
                    <div>
                        <p style={{textAlign:'left',color:'black',fontSize:14}}> 
                        Carpenters in Bangalore, India • Massage For Men in Bangalore, India • Washing Machine Repair in Bangalore, India • Television Repair in Bangalore, India • Salon Prime in Bangalore, India • Plumbers in Bangalore, India • Electricians in Bangalore, India • Full Home Cleaning in Bangalore, India • Spa For Women in Bangalore, India • Ac Service & Repair in Bangalore, India • See more 
                        </p>
                        <Seperator height={15} />
                    </div>
                    :
                    <div>

                    </div>
                }
            </div>
            <div onClick={()=>handleClick(2)} style={{borderBottom:'.5px solid #D3D3D3',cursor:'pointer'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0 10px 0'}}>
                    <p style={{fontSize:18,fontWeight:'700px',color:'black'}}>Also available in</p>
                    {
                        isClicked === 2 ?
                        <IonIcon style={{height:20,width:20}} icon={chevronUpOutline} />
                        :
                        <IonIcon style={{height:20,width:20}} icon={chevronDownOutline} />
                    }
                </div>
                {
                    isClicked === 2 ?
                    <div>
                        <p style={{textAlign:'left',color:'black',fontSize:14}}> 
                        Full Home Cleaning in Kengeri, Bangalore, India • Full Home Cleaning in Peenya, Bangalore, India • Full Home Cleaning in Kodigehalli, Bangalore, India • Full Home Cleaning in Hennur Gardens, Bangalore, India • Full Home Cleaning in Hebbal, Bangalore, India • Full Home Cleaning in Kannuru, Bangalore, India • Full Home Cleaning in Adugodi, Bangalore, India • Full Home Cleaning in Basavanagudi, Bangalore, India • Full Home Cleaning in Padmanabhanagar, Bangalore, India • Full Home Cleaning in Thippasandra, Bangalore, India • See more 
                        </p>
                        <Seperator height={15} />
                    </div>
                    :
                    <div>

                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default About