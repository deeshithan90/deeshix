import React from 'react'
import web from '../images/webd.jpg'
import Callus from '../components/Call-us'

const WebDevlopemnet = () => {
  return (
    <>
    <div className='mt-50' style={{marginTop:250}}>
      <div className='ans'>
          <h1 className='text-5xl text-center'>Professional Web Development Services in Chennai</h1>
          <h2 className='text-4xl text-center mt-5 mb-4'>Responsive and SEO Friendly Web Design</h2>
          <h3 className='text-2xl text-center mb-10'>Startup Website Solutions</h3>
      </div>
       <br></br>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center', columnGap:80}}>
      <a href='/contact'><img src={web} width={300} height={300} style={{borderRadius:500}} className='image9' /></a>
       <p className='md:w-1/2 lg:w-1/2 sm:w-full' style={{color:'#f7f7f7', padding:20}}>Deeshix Technology offers professional web development services designed to create fast, secure, and visually engaging websites that help businesses grow online. We specialize in building responsive, user-friendly, and scalable web solutions tailored to your brand and business goals. From simple business websites to complex web applications, our team combines modern technologies with smart design to deliver high-performance websites that enhance user experience and drive results.</p>
       </div>
      </div>
      <br/>
      <div style={{borderTop:'black 3px solid'}}></div>
      <br></br>
<center>    
        <h1 className='text-3xl mb-10 mt-10 csaa'>Industries We Serve</h1>
        <br/>
        <p className='text-center md:w-1/2 lg:w-1/2 sm:w-full'  style={{fontSize:18,color:'#f7f7f7',padding:40}}>Deeshix Technology serves a wide range of industries by delivering tailored digital solutions that address unique business challenges. We work with clients across sectors such as :</p>
      <br/>
      <br/>
      <br/>
  </center>
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-around', color:'#f7f7f'}}>
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
