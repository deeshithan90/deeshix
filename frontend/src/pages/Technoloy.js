import React, { useState } from 'react'
import { FaAws, FaCloud, FaCss3, FaDocker, FaElementor, FaFire, FaGit, FaHtml5, FaJava, FaJs, FaLeaf, FaNodeJs, FaPhone, FaPhoneAlt, FaPhp, FaPython, FaReact } from 'react-icons/fa'
import Callus from '../components/Call-us'

const Technoloy = () => {
  const [leftco,setleftco] = useState(true)
  const [s1,sets1] = useState(false)
  const [s2,sets2] = useState(false)
  const [s3,sets3] = useState(false)
  const [s4,sets4] = useState(false)
  const [s5,sets5] = useState(false)
  const [s6,sets6] = useState(false)

  function click(){
     sets1(true)
     setleftco(false)
     sets2(false)
     sets3(false)
     sets4(false)
     sets5(false)
     sets6(false)
  }
  function click2(){
     sets2(true)
     setleftco(false)
     sets1(false)
     sets3(false)
     sets4(false)
     sets5(false)
     sets6(false)
  }
  function click3(){
     sets1(false)
     setleftco(false)
     sets2(false)
     sets3(false)
     sets4(false)
     sets5(false)
     sets6(true)
  }
  function click4(){
    sets1(false)
     setleftco(false)
     sets2(false)
     sets3(false)
     sets4(true)
     sets5(false)
     sets6(false)
  }
  function click5(){
    sets1(false)
     setleftco(false)
     sets2(false)
     sets3(true)
     sets4(false)
     sets5(false)
     sets6(false)
  }
  function click6(){
    sets1(false)
     setleftco(false)
     sets2(false)
     sets3(false)
     sets4(false)
     sets5(true)
     sets6(false)
  }
  return (
    <>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:240}}>
      <div className='btn'>
         <button onClick={click}>Frontend</button>
         <br/>
         <br/>
         <button onClick={click2}>Backend</button>
         <br/>
         <br/>
         <button onClick={click3}>Database</button>
         <br/>
         <br/>
         <button onClick={click4}>Mobile</button>
         <br/>
         <br/>
         <button onClick={click5}>Cloud</button>
         <br/>
         <br/>
         <button onClick={click6}>Tools</button>
      </div>
    </div>
    <div style={leftco ? {padding:20 , width : 300, backgroundColor:'#0F2632', position : 'absolute', transition:1, top:-40, left:-430} : {padding:20 ,transition:1, backgroundColor:'#0F2632',width : 400, height:200, position : 'absolute', top:240, bottom:240, left:30, border :'#41C1BA 2px solid',borderRadius:20 }}>
       {s1 ? <div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <FaHtml5 color='red' size={60}/>
             <FaCss3 color='blue' size={60}/>
          </div>
          <br></br>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <FaJs color='yellow' size={60}/>
             <FaReact color='aqua' size={60}/>
          </div>
       </div>:  <div></div>}
       {s2 ? <div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <FaNodeJs color='green' size={60}/>
             <FaPython color='darkblue' size={60}/>
          </div>
          <br></br>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <FaPhp color='gray' size={60}/>
             <FaJava color='blue' size={60}/>
          </div>
       </div> :  <div></div>}
       {s3 ?<div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
             <FaFire color='orange' size={60}/>
             <FaCloud color='black' size={60}/>
          </div>
       </div> :  <div></div>}
       {s4 ?<div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <FaPhoneAlt color='red' size={60}/>
             <FaReact color='aqua' size={60}/>
          </div>
       </div> :  <div></div>}
       {s5 ?<div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <FaGit color='red' size={60}/>
             <FaDocker color='blue' size={60}/>
          </div>
      </div> :  <div></div>}
      {s6 ?<div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <FaLeaf color='green' size={60}/>
             <FaElementor color='blue' size={60}/>
          </div>
      </div> :  <div></div>}
    </div>

    <div style={leftco ? {padding:20 , width : 300, backgroundColor:'#0F2632', position : 'absolute', transition:1, top:-40, right:-550} : {padding:20 ,transition:1, backgroundColor:'#0F2632',width : 400, height:200, position : 'absolute', top:240, bottom:240, right:30, color:'white', fontSize:20, border :'#41C1BA 2px solid', borderRadius:20 }}>
       {s1 ? <div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <br></br>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <p>JavaScript</p>
            <p>REACT</p>
          </div>
       </div>:  <div></div>}
       {s2 ? <div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <p>NODE.JS</p>
            <p>PYTHON</p>
          </div>
          <br></br>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <p>PHP</p>
            <p>JAVA</p>
          </div>
       </div> :  <div></div>}
       {s3 ?<div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
             <p>FIREBASE</p>
             <p>CLOUD</p>
          </div>
       </div> :  <div></div>}
       {s4 ?<div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <p>FLUTTER</p>
            <p>REACT NATIVE</p>
          </div>
       </div> :  <div></div>}
       {s5 ?<div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          <p>GIT</p>
          <p>DOCKER</p>
          </div>
      </div> :  <div></div>}
      {s6 ?<div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <p>MONGDB</p>
            <p>DATA STRUCTURE</p>
          </div>
      </div> :  <div></div>}
    </div>
    <Callus/>
    </>
  )
}

export default Technoloy
