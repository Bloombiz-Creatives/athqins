import React from 'react';
import foot from '../../assets/footer.jpg';

const SubscribeSection = () => {
  return (
    <div
      className="relative h-[420px] bg-cover bg-center "
      style={{ backgroundImage: `url(${foot})` }}  // Fix: Correctly set background image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start px-10">
        <div className="text-left max-w-lg">
          <h1 className="text-white text-4xl font-bold mb-4">Stay Up to Date</h1>
          <p className="text-gray-300 mb-8">Subscribe to our newsletter to receive our weekly feed</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-3 w-full max-w-md text-gray-900 rounded-l-lg focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-3 font-bold hover:bg-gray-200">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
