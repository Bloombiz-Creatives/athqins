import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide.css'
import bst1 from '../../assets/slider/bstseller1.jpg';
import bst2 from '../../assets/slider/bstseller2.jpg';
import bst3 from '../../assets/slider/bstseller3.jpg';
import bst4 from '../../assets/slider/bstseller4.jpg';
import bst5 from '../../assets/slider/bstseller5.jpg';
import bst6 from '../../assets/slider/bstseller6.jpg';
import bst7 from '../../assets/slider/bstseller7.jpg';
import bst8 from '../../assets/slider/bstseller8.jpg';

const BestSellers = () => {
    return (
        <div className="px-4 py-8">
            <div className="text-center text-4xl font-semibold ">Our Best Sellers...</div>
            <div className="text-center text-2xl font-medium text-opacity-70 mb-8">High-Precision Equipment Trusted by Experts</div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={3.5}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="swiper-container"
                breakpoints={{
                    320:{
                        slidesPerView: 1,
                    },
                    375: {
                        slidesPerView: 2, // 2 slides per view on mobile devices
                    },
                    768: {
                        slidesPerView: 3, // 3 slides per view on tablets
                    },
                    1024: {
                        slidesPerView: 3.5, // 3.5 slides per view on larger screens
                    },
                }}
            >
                <SwiperSlide className="swiper-slide"  style={{ paddingBottom: '40px' }}>
                    <div className="border border-gray-300 rounded-xl p-6 ">
                        <div className="flex justify-center items-center ">
                            <img src={bst1} alt="Best Seller 1" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold ">nice 2000 B </p>
                        <p className="text-xl">$14.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-6 ">
                        <div className="flex justify-center items-center ">
                            <img src={bst2} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold ">Edan iM3</p>
                        <p className="text-xl">$19.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-6 ">
                        <div className="flex justify-center items-center ">
                            <img src={bst3} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold ">SonoScape E2</p>
                        <p className="text-xl"> $18.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-6 ">
                        <div className="flex justify-center items-center ">
                            <img src={bst4} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold ">F3 Edan</p>
                        <p className="text-xl">$20.99</p>
                    </div>
                </SwiperSlide>
               
                  <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-6 ">
                        <div className="flex justify-center items-center ">
                            <img src={bst5} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold ">Edan iM50 </p>
                        <p className="text-xl">$14.99</p>
                    </div>
                </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-6 ">
                        <div className="flex justify-center items-center ">
                            <img src={bst6} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold ">iM20 Modular</p>
                        <p className="text-xl"> $14.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-6 ">
                        <div className="flex justify-center items-center ">
                            <img src={bst7} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold ">ECG</p>
                        <p className="text-xl"> $14.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-6 ">
                        <div className="flex justify-center items-center ">
                            <img src={bst8} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold ">G2S BPAP</p>
                        <p className="text-xl">$24.99</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BestSellers;
