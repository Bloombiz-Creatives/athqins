import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import FeaturedProperties from '../components/FeaturedProperties'
import BestSellers from '../components/BestSellers'
import PageContent from '../components/PageContent'
import Testimonials from '../components/Testimonials'
import Cards from '../components/Cards'
import OurStrenth from '../components/OurStrenth'
import Blogs from '../components/Blogs'
import SubscribeSection from '../components/SubscribeSection'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const HomeContents = () => {

  const [newProduct, setNewProduct] = useState(null);

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io('https://api.athqinshealthcare.com');

    // Listen for the 'newProduct' event from the server
    socket.on('newProduct', (data) => {
      console.log('New product received:', data);
      setNewProduct(data);

      // Automatically hide the popup after 9 seconds
      setTimeout(() => {
        setNewProduct(null);
      }, 9000);
    });

    // Cleanup the connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <FeaturedProperties />
      <BestSellers />
      <PageContent />
      <Testimonials />
      <Cards />
      <OurStrenth />
      <Blogs />
      <SubscribeSection />


      {newProduct && (
        <div className="fixed bottom-5 right-5 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-xs flex flex-col">
          {/* Close Button on top-right */}
          <button
            onClick={() => setNewProduct(null)}
            className="ml-auto mb-2 text-gray-500 hover:text-gray-700"
            style={{ position: 'absolute', top: '10px', right: '10px' }}
          >
            ✖
          </button>

          <div className="flex items-start p-4">
            {/* Product Image */}
            <img
              src={newProduct.image || 'default-product-image.png'}
              alt="Product"
              className="w-20 h-20 rounded-lg object-cover mr-4 shadow-sm"
            />

            {/* Product Info */}
            <div className="text-left flex flex-col justify-between">
              <p className="text-lg font-bold text-gray-800 mb-1">
                New Product Added! 🎉
              </p>
              <p className="text-base font-semibold text-blue-600 mb-1">
                {newProduct.name}
              </p>
              <p className="text-sm text-gray-600">
                {newProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default HomeContents
