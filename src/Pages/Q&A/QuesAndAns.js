import React, { useState,useRef,useEffect } from 'react'
import './QuesAndAns.css'
import QuestionsAndAnswers from '../../Components/Constants/QuestionsAndAnswers'
import { IonIcon } from '@ionic/react'
import { chevronDownOutline } from 'ionicons/icons'
import { chevronUpOutline } from 'ionicons/icons'
import Seperator from '../../Components/Seperator/Seperator'

const QuesAndAns = () => {

    const [active,setActive] = useState(-1)

    const handleQues = (id)=>{
        if(active === id){
            setActive(-1)
        }else{
            setActive(id)
        }
    }

    return (
        <div style={{width:'100%'}}>
            <div className='ques_and_ans_container'>
            <div className='qa-left'>
                <h1>Frequently asked questions</h1>
                {
                    QuestionsAndAnswers.quesAndAns.map((obj)=>{
                        return(
                            <div key={obj.id} onClick={()=>handleQues(obj.id)} className={active === obj.id? 'quesAreaActive' : 'quesArea'}>
                                <div style={{minWidth:'690px'}}>
                                    <Seperator height={10} />
                                    <p>{obj.ques}</p>
                                    <Seperator height={10} />
                                    {active === obj.id?
                                        <div>
                                            <p>{obj.ans}</p> 
                                            <Seperator height={10} />
                                        </div>
                                    :
                                        ''
                                    }
                                </div>
                                {
                                    active === obj.id ? 
                                    <IonIcon style={{height:'22px',width:'22px',marginTop:'16px'}} icon={chevronUpOutline} />
                                    :
                                    <IonIcon style={{height:'22px',width:'22px'}} icon={chevronDownOutline} />
                                }
                            </div>
                        )
                    })
                }
                <Seperator height={25} />
            </div>
            <div className='qa-right'>
                <div style={{padding:'0 36px 0 36px',minWidth:'367px'}}>
                <h1 style={{textAlign:'left',margin:'15px 0 15px 0'}}>Full Home Cleaning in Bangalore, India</h1>
                <p style={{textAlign:'left',fontSize:14,color:'grey'}}>Get home cleaning services in Bangalore, India with a 3-Day Service Guarantee and Protection against Damage upto INR 10,000. We have Well Equipped and Trained Team, who carries out Deep House Cleaning and Sanitization with Non-Hazardous Chemicals. Book well-trained and experienced team from Urban Company to get your home deep cleaned thoroughly at your chosen time and location. We offer the most affordable home cleaning services in Bangalore, India for studios, apartments, and villas. Book home cleaning services on Urban Company today.</p>
                <Seperator height={36} />
                <h1 style={{textAlign:'left',margin:'10px 0 10px 0'}}>You are here</h1>
                <p style={{textAlign:'left',fontSize:14,color:'grey',margin:'0 10px 0 20px',cursor:'pointer'}}>Home / Kerala / Full Home Cleaning in Kerala </p>
                </div>
            </div>
        </div>
        <div style={{ position: 'relative', left: 0, right: 0, borderTop: '4px solid #D3D3D3', margin: '0 145px 0 145px' }}></div>
        </div>
    )
}

export default QuesAndAns