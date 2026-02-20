import React from 'react'
import image5 from '../images/Asdee 1.png'
import { FaIntercom, FaInternetExplorer, FaMailBulk, FaPhone } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <div style={{borderTop:'black 2px solid'}}></div>
    <br></br>
    <footer className='footer' style={{color:'black'}}>
        <div>
            <img src={image5} width={100} height={200} style={{borderRadius:600, width:300,height:200}}/>
        </div>
        <div>
           <p style={{display:'flex',alignItems:'center',columnGap:10}}><FaMailBulk/> : deeshiss@deeshix.com</p>
           <p style={{display:'flex',alignItems:'center',columnGap:10}}><FaPhone/> : (+91) 8148181929</p>
           <p style={{display:'flex',alignItems:'center',columnGap:10}}><FaInternetExplorer/> www.deeshix.com</p>
        </div>
        <div>
            <h2>© copy rights reserved 2026 www.deeshix.com</h2>
        </div>
    </footer>
    </>
  )
}

export default Footer
