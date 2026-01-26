import React from 'react'
import {FaPhone} from 'react-icons/fa'
const Callus = () => {
  return (
    <>
    <br></br>
    <div style={{backgroundColor:'#41C1BA', padding:20}}>
        <div className='text-3xl p-10 bg-white-500' style={{display:'flex',alignItems:'center',columnGap:30}}>
         <h1>Call to Action</h1>
         <p><FaPhone/></p>
        </div>
         <center>
            <div>
              <p className='typing text-2xl' style={{color:'#f7f7f7'}}>Ready to build a website that fits your budget, meets your goals, and grows your business?</p>
              <p className='typing text-2xl' style={{textAlign:'center',color:'#f7f7f7'}}>Contact us today for a free consultation! Ph : (+91) 8148181929</p>
         </div>
         </center>
    </div>
     </>
  )
}

export default Callus 
