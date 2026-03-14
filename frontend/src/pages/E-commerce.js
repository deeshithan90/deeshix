import React from 'react'
import Callus from '../components/Call-us'
import image from '../images/com.webp'

const Ecommmerce = () => {
  return (
    <div style={{marginTop:250}}>
    <div className='ans'>
      <h1 className='text-white text-5xl text-center p-4'>
        Our Web Development & Digital Marketing Services
    </h1>
      <h2 className='text-4xl text-center mt-5 mb-4'>
          Complete Digital Solutions for Your Business
      </h2>
      <h3 className='text-2xl text-center mb-10'>Website Development | SEO Services | Social Media Marketing | Website Maintenance</h3>
    </div>
    <br/>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center',columnGap:80}}>
        <a href='/contact'><img src={image} width={300} height={300} style={{borderRadius:500}} className='image9'/></a>
        <p style={{color:'#f7f7f7', width:400, padding:20}}>
          At Deeshix Technology, we offer comprehensive digital solutions designed to help businesses succeed online. Our services include professional website development, search engine optimization, digital marketing campaigns, and ongoing website maintenance.
Our goal is to build high-performance websites that are mobile-friendly, SEO-optimized, and capable of generating leads for your business.
</p>
    </div>
<div>
    <br></br>

    <br/>
    <div style={{border:'black 2px solid'}}></div>
    </div>
   <Callus/>
    </div>
  )
}

export default Ecommmerce
