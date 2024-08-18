
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeHero } from '../../action/ecomAction';

const Hero = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHomeHero());
    }, [dispatch]);

    const { banners } = useSelector((state) => state.ecomState);
    const bannerData = banners?.banners || [];
    const bannerId = bannerData.length > 0 ? bannerData[0]._id : null;


    const slides = bannerData.flatMap(banner => [
        {
            title: banner.heading1 || 'No Title',
            features: banner.subheading1 || 'No Features',
            price: banner.price1 || 'No Price',
            image: banner.image1 || '',
            subimage: banner.subimage1 || '',
        },
        {
            title: banner.heading2 || 'No Title',
            features: banner.subheading2 || 'No Features',
            price: banner.price2 || 'No Price',
            image: banner.image2 || '',
            subimage: banner.subimage2 || '',
        },
        {
            title: banner.heading3 || 'No Title',
            features: banner.subheading3 || 'No Features',
            price: banner.price3 || 'No Price',
            image: banner.image3 || '',
            subimage: banner.subimage3 || '',
        },
        {
            title: banner.heading4 || 'No Title',
            features: banner.subheading4 || 'No Features',
            price: banner.price4 || 'No Price',
            image: banner.image4 || '',
            subimage: banner.subimage4 || '',
        },
    ]);

    useEffect(() => {
        if (slides.length > 0) {
            const interval = setInterval(() => {
                setActiveSlide((prev) => (prev + 1) % slides.length);
            }, 7000);
            return () => clearInterval(interval);
        }
    }, [slides]);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleThumbnailClick = (index) => {
        setActiveSlide(index);
    };



    return (
        <div>

            <div className="relative h-screen">
                <div className="absolute inset-0">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20" />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                {slides[activeSlide]?.title}
                            </h1>
                            <p className="text-xl text-white mb-8">
                                {slides[activeSlide]?.features}
                            </p>
                        </div>

                       
                        <div className="absolute flex space-x-2 p-4 gap-2">
                            {slides.map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide.subimage}
                                    alt={slide.title}
                                    className={`w-10 h-10 sm:w-20 sm:h-20 object-cover cursor-pointer transition-transform duration-300 ${index === activeSlide ? 'transform scale-125' : ''}`}

                                    onClick={() => handleThumbnailClick(index)}
                                />
                            ))}
                        </div>

                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-1/2 h-32 bg-black bg-opacity-80 flex items-center justify-between px-8">
                    <div className="text-white">
                        <span className="text-3xl font-bold">${slides[activeSlide]?.price}</span>
                    </div>
                    <a href="#" className="text-white font-bold uppercase tracking-wider">
                        View Details
                    </a>
                </div>

                <div className="absolute bottom-0 right-0 flex">
                    <button onClick={prevSlide} className="w-16 h-32 bg-white flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={nextSlide} className="w-16 h-32 bg-white flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;


