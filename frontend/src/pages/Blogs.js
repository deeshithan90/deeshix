import blog from '../images/images/blog1.jpg'
import blog2 from '../images/images/blog2.jpg'
import blog3 from '../images/images/mern.png'

const Blogs = () => {
    return (
        <div className='mt-80'>
            <div className='ans p-4'>
                <h2 className='text-4xl text-center text-white mt-5 mb-4'>Latest Articles on Web Development and Digital Marketing</h2>
                <h3 className='text-2xl text-center text-white'>Responsive Website Design</h3>
            </div>
            <br />
            <br />
            <div className='w-full flexs justifiy-center gap-20 mt-0'>
                <img src={blog} className='w-[350px] h-[350px]' />
                <div>
                    <h2 className='text-whites mt-10 mb-10 text-2xl lg:w-[600px] xxs text-center'>Why AI-Powered Websites Matter</h2>
                    <p className='w-[400px]'>
                        Technology is changing the way businesses connect with customers. An AI-powered website can provide instant support, answer common questions, recommend products, and automate routine tasks. These features improve customer experience while saving time and operational costs.
                        Unlike traditional websites, AI-powered platforms can learn from user interactions and provide personalized responses. This helps businesses increase engagement, improve efficiency, and make better decisions using data.
                        At Deeshix, we build AI-powered websites and custom software that combine modern design with intelligent automation. Our goal is to help businesses grow through innovative, secure, and scalable digital solutions.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className='flexs w-full justifiy-center gap-20 mt-0'>
                <img src={blog3} className='w-[350px] h-[350px]' />
                <div>
                    <h2 className='text-whites mb-10 lg:w-[600px] text-2xl xxs text-center'>MERN Stack: Why Modern Businesses Are Choosing Full-Stack JavaScript</h2>
                    <p className='w-[400px] text-2xl'>
                       Modern businesses need applications that are fast, scalable and easy to maintain. The MERN stack—MongoDB, Express.js, React and Node.js—provides developers with a powerful technology ecosystem for building modern web applications.
From business dashboards to SaaS platforms and e-commerce applications, MERN can support a wide range of digital products.
Deeshix Technology approach:
We use modern frontend, backend, database and API technologies to create scalable solutions based on each business requirement.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className='flexs w-full justifiy-center gap-40 mt-0 p-16 ml-0'>
                <img src={blog2} className='w-[350px] h-[350px]' />
                <div>
                    <h1 className='text-whites mb-10 lg:w-[600px] text-2xl xxs text-center'>Website vs Web Application: What Does Your Business Really Need?</h1>
                    <p className='w-full'>
                       Many businesses use the terms website and web application interchangeably, but they serve different purposes.
                       A business website primarily provides information about a company, products or services. A web application provides interactive functionality such as dashboards, authentication, data management, online transactions and automation.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blogs