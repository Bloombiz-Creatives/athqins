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
            <div className="text-center text-4xl font-semibold mb-2">Our Best Sellers...</div>
            <div className="text-center text-2xl font-medium text-opacity-70 mb-8">High-Precision Equipment Trusted by Experts</div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={3.5}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="swiper-container"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-4 ">
                        <div className="flex justify-center items-center mb-4">
                            <img src={bst1} alt="Best Seller 1" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold mb-2">nice 2000 B _ niceneotech</p>
                        <p className="text-xl">$14.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-4 ">
                        <div className="flex justify-center items-center mb-4">
                            <img src={bst2} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold mb-2">Edan iM3</p>
                        <p className="text-xl">$19.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-4 ">
                        <div className="flex justify-center items-center mb-4">
                            <img src={bst3} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold mb-2">SonoScape E2</p>
                        <p className="text-xl"> $18.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-4 ">
                        <div className="flex justify-center items-center mb-4">
                            <img src={bst4} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold mb-2">F3 Edan Medical Fetal Monitor</p>
                        <p className="text-xl">$20.99</p>
                    </div>
                </SwiperSlide>
               
                  <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-4 ">
                        <div className="flex justify-center items-center mb-4">
                            <img src={bst5} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold mb-2">Edan iM50 </p>
                        <p className="text-xl">  $14.99</p>
                    </div>
                </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-4 ">
                        <div className="flex justify-center items-center mb-4">
                            <img src={bst6} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold mb-2">iM20 Modular</p>
                        <p className="text-xl"> $14.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-4 ">
                        <div className="flex justify-center items-center mb-4">
                            <img src={bst7} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold mb-2">ECG</p>
                        <p className="text-xl"> $14.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="border border-gray-300 rounded-xl p-4 ">
                        <div className="flex justify-center items-center mb-4">
                            <img src={bst8} alt="Best Seller 2" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <p className="text-lg font-semibold mb-2">G2S BPAP System</p>
                        <p className="text-xl">$24.99</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default BestSellers;
