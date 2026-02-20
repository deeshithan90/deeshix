import React from 'react'
import Callus from '../components/Call-us'
import image from '../images/com.webp'


const Ecommmerce = () => {
  return (
    <div style={{marginTop:250}}>
        <h1 className='text-4xl text-center' style={{color:'#41C1BA'}}>E-Commerce Solutions That Grow Your Business</h1>
        <br/>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
        <img src={image} width={300} height={300} style={{borderRadius:500}} className='image9'/>
        <p style={{color:'black', padding:20}}>Take your business online with Deeshix Technology. We create custom, secure, and user-friendly e-commerce stores that attract customers and boost sales. From eye-catching designs to smooth checkout systems, mobile-ready platforms, and secure payments, we handle it all.
With our data-driven insights and SEO-friendly strategies, your store reaches the right audience and converts visitors into loyal customers. Partner with Ashdee Infotech and make online shopping simple, safe, and profitable for your business.
</p>
    </div>
<div>
    <br></br>

    <br/>
    <div style={{border:'black 2px solid'}}></div>
    <br/>
    <center>
        <h1 className='text-3xl fgt'>Our E-Commerce Services Include:</h1>
      <br/>
      <br/>
  </center>
 <div style={{display:'flex',alignItems:'center',justifyContent:'space-around', color:'black'}}>
              <div>
                <p className='text-2xl'>Online Store Development</p>
              <br/>
              <p className='text-2xl'>Secure Payment Gateway Integration</p>
              <br/>
                <p className='text-2xl'>Shopping Cart & Checkout Solutions</p>
              </div>
             <div>
              <p className='text-2xl'>Product & Inventory Management</p>
              <br/>
              <p className='text-2xl'>Digital Marketing & SEO for E-Commerce</p>
              <br/>
              <p className='text-2xl'>Analytics & Reporting</p>
             </div>
      </div>
      <br></br>
</div>
   <Callus/>
    </div>
  )
}

export default Ecommmerce
