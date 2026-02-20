import React from 'react'
import st from '../images/startup.jpg'
import small1 from '../images/small.jpg'
import ecom from '../images/msme.jpg'
import Callus from '../components/Call-us'
import robot from '../images/Robo.png'
import { Link } from 'react-router-dom'

const Inderste = () => {
  const speak2 = ()=>{
    window.speechSynthesis.cancel()
    const message = new SpeechSynthesisUtterance(
      `
          deeshix Technology partner with startup organizations to transform ideas into impactful digital products. From MVP development to full-scale websites and e-commerce platforms, I create flexible, scalable, and performance-driven solutions that help startups launch faster, attract users, and grow confidently in competitive markets.
`);
    message.rate = 0.9;
    message.pitch = 0.-1;
    message.volume = 1;

    window.speechSynthesis.speak(message);
  }

  const speak = ()=>{
     window.speechSynthesis.cancel()
    const message = new SpeechSynthesisUtterance(
      `
      deeshix Technology work closely with startups and small to medium enterprises (SMEs) to design and develop modern, scalable websites that support business growth. From idea-stage startups to established SMEs, I provide customized digital solutions that enhance brand identity.
`);
    message.rate = 0.9;
    message.pitch = 0.-1;
    message.volume = 1;

    window.speechSynthesis.speak(message);
  }

  const speak3 = ()=>{
    window.speechSynthesis.cancel()
    const message = new SpeechSynthesisUtterance(
      `
     As a professional web developer, deeshix Technology specialize in building powerful and user-friendly e-commerce solutions for businesses of all sizes. I help startups, small and medium businesses, and growing brands establish a strong online presence with secure, scalable, and conversion-focused e-commerce websites.
`);
    message.rate = 0.9;
    message.pitch = 0.-1;
    message.volume = 1;

    window.speechSynthesis.speak(message);
  }
  return (
    <div>
      <div className="container">
            <img
              src={robot}
              alt="Robot"
              className={`robot`}
              style={{width:300,height:300,}}
              id='id7'
            />
            <div>
            </div>
          </div>
      <div className='jit'>
          <button className='btns' onClick={speak2}>Startups</button>
          <br/>
          <br/>
          <button className='btns' onClick={speak}>Small & Medium Businesses</button>
          <br/>
          <br/>
          <button className='btns' onClick={speak3}>E-commerce</button>
      </div>
      <br></br>
      <div className='jit'>
          <div style={{width:300}}>
            <br></br>
            <p style={{width:200, color:'black'}}>Deeshix Technology partner with startup organizations to transform ideas into impactful digital products. From MVP development to full-scale websites and e-commerce platforms, I create flexible, scalable, and performance-driven solutions that help startups launch faster, attract users, and grow confidently in competitive markets.</p>
          </div>
          <br/>
          <br/>
          <div style={{width:300}}>
            <br></br>
            <p style={{width:200,color:'black'}}>Deeshix Technology work closely with startups and small to medium enterprises (SMEs) to design and develop modern, scalable websites that support business growth. From idea-stage startups to established SMEs, I provide customized digital solutions that enhance brand identity.</p>
          </div>
          <br/>
          <br/>
          <div style={{width:300}}>
            <br></br>
            <p style={{width:200,color:'black'}}>As a professional web developer, deeshix Technology specialize in building powerful and user-friendly e-commerce solutions for businesses of all sizes. I help startups, small and medium businesses, and growing brands establish a strong online presence with secure, scalable, and conversion-focused e-commerce websites.</p>
          </div>
      </div>
      <Callus/>
    </div>
  )
}

export default Inderste
