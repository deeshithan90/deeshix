import React from 'react'
import logo from '../images/Asdee 1.png'
const BarndsValue = () => {
  return (
    <div className='our-b'>
      <h2 className='text-3xl csaa ml-5'>Our Brand Values</h2>
      <div className='yu' style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:40}}>
          <div style={{color : 'black',}} className='lg:grid grid-cols-4 gap-10'>
              <div className='w-[500px]'>
                <h3 className='text-2xl' style={{color:'#CCFF00'}}>Quality-Driven Development</h3>
                <br></br>
                <p className='md:w-1/2 lg:w-1/2 sm:w-full' style={{color:'#f7f7f7'}}>We believe in building websites that are fast, secure, scalable, and visually engaging. Every project is crafted with clean code, modern technologies, and attention to detail.</p>
              </div>
              <br></br>
              <br></br>
              <div className='w-[500px]'>
                <h3 className='text-2xl' style={{color:'#CCFF00'}}>Innovation & Modern Technology</h3>
                <br></br>
                <p className='md:w-1/2 lg:w-1/2 sm:w-full' style={{color:'#f7f7f7'}}>We stay ahead of trends and continuously adopt the latest web technologies to create future-ready digital experiences.</p>
              </div>
              <br></br>
              <br></br>
              <div className='w-[500px]'>
                  <h3 className='text-2xl' style={{color:'#CCFF00'}}>Performance & Reliability</h3>
                  <br></br>
                  <p className='md:w-1/2 lg:w-1/2 sm:w-full' style={{color:'#f7f7f7'}}>We develop websites that load fast, work smoothly, and perform consistently across all devices and browsers.</p>
              </div>
              <br></br>
              <br></br>
              <div className='w-[500px]'>
                <h3 className='text-2xl' style={{color:'#CCFF00'}}>Continuous Support</h3>
                <br/>
                <p className='md:w-1/2 lg:w-1/2 sm:w-full'  style={{color:'#f7f7f7'}}>Our relationship doesn’t end at launch. We provide ongoing support, maintenance, and improvements to ensure your digital presence stays strong.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default BarndsValue
