import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import customer1 from '../../assets/test.jpg';
import customer2 from '../../assets/test.jpg';
import customer3 from '../../assets/test.jpg';
import testimBg from '../../assets/intro-bg.jpg';

const testimonials = [
    {
        id: 1,
        avatar: customer1,
        name: 'Derek Cotner',
        location: 'Houston, TX',
        message:
            "While Athqins functions like a traditional broker, the company's promise is using technology to reduce the time and friction of buying and selling house or apartment.",
    },
    {
        id: 2,
        avatar: customer2,
        name: 'Rebecca Eason',
        location: 'Washington, MD',
        message:
            "And it's no wonder Athqins has shaken things up: As anyone who's ever tried to rent or buy property in Washington knows, the experience is loaded with pain points.",
    },
    {
        id: 3,
        avatar: customer3,
        name: 'Kenneth Spiers',
        location: 'Cleveland, OH',
        message:
            "While Athqins functions like a traditional broker, the company's promise is using technology to reduce the time and friction of buying and selling house or apartment.",
    },
    {
        id: 3,
        avatar: customer3,
        name: 'Kenneth Spiers',
        location: 'Cleveland, OH',
        message:
            "While Athqins functions like a traditional broker, the company's promise is using technology to reduce the time and friction of buying and selling house or apartment.",
    },
    {
        id: 3,
        avatar: customer3,
        name: 'Kenneth Spiers',
        location: 'Cleveland, OH',
        message:
            "While Athqins functions like a traditional broker, the company's promise is using technology to reduce the time and friction of buying and selling house or apartment.",
    },
];

const Testimonials = () => {
    return (
        <div
            className="relative bg-center bg-cover bg-no-repeat py-24 px-4"
            style={{ backgroundImage: `url(${testimBg})` }}
        >
            <div className="max-w-7xl container mx-auto flex flex-col lg:flex-row items-start">
                <div className="lg:w-1/4 w-full mb-8 lg:mb-0 lg:mr-8">
                    <h2 className="text-4xl font-bold text-white mb-4">Customer Testimonials</h2>
                    <p className="text-lg text-white mb-4">What our customers say about us</p>
                    <div className="flex items-center">
                        <a href="#" className="text-white font-bold uppercase tracking-wider group flex items-center">
                            READ ALL STORIES
                            <span className="ml-2 inline-block h-0.5 w-10 bg-white transition-all duration-300 ease-in-out group-hover:w-20"></span>
                        </a>
                    </div>
                </div>

                <div className="lg:w-3/4 w-full">
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
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id} style={{ paddingBottom: '40px' }}>
                                <div className="bg-black rounded-lg shadow-lg h-[340px]  flex flex-col items-center p-4" >
                                    <div
                                        className="md:w-24 md:h-24 w-20 h-20 bg-cover bg-center rounded-full mb-4"
                                        style={{ backgroundImage: `url(${testimonial.avatar})` }}
                                    ></div>
                                    <h3 className="text-xl font-bold text-center mb-1 text-white">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-center text-gray-400 mb-4">
                                        {testimonial.location}
                                    </p>
                                    <p className="text-sm text-center text-white">
                                        {testimonial.message}
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

