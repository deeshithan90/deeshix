import React from 'react'
import Callus from '../components/Call-us'
import BarndsValue from '../components/BarndsValue'
import CreatorVoice from '../components/CreatorVoice'

const About = () => {
  return (
    <div style={{marginTop:220}}>
      <div className='ans'>
      <h1 className='text-6xl w-full text-center'>
          Grow Your Business with Strong Online Presence | Deeshix Technology
      </h1>
      <br/>
      <h1 className='text-3xl w-full text-center'>
          Complete Digital Solutions for Your Business
      </h1>
      </div>
      <center>
      <div style={{border : 'white 2px solid',width:100,marginBottom:220,marginTop:60}}>
          
      </div>
      </center>
      <CreatorVoice/>
<br/>
<br/> 
        <div className="mt-10 p-10">
        <h2 className="text-4xl  font-blod csaa">About Us</h2>
        <h3 className="text-3xl font-bold mt-10 ml-10 w-[500px]">Deeshix Technology - Leading Web Development Company in Chennai</h3>
        <p className="mt-10 text-2xl text-left w-3/4 ml-10">
          Welcome to Deeshix Technology,
          your trusted partner for innovative and
          result-driven web development solutions in Chennai,
          Tamil Nadu, India. We specialize in creating modern,
          responsive, and high-performing websites that help businesses
          grow digitally.
        </p>
        <h3 className="text-3xl font-bold mt-10 ml-10 w-[500px]">Build Your Digital Presence with Experts</h3>
        <p className="mt-10 text-2xl text-left w-3/4 ml-10">
          At Deeshix Technology,
          we design and develop websites that are not just visually appealing
          but also optimized for performance, SEO, and user experience.
          Whether you are a startup, small business, or enterprise, we deliver customized web
          solutions tailored to your goals.
        </p>
      </div>
      
        <br/>
        <BarndsValue/>
        <Callus/>
    </div>
  )
}

export default About
