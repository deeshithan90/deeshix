import React from 'react'
import Callus from '../components/Call-us'
import logo from '../images/Asdee 1.png'

const VM = () => {
  return (
    <>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',}}>
    <div style={{marginTop:250,display:'flex',alignItems:'center',columnGap:60}}>
     <div>
         <div className='sp'>
            <div>
              <h1 className='text-4xl'>Vision</h1>
            <br/>
            <p>To help businesses and startups grow through smart, innovative web solutions.</p>
            </div>
         </div>
     </div>
     <img src={logo} style={{width:200,height:200}}/>
     <div>
         <div className='sp'>
          <div>
            <h1 className='text-4xl'>Mission</h1>
            <br/>
            <p>Our mission is to help entrepreneurs, startups, and small to medium businesses grow online by delivering high-quality web development, e-commerce, and digital solutions.</p>
          </div>
         </div>
     </div>
     </div>
     </div>
     <Callus/>
    </>
  )
}

export default VM
