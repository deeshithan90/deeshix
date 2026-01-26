import React from 'react'
import web from '../images/webd.jpg'
import Callus from '../components/Call-us'

const WebDevlopemnet = () => {
  return (
    <>
    <div className='mt-50' style={{marginTop:250}}>
       <h1 className='text-5xl text-center' style={{color:'#41C1BA'}}>Web development</h1>
       <br></br>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center', columnGap:80}}>
      <img src={web} width={300} height={300} style={{borderRadius:500}} />
       <p style={{width:400, color:'#f7f7f7'}}>Deeshix Technology offers professional web development services designed to create fast, secure, and visually engaging websites that help businesses grow online. We specialize in building responsive, user-friendly, and scalable web solutions tailored to your brand and business goals. From simple business websites to complex web applications, our team combines modern technologies with smart design to deliver high-performance websites that enhance user experience and drive results.</p>
       </div>
      </div>
      <br/>
      <div style={{borderTop:'black 3px solid'}}></div>
      <br></br>
<center>    
        <h1 className='text-3xl fgt'>Industries We Serve</h1>
        <br/>
        <p style={{fontSize:18, width:700,color:'#f7f7f7'}}>Deeshix Technology serves a wide range of industries by delivering tailored digital solutions that address unique business challenges. We work with clients across sectors such as :</p>
      <br/>
      <br/>
      <br/>
  </center>
  <div style={{display:'flex',alignItems:'center',justifyContent:'center', columnGap:380, color:'#f7f7f7'}}>
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
      <Callus/>
      </>
  )
}

export default WebDevlopemnet
