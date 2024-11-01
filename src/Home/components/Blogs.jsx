import { Link } from 'react-router-dom';
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
            link: "/blog",
        },
        {
            imgSrc: im2,
            category: "Architecture",
            title: "Private Contemporary Home Balancing Openness",
            date: "April 9, 2021",
            link: "/blog",
        },
        {
            imgSrc: im3,
            category: "Interior Design",
            title: "Stylish Modern Ranch Exuding a Welcoming Feel",
            date: "April 9, 2021",
            link: "/blog",
        },
    ];

    return (
        <div className="container mx-auto">
            <div className="px-12 py-11">
                <h2 className="text-3xl font-bold">From Our Blog</h2>
                <p className="text-gray-600">Read our latest articles on real estate.</p>
                <div className="flex flex-wrap gap-6 mt-4 md:mt-5">
                    {posts.map((post, index) => (
                        <div key={index} className="flex-1 xl:min-w-[300px] lg:min-w-[270px]">
                            <a href={post.link} className="block mb-[30px] group">
                                <div className="rounded-t-[.3rem] h-[260px] overflow-hidden relative">
                                    <div
                                        className="w-full h-full transition-all duration-1000 ease-in-out bg-cover group-hover:scale-105"
                                        style={{ backgroundImage: `url(${post.imgSrc})` }}
                                    ></div>
                                </div>
                                <div className="bg-white rounded-tl-[.3rem] ml-[40px] pt-[20px] px-[20px] mt-[-60px] relative overflow-hidden">
                                    <div className="text-gray-800 opacity-50 text-xs uppercase font-bold mb-[5px] transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                                        {post.category}
                                    </div>
                                    <div className="text-gray-800 font-extrabold leading-5 lg:text-lg text-[14px] transition-all duration-400 ease-in-out group-hover:-translate-y-[22px]">
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
                {/* <a href="blog.html" className="text-uppercase mt-2 md:mt-4 pxp-animate">Read More</a> */}
                <div className="flex items-center mt-4">
                        <Link to='/blog' className="text-black font-bold uppercase tracking-wider group flex items-center">
                        Read More
                            <span className="ml-2 inline-block h-0.5 w-10 bg-black transition-all duration-300 ease-in-out group-hover:w-20"></span>
                        </Link>
                    </div>
            </div>
        </div>
    );
};

export default Blogs;
