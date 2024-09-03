import { useRef } from 'react';
import './featured.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FeaturedProperties = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: -300,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            top: 0,
            left: 300,
            behavior: 'smooth'
        });
    };

    const properties = [
        { title: 'ICU', image: 'https://athqins.bloombizsuite.com/images/category/Ultrasound.jpg' },
        { title: 'NICU', image: 'https://athqins.bloombizsuite.com/images/category/Ultrasound.jpg' },
        { title: 'CARDIOLOGY', image: 'images/category/cardiology.jpg' },
        { title: 'OPERATION THEATRE', image: 'images/category/Operationtheatre.jpg' },
        { title: 'ULTRASOUND', image: 'images/category/Ultrasound.jpg' },
        { title: 'REFURISHED', image: 'images/category/refurbished.jpg' },
        { title: 'CONSUMABLES', image: 'images/category/consumables.jpg' },
    ];

    return (
        <div className="container mx-auto mt-24 relative py-6 px-6">
            <div className="flex flex-col md:flex-row items-center mb-8 px-10">
                <div className="md:w-1/4">
                    <h2 className="text-3xl font-bold">Featured <br/> Properties</h2>
                    <p className="text-[#333] opacity-70">Browse our latest hot offers</p>
                     <a href="#" className="relative mt-10 text-[#333] font-light md:font-bold uppercase tracking-wider group flex items-center">
                        View Details
                        <span className="ml-2 inline-block h-0.5 w-5 md:w-10 bg-[#333] transition-all duration-300 ease-in-out md:group-hover:w-20 group-hover:w-10"></span>
                    </a>
                </div>
                <div className="md:w-3/4 mt-8 md:mt-0 relative">
                    <button
                        onClick={scrollLeft}
                        className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-4 z-10"
                    >
                        <ArrowBackIcon
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(-4px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'} />
                    </button>
                    <div
                        ref={scrollRef}
                        className="flex space-x-4 overflow-x-auto scrollbar-hide"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {properties.map((property, index) => (

                            <div key={index} className=" group bg-gray-800 text-white rounded-lg overflow-hidden bg-cover bg-center flex-none w-64 h-96 relative  transition-transform duration-300 ease-in-out transform hover:scale-105" style={{ backgroundImage: `url(${property.image})` }}>
                                <div className="absolute bottom-0 left-0 right-0 p-5  rounded-b-lg transition-transform duration-400 ease-in-out z-10 group-hover:translate-y-[-30%]">
                                    <div className="text-xl font-extrabold">{property.title}</div>
                                    <div className="absolute bottom-0 left-3 cursor-pointer  right-0 p-2 text-xs font-light uppercase tracking-wider opacity-0 transition-transform duration-400 ease-in-out transform translate-y-[400%] group-hover:translate-y-0 group-hover:opacity-100">
                                        View Details
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={scrollRight}
                        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full p-4 z-10"
                    >
                        <ArrowForwardIcon
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateX(4px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateX(0)'} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties