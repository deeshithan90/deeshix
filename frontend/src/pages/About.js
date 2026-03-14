import React from 'react'
import Callus from '../components/Call-us'
import BarndsValue from '../components/BarndsValue'
import CreatorVoice from '../components/CreatorVoice'

const About = () => {
  return (
    <div style={{marginTop:220}}>
      <div className='ans'>
      <h1 className='text-5xl w-full text-center'>
          Your Trusted Website Development Partner
      </h1>
      <br/>
      <h2 className='text-3xl w-full text-center'>
          Complete Digital Solutions for Your Business
      </h2>
      </div>
      <CreatorVoice/>
<br/>
<br/> 
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
             <div style={{display:'flex',alignItems:'center', columnGap:20}}>
                <div style={{backgroundColor:'black', padding:20}}>
                    <h1 className='text-3xl csaa' style={{marginBottom:10}}>About us</h1>
                    <br></br>
                    <p style={{color:'white',paddingLeft:50, padding:30}} className='md:w-1/2 lg:w-1/2 sm:w-full'>Deeshix Technology is dedicated to
                       providing innovative website development and digital marketing services to businesses
                        looking to build a strong online presence. Our mission is to help companies grow 
                        digitally through creative design, efficient development, and data-driven marketing 
                        strategies.
                    </p>
                    <p style={{color:'white',paddingLeft:30,}} className='md:w-1/2 lg:w-1/2 sm:w-full'>
                        We combine modern technologies, user-focused design, and SEO best practices to deliver websites that perform well in search engines and provide an exceptional user experience.
                    </p>
                </div>
             </div>
        </div>
        <br/>
        <BarndsValue/>
        <Callus/>
    </div>
  )
}

export default About
