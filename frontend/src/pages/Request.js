import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAccusoft, FaBars, FaHome, FaLightbulb, FaMailBulk, FaPhone, FaUser } from 'react-icons/fa'
import {FaXmark} from 'react-icons/fa6'
import {toast} from 'react-hot-toast'

const Requests = () => {
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
  
  return (
    <div className='input'>
       <form onSubmit={handleSubmit}>
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
    </div>
  )
}

export default Requests
