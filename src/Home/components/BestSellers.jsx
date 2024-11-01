import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BSTSellers } from '../../action/ecomAction';
import { useNavigate } from 'react-router-dom';

const BestSellers = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(BSTSellers());
    }, [dispatch])

    const { Bestsellers } = useSelector((state) => state.ecomState);
    const Products = Bestsellers?.Bestsellers || [];

    const handleViewClick = (pro) => {
        const brandId = pro?.brand;
        if (brandId === '66fa5515128cbdb0a930d04e' || brandId === '66fa552c128cbdb0a930d052') {
          navigate(`/product_details/${pro?._id}`); 
        } else {
          navigate(`/products/details/${pro?._id}`); 
        }
      };


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
                    320: {
                        slidesPerView: 1,
                    },
                    425: {
                        slidesPerView: 2, 
                    },
                    768: {
                        slidesPerView: 3, 
                    },
                    1024: {
                        slidesPerView: 3.5, 
                    },
                }}
            >
                {Products.map((product) => (
                    <SwiperSlide key={product._id} className="swiper-slide" style={{ paddingBottom: '40px' }}>
                        <div className="shadow-2xl rounded-xl p-4 cursor-pointer ">
                            <div className="flex justify-center items-center ">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 2xl:h-72 object-contain  rounded-lg"
                                />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                            <p className="text-[20px] font-semibold  link block text-ellipsis truncate overflow-hidden whitespace-nowrap">{product.name}</p>
                            <button className='bg-blue-950 py-2 px-3 text-sm text-white rounded-md' onClick={() => handleViewClick(product)}>VIEW IN DETAIL</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BestSellers;
