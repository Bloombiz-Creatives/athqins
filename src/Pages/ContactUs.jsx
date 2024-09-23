import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addEnquiry } from '../action/ecomAction';
import HouseIcon from '@mui/icons-material/House';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import contact from '../assets/contact.jpg';
import contactnew from '../assets/contact-us-banner.png'

const ContactUs = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companyname: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');


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
        clearForm();

        try {
            const response = await dispatch(addEnquiry(dataToSubmit));
            if (response.status === 200) {
                setSuccessMessage('Your enquiry has been successfully submitted.');
            }
        } catch (error) {
            console.error('Error submitting enquiry:', error);
        }
    };

    return (
        <div>
            <div className=" bg-cover bg-center relative z-1 text-center py-[90px] md:py-[60px] lg:py-[200px] "
                style={{ backgroundImage: `url(${contactnew})` }}

            >
                <div className="container mx-auto">
                    <h2 className="text-white text-[38px] md:text-[32px] mb-[15px] md:mb-[12px] uppercase font-bold">
                        Contact Us
                    </h2>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(6,23,56,0.6)] to-[rgba(17,151,68,0.6)] z-[-1]" />
            </div>


            <div className="contact-area bg-cover py-20" id="contact" style={{ backgroundImage: `url(${contact})` }}>
                <div className="container mx-auto px-4 md:px-14">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <div className="contact-info-area">
                                <p className="mt-4 text-gray-600">
                                    Feel free to reach out to us for any questions, product inquiries, or support. Our team is ready to assist you with all your hospital machinery needs. We're just one click or call away!                                </p>
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

            {/* map */}
            <div className="w-full lg:full mt-10 lg:mt-0 px-4 md:px-14 ">
            <div className="contact-map bg-white p-6 rounded-lg shadow-md ">
              <iframe
                // src="https://www.google.com/maps/embed?pb=!4m6!3m5!1s0x3ba6596a0aa0a169:0x8b5361640f171c3f!8m2!3d11.2480218!4d75.7930158!16s%2Fg%2F11c1qhhpzq?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.3406974350205!2d90.48469931445422!3d23.663771197998262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0d5983f048d%3A0x754f30c82bcad3cd!2sJalkuri%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1605354966349!5m2!1sen!2sbd"
                aria-hidden="false"
                tabIndex="0"
                className="w-full h-96 border-none rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
    )
}

export default ContactUs
