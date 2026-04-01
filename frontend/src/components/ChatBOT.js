import React from 'react'

const ChatBOT = () => {
  return (
    <div className='dx' style={{display:'flex',alignItems:'center',justifyContent:'center',height:'75px',width:75,position : 'fixed',bottom:0,right:0,backgroundColor : '#BF00FF',borderRadius : 50,cursor:'pointer',zIndex:1000,color:'white'}} onClick={() => alert('Chat DX is coming soon')}>
        <h3>Chat DX</h3>
    </div>
  )
}

export default ChatBOT