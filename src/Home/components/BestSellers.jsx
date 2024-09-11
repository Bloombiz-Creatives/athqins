import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BSTSellers } from '../../action/ecomAction';

const BestSellers = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(BSTSellers());
    },[dispatch])

    const {Bestsellers} = useSelector((state) => state.ecomState);
    const Products = Bestsellers?.Bestsellers || [];
    console.log(Products,'bsttttt');
    

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
                    425: {
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
                {Products.map((product) => (
                    <SwiperSlide key={product._id} className="swiper-slide" style={{ paddingBottom: '40px' }}>
                        <div className="border border-gray-300 rounded-xl p-6 ">
                            <div className="flex justify-center items-center ">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            </div>
                            <p className="text-lg font-semibold mt-4 link block text-ellipsis truncate overflow-hidden whitespace-nowrap">{product.name}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BestSellers;
