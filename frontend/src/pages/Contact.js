import React, { useState } from 'react'
import robot from "../images/Robo.jpg";
import { FaMailBulk, FaInternetExplorer, FaPhone, FaAddressCard } from 'react-icons/fa';
import Callus from '../components/Call-us';

const Contact = () => {
const [sty,setsty] = useState(false)
    const speak = () => {
    window.speechSynthesis.cancel()
    const message = new SpeechSynthesisUtterance(
      `please contact  us below mentioned address. deeshix Technology. Email deeshiss@deeshix.com. Mobile Number 8148181929. website www.deeshix.com. Madambakam,chennai,TamilNadu, India 600126`);
    message.rate = 0.9;
    message.pitch = 0.1;
    message.volume = 1
    setsty(true)
    window.speechSynthesis.speak(message);
    message.onend = ()=>{
        setsty(false)
    }
  };
    return (
        <>
        <div className='op'>
            <div className="">
                <img
                    src={robot}
                    alt="Robot"
                    style={{ width: 320, height: 320, border: '#41C1BA 2px solid' }}
                />
                <div>
                </div>
            </div>
            <br/>
            <br/>
            <button onClick={speak} style={{ width: 100, backgroundColor: '#41C1BA', padding: 10, borderRadius: 15, border: 'none' }}>
                contact us
            </button>
            <br/>
            <br/>
            <div  style={{ width: 320, height: 320, border: '#41C1BA 2px solid' }}>
                <br/>
                <br/>
                <h1 className={`text-2xl text-white ${sty? "typings" : ""}`}>DEESHIX technology</h1>
                <br/>
                <p className='' style={{ display: 'flex', textAlign:'center', alignItems: 'center', columnGap: 10, color:'#f7f7f7', }}><FaMailBulk /> : deeshiss@deeshix.com</p>
                <p className='' style={{ display: 'flex', alignItems: 'center', columnGap: 10,color:'#f7f7f7', }}><FaPhone /> : (+91) 8148181929</p>
                <p className='' style={{ display: 'flex', alignItems: 'center', columnGap: 10 ,color:'#f7f7f7'}}><FaInternetExplorer /> : www.deeshix.com</p>
                <p className='' style={{ display: 'flex', alignItems: 'center', columnGap: 10 ,color:'#f7f7f7',fontSize:15}}><FaAddressCard/> : Madambakam,chennai,TamilNadu, India 600126</p>
            </div>
        </div>
        <br/>
        <Callus/>
        </>
    )
}

export default Contact
