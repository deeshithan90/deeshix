import React from 'react'
import logo from '../images/Asdee 1.png'
const BarndsValue = () => {
  return (
    <div className='our-b'>
      <h1 className='text-3xl csaa ml-5'>Our Brand Values</h1>
      <div className='yu' style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:40}}>
          <div style={{color : 'black',}}>
              <div>
                <h1 className='text-2xl' style={{color:'#CCFF00'}}>Quality-Driven Development</h1>
                <br></br>
                <p className='md:w-1/2 lg:w-1/2 sm:w-full' style={{color:'#f7f7f7'}}>We believe in building websites that are fast, secure, scalable, and visually engaging. Every project is crafted with clean code, modern technologies, and attention to detail.</p>
              </div>
              <br></br>
              <br></br>
              <div>
                <h1 className='text-2xl' style={{color:'#CCFF00'}}>Innovation & Modern Technology</h1>
                <br></br>
                <p className='md:w-1/2 lg:w-1/2 sm:w-full' style={{color:'#f7f7f7'}}>We stay ahead of trends and continuously adopt the latest web technologies to create future-ready digital experiences.</p>
              </div>
              <br></br>
              <br></br>
              <div>
                  <h1 className='text-2xl' style={{color:'#CCFF00'}}>Performance & Reliability</h1>
                  <br></br>
                  <p className='md:w-1/2 lg:w-1/2 sm:w-full' style={{color:'#f7f7f7'}}>We develop websites that load fast, work smoothly, and perform consistently across all devices and browsers.</p>
              </div>
              <br></br>
              <br></br>
              <div>
                <h1 className='text-2xl' style={{color:'#CCFF00'}}>Continuous Support</h1>
                <br/>
                <p className='md:w-1/2 lg:w-1/2 sm:w-full'  style={{color:'#f7f7f7'}}>Our relationship doesn’t end at launch. We provide ongoing support, maintenance, and improvements to ensure your digital presence stays strong.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default BarndsValue
