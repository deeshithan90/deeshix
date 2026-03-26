import React from 'react'
import logo from '../images/Asdee 1.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAccusoft, FaBars, FaHome, FaLightbulb, FaMailBulk, FaPhone, FaUser } from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'
import {toast} from 'react-hot-toast'

const Navbar = ({ui,setui}) => {

   const [uis,setuis] = useState(false)
   const [uisff,setuisf] = useState(false)
   const [uis7,setuis7] = useState(false)
   const [ui6,setui6] = useState(false)
   const [se,sett] = useState(false)

const [formData, setFormData] = useState({
  name: "",
  email: "",
  contact: "",
  productEnquiry: "",
  describe: ""
});


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        toast.success('SucessFully create a project')
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

   const [textui,settextui] = useState(false)
   const [textuis,settextuis] = useState(false)
   function click(){
      sett(true)
   }
   function home(){
      sett(false)
      settextui(false)
      settextuis(false)
      setui(false)
      window.speechSynthesis.cancel()
   }
   function click2(){
      settextui(true)
      settextuis(false)
      sett(false)
      setui(false)
   }
   function lci(){
      settextuis(true)
      sett(false)
      settextui(false)
      setui(false)
   }
   function lici2(){
     settextuis(false)  
   }
   function click3(){
      sett(false)
   }
   function click5(){
      settextui(false)
   }
   function x(){
      setui(false)
   }
   function click90(e){
    e.preventDefault()
    setuisf(true)
   }
  return (
   <>
    <nav className='navbar z-50'>
       <div>
          <img src={logo} className='w-[140px] h-[170px]' style={{borderRadius:265}}/>
       </div>
       <div className='nav-sub'>
          <Link onClick={()=> window.location.href='/'}>
             <p onClick={home}>Home</p>
          </Link>
          <div>
            <p onMouseOver={click}>About</p>
            {se ? <div className='id-div' onMouseLeave={click3}>
                <Link to={"/About"} onClick={()=> window.speechSynthesis.cancel()}>
                    <p onClick={()=> window.location.href='/About'}>About us</p>
                </Link>
               <Link onClick={()=> window.location.href='/technology'}>
                  <p onClick={()=> window.speechSynthesis.cancel()}>Technologies We Use</p>
               </Link>
                <Link onClick={()=> window.location.href='/industries'}>
                   <p onClick={()=> window.speechSynthesis.cancel()}>Industries We Serve</p>
                </Link>
                <p><a onClick={()=> window.speechSynthesis.cancel()} style={{textDecoration:'none',color:'black'}} href='/#id6'>Why Choose us</a></p>
            </div> : <div></div>}
          </div>
          <div>
             <p onMouseOver={click2}>Active clients</p>
             {textui ? <div className='id-div' style={{padding:15}} onMouseLeave={click5}>
                <a onClick={()=> window.speechSynthesis.cancel()} target='_blank' href='https://www.117securityforce.com' className='ju99' style={{textDecoration:'none',color:'white'}}>117securityfroce</a>
                <br/>
                <br/>
                <br/>
                <a onClick={()=> window.speechSynthesis.cancel()} target='_blank' href='https://www.saiofficefurniture.in' className='ju99' style={{textDecoration:'none',color:'white'}}>saiofficefurniture</a>
            </div> : <div></div>}
         </div>
         <div>
          <p onMouseOver={lci}>Services</p>
          {textuis ? <div className='id-div' onMouseLeave={lici2}>
              <Link to={"/Web-devlopement"} onClick={()=> window.location.href='/web-devlopement'}>
                  <p onClick={()=> window.speechSynthesis.cancel()}>Web development</p>
               </Link>
               <Link to={"/mobile-development"} onClick={()=> window.location.href='/mobile-development'}>
                <p onClick={()=> window.speechSynthesis.cancel()}>Mobile app development</p>
                </Link>    
                <Link to={"/ecommerce"} onClick={()=> window.location.href='/ecommerce'}>
                   <p onClick={()=> window.speechSynthesis.cancel()}>SEO</p>
                 </Link>        
                </div>: <div></div>}
         </div>
         <Link onClick={()=> window.location.href='/blogs'}>
          <p onClick={()=> window.speechSynthesis.cancel()}>Blogs</p>
         </Link>
         <Link onClick={()=> window.location.href='/contact'}>
          <p onClick={()=> window.speechSynthesis.cancel()}>Contact</p>
         </Link>
       </div>
       <div>
           <button  onClick={()=>{ setui(true)}}>Request Portfolio</button>
           {ui ? <form onSubmit={handleSubmit} className='input'>
  <p style={{textAlign:'right', color:'white'}} onClick={x}><FaXmark/></p>
<br/>
  <div className='ju'>
    <FaUser color='black'/>
    <input name="name" placeholder="Name" onChange={handleChange} />
  </div>
<br/>
  <div className='ju'>
    <FaMailBulk color='black'/>
    <input name="email" type="email" placeholder="Email" onChange={handleChange} />
  </div>
<br/>
  <div className='ju'>
    <FaPhone color='black'/>
    <input name="contact" placeholder="Contact Number" onChange={handleChange} />
  </div>
<br/>
  <div className='ju'>
    <select name="productEnquiry" onChange={handleChange}>
      <option value="">Product enquiry</option>
      <option value="Manpower solution">Manpower solution</option>
      <option value="Web development">Web development</option>
      <option value="Redesign Website">Redesign Website</option>
      <option value="E-commerce">E-commerce</option>
    </select>
  </div>
<br/>
  <input
    name="describe"
    placeholder="Describe Your needs"
    onChange={handleChange}
    style={{ width:250, padding:25 }}
  />
<br/>
<br/>
  <button type="submit" className='btns'>Submit</button>
</form>
 : <div></div>}
         </div>
       <div>
          <p className='f7' onClick={click90} style={{fontSize:30,color:'white'}}><FaBars/></p>
       </div>
    </nav>
    {/**Side Navbar */}
    {uisff ? <div className='side-Navbar'>
      <p className='text-center' onClick={()=> setuisf(false)}><FaXmark color='white' size={20}/></p>
      <br/>
        <div className='grid grid-col-4'>
            <Link onClick={() => window.location.href = "/"}>
               <p className='tex'>Home</p>
            </Link>
            <br/>
            <p className='tex' onClick={()=> setuis(true)}>About</p>
            {uis ? <div className='bg'>
               <Link to={"/About"} onClick={()=> window.speechSynthesis.cancel()}>
                    <p style={{color:'white'}} onClick={()=> window.location.href='/About'}>About us</p>
                </Link>
                <br/>
               <Link to={"/technology"} onClick={()=> window.speechSynthesis.cancel()}>
                  <p style={{color:'white'}} onClick={()=> window.location.href='/technology'}>Technologies We Use</p>
               </Link>
               <br/>
                <Link to={"/industries"} onClick={()=> window.speechSynthesis.cancel()}>
                   <p style={{color:'white'}} onClick={()=> window.location.href='industries'}>Industries We Serve</p>
                </Link>
                <br/>
                <p><a onClick={()=> window.speechSynthesis.cancel()} style={{textDecoration:'none',color:'#f7f7f7'}} href='/#id6'>Why Choose us</a></p>
            </div> : ""}
            <br/>
            <p className='tex' onClick={()=> setui6(true)}>Active Clients</p>
            {ui6 ? <>  <a onClick={()=> window.speechSynthesis.cancel()} target='_blank' href='https://www.117securityforce.com' style={{textDecoration:'none',color:'#f7f7f7',padding:10}}>117securityforce</a>
                     <a onClick={()=> window.speechSynthesis.cancel()} target='_blank' href='https://www.saiofficefurniture.in' style={{textDecoration:'none',color:'#f7f7f7',padding:10}}>Sai Enterprises</a> 
                    </>
            : ""}
            <br/>
            <p className='tex' onClick={()=> setuis7(true)}>Services</p>
            {uis7 ? <div className='bg'> 
               <br/>
              <Link to={"/web-devlopement"} onClick={()=> window.speechSynthesis.cancel()}>
                  <p style={{color:'white'}} onClick={()=> window.location.href='/web-devlopement'}>Web development</p>
               </Link>
               <br/>
               <Link to={"/mobile-development"} onClick={()=> window.speechSynthesis.cancel()}>
                <p style={{color:'white'}} onClick={()=> window.location.href='/mobile-development'}>Mobile app development</p>
                </Link>    
                <br/>
                <Link to={"/ecommerce"} onClick={()=> window.speechSynthesis.cancel()}>
                   <p style={{color:'white'}} onClick={()=> window.location.href='/ecommerce'}>SEO</p>
                 </Link>        
                </div>: <div></div>}
                <br/>
            <Link to={"/contact"} onClick={()=> window.speechSynthesis.cancel()}>
            <p className='tex' style={{color:'white'}} onClick={()=> window.location.href='/contact'}>Conact</p>
            </Link>
            <br/>
            <Link to={"/contact"} onClick={()=> window.speechSynthesis.cancel()}>
            <p className='tex' style={{color:'white'}} onClick={()=> window.location.href='/blogs'}>Blogs</p>
            </Link>
            <br/>
            <Link to={"/Request"} onClick={()=> window.speechSynthesis.cancel()}>
            <p className='tex' style={{color:'white'}} onClick={()=> window.location.href='/Request'}>Request PortFolio</p>
            </Link>
        </div>
    </div>:""}
    </>
    )
  }

export default Navbar
