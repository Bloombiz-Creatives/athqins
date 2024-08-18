import React, { useState, useEffect } from 'react';
import Logo from "../assets/favicons.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="container  flex justify-between items-center  md:p-6 px-4 md:px-16">
        <div className="text-white font-bold text-xl">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className={`fixed inset-0 flex flex-col items-center justify-center  text-white space-y-6 text-lg transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:relative md:flex-row md:space-y-0 md:text-[12px] md:gap-3 lg:text-[16px]`}>
        <li><a href="#home" className="hover:text-gray-400">HOME</a></li>
          <li><a href="#shop" className="hover:text-gray-400">SHOP</a></li>
          <li><a href="#products" className="hover:text-gray-400">OUR PRODUCTS</a></li>
          <li><a href="#services" className="hover:text-gray-400">SERVICES</a></li>
          <li><a href="#blog" className="hover:text-gray-400">BLOG</a></li>
          <li><a href="#contact" className="hover:text-gray-400">CONTACT US</a></li>
        </ul>
        <div className="hidden md:flex text-white items-center space-x-2 border-b-2 border-white">
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent placeholder-gray-300 focus:outline-none"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.5 3a5.5 5.5 0 104.473 9.178l4.582 4.581a1 1 0 001.415-1.414l-4.582-4.581A5.5 5.5 0 008.5 3zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
