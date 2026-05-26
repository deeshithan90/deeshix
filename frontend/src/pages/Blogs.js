import blog from '../images/images/blog1.webp'
import blog2 from '../images/images/blog2.webp'
import blog3 from '../images/images/blog3.webp'

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
                    <h2 className='text-whites mt-10 mb-10 text-2xl lg:w-[600px] xxs text-center'>Deeshix: Innovation Beyond Limits</h2>
                    <p className='w-[400px]'>
                        Deeshix Technology is focused on building smart digital solutions with creativity, innovation, and modern technology. From websites to mobile applications, Deeshix aims to deliver professional and future-ready products.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className='flexs w-full justifiy-center gap-20 mt-0'>
                <img src={blog2} className='w-[350px] h-[350px]' />
                <div>
                    <h2 className='text-whites mb-10 lg:w-[600px] text-2xl xxs text-center'>Empowering Businesses with Technology</h2>
                    <p className='w-[400px] text-2xl'>
                        Deeshix believes technology should help businesses grow faster and smarter. By developing modern applications, automation systems, and scalable platforms, Deeshix creates solutions that improve efficiency and digital presence.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className='flexs w-full justifiy-center gap-40 mt-0 p-16 ml-0'>
                <img src={blog3} className='w-[350px] h-[300px]' />
                <div>
                    <h1 className='text-whites mb-10 lg:w-[600px] text-2xl xxs text-center'>The Future of Digital Development</h1>
                    <p className='w-full'>
                        With expertise in MERN Stack, mobile app development, Python, and cybersecurity, Deeshix continues to explore next-generation technologies. The vision is to build secure, innovative, and impactful digital experiences for the modern world.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blogs