import im3 from '../../src/assets/blogs/3.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import triangle from '../../src/assets/triangle.png';
import square from '../../src/assets/square-shape.png'; 

export const ProductDetailsContents = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col  md:px-12 px-4 py-12">

                <div className="relative z-0 ">
                    <div className="absolute bottom-[100px] left-[45%] animate-roate360">
                        <img src={square} alt="square" />
                    </div>
                    <div className="absolute  left-[200px] animate-roate360">
                        <img src={triangle} alt="triangle" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="relative xl:pt-[200px] pt-[70px] pb-[100px] z-3 ">
                            <div className="md:w-[60%] w-full">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="pb-2 pt-0">
                                            <h1 className="xl:text-[72px] lg:text-[60px]  md:text-[50px] text-[35px] xl:leading-[90px] leading-none font-semibold mb-[40px] tracking-[-2px] wow fadeInDown">
                                                S60 Color Doppler Diagnostic Ultrasound System
                                            </h1>
                                            <div className="mt-[35px] wow shake">
                                                <a href="#" className="btn rounded-full bg-blue-500 text-white font-semibold md:px-8 md:py-4 py-3 px-4 inline-flex items-center space-x-2 hover:bg-blue-600 transition duration-200 ease-in-out">
                                                  <ShoppingCartIcon/>
                                                    <span>Order Now</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex absolute right-[5%]  wow fadeInUp w-[30%]  hidden">
                            <div className="header-right-image-animation  animate-upndown">
                                <img src={im3} alt="" />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
