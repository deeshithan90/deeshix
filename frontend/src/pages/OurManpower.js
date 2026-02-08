import React from 'react'
import security from '../images/sec 1.webp';
import AboutManpower from '../components/ManPower';
import Office from '../images/OA.webp'
import labour from '../images/labour.jfif'
import house from '../images/House.jfif'
import Callus from '../components/Call-us';
import { Link } from 'react-router-dom';

const OurManpower = ({setui}) => {
  return (
    <>
      <div className='our-Manpower' style={{marginTop:170}}>
        <AboutManpower/>
        <br/>
        <br/>
          <div>
              <h1 className='text-white text-4xl'>Facility services</h1>
          </div>
          <br/>
          <div>
             <div className='security-guard' >
                 <img src={security}  style={{borderRadius:900, width:300, height:300}}/>
                 <br/>
                 <br/>
                 <div>
                  <h1 className='text-3xl text-white' style={{textDecoration:'underline 3px solid'}}>Security guard</h1>
                  <br/>
                 <p className='para' >We provide trained and licensed security guards for homes, offices, commercial spaces, and events. Our security personnel are skilled in handling emergencies, monitoring premises, and maintaining order. Price starts from Rs.25,000/- per month inclusive all.</p>
                 </div>
             </div> 
             <br/>
             <br/>
             <div className='office-assitan'>
                 <img src={Office} style={{borderRadius:900, width:300, height:300}}/>
                 <br/>
                 <br/>
                 <div>
                  <h1 className='text-3xl text-white' style={{textDecoration:'underline 3px solid'}}>Office Assistants</h1>
                  <br/>
                    <p className='para'>Efficient office operations require reliable support staff. Our office assistants help businesses maintain smooth functioning while providing essential administrative and organizational assistance Price starts from Rs.23,000/- per month inclusive all..</p>
                 </div>
             </div>
             <br/>
             <br/>
             <div className='House-Keeping'>
                 <img src={house} style={{borderRadius:900, width:300, height:300}}/>
                 <br/>
                 <br/>
                 <div>
                    <h1 className='text-3xl text-white' style={{textDecoration:'underline 3px solid'}}>House Keeping</h1>
                    <br/>
                    <p className='para'>A clean and hygienic environment is essential for health, comfort, and productivity. Our housekeeping team ensures that homes, offices, and commercial spaces remain spotless and well-maintained. Price starts from Rs.20,000/- per month inclusive all.</p>
                 </div>
             </div>
             <br/>
             <br/>
             <div className='House-Keeping'>
                 <img src={labour} style={{borderRadius:900, width:300, height:300}}/>
                 <br/>
                 <br/>
                 <div>
                    <h1 className='text-3xl text-white' style={{textDecoration:'underline 3px solid'}}>Labour</h1>
                    <br/>
                    <p className='para'>Our manpower services provide efficient and cost-effective daily wages labor solutions.
We supply trained and untrained workers for factories, and commercial projects.
On-time availability, flexible workforce, and reliable service are our key strengths. Price starts from Rs.900/- per day inclusive all.</p>
                 </div>
             </div>
          </div>
          <br/>
          <br/>
          <center>
              <p className='text-white text-3xl'>Our focus is on service quality, not short-term financial gain.
We strive to build lasting relationships through professional service, integrity, and commitment.</p>
          </center>
          <br/>
          <br/>
          <center className='f6'>
              <h1 onClick={()=> setui(true)} className='text-blue text-underline text-5xl' style={{color:'#41C1BA',textDecoration:'underline 3px solid',cursor:'pointer'}}>Click here to book now</h1>
          </center>
          <center className='f5'>
            <Link to={"/Request"}>
              <h1 className='text-blue text-underline text-3xl' style={{color:'#41C1BA',textDecoration:'underline 3px solid',cursor:'pointer'}}>Click here to book now</h1>
            </Link>
          </center>
          <br/>
          <br/>
          <Callus/>
      </div>
    </>
  )
}

export default OurManpower