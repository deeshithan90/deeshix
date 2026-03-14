import image5 from '../images/Asdee 1.png'
import {FaFacebook, FaGithub, FaInstagram, FaInternetExplorer, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <div style={{borderTop:'black 2px solid'}}></div>
    <br></br>
    <footer style={{color:'#F8FFFF'}}>
      <div className='footer'>
        <div>
           <div className='md:grid grid-cols-2 gap-5 p-8 ssss'>
           <a href='/'>
               <p>Home</p>
           </a>
           <a href='/About'>
               <p>About</p>
           </a>
           <a href='/blogs'>
               <p>Blogs</p>
           </a>
           <a href='/contact'>
               <p>Contact</p>
           </a>
           <a href='/Web-devlopement'>
              <p>Services</p>
           </a>
           <a href='https://www.saiofficefurniture.in'>
              <p>Active Clients</p>
           </a>
           <a>
              <p>Privacy policy</p>
          </a>
      </div>
        </div>
        <div>
           <p style={{display:'flex',alignItems:'center',columnGap:10,color:'#CCF000'}}><FaMailBulk/> : deeshiss@deeshix.com</p>
           <p style={{display:'flex',alignItems:'center',columnGap:10,color:'#CCF000'}}><FaPhone/> : (+91) 8148181929</p>
           <p style={{display:'flex',alignItems:'center',columnGap:10,color:'#CCF000'}}><FaInternetExplorer/> www.deeshix.com</p>
           <div className='flex gap-4 mt-4 sso'>
            <a style={{display:'flex',alignItems:'center',columnGap:10,color:'white'}}><FaInstagram size={20}/></a>
           <a href='https://www.linkedin.com/in/deeshix-technology-ba90763b3' target='_blank' style={{display:'flex',alignItems:'center',columnGap:10,color:'white'}}><FaLinkedin size={20}/></a>
           <a href='https://www.facebook.com/profile.php?id=61588119479370' target='_blank' style={{display:'flex',alignItems:'center',columnGap:10,color:'white'}}><FaFacebook size={20}/></a>
           <a href='https://github.com/deeshithan90' target='_blank' style={{display:'flex',alignItems:'center',columnGap:10,color:'white'}}><FaGithub size={20}/></a>
           </div>
        </div>    
      </div>
      <center>
        <div>
            <h2 style={{color:'#CCF000',marginTop:10}}>© copy rights reserved 2026 www.deeshix.com</h2>
        </div>
          <img src={image5} width={100} height={200} style={{borderRadius:600, width:200,height:200}}/>
      </center>
    </footer>
    </>
  )
}

export default Footer
