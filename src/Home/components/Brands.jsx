import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand } from "../../action/ecomAction";

const Brands = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrand());
  }, [dispatch])

  const { brand } = useSelector((state) => state.ecomState);
  console.log(brand?.brand?.logo, 'brand');


  return (

    <div className="container mx-auto md:py-44 py-24">
      <div className=" text-center mb-12 h-full">
        <h2 className="text-[35px] font-semibold text-gray-800"><span className="text-blue-900">Brands</span> We Deal</h2>
        <p className="text-[20px] md:text-[25px] font-semibold md:px-12 px-4">We are proud to partner with leading manufacturers in the biomedical equipment 
        industry to provide you with the most advanced and reliable solutions</p>
      </div>
      <div className="w-full overflow-hidden px-4 md:px-8 lg:px-16 ">
        <Swiper
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          modules={[Autoplay]}
          className="flex items-center"
          breakpoints={{
            640: {
              slidesPerView: 2, 
            },
            768: {
              slidesPerView: 3, 
            },
            1024: {
              slidesPerView: 4, 
            },
            360:{
              slidesPerView: 2
            }
          }}
        >

          {brand?.brand?.map((item) => (
            <SwiperSlide
              key={item._id}
              className="flex justify-center items-center p-2"
            >
              <img
                src={item.logo}  
                alt={item.name}
                className="h-[70px] w-[130px] object-contain grayscale cursor-pointer hover:grayscale-0 transition-transform duration-300 transform hover:scale-110"
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
