import React from 'react'
import deeshi from '../images/deeshi.png'
const CreatorVoice = () => {
  return (
    <div className='p-3'>
      <h2 className='ml-10 text-3xl csaa'>Founder</h2>
      <br></br>
      <div className='about'>
        <div>
          <img src={deeshi} className='deeshi' />
        </div>
        <br />
        <br />
        <div>
          <p style={{ color: '#f7f7f7', padding: 10 }} ><div className="mb-0 mt-10 w-full">
            Meet Deeshithan Sathish - Founder of Deeshix Technology, I am 12 years old self-taught MERN stack developer
            specialized in MongoDB, Express.js , React.js Node.js Mongoose ODM TanstackQuery , JWT , dotenv, cookieparser, Java script Type script , css , html, tailwindcss python,  Django. Hi, I’m Deeshithan Sathish
            Young Full-Stack (MERN) Developer & Future AI Engineer
            Chennai, Tamil Nadu, India 🇮🇳. I build modern, responsive, and scalable web and mobile applications using industry-standard technologies.
            I have successfully delivered real client portfolio projects independently and continuously expand my skills into AI-powered applications.
          </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreatorVoice
