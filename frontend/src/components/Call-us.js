import React from 'react'
import {FaPhone} from 'react-icons/fa'
const Callus = () => {
  return (
    <>
    <br></br>
    <div style={{backgroundColor:'#CCFF00', padding:20}}>
        <div className='text-3xl p-10 bg-white-500' style={{display:'flex',alignItems:'center',columnGap:30}}>
         <h1 className='clor'>Call to Action</h1>
         <p><FaPhone className='clor'/></p>
        </div>
         <center>
            <div>
              <p className='typing' style={{color:'#0F2632'}}>Ready to build a website that fits your budget, meets your goals, and grows your business?</p>
              <p className='typing' style={{textAlign:'center',color:'#0F2632'}}>Contact us today for a free consultation! Ph : (+91) 8148181929</p>
         </div>
         </center>
    </div>
     </>
  )
}

export default Callus 
