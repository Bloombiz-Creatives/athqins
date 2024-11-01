import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import testimBg from '../../assets/intro-bg.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHomeTestimonial } from '../../action/ecomAction';


const Testimonials = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchHomeTestimonial())
    },[dispatch])

    const {testimonial} = useSelector((state) => state.ecomState);
    const testimonials = testimonial?.testimonial || []
    
    return (
        <div
            className="relative bg-center bg-cover bg-no-repeat py-24 px-4   "
            style={{ backgroundImage: `url(${testimBg})` }}
        >

      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div>    */}


            <div className="container mx-auto flex flex-col lg:flex-row items-start overflow-hidden">
                <div className="lg:w-1/4 w-full mb-8 lg:mb-0 lg:mr-8 md:ml-10 lg:px-4 ">
                    <h2 className="text-4xl font-bold text-white mb-4">Customer Testimonials</h2>
                    <p className="text-lg text-white mb-4">What our customers say about us</p>
                    <div className="flex items-center">
                        <a href="#" className="text-white font-bold uppercase tracking-wider group flex items-center">
                            READ ALL STORIES
                            <span className="ml-2 inline-block h-0.5 w-10 bg-white transition-all duration-300 ease-in-out group-hover:w-20"></span>
                        </a>
                    </div>
                </div>

                <div className="lg:w-3/4 w-full md:px-8">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="swiper-container"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            425: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {testimonials.map((testimonial,index) => (
                            <SwiperSlide key={index} style={{ paddingBottom: '40px' }}>
                                <div className="bg-black rounded-lg shadow-lg h-[340px]  flex flex-col items-center p-4" >
                                    <div
                                        className="md:w-24 md:h-24 w-20 h-20 bg-cover bg-center rounded-full mb-4"
                                        style={{ backgroundImage: `url(${testimonial.profile})` }}
                                    ></div>
                                    <h3 className="text-xl font-bold text-center mb-1 text-white">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-center text-gray-400 mb-4">
                                        {testimonial.place}
                                    </p>
                                    <p className="text-sm text-center text-white">
                                        {testimonial.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

