import React from 'react'
import {FaPhone} from 'react-icons/fa'
const Callus = () => {
  return (
    <>
    <br></br>
    <div className='jus' style={{backgroundColor:'black', padding:20}}>
        <div className='text-3xl p-10 bg-white-500' style={{display:'flex',alignItems:'center',columnGap:30}}>
         <h2  style={{color:'#CCFF00'}}>Call to Action</h2>
         <p><FaPhone style={{color:'#CCF000'}}/></p>
        </div>
         <center>
            <div>
              <p className='typing' style={{color:'#CCF000'}}>Ready to build a website that fits your budget, meets your goals.</p>
              <p className='typing' style={{textAlign:'center',color:'#CCF000'}}>Contact us today for a free consultation! Ph : (+91) 8148181929</p>
         </div>
         </center>
    </div>
     </>
  )
}

export default Callus 
