import  { useState } from 'react';
import foot from '../../assets/footer.jpg';

const SubscribeSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enquiryData = new FormData();
    enquiryData.append('name', formData.name);
    enquiryData.append('email', formData.email);
    enquiryData.append('phone', formData.phone);
    enquiryData.append('companyName', formData.companyName);

    // Send enquiryData using fetch or any API handling method
    // Example:
    // fetch('/api/submitEnquiry', {
    //   method: 'POST',
    //   body: enquiryData,
    // }).then(response => {
    //   if (response.ok) {
    //     console.log('Enquiry submitted successfully!');
    //   } else {
    //     console.log('Failed to submit enquiry.');
    //   }
    // });

    console.log('Enquiry data:', Object.fromEntries(enquiryData.entries()));
  };

  return (
    <div
      className="relative sm:h-[580px] h-[680px] bg-cover bg-center "
      style={{ backgroundImage: `url(${foot})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="absolute container mx-auto inset-0   flex items-center justify-start xl:px-18 md:px-14 px-6 ">
        <div className="text-left max-w-xl w-full">
          <h1 className="text-white text-3xl font-bold mb-4">Get the Best Hospital Machinery and Equipment</h1>
          <p className="text-gray-300 mb-8">Looking to equip your medical facility with top-quality machinery? Fill out the form below to get in touch with our experts and receive detailed information on our products and pricing.</p>
          <form onSubmit={handleSubmit} className=''>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 w-full text-gray-900 rounded-lg focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 w-full text-gray-900 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number..."
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-3 w-full text-gray-900 rounded-lg focus:outline-none"
              />
              <input
                type="text"
                name="companyName"
                placeholder="Enter your company name..."
                value={formData.companyName}
                onChange={handleChange}
                className="px-4 py-3 w-full text-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 bg-white text-black px-6 py-3 font-bold hover:bg-gray-200"
            >
              SEND ENQUIRY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
