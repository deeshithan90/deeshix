import React from 'react'
import Callus from '../components/Call-us'
import image from '../images/mobileApp.jpg'

const MobileApp = () => {
  return (
    <div style={{marginTop:250}}>
      <div className='ans'>
           <h1 className='text-5xl text-center'>Mobile App Development Services for Businesses</h1>
           <h2 className='text-4xl text-center mt-5 mb-4'>Custom Mobile App Development Solutions</h2>
           <h3 className='text-2xl text-center'>Startup Mobile App Solutions</h3>
      </div>
        <div className='flexs'>
        <a href='/contact'><img src={image} width={1000} height={1000} style={{borderRadius:500}} className='image9'/></a>
        <br/>
        <br/>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', columnGap:80}}>
        <p className='md:w-1/2 lg:w-1/2 sm:w-full mt-30' style={{color:'#f7f7f7', width:'full', padding:20,marginTop:40}}>Deeshix Technology provides end-to-end mobile app development services to help businesses transform their ideas into powerful digital experiences. We design and develop secure, high-performance, and user-friendly mobile applications for both Android and iOS platforms. By leveraging the latest technologies and industry best practices, our team delivers scalable mobile solutions that enhance user engagement, streamline operations, and support long-term business growth.</p>
    </div>
    </div>
<div> 
    <br></br>
    <div style={{border:'black 2px solid'}}></div>
    <br/>
    <center>
        <h1 className='text-3xl csaa'>Industries We Serve</h1>
        <br/>
        <p className='md:w-1/2 lg:w-1/2 sm:w-full mt-30' style={{fontSize:18, color:'#f7f7f7',marginTop:40}}>Deeshix Technology serves a wide range of industries by delivering tailored digital solutions that address unique business challenges. We work with clients across sectors such as :</p>
      <br/>
      <br/>
      <br/>
  </center>
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-around', color:'#f7f7f7'}}>
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
