import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addEnquiry, fetchBrand, fetchCategory, fetchSubCategory, getSingleProduct } from '../action/ecomAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HouseIcon from '@mui/icons-material/House';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import contact from '../assets/contact.jpg';

const ProductOverview = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        if (id) {
            dispatch(getSingleProduct(id));
        }
        dispatch(fetchCategory());
        dispatch(fetchBrand());
        dispatch(fetchSubCategory());
    }, [id, dispatch]);

    const { product } = useSelector((state) => state.ecomState);
    const ProductsDatas = product?.product || {};

    const { category } = useSelector((state) => state.ecomState);
    const cat = Array.isArray(category?.category) ? category.category : [];

    const getCategoryName = (categoryId) => {
        const category = cat.find(lo => lo._id === categoryId);
        return category ? category.name : 'Unknown';
    };

    const { brand } = useSelector((state) => state.ecomState);
    const brnds = Array.isArray(brand?.brand) ? brand.brand : [];

    const getBrandName = (brandId) => {
        const brand = brnds.find(b => b._id === brandId);
        return brand ? brand.name : 'Unknown';
    };

    const { subcategory } = useSelector((state) => state.ecomState);
    const SubCategories = Array.isArray(subcategory?.subcategory) ? subcategory.subcategory : [];

    const getSubCategoryName = (subCatId) => {
        const subcategory = SubCategories.find(s => s._id === subCatId);
        return subcategory ? subcategory.name : 'Unknown';
    }

    // Set default main image on page load
    useEffect(() => {
        if (ProductsDatas?.image) {
            setSelectedImage(ProductsDatas.image);
        }
    }, [ProductsDatas]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyname: ''
    });

    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
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
        // if (!formData.companyname) newErrors.companyname = 'Company name is required';
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
        clearForm();

        try {
            await dispatch(addEnquiry(dataToSubmit));
            const { name, email, phone, companyname } = dataToSubmit;

            const whatsappNumber = '919946555605';
            const whatsappMessage = `Hello, my name is ${name}.\nphone: ${phone}.\n email: ${email}.\n Message : ${companyname}.`;

            const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');
        } catch (error) {
            console.error('Error submitting enquiry:', error);
        }
    };

    return (
        <div className='container mx-auto'>
            <div className="md:py-20 px-6 md:px-14 py-10">
                <div className="flex flex-col lg:flex-row ">
                    <div className="lg:w-1/2">
                        <div className="border">
                            <img
                                src={selectedImage || ProductsDatas?.image}
                                alt="Product"
                                // className="w-full h-full  md:h-[500px] object-contain flex justify-center items-center"
                                className="w-full h-full  md:h-[450px] object-contain"
                            />
                        </div>
                        <div className="flex space-x-4 mt-4">
                            {ProductsDatas?.gallery1 && (
                                <img
                                    src={ProductsDatas?.gallery1}
                                    alt="thumbnail"
                                    onClick={() => handleImageClick(ProductsDatas?.gallery1)}
                                    className="md:w-20 md:h-20 h-12 w-12 object-contain border cursor-pointer"
                                />
                            )}
                            {ProductsDatas?.gallery2 && (
                                <img
                                    src={ProductsDatas?.gallery2}
                                    alt="thumbnail"
                                    onClick={() => handleImageClick(ProductsDatas?.gallery2)}
                                    className="md:w-20 md:h-20 h-12 w-12 object-contain border cursor-pointer"
                                />
                            )}
                            {ProductsDatas?.gallery3 && (
                                <img
                                    src={ProductsDatas?.gallery3}
                                    alt="thumbnail"
                                    onClick={() => handleImageClick(ProductsDatas?.gallery3)}
                                    className="md:w-20 md:h-20 h-12 w-12 object-contain border cursor-pointer"
                                />
                            )}
                            {ProductsDatas?.gallery4 && (
                                <img
                                    src={ProductsDatas?.gallery4}
                                    alt="thumbnail"
                                    onClick={() => handleImageClick(ProductsDatas?.gallery4)}
                                    className="md:w-20 md:h-20 h-12 w-12 object-contain border cursor-pointer"
                                />
                            )}
                            {ProductsDatas?.gallery5 && (
                                <img
                                    src={ProductsDatas?.gallery5}
                                    alt="thumbnail"
                                    onClick={() => handleImageClick(ProductsDatas?.gallery5)}
                                    className="md:w-20 md:h-20 h-12 w-12 object-contain border cursor-pointer"
                                />
                            )}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                        <h1 className="text-3xl font-semibold">{ProductsDatas?.name}</h1>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-400">★★★★☆</span>
                        </div>

                        {/* Description */}
                        <p className="mt-4 text-gray-700">{ProductsDatas?.description}</p>

                        {/* Categories and Tags */}
                        <div className="mt-4">
                            <p>
                                <span className="font-semibold">Categories:</span> {getCategoryName(ProductsDatas?.category)}, {getSubCategoryName(ProductsDatas?.sub_cat)}
                            </p>
                            <p className="mt-1">
                                <span className="font-semibold">Brands:</span> {getBrandName(ProductsDatas?.brand)}
                            </p>
                        </div>

                        {/* Share buttons */}
                        <div className="flex items-center mt-4">
                            <span className="mr-2">Share:</span>
                            <div className="flex space-x-3">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    <FacebookIcon />
                                </a>
                                <a
                                    href={`https://api.whatsapp.com/send?text=Check%20this%20out!%20${encodeURIComponent(window.location.href)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-800"
                                >
                                    <WhatsAppIcon />
                                </a>
                            </div>
                        </div>



                        <a
                            href={`https://wa.me/919946555605?text=${encodeURIComponent(
                                `Hi, I would like to inquire about the product: ${ProductsDatas?.name}.\n\n Description: ${ProductsDatas?.description}\n\n Category: ${getCategoryName(ProductsDatas?.category)}\n\n Subcategory: ${getSubCategoryName(ProductsDatas?.sub_cat)}\n\n Brand: ${getBrandName(ProductsDatas?.brand)}\n\n You can view the product here: ${window.location.href}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 bg-green-700 text-white font-semibold px-6 py-3 rounded flex items-center  justify-center  text-center"
                        >
                            <span>Let&apos;s Talk — Send A Message</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="contact-area bg-cover py-32" id="contact" style={{ backgroundImage: `url(${contact})` }}>
                <div className="container mx-auto px-4 md:px-14">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <div className="contact-info-area">
                                <h3 className="text-4xl font-semibold">Contact Us</h3>
                                <p className="mt-4 text-gray-600">
                                    Feel free to reach out to us for any questions, product inquiries, or support. Our team is ready to assist you with all your hospital machinery needs. We&apos;re just one click or call away!                                </p>
                                <ul className="mt-12 space-y-8">
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
    );
};

export default ProductOverview;
