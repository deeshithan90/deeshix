import React from 'react'
import logo from '../images/Asdee 1.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAccusoft, FaBars, FaHome, FaLightbulb, FaMailBulk, FaPhone, FaUser } from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'
import {toast} from 'react-hot-toast'

const Navbar = ({sett,se}) => {

   const [uis,setuis] = useState(false)
   const [uisff,setuisf] = useState(false)
   const [uis7,setuis7] = useState(false)
   const [ui6,setui6] = useState(false)

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
   const [ui,setui] = useState(false)
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
    <nav className='navbar'>
       <div>
          <img src={logo} width={150} height={150} style={{borderRadius:265}}/>
       </div>
       <div className='nav-sub'>
          <Link to={"/"}>
             <p onClick={home}>Home</p>
          </Link>
          <div>
            <p onMouseOver={click}>About</p>
            {se ? <div className='id-div' onMouseLeave={click3}>
                <Link to={"/About"} onClick={()=> window.speechSynthesis.cancel()}>
                    <p>About us</p>
                </Link>
               <Link to={"/technology"}>
                  <p onClick={()=> window.speechSynthesis.cancel()}>Technologies We Use</p>
               </Link>
                <Link to={"/industries"}>
                   <p onClick={()=> window.speechSynthesis.cancel()}>Industries We Serve</p>
                </Link>
                <Link to={"/Vision-mission"}>
                <p onClick={()=> window.speechSynthesis.cancel()}> Vision and mission</p>
                </Link>
                <p><a onClick={()=> window.speechSynthesis.cancel()} style={{textDecoration:'none',color:'#f7f7f7'}} href='/#id6'>Why Choose us</a></p>
            </div> : <div></div>}
          </div>
          <div>
             <p onMouseOver={click2}>Active clients</p>
             {textui ? <div className='id-div' style={{padding:15}} onMouseLeave={click5}>
                <a onClick={()=> window.speechSynthesis.cancel()} target='_blank' href='https://www.117securityforce.com' style={{textDecoration:'none',color:'#f7f7f7'}}>https://www.117securityfroce.com</a>
            </div> : <div></div>}
         </div>
         <div>
          <p onMouseOver={lci}>Services</p>
          {textuis ? <div className='id-div' onMouseLeave={lici2}>
              <Link to={"/Web-devlopement"}>
                  <p onClick={()=> window.speechSynthesis.cancel()}>Web development</p>
               </Link>
               <Link to={"/mobile-development"}>
                <p onClick={()=> window.speechSynthesis.cancel()}>Mobile app development</p>
                </Link>    
                <Link to={"/ecommerce"}>
                   <p onClick={()=> window.speechSynthesis.cancel()}>E-commerce</p>
                 </Link>        
                </div>: <div></div>}
         </div>
         <Link to={"/contact"}>
          <p onClick={()=> window.speechSynthesis.cancel()}>Contact</p>
         </Link>
       </div>
       <div>
           <button  onClick={()=>{ setui(true)}}>Request Portfolio</button>
           {ui ? <form onSubmit={handleSubmit} className='input'>
  <p style={{textAlign:'right', color:'white'}} onClick={x}><FaXmark/></p>
<br/>
  <div className='ju'>
    <FaUser/>
    <input name="name" placeholder="Name" onChange={handleChange} />
  </div>
<br/>
  <div className='ju'>
    <FaMailBulk/>
    <input name="email" type="email" placeholder="Email" onChange={handleChange} />
  </div>
<br/>
  <div className='ju'>
    <FaPhone/>
    <input name="contact" placeholder="Contact Number" onChange={handleChange} />
  </div>
<br/>
  <div className='ju'>
    <select name="productEnquiry" onChange={handleChange}>
      <option value="">Product enquiry</option>
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
    {uisff ? <div className='side-Navbar'>
      <p className='text-center' onClick={()=> setuisf(false)}><FaXmark color='white' size={20}/></p>
      <br/>
        <div>
            <Link onClick={() => window.location.href = "/"}>
               <p>Home</p>
            </Link>
            <br/>
            <p onClick={()=> setuis(true)}>About</p>
            <br/>
            {uis ? <div className='bg'>
               <Link onClick={()=> window.speechSynthesis.cancel()}>
                    <p onClick={()=> window.location.href='/About'}>About us</p>
                </Link>
                <br/>
               <Link to={"/technology"}>
                  <p onClick={()=> window.speechSynthesis.cancel()}>Technologies We Use</p>
               </Link>
               <br/>
                <Link to={"/industries"}>
                   <p onClick={()=> window.speechSynthesis.cancel()}>Industries We Serve</p>
                </Link>
                <br/>
                <Link to={"/Vision-mission"}>
                <p onClick={()=> window.speechSynthesis.cancel()}> Vision and mission</p>
                </Link>
                <br/>
                <p><a onClick={()=> window.speechSynthesis.cancel()} style={{textDecoration:'none',color:'#f7f7f7'}} href='/#id6'>Why Choose us</a></p>
            </div> : ""}
            <p onClick={()=> setui6(true)}>Active Clients</p>
            {ui6 ?   <a onClick={()=> window.speechSynthesis.cancel()} target='_blank' href='https://www.117securityforce.com' style={{textDecoration:'none',color:'#f7f7f7'}}>https://www.117securityfroce.com</a> : ""}
            <br/>
            <p onClick={()=> setuis7(true)}>Services</p>
            {uis7 ? <div className='bg'> <Link to={"/Web-devlopement"}>
                  <p onClick={()=> window.speechSynthesis.cancel()}>Web development</p>
               </Link>
               <br/>
               <Link to={"/mobile-development"}>
                <p onClick={()=> window.speechSynthesis.cancel()}>Mobile app development</p>
                </Link>    
                <br/>
                <Link to={"/ecommerce"}>
                   <p onClick={()=> window.speechSynthesis.cancel()}>E-commerce</p>
                 </Link>        
                </div>: <div></div>}
                <br/>
            <Link to={"/contact"}>
            <p>Conact</p>
            </Link>
            <br/>
            <Link to={"/Request"}>
            <p>Request PortFolio</p>
            </Link>
        </div>
    </div>:""}
    </>
  )
}

export default Navbar
