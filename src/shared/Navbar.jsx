import './navbar.css';
import { useState, useEffect, useRef } from 'react';
import Logo from "../assets/favicons.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);


  const solutionsRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isNavOpen]);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setIsSolutionsDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 flex  justify-center items-center ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="container flex justify-between items-center md:p-6 px-4 md:px-16">
        <div className="text-white font-bold text-xl">
          <img src={Logo} alt="Logo" className="h-8" />
        </div>

        <div className="flex items-center  md:hidden">
          <button
            onClick={() => setIsNavOpen(prev => !prev)}
            className="text-white focus:outline-none"
          >
            {isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 flex flex-col items-center bg-gray-800 text-white text-lg transition-all duration-300 ${isNavOpen ? 'block' : 'hidden'}`}>
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="w-8 h-8 text-white hover:text-#1b1bd6 transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="text-center text-[17px] space-y-2 flex flex-col mt-5">
            <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
              <a href="#home">HOME</a>
            </li>
            <li className="w-full">
              <div
                className="flex justify-between items-center cursor-pointer hover:text-#1b1bd6 transition-colors duration-300"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <a href="#solutions" className="flex-grow">SOLUTIONS</a>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </div>

              {isSolutionsOpen && (
                <ul className="mt-2 space-y-2 pl-6 flex flex-col justify-center items-center">
                  <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300 hover:">
                    <a href="#solution1">ICU</a>
                  </li>
                  <li className="underline-animation hover:text-#1b1bd66 transition-colors duration-300">
                    <a href="#solution2">NICU</a>
                  </li>
                  <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
                    <a href="#solution3">OPERATION THEATRE</a>
                  </li>
                  <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300 hover:">
                    <a href="#solution1">CARDIOLOGY</a>
                  </li>
                  <li className="underline-animation hover:text-#1b1bd66 transition-colors duration-300">
                    <a href="#solution2">REFURBISHED</a>
                  </li>
                  <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
                    <a href="#solution3">ACCESSORIES & CONSUMABLES</a>
                  </li>
                  <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
                    <a href="#solution3">ULTRA SOUND</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
              <a href="#products">OUR PRODUCTS</a>
            </li>
            <li className="w-full">
              <div
                className="flex justify-between items-center cursor-pointer hover:text-#1b1bd6 transition-colors duration-300"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <a href="#services" className="flex-grow">SERVICES</a>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </div>

              {isServicesOpen && (
                <ul className="mt-2 space-y-2 pl-6 flex flex-col justify-center items-center">
                  <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
                  <a href="#service1">SONOSCAPE</a>
                  </li>
                  <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
                    <a href="#service2">EDAN</a>
                  </li>
                  <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
                    <a href="#service3">AEONMED</a>
                  </li>
                  <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
                    <a href="#service3">MAGNAMED</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
              <a href="#blog">BLOG</a>
            </li>
            <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center text-white space-y-6 text-lg transition-all duration-300 transform md:relative md:flex-row md:space-y-0 md:text-[10px] md:gap-3 lg:text-[16px]">
          <li className="underline-animation"><a href="#home" >HOME</a></li>
          <li
            className="relative underline-animation"
            onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
            onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
            ref={solutionsRef}
          >
            <a href="#solutions" >SOLUTIONS</a>
            {isSolutionsDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#icu">ICU</a></li>
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#nicu">NICU</a></li>
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#operation-theatre">OPERATION THEATRE</a></li>
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#cardiology">CARDIOLOGY</a></li>
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#refurbished">REFURBISHED</a></li>
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#accessories">ACCESSORIES & CONSUMABLES</a></li>
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#ultrasound">ULTRA SOUND</a></li>
              </ul>
            )}
          </li>

          <li className="underline-animation"><a href="#products" >OUR PRODUCTS</a></li>

          <li
            className="relative underline-animation"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
            ref={servicesRef}
          >
            <a href="#services" >SERVICES</a>
            {isServicesDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#consulting">SONOSCAPE</a></li>
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#support">EDAN</a></li>
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#training">AEONMED</a></li>
                <li className="py-2 px-4 hover:bg-gray-700"><a href="#implementation">SKYLA</a></li>
              </ul>
            )}
          </li>
          <li className="underline-animation"><a href="#blog" >BLOG</a></li>
          <li className="underline-animation"><a href="#contact" >CONTACT US</a></li>
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
