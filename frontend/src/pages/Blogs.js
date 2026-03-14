import blog from '../images/images/blog1.png'
import blog2 from '../images/images/blog2.jpg'
import blog3 from '../images/images/blog3.jpg'

const Blogs = () => {
    return (
        <div className='mt-80'>
            <div className='ans p-4'>
                <h1 className='text-5xl text-center text-white'>Deeshix Technology Blog Web Development, SEO & Digital Marketing Insights</h1>
                <h2 className='text-4xl text-center text-white mt-5 mb-4'>Latest Articles on Web Development and Digital Marketing</h2>
                <h3 className='text-2xl text-center text-white'>Responsive Website Design</h3>
            </div>
            <br/>
            <br/>
            <div className='w-full flexs justifiy-center gap-20 mt-0'>
                <img src={blog} className='w-[350px] h-[350px]' />
                <div>
                <h1 className='text-whites mt-10 mb-10 text-5xl xxs text-center'>Web devlopemnt</h1>
                <p className='w-[400px]'>
                    Web development plays a crucial role in building a strong digital presence for businesses. A professionally designed website helps companies attract customers, showcase services, and build credibility online. At Deeshix Technology, we provide modern web development solutions that are fast, responsive, and optimized for search engines.
                </p>
                </div>
            </div>
            <br/>
            <br/>
            <div className='flexs w-full justifiy-center gap-20 mt-0'>
                <img src={blog2} className='w-[350px] h-350px]' />
                <div>
                <h1 className='text-whites mb-10 text-5xl xxs text-center'>SEO</h1>
                <p className='w-[400px]'>
                    Web development plays a crucial role in building a strong digital presence for businesses. A professionally designed website helps companies attract customers, showcase services, and build credibility online. At Deeshix Technology, we provide modern web development solutions that are fast, responsive, and optimized for search engines.
                </p>
                </div>
            </div>
            <br/>
            <br/>
            <div className='flexs w-full justifiy-center gap-20 mt-0'>
                <img src={blog3} className='w-1/2 h-[300px]' />
                <div>
                <h1 className='text-whites mb-10 text-2xl xxs text-center'>Why Every Business Needs a Website</h1>
                <p className='w-full'>
                    In today’s digital world, having a professional website is essential for every business. A website acts as the online identity of a company, allowing customers to learn about products, services, and brand values at any time. Businesses with well-designed websites can reach a wider audience, build credibility, and generate more leads through search engines. A modern website also improves customer engagement by providing easy access to contact information, service details, and online inquiries. With the increasing use of smartphones and internet searches, companies without a website risk losing potential customers to competitors who already have a strong online presence. Investing in a professional website helps businesses grow, improve brand visibility, and establish trust in the competitive digital marketplace.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Blogs