import React from 'react';
import im1 from '../../assets/blogs/1.jpg';
import im2 from '../../assets/blogs/2.jpg';
import im3 from '../../assets/blogs/3.jpg';

const Blogs = () => {
    const posts = [
        {
            imgSrc: im1,
            category: "Interior Design",
            title: "What to Expect When Working with an Interior Designer",
            date: "April 9, 2021",
            link: "single-post.html",
        },
        {
            imgSrc: im2,
            category: "Architecture",
            title: "Private Contemporary Home Balancing Openness",
            date: "April 9, 2021",
            link: "single-post.html",
        },
        {
            imgSrc: im3,
            category: "Interior Design",
            title: "Stylish Modern Ranch Exuding a Welcoming Feel",
            date: "April 9, 2021",
            link: "single-post.html",
        },
    ];
    return (
        <div className="container mx-auto">
            <div className='px-12'>
                <h2 className="text-3xl font-bold">From Our Blog</h2>
                <p className="text-gray-600">Read our latest articles on real estate.</p>
                <div className=" flex gap-6 mt-4 md:mt-5">
                    {posts.map((post, index) => (
                        // <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                        <div key={index} className="flex justify-center items-center">
                            <a href={post.href} className="block mb-[30px] group">
                                <div className="rounded-t-[.3rem] h-[260px] w-[350px] overflow-hidden">
                                    <div
                                        className="w-full h-full transition-all duration-1000 ease-in-out bg-cover"
                                        style={{ backgroundImage: `url(${post.imgSrc})` }}
                                    ></div>
                                </div>
                                <div className="bg-white rounded-tl-[.3rem] ml-[40px] pt-[20px] px-[20px] mt-[-60px] relative overflow-hidden">
                                    <div className="text-gray-800 opacity-50 text-xs uppercase font-bold mb-[5px] transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                                        {post.category}
                                    </div>
                                    <div className="text-gray-800 font-extrabold leading-5 text-lg transition-all duration-400 ease-in-out group-hover:-translate-y-[22px]">
                                        {post.title}
                                    </div>
                                    <div className="text-gray-800 opacity-70 text-sm mt-2 transition-all duration-400 ease-in-out group-hover:opacity-0">
                                        {post.date}
                                    </div>
                                    <div className="absolute bottom-[20px] left-[20px] text-gray-800 text-xs font-bold uppercase z-10 opacity-0 transform translate-y-1/2 transition-all duration-400 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 delay-[400ms]">
                                        Read Article
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <a href="blog.html" className="pxp-primary-cta text-uppercase mt-2 mt-md-4 pxp-animate">Read More</a>
            </div>

        </div>
    )
}

export default Blogs
