import pagecnt from "../../assets/demo22.jpg"

const PageContent = () => {
    return (
        <div className="container mx-auto">
            <div className="relative overflow-hidden max-w-full mx-auto my-5 h-[70vh] md:block hidden">
                <a href="#" className="block">
                    <div className="relative w-full h-full">
                        <img
                            src={pagecnt}
                            alt="Top Selling Home Appliances"
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 bottom-0 w-2/5 flex flex-col justify-center items-center text-center text-gray-800 px-5 py-8 bg-white bg-opacity-80">
                            <h3 className="text-2xl  lg:text-4xl font-semibold uppercase mb-2 leading-tight">
                                TOP SELLING Hospital<br /> EQUIPMENTS
                            </h3>
                            <p className="text-sm md:text-base lg:text-lg mb-4 leading-relaxed">
                                All exclusive only for you with <br /> affordable prices
                            </p>
                            <a href="#" className="inline-block px-4 py-2 border border-gray-800 text-gray-800 text-sm md:text-base lg:text-lg transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </a>
            </div>

            <div className="relative overflow-hidden max-w-full mx-auto my-5 h-[70vh] md:hidden block">
                <a href="#">
                    <div className="relative w-full h-full">
                        <img
                            src={pagecnt}
                            alt="Top Selling Hospital Equipments"
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                        />
                        <div
                            id="banner-details"
                            className="absolute inset-0  flex flex-col justify-center items-center text-center text-gray-800 p-5 bg-white bg-opacity-80 sm:bg-opacity-90 md:bg-opacity-80"
                        >
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase mb-2 leading-tight">
                                TOP SELLING Hospital<br /> EQUIPMENTS
                            </h3>
                            <p className="text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
                                All exclusive only for you with <br /> affordable prices
                            </p>
                            <span className="inline-block px-3 sm:px-4 py-2 border border-gray-800 text-gray-800 text-xs sm:text-sm md:text-base transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white">
                                Shop Now
                            </span>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default PageContent
