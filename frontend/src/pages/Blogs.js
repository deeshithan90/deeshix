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
                    <h2 className='text-whites mb-10 lg:w-[600px] text-2xl xxs text-center'>Why Choose the MERN Stack?</h2>
                    <p className='w-[400px] text-2xl'>
                        The MERN Stack—MongoDB, Express.js, React, and Node.js—is one of the most popular technologies for modern web development. Using JavaScript across the entire application makes development faster, easier to maintain, and highly scalable.
                        MERN is ideal for building business websites, dashboards, e-commerce platforms, HRMS, and custom software. It also integrates smoothly with AI services, payment gateways, and cloud platforms.
                        At Deeshix, we use the MERN Stack to develop secure, high-performance applications tailored to each client's needs. We focus on delivering reliable solutions that support long-term business growth.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className='flexs w-full justifiy-center gap-40 mt-0 p-16 ml-0'>
                <img src={blog2} className='w-[350px] h-[350px]' />
                <div>
                    <h1 className='text-whites mb-10 lg:w-[600px] text-2xl xxs text-center'>The Future of Software Development</h1>
                    <p className='w-full'>
                        Artificial Intelligence is transforming software development by improving productivity, automation, and user experience. Developers now use AI to speed up coding, identify bugs, analyze data, and create smarter applications.
                        However, successful software still depends on skilled developers who understand business requirements and build secure, reliable solutions. AI is a powerful tool that enhances development rather than replacing it.
                        At Deeshix, we combine modern technologies with AI to create web applications, mobile apps, and custom software that solve real-world problems. We believe the future of software lies in innovation, quality, and continuous learning.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blogs