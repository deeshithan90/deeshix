import React from 'react'
import Callus from '../components/Call-us'
import robots from '../images/robots.jpg'
import logo from '../images/Asdee 1.png'
import BarndsValue from '../components/BarndsValue'
import CreatorVoice from '../components/CreatorVoice'

const About = () => {
  return (
    <div style={{marginTop:220}}>
      <CreatorVoice/>
<br/>
<br/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
             <div style={{display:'flex',alignItems:'center', columnGap:20}}>
                <div style={{backgroundColor:'#0F2632', padding:20}}>
                    <h1 className='text-3xl' style={{color:'#41C1BA'}}>About us</h1>
                    <br></br>
                    <p className='text-white' >We are a software development team focused on delivering reliable, scalable, and cost-effective digital solutions. Our goal is to help businesses grow by building high-quality software that solves real problems while staying within budget and timelines
We are a small but passionate team of software developers dedicated to delivering high-quality digital solutions at budget-friendly prices. Whether you need a web app, mobile app, or custom software, we bring your ideas to life efficiently and effectively.
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
