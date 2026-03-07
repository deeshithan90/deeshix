import React from 'react'
import deeshi from '../images/deeshi.jpg'
const CreatorVoice = () => {
  return (
    <div>
         <h1 className='ml-10 text-3xl' style={{color : '#41C1BA'}}>Creator Voice</h1>  
         <br></br>
         <div className='about'>
            <div>
                <img src={deeshi} className='deeshi'/>
            </div>
            <br/>
            <br/>
            <div>
                <p style={{color:'#f7f7f7', padding:10}} >Hi, I’m Deeshithan Sathish, a passionate young developer focused on building modern, high-quality digital solutions. Aim to provide website to all Buisness module with low budjet. While many people my age consume technology, I choose to create it. I am a self-taught developer who transformed learning time into real-world building by studying and following industry-leading engineers. I specialize in HTML, CSS, JavaScript, Python, and Node.js, with hands-on experience in frameworks and technologies such as React, React Native, Express, MongoDB, Flutter, 
and Django. My work includes web development, e-commerce platforms, mobile application development, and SEO-focused solutions. I have completed full-stack development projects and successfully deployed them for clients. In 11th January 2026, I founded "DEESHIX TECHNOLOGY" to support businesses with custom-built, reliable, and scalable digital products, ensuring long-term growth through clean code, innovation, and high professional standards.
</p>
            </div>
         </div>    
    </div>
  )
}

export default CreatorVoice
