import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchHomePageContent } from "../../action/ecomAction";
import pagecnt from "../../assets/demo22.jpg";
import { Link } from "react-router-dom";

const PageContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHomePageContent());
    }, [dispatch]);

    const { pageContent } = useSelector((state) => state.ecomState);

    const pageCntnt = pageContent?.pageContent?.[0] || {};


    return (
        <div className="container mx-auto">
            <div className="relative overflow-hidden max-w-full mx-auto my-5 h-[70vh] md:block hidden">
                <div className="block">
                    <div className="relative w-full h-full">
                        <img
                            src={pagecnt}
                            alt={pageCntnt.heading || "Top Selling Home Appliances"}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 bottom-0 w-2/5 flex flex-col justify-center items-center text-center text-gray-800 px-5 py-8 bg-white bg-opacity-80">
                            <h3 className="text-2xl lg:text-4xl font-semibold uppercase mb-2 leading-tight">
                                {pageCntnt.heading || "Default Heading"}
                            </h3>
                            <p className="text-sm md:text-base lg:text-lg mb-4 leading-relaxed">
                                {pageCntnt.text || "Default description text."}
                            </p>
                            <Link to='our_products' className="inline-block px-4 py-2 border border-gray-800 text-gray-800 text-sm md:text-base lg:text-lg transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                                {pageCntnt.button || "Shop Now"}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile view */}
            {/* <div className="relative overflow-hidden max-w-full mx-auto my-5 h-[70vh] md:hidden block">
                <div>
                    <div className="relative w-full h-full">
                        <img
                            src={pagecnt}
                            alt={pageCntnt.heading || "Top Selling Hospital Equipments"}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                        <div
                            id="banner-details"
                            className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-800 p-5  bg-white bg-opacity-80 sm:bg-opacity-90 md:bg-opacity-80"
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase mb-2 leading-tight  mt-20">
                                {pageCntnt.heading || "Default Heading"}
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
                                {pageCntnt.text || "Default description text."}
                            </p>
                            <span className="inline-block px-3 sm:px-4 py-2 border border-gray-800 text-gray-800 text-xs sm:text-sm md:text-base transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                                {pageCntnt.button || "Shop Now"}
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}

            <div
                className="relative overflow-hidden max-w-full mx-auto my-5 h-[70vh] md:hidden block bg-cover bg-center"
                style={{ backgroundImage: `url(${pagecnt})` }}
            >
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-800 p-5 bg-white bg-opacity-80">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase mb-2 leading-tight">
                        {pageCntnt.heading || "Default Heading"}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
                        {pageCntnt.text || "Default description text."}
                    </p>
                    <Link to={'/our_products'} className="inline-block px-3 sm:px-4 py-2 border border-gray-800 text-gray-800 text-xs sm:text-sm md:text-base transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                        {pageCntnt.button || "default "}
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PageContent;
