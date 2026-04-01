import blog from '../images/images/blog1.webp'
import blog2 from '../images/images/blog2.webp'
import blog3 from '../images/images/blog3.webp'

const Blogs = () => {
    return (
        <div className='mt-80'>
            <div className='ans p-4'>
                <h1 className='text-5xl text-center text-white'>Deeshix Technology Blog Web Development, SEO & Digital Marketing Insights</h1>
                <h2 className='text-4xl text-center text-white mt-5 mb-4'>Latest Articles on Web Development and Digital Marketing</h2>
                <h3 className='text-2xl text-center text-white'>Responsive Website Design</h3>
            </div>
            <br />
            <br />
            <div className='w-full flexs justifiy-center gap-20 mt-0'>
                <img src={blog} className='w-[350px] h-[350px]' />
                <div>
                    <h2 className='text-whites mt-10 mb-10 text-2xl w-[600px] xxs text-center'>Top Web Development Company in Chennai – Why Your Business Needs a Website in 2026</h2>
                    <p className='w-[400px]'>
                        In today’s digital world, having a strong online presence is no longer optional—it’s essential. Businesses in Chennai are rapidly moving online to reach more customers 
                        and increase revenue.
                        A professional website acts as 
                        your digital storefront. Whether you run a small shop or a growing company, a well-designed website builds 
                        trust and credibility.
                        At Deeshix Technology, we specialize in 
                        creating modern, responsive, and SEO-friendly 
                        websites that help businesses stand out in the 
                        competitive Chennai market.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className='flexs w-full justifiy-center gap-20 mt-0'>
                <img src={blog2} className='w-[350px] h-[350px]' />
                <div>
                    <h2 className='text-whites mb-10 w-[600px] text-2xl xxs text-center'>Best Web Development Trends in 2026 Every Business Should Know</h2>
                    <p className='w-[400px] text-2xl'>
                      Web development is evolving rapidly, and businesses must stay updated with the latest trends to remain competitive.
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className='flexs w-full justifiy-center gap-40 mt-0 p-16 ml-0'>
                <img src={blog3} className='w-[350px] h-[300px]' />
                <div>
                    <h1 className='text-whites mb-10 w-[600px] text-2xl xxs text-center'>Why Every Business Needs a Website</h1>
                    <p className='w-full'>
                        In today’s digital world, having a professional website is essential for every business. A website acts as the online identity of a company, allowing customers to learn about products, services, and brand values at any time. Businesses with well-designed websites can reach a wider audience, build credibility, and generate more leads through search engines. A modern website also improves customer engagement by providing easy access to contact information, service details, and online inquiries. With the increasing use of smartphones and internet searches, companies without a website risk losing potential customers to competitors who already have a strong online presence. Investing in a professional website helps businesses grow, improve brand visibility, and establish trust in the competitive digital marketplace.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blogs