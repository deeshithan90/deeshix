import React from 'react'
import Callus from '../components/Call-us'
import image from '../images/mobileApp.jpg'

const MobileApp = () => {
  return (
    <div style={{marginTop:250}}>
        <h1 className='text-5xl text-center' style={{color:'#41C1BA'}}>Mobile App development</h1>
        <br/>
        <br/>
        <div className='flexs'>
        <img src={image} width={300} height={300} style={{borderRadius:500}} className='image9'/>
        <br/>
        <br/>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', columnGap:80}}>
        <p style={{color:'black', padding:20}}>Deeshix Technology provides end-to-end mobile app development services to help businesses transform their ideas into powerful digital experiences. We design and develop secure, high-performance, and user-friendly mobile applications for both Android and iOS platforms. By leveraging the latest technologies and industry best practices, our team delivers scalable mobile solutions that enhance user engagement, streamline operations, and support long-term business growth.</p>
    </div>
    </div>
<div> 
    <br></br>
    <div style={{border:'black 2px solid'}}></div>
    <br/>
    <center>
        <h1 className='text-3xl fgt'>Industries We Serve</h1>
        <br/>
        <p style={{fontSize:18, color:'black'}}>Deeshix Technology serves a wide range of industries by delivering tailored digital solutions that address unique business challenges. We work with clients across sectors such as :</p>
      <br/>
      <br/>
      <br/>
  </center>
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-around', color:'black'}}>
              <div>
                <p className='text-2xl'>Health care</p>
              <br/>
              <p className='text-2xl'>Education</p>
              <br/>
                <p className='text-2xl'>Retail</p>
              </div>
             <div>
              <p className='text-2xl'>Real estate</p>
              <br/>
              <p className='text-2xl'>Manufacturing</p>
              <br/>
              <p className='text-2xl'>Startups</p>
             </div>
      </div>
      <br></br>
</div>
   <Callus/>
    </div>
  )
}

// slmgr /xpr

export default MobileApp;
// slmgr /ipk VK7JG-NPHTM-C97JM-9MPGT-3V66T
// slmgr /ato
