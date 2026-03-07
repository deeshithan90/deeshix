import React, { useState } from 'react'
import robot from "../images/Robo.png";
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
                    style={{ width: 320, height: 320,}}
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
            <div  style={{ width: 320, height: 320,}}>
                <br/>
                <br/>
                <h1 className={`text-2xl clor ${sty? "typings" : ""}`}>DEESHIX technology</h1>
                <br/>
                
                <p style={{ display: 'flex', textAlign:'center', alignItems: 'center', columnGap: 10, color:'#f7f7f7', }}><FaMailBulk /> : deeshiss@deeshix.com</p>
                <p className='' style={{ display: 'flex', alignItems: 'center', columnGap: 10,color:'#f7f7f7', }}><FaPhone /> : (+91) 8148181929</p>
                <p className='' style={{ display: 'flex', alignItems: 'center', columnGap: 10 ,color:'#f7f7f7'}}><FaInternetExplorer /> : www.deeshix.com</p>
                <p className='' style={{ display: 'flex', alignItems: 'center', columnGap: 10 ,color:'#f7f7f7',fontSize:15}}><FaAddressCard/> : Madambakam,chennai,TamilNadu, India 600126</p>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1535124521765!2d80.167437083196!3d12.897848682679005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f206106d34d%3A0xa715941f4a087ae3!2sDeeshix%20technology!5e0!3m2!1sen!2sin!4v1771946446183!5m2!1sen!2sin" width="600" height="450" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full'></iframe>
        <br/>
        <Callus/>
        </>
    )
}

export default Contact
