import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img
            src="your-image-path.jpg"
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Side: Content */}
        <div className="md:w-1/2 bg-white p-8 md:p-16">
          <h2 className="text-3xl font-bold text-black mb-4">Why Choose Us</h2>
          <p className="text-gray-500 mb-8">We offer perfect real estate services</p>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="mr-4">
                {/* Replace with your icon */}
                <img src="/icons/home.svg" alt="Find your future home" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">Find your future home</h3>
                <p className="text-gray-500">We help you find a new home by offering a smart real estate experience</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="mr-4">
                {/* Replace with your icon */}
                <img src="/icons/agent.svg" alt="Experienced agents" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">Experienced agents</h3>
                <p className="text-gray-500">Find an agent who knows your market best</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="mr-4">
                {/* Replace with your icon */}
                <img src="/icons/buy.svg" alt="Buy or rent homes" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">Buy or rent homes</h3>
                <p className="text-gray-500">Millions of houses and apartments in your favorite cities</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="mr-4">
                {/* Replace with your icon */}
                <img src="/icons/list.svg" alt="List your own property" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">List your own property</h3>
                <p className="text-gray-500">Sign up now and sell or rent your own properties</p>
              </div>
            </li>
          </ul>
          <div className="mt-8">
            <a href="#" className="text-black font-semibold hover:text-gray-700">
              LEARN MORE
            </a>
            <span className="block border-t-2 w-16 mt-2 border-black"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
