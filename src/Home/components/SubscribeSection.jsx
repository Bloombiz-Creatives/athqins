import { useState } from 'react';
import foot from '../../assets/footer.jpg';
import { useDispatch } from 'react-redux';
import { addEnquiry } from '../../action/ecomAction';

const SubscribeSection = () => {
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

  return (
    <div
      className="relative sm:h-[580px] h-[680px] bg-cover bg-center"
      style={{ backgroundImage: `url(${foot})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute container mx-auto inset-0 flex items-center justify-start xl:px-18 md:px-14 px-6">
        <div className="text-left max-w-xl w-full">
          <h1 className="text-white text-3xl font-bold mb-4">
            Get the Best Hospital Machinery and Equipment
          </h1>
          <p className="text-gray-300 mb-8">
            Looking to equip your medical facility with top-quality machinery? Fill out the form
            below to get in touch with our experts and receive detailed information on our products
            and pricing.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
                className={`px-4 py-3 w-full text-gray-900 rounded-lg focus:outline-none ${errors.name ? 'border-2 border-red-500' : 'border'}`}
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
                className={`px-4 py-3 w-full text-gray-900 rounded-lg focus:outline-none ${errors.email ? 'border-2 border-red-500' : 'border'}`}
              />

              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number..."
                value={formData.phone}
                onChange={handleChange}
                className={`px-4 py-3 w-full text-gray-900 rounded-lg focus:outline-none ${errors.phone ? 'border-2 border-red-500' : 'border'}`}
              />

              <input
                type="text"
                name="companyname"
                placeholder="Enter your company name..."
                value={formData.companyname}
                onChange={handleChange}
                className={`px-4 py-3 w-full text-gray-900 rounded-lg focus:outline-none ${errors.companyname ? 'border-2 border-red-500' : 'border'}`}
              />

              {successMessage && (
                <p className="mt-4 text-green-500 font-bold">{successMessage}</p>
              )}


            </div>
            <button
              type="submit"
              className="mt-6 bg-white text-black px-4 py-2 font-bold hover:bg-gray-200"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;