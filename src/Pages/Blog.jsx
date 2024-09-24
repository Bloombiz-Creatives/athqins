import { Link } from 'react-router-dom';
import blogb from '../assets/blog.jpg';
import howtouse from '../assets/howtouse.jpg';
import innovations from '../assets/innovation.jpg';
import maintainance from '../assets/maintainance.jpg';

const Blog = () => {
    return (
        <div>
            {/* Blog Banner */}
            <div className=" bg-cover bg-center relative z-1 text-center py-[90px] md:py-[100px] lg:py-[200px]"
                style={{ backgroundImage: `url(${blogb})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="container mx-auto">
                    <h2 className="text-white text-[38px] md:text-[32px] mb-[15px] md:mb-[12px] uppercase font-bold">
                        Our Blog
                    </h2>
                    <p className="text-white text-lg md:text-xl">
                        Stay updated with the latest trends and news in medical equipment
                    </p>
                </div>
            </div>

            

            {/* Blog Content Section */}
            <div className="container mx-auto my-16  px-4 md:px-16">

                  {/* Categories Section */}
                  <section className="mb-12">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6">Blog Categories</h3>
                    <div className="flex flex-wrap gap-4">
                        <Link to='/our_products' className="bg-green-500 text-white px-4 py-2 rounded-lg">Medical Equipment</Link>
                        <Link to='/products/solutions' className="bg-blue-500 text-white px-4 py-2 rounded-lg">Healthcare Trends</Link>
                        <Link to='/products/services' className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Services</Link>
                    </div>
                </section>
                {/* Featured Blog Section */}
                <section className="mb-12">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6">Featured Articles</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Blog Card */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={maintainance} alt="Medical" className="w-full h-[250px] object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-2">Understanding Medical Device Maintenance</h4>
                                <p className="text-gray-700 mb-4">Explore the importance of regular maintenance for medical devices and how it impacts the healthcare industry...</p>
                                {/* <a href="#" className="text-blue-500 hover:underline">Read More</a> */}
                            </div>
                        </div>

                        {/* Repeat similar blog cards for featured articles */}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={innovations} alt="Healthcare" className="w-full h-[250px] object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-2">Latest Innovations in Medical Equipment</h4>
                                <p className="text-gray-700 mb-4">A look at groundbreaking innovations and how they are reshaping the medical equipment industry...</p>
                                {/* <a href="#" className="text-blue-500 hover:underline">Read More</a> */}
                            </div>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={howtouse} alt="Technology in Medicine" className="w-full h-[250px] object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-2">How to Choose the Right Medical Equipment</h4>
                                <p className="text-gray-700 mb-4">Selecting the right medical equipment can be tricky. Learn how to assess your needs and make informed choices...</p>
                                {/* <a href="#" className="text-blue-500 hover:underline">Read More</a> */}
                            </div>
                        </div>
                    </div>
                </section>

              

             
                {/* Call to Action for Subscribing */}
                {/* <section className="bg-blue-50 py-12 text-center rounded-lg">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4">Stay Updated!</h3>
                    <p className="text-gray-700 mb-6">Subscribe to our newsletter and never miss an update on the latest medical equipment and healthcare news.</p>
                    <form className="max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
                        />
                        <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md font-bold">Subscribe</button>
                    </form>
                </section> */}
                
            </div>
        </div>
    );
}

export default Blog;
