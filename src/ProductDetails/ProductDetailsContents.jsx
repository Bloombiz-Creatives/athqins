import im3 from '../../src/assets/blogs/3.jpg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import triangle from '../../src/assets/triangle.png';
import square from '../../src/assets/square-shape.png';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import DevicesOtherOutlinedIcon from '@mui/icons-material/DevicesOtherOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import OpacityOutlinedIcon from '@mui/icons-material/OpacityOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import bgimage from '../assets/bg-feature.png';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import { BatteryFullOutlined, DeviceHubOutlined, HighQualityOutlined, MobileFriendlyOutlined, SettingsOutlined, ScreenShareOutlined } from '@mui/icons-material';


export const ProductDetailsContents = () => {

    const features = [
        {
            icon: <CameraAltOutlinedIcon />,
            title: 'high-resolution capabilities',
            description_sono: 'Sonoscape ultrasound systems boast superior imaging quality, providing high-resolution and detailed images.',
            description_eden: 'Edan ultrasound systems provide exceptional high-resolution imaging with smart features like auto-adjustment and customizable presets. '
        },
        {
            icon: <CategoryOutlinedIcon />,
            title: 'Versatile Application Modes',
            description_sono: 'Sonoscape systems support multiple specialties like obstetrics, gynecology, cardiology, and elastography.',
            description_eden: "Edan's advanced imaging technology supports a range of application modes, including elastography for tissue stiffness analysis."
        },
        {
            icon: <DevicesOtherOutlinedIcon />,
            title: 'Portable and Compact Design',
            description_sono: 'With a focus on portability, Sonoscape ultrasound machines are compact and easy to transport. ',
            description_eden: "Known for their lightweight and compact designs, Edan ultrasound systems are easily portable, allowing for real-time 3D and 4D imaging on the go."
        },
        {
            icon: <WifiOutlinedIcon />,
            title: 'Robust Connectivity Options',
            description_sono: 'Sonoscape offers robust connectivity features such as wireless data transfer and integration with hospital systems.',
            description_eden: "Edan systems come with comprehensive connectivity features, such as Wi-Fi and USB ports, making it easy to transfer data and integrate with electronic health records (EHR). "
        }
    ];

    const featuresData = [
        {
            heading: "S-Fetus",
            description: "S-Fetus is a user-friendly tool allowing fully automatic and accurate detection of the most significant planes and frequently used measurements of fetal biometry.",
            iconClass: <PregnantWomanIcon style={{ fontSize: '3rem' }} />,
        },
        {
            heading: "S-Thyroid",
            description: "S-Thyroid is an advanced tool in detecting and classifying suspicious thyroid lesions based on ACR TI-RADS guideline.",
            iconClass: <LocalHospitalOutlinedIcon style={{ fontSize: '3rem' }} />,
        },
        {
            heading: "CEUS",
            description: "The comprehensive contrast-enhanced ultrasound imaging and quantification package offers doctors a thorough solution to evaluate perfusion dynamics.",
            iconClass: <OpacityOutlinedIcon style={{ fontSize: '3rem' }} />,
        },
        {
            heading: "Micro F",
            description: "Micro F provides an innovative method to expand the range of visible flow in ultrasound, especially for visualizing slow flow tiny vessels.",
            iconClass: <VisibilityOutlinedIcon style={{ fontSize: '3rem' }} />,
        },
    ];

    const featuresDataTwo = [
        {
            Icon: <MedicalServicesOutlinedIcon style={{ fontSize: '3rem' }} />,
            heading: 'Advanced Diagnostic Imaging',
            description: 'Enhance your diagnostic capabilities with our high-resolution imaging systems, offering unparalleled clarity and precision.'
        },
        {
            Icon: <SyncOutlinedIcon style={{ fontSize: '3rem' }} />,
            heading: 'Real-Time Data Integration',
            description: 'Seamlessly integrate real-time data from multiple sources for comprehensive patient management and decision-making.'
        },
        {
            Icon: <DesktopWindowsOutlinedIcon style={{ fontSize: '3rem' }} />,
            heading: 'User-Friendly Interface',
            description: 'Experience intuitive navigation and easy operation with our user-friendly interface designed for efficiency and ease of use.'
        },
        {
            Icon: <VideoCameraBackOutlinedIcon style={{ fontSize: '3rem' }} />,
            heading: 'Telemedicine Ready',
            description: 'Connect with patients remotely through our telemedicine-ready solutions, ensuring continuous care and accessibility.'
        }
    ];

    const featuredDataThree = [
        {
            Icon: <HighQualityOutlined  style={{ fontSize: '3rem' }}/>,
            title: 'High-Resolution Imaging',
            description: 'The device offers high-definition imaging technology, ensuring clear and detailed images for precise diagnosis.'
        },
        {
            Icon: <DeviceHubOutlined  style={{ fontSize: '3rem' }}/>,
            title: 'Comprehensive Probes',
            description: 'A variety of probes available for diverse clinical needs, including abdominal, vascular, cardiac, and obstetric applications.'
        },
        {
            Icon: <SettingsOutlined  style={{ fontSize: '3rem' }}/>,
            title: 'Touchscreen Interface',
            description: 'Features an intuitive touchscreen interface for easy navigation and adjustments during examinations.'
        },
        {
            Icon: <MobileFriendlyOutlined  style={{ fontSize: '3rem' }}/>,
            title: 'Needle Guidance',
            description: 'Advanced needle guidance technology for precise procedures, such as biopsies or injections.'
        },
        {
            Icon: <BatteryFullOutlined  style={{ fontSize: '3rem' }}/>,
            title: 'Compact Design',
            description: 'Designed for portability and ease of maneuverability in clinical settings.'
        },
        {
            Icon: <ScreenShareOutlined  style={{ fontSize: '3rem' }}/>,
            title: 'Long Battery Life',
            description: 'Equipped with a durable battery, supporting extended usage in mobile or emergency contexts.'
        }
    ]

    return (
        <div >
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
                                                        <ShoppingCartIcon />
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

            {/* Amazing Feature */}
            <div className="amazing-feature-area pt-28 pb-24 bg-gray-100" id="about">
                <div className="container mx-auto  md:px-8 lg:px-0 px-4">
                    <div className="flex justify-center mb-12">
                        <div className="lg:w-1/2 text-center">
                            <h2 className="text-3xl font-semibold">Amazing Features</h2>
                            <p className="mt-4 text-gray-600">
                                P60, configured with SonoScape’s latest prominent Wis+ platform, is designed to provide more insightful and constructive evidence for diagnosis through authentic detail display, easy-but-effective intelligent analysis and streamlined workflow.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-10">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col justify-center items-center">
                                <div className="single-amazing-feature-item flex flex-col justify-center items-center">
                                    <div className="icon bg-gradient-to-r from-blue-400 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white text-4xl transition-transform duration-300 hover:rotate-[360deg]">
                                        <div className="flex justify-center items-center h-8 w-8">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="content flex flex-col items-center justify-center">
                                        <h4 className="text-xl font-semibold mb-2 transition-colors hover:text-blue-600 md:text-[15px] xl:text-[20px]">{feature.title}</h4>
                                        <p className="text-gray-500 text-center md:text-[14px] xl:text-[18px]">{feature.description_sono}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* details 1 */}
            <div className="container mx-auto">
                <div className="flex flex-wrap mt-12  lg:px-10 md:px-12 px-4">
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <div className="img-wrap">
                            <img
                                src="/path-to-image/list-feature-image.png"
                                alt="list feature"
                                className="animate-bounce"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <div className="right-content-area">
                            <div className="list-feature-wrap">
                                <ul>
                                    {featuresData.map((feature, index) => (
                                        <li className="mb-5" key={index}>
                                            <div className="single-list-feature-item flex items-start transition-transform duration-300 ease-in-out group">
                                                <div
                                                    className="icon text-blue-600 mr-5 group-hover:scale-125 transition-transform duration-300 ease-in-out"
                                                    style={{ transform: 'rotateY(0deg)', transition: 'transform 0.3s ease' }}
                                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotateY(180deg)')}
                                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotateY(0deg)')}
                                                >
                                                    {feature.iconClass}
                                                </div>
                                                <div className="content flex-1">
                                                    <h4 className="md:text-2xl text-[20px] mb-2 font-semibold transition-colors duration-300 group-hover:text-blue-600">
                                                        {feature.heading}
                                                    </h4>
                                                    <p>{feature.description}</p>
                                                </div>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* details 2 */}
            <div className='mt-6'>
            <div style={{ backgroundImage: `url(${bgimage})` , backgroundSize: 'cover',  display:'flex', alignItems: 'center', justifyContent: 'center'}} className='lg:h-[700px] md:h-[800px] h-[900px]'>
                <div className="container mx-auto">
                    <div className="flex flex-wrap lg:px-10 md:px-12 px-4 ">
                        <div className="w-full lg:w-1/2">
                            <div className="right-content-area">
                                <div className="list-feature-wrap">
                                    <ul>
                                        {featuresDataTwo.map((feature, index) => (
                                            <li className="mb-5" key={index}>
                                                <div className="single-list-feature-item flex items-start transition-transform duration-300 ease-in-out group text-white">
                                                    <div
                                                        className="icon text-white mr-5 group-hover:scale-125 transition-transform duration-300 ease-in-out"
                                                        style={{ transform: 'rotateY(0deg)', transition: 'transform 0.3s ease' }}
                                                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotateY(180deg)')}
                                                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotateY(0deg)')}
                                                    >
                                                        {feature.Icon}
                                                    </div>
                                                    <div className="content flex-1">
                                                        <h4 className="md:text-2xl text-[20px] mb-2 font-semibold transition-colors duration-300 ">
                                                            {feature.heading}
                                                        </h4>
                                                        <p>{feature.description}</p>
                                                    </div>
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex justify-center items-center">
                            <div className="img-wrap">
                                <img
                                    src="/path-to-image/list-feature-image.png"
                                    alt="list feature"
                                    className="animate-bounce"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>



            {/* details 3 */}
            <div className="block-feature-area pt-24 mt-10">
                <div className="container mx-auto">
                    <div className="flex flex-wrap lg:px-16 px-2">
                        {featuredDataThree.map((feature, index) => (
                            <div className="w-full lg:w-1/3 md:w-1/2 px-4 mb-6" key={index}>
                                <div className="flex items-start mb-6 transition-transform duration-300 hover:scale-110">
                                    <div className="text-indigo-500 mr-4 " 
                                     style={{ transform: 'rotateY(0deg)', transition: 'transform 0.3s ease' }}
                                     onMouseEnter={(e) => (e.currentTarget.style.transform = 'rotateY(180deg)')}
                                     onMouseLeave={(e) => (e.currentTarget.style.transform = 'rotateY(0deg)')}
                                    >
                                        {feature.Icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="md:text-2xl text-[20px] font-semibold mb-3 hover:text-indigo-600">{feature.title}</h4>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="w-full text-center mt-10">
                            <img src='' alt="block feature" className="mx-auto" />
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}
