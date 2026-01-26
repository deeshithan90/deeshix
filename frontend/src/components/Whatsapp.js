import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Whatsapp = () => {
  return (
    <div style={{position:'fixed', bottom:0, padding:20}}>
        <a href='https://web.whatsapp.com/accept?code=your-group-link-here&utm_campaign=wa_chat_v2' target='_blank'>
           <FaWhatsapp  size={60} style={{color:'green', fontWeight:'bold'}}/>
       </a>
    </div>
  )
}

export default Whatsapp
