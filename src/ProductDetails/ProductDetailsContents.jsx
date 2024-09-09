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
import { BatteryFullOutlined, DeviceHubOutlined, HighQualityOutlined, MobileFriendlyOutlined, SettingsOutlined, ScreenShareOutlined, ChevronRight, ChevronLeft } from '@mui/icons-material';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import introbg from '../assets/intro-bg.jpg';
import { useState } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import contact from '../assets/contact.jpg';
import HouseIcon from '@mui/icons-material/House';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { addEnquiry } from '../../src/action/ecomAction';
import { useDispatch } from 'react-redux';





export const ProductDetailsContents = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };


    //form submission
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyname: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
        setSuccessMessage('');
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (formData.phone.length < 10) {
            newErrors.phone = 'Phone number must be at least 10 digits';
        }
        if (!formData.companyname) newErrors.companyname = 'Company name is required';
        return newErrors;
    };

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            companyname: ''
        });
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const dataToSubmit = { ...formData };
        clearForm(); // Clear the form immediately after clicking the button

        try {
            const response = await dispatch(addEnquiry(dataToSubmit));
            if (response.status === 200) {
                setSuccessMessage('Your enquiry has been successfully submitted.');
            }
        } catch (error) {
            console.error('Error submitting enquiry:', error);
        }
    };


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
            Icon: <HighQualityOutlined style={{ fontSize: '3rem' }} />,
            title: 'High-Resolution Imaging',
            description: 'The device offers high-definition imaging technology, ensuring clear and detailed images for precise diagnosis.'
        },
        {
            Icon: <DeviceHubOutlined style={{ fontSize: '3rem' }} />,
            title: 'Comprehensive Probes',
            description: 'A variety of probes available for diverse clinical needs, including abdominal, vascular, cardiac, and obstetric applications.'
        },
        {
            Icon: <SettingsOutlined style={{ fontSize: '3rem' }} />,
            title: 'Touchscreen Interface',
            description: 'Features an intuitive touchscreen interface for easy navigation and adjustments during examinations.'
        },
        {
            Icon: <MobileFriendlyOutlined style={{ fontSize: '3rem' }} />,
            title: 'Needle Guidance',
            description: 'Advanced needle guidance technology for precise procedures, such as biopsies or injections.'
        },
        {
            Icon: <BatteryFullOutlined style={{ fontSize: '3rem' }} />,
            title: 'Compact Design',
            description: 'Designed for portability and ease of maneuverability in clinical settings.'
        },
        {
            Icon: <ScreenShareOutlined style={{ fontSize: '3rem' }} />,
            title: 'Long Battery Life',
            description: 'Equipped with a durable battery, supporting extended usage in mobile or emergency contexts.'
        }
    ]


    const products = [
        { img: 'https://images.luxuryescapes.com/q_auto:good/2qadgy03vpr2tghsh8x', name: 'SonoScape S22', price: '$34', oldPrice: '$55' },
        { img: 'https://images.luxuryescapes.com/q_auto:good/2qadgy03vpr2tghsh8x', name: 'Endoscopy', price: '$34', oldPrice: '$55' },
        { img: 'https://images.luxuryescapes.com/q_auto:good/2qadgy03vpr2tghsh8x', name: 'P20', price: '$34', oldPrice: '$55' },
        { img: 'https://images.luxuryescapes.com/q_auto:good/2qadgy03vpr2tghsh8x', name: 'Sonoscape e1', price: '$34', oldPrice: '$55' },
        { img: 'https://images.luxuryescapes.com/q_auto:good/2qadgy03vpr2tghsh8x', name: 'SonoScape E2', price: '$34', oldPrice: '$55' },
        { img: 'https://images.luxuryescapes.com/q_auto:good/2qadgy03vpr2tghsh8x', name: 'Sonoscape P9', price: '$34', oldPrice: '$55' },
        { img: 'https://images.luxuryescapes.com/q_auto:good/2qadgy03vpr2tghsh8x', name: 'SonoScape S2', price: '$34', oldPrice: '$55' },
        { img: 'https://images.luxuryescapes.com/q_auto:good/2qadgy03vpr2tghsh8x', name: 'Sonoscape S9', price: '$34', oldPrice: '$55' }
    ];

    const testimonials = [
        {
            name: 'Mark Anthony',
            position: 'Director',
            image: '/api/placeholder/50/50',
            text: 'They provide innovative solutions with the best. tempor incididunt utla bore et dolor tempor incididunt .'
        },
        {
            name: 'Mark Anthony',
            position: 'Director',
            image: '/api/placeholder/50/50',
            text: 'They provide innovative solutions with the best. tempor incididunt utla bore et dolor tempor incididunt .'
        },
        {
            name: 'Mark Anthony',
            position: 'Director',
            image: '/api/placeholder/50/50',
            text: 'They provide innovative solutions with the best. tempor incididunt utla bore et dolor tempor incididunt .'
        },
        {
            name: 'Mark Anthony',
            position: 'Director',
            image: '/api/placeholder/50/50',
            text: 'They provide innovative solutions with the best. tempor incididunt utla bore et dolor tempor incididunt .'
        },
    ];

    const [swiper, setSwiper] = useState(null);

    const nextSlide = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };

    const prevSlide = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    const faqItems = [
        {
            question: 'Agreed but expect repair she nay sir silent person',
            answer: 'My possible peculiar together to. Desire so better am cannot he up before points.',
        },
        {
            question: 'It surprise informed mr advanced do outweigh.',
            answer: 'Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at.',
        },
        {
            question: 'Appetite welcomed interest the goodness boy not',
            answer: 'Desire so better am cannot he up before points.',
        },
        {
            question: 'Expenses as material breeding insisted building to',
            answer: 'Court front maids forty if aware their at.',
        },
        {
            question: 'No in he real Wandered or strictly raillery stanhill a',
            answer: 'Chicken use are pressed removed.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <div >

            {/* folding */}

            {/* <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                <div className="relative flex items-center justify-center w-full h-full">
                    <div className="absolute bottom-8 right-8">
                        <a
                            href="#"
                            className="bg-blue-600 text-white font-semibold text-sm px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300"
                        >
                            Cancel Preloader
                        </a>
                    </div>

                    <div
                        className="relative flex items-center justify-center rotate-45"
                        style={{ width: '80px', height: '80px' }}
                    >
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1/2 h-1/2"
                                style={{
                                    transform: `rotateZ(${i * 90}deg) scale(1.1)`,
                                    backgroundColor: '#5369f0',
                                    animation: 'sk-foldCubeAngle 2.4s infinite linear',
                                    animationDelay: `${i * 0.3}s`,
                                    transformOrigin: '100% 100%',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div> */}



            {/* banner */}
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
                <div style={{ backgroundImage: `url(${bgimage})` }} className='lg:h-[700px] md:h-[800px] h-[900px] flex justify-center items-center bg-cover '>
                    <div className="container mx-auto">
                        <div className="flex flex-wrap lg:px-10 md:px-12 px-4 ">
                            <div className="w-full lg:w-1/2 md:-order-1 order-2">
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


            {/* video */}
            <div className="relative bg-cover bg-center text-center md:py-[150px] py-[100px] md:pb-[130px]" style={{ backgroundImage: `url(${introbg})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
                <div className="container mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <a
                                href="#"
                                onClick={toggleModal}
                                className="bg-[#5369f0] text-white w-[100px] h-[100px] flex justify-center items-center text-[30px] rounded-full mb-[36px] relative animate-pulse-border"
                            >
                                <PlayCircleFilledOutlinedIcon />
                                <span className="absolute inset-0 flex justify-center items-center text-[30px] text-white">
                                    <PlayCircleFilledOutlinedIcon style={{ fontSize: 30 }} />
                                </span>
                            </a>
                            <h2 className="text-[48px] leading-[58px] font-semibold text-white">About Our Features</h2>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white w-[80%] h-[80%] relative">
                            <button
                                className="absolute top-2 right-2 text-black bg-gray-300 rounded-full p-2"
                                onClick={toggleModal}
                            >
                                X
                            </button>
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/HVFgMNclzcw"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>


            {/* our-products */}
            <div className="py-16">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
                        <p className="text-lg text-gray-600 md:px-32 px-4">
                            Advancing healthcare through innovative technology, our range of medical equipment empowers healthcare professionals to deliver superior patient care and achieve breakthrough outcomes.
                        </p>
                    </div>
                    <div className="relative md:px-16 px-4">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next',
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 3, spaceBetween: 30 },
                                1024: { slidesPerView: 4, spaceBetween: 40 },
                            }}
                            className="mySwiper"
                        >
                            {products.map((product, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                        <img src={product.img} alt={product.name} className="w-full h-48 object-cover" />
                                        <div className="p-6 text-center">
                                            <h4 className="text-xl font-semibold mb-2">
                                                <a href="#" className="hover:text-blue-600">{product.name}</a>
                                            </h4>
                                            <div className="text-lg font-bold mb-4">
                                                <span className="text-gray-800">{product.price}</span>{' '}
                                                <del className="text-gray-500">{product.oldPrice}</del>
                                            </div>
                                            <a href="#" className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-800 transition duration-300">
                                                Buy Now
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* <button className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2  z-5 w-4 h-4 flex items-center justify-center">
                        </button>
                        <button className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2  z-10 w-4 h-4 flex items-center justify-center ">
                        </button> */}

                    </div>
                </div>
            </div>



            {/* user slider */}
            <div className="lg:h-[700px] md:h-[800px] h-[600px] flex justify-center items-center bg-cover "
                style={{
                    backgroundImage: `url(${bgimage})`,

                }}>
                <div className=' container mx-auto md:p-6 p-4'>
                    <h2 className="text-4xl font-bold text-white text-center mb-4">What Users Says</h2>
                    <p className="text-white text-center mb-8">
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        <br />
                        dolor tempor incididunt ut labore et dolore
                    </p>
                    <div className="relative md:px-12 px-6 ">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={3}
                            onSwiper={setSwiper}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="mySwiper"
                        >
                            {testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <p className="text-gray-700 mb-4">{testimonial.text}</p>
                                        <div className="flex items-center">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div>
                                                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                                <p className="text-gray-600">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md border border-gray-200 z-10"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md border border-gray-200 z-10"
                            aria-label="Next slide"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="faq-area pt-28 pb-32" id="faq">
                <div className="container mx-auto md:px-14 px-4">
                    <div className="flex justify-center">
                        <div className="lg:w-1/2">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                                <p className="mt-4">
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor tempor
                                    incididunt ut labore et dolore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="lg:w-7/12 w-full md:-order-1 order-2">
                            <div className="accordion-wrapper">
                                {faqItems.map((item, index) => (
                                    <div key={index} className="mb-6">
                                        <div
                                            className="cursor-pointer bg-gray-100 p-4 flex items-center justify-start"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-6 w-6 mr-4 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-blue-500' : 'rotate-0 text-black'
                                                    }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                            <h5
                                                className={`font-semibold md:text-lg text-[12px] transition-colors duration-300 ${activeIndex === index ? 'text-blue-500' : 'text-black'
                                                    }`}
                                            >
                                                {item.question}
                                            </h5>
                                        </div>
                                        {activeIndex === index && (
                                            <div className="bg-gray-100 p-4 md:text-lg text-[12px]">
                                                <p className='ml-10'>{item.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-5/12 w-full">
                            <div className="right-content-area text-center">
                                <div className="img-wrapper">
                                    <img src="assets/img/faq-image.png" alt="faq" className="inline-block animate-upndown" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* contact form */}
            <div className="contact-area bg-cover py-32" id="contact" style={{ backgroundImage: `url(${contact})` }}>
                <div className="container mx-auto px-4 md:px-14">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <div className="contact-info-area">
                                <h3 className="text-4xl font-semibold">Contact Us</h3>
                                <p className="mt-4 text-gray-600">
                                    Feel free to reach out to us for any questions, product inquiries, or support. Our team is ready to assist you with all your hospital machinery needs. We're just one click or call away!                                </p>
                                <ul className="mt-12 space-y-8">
                                    {/* Address */}
                                    <li className="flex items-start">
                                        <div className="icon bg-gradient-to-br from-blue-400 to-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                                            <HouseIcon />
                                        </div>
                                        <div className="ml-6">
                                            <span className="block text-lg font-medium text-gray-700">143 castle road 517</span>
                                            <span className="block text-lg text-gray-700">143 castle road 517</span>
                                        </div>
                                    </li>
                                    {/* Phone */}
                                    <li className="flex items-start">
                                        <div className="icon bg-gradient-to-br from-blue-400 to-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                                            <LocalPhoneIcon />
                                        </div>
                                        <div className="ml-6">
                                            <span className="block text-lg font-medium text-gray-700">+3 123 456 789</span>
                                            <span className="block text-lg text-gray-700">+3 123 456 789</span>
                                        </div>
                                    </li>
                                    {/* Email */}
                                    <li className="flex items-start">
                                        <div className="icon bg-gradient-to-br from-blue-400 to-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full">
                                            <MailIcon />
                                        </div>
                                        <div className="ml-6">
                                            <a href="mailto:info@yourmail.com" className="block text-lg font-medium text-gray-700 hover:text-blue-500">
                                                info@yourmail.com
                                            </a>
                                            <a href="mailto:info@yourmail.com" className="block text-lg text-gray-700 hover:text-blue-500">
                                                info@yourmail.com
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Section: Contact Form */}
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="contact-form-area">
                                    <div className="flex flex-wrap -mx-4">
                                        <form onSubmit={handleSubmit} className='w-full'>
                                            <div className='md:flex w-full'> 
                                            <div className="w-full lg:w-1/2 px-4 mb-4">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name='name'
                                                    className="form-control w-full p-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="w-full lg:w-1/2 px-4 mb-4">
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name='email'
                                                    className="form-control w-full p-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Your Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            </div>

                                            <div className="w-full px-4 mb-4">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="phone"
                                                    className="form-control w-full p-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="your phone number..."
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="w-full px-4 mb-4">
                                                <textarea
                                                    id="message"
                                                    name="companyname"
                                                    className="form-control w-full p-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Message"
                                                    value={formData.companyname}
                                                    onChange={handleChange}
                                                    rows="6"
                                                ></textarea>
                                            </div>
                                            <div className="w-full px-4">
                                                <button
                                                    className="submit-btn w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
                                                    type="submit"
                                                >
                                                    Submit Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
