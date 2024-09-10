import './navbar.css';
import { useState, useEffect, useRef } from 'react';
import Logo from "../assets/Atqins.png";
import { Link, useNavigate } from 'react-router-dom';
import { fetchBrand, fetchCategory } from '../action/ecomAction';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);


  const solutionsRef = useRef(null);
  const servicesRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrand());
    dispatch(fetchCategory());
  }, [dispatch]);

  const { brand, category } = useSelector((state) => state.ecomState);
  const Brands = brand?.brand || [];
  const Category = category?.category || [];

  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate('/products/solutions', { state: { selectedCategory: categoryId } });
    setIsNavOpen(false);
    setIsSolutionsDropdownOpen(false);
  };

 const handleBrandClick = (brandId) => {
    navigate('/products/services', {state : {selectedBrand: brandId}})
    setIsNavOpen(false);
    setIsSolutionsDropdownOpen(false);
  }


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
      <div className="container flex justify-between items-center md:p-6 px-4 md:px-16 py-2">
        <div className="text-white font-bold text-xl">
         <Link to='/'><img src={Logo} alt="Logo" className="lg:h-8 h-6" /></Link>
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
          <div className=' overflow-y-auto'>
          <ul className="text-center text-[17px] space-y-6 flex flex-col mt-5">
            <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
              <Link to='/'>HOME</Link>
            </li>
            <li className="w-full">
              <div
                className="flex justify-between items-center cursor-pointer hover:text-#1b1bd6 transition-colors duration-300"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                <Link className="flex-grow">SOLUTIONS</Link>
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
                <ul className="mt-2 space-y-2 pl-6 flex flex-col justify-center items-center cursor-pointer">
              {Category.map((cat) => (
                  <li key={cat._id} className="py-2 px-4 hover:bg-gray-700 cursor-pointer" onClick={() => handleCategoryClick(cat._id)}>
                  {cat.name}
                </li>

                ))}
                 </ul>
              )}
            </li>

            <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
              <Link to="/our_products">OUR PRODUCTS</Link>
            </li>
            <li className="w-full">
              <div
                className="flex justify-between items-center cursor-pointer hover:text-#1b1bd6 transition-colors duration-300"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <Link className="flex-grow">SERVICES</Link>
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
                 
                     {Brands.map((brand) => (
                  // <li key={brand?._id} className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
                  //   <Link to={`/services/${brand?._id}`}>{brand?.name}</Link>
                  // </li>

                  <li key={brand?._id} className="py-2 px-4 hover:bg-gray-700" onClick={() => handleBrandClick(brand?._id)}>
                  {brand?.name}
                </li>
                ))}
                </ul>
              )}
            </li>

            <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
              <Link>BLOG</Link>
            </li>
            <li className="underline-animation hover:text-#1b1bd6 transition-colors duration-300">
              <Link>CONTACT US</Link>
            </li>
          </ul>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center text-white space-y-6 text-lg transition-all duration-300 transform md:relative md:flex-row md:space-y-0 md:text-[12px] md:gap-4 lg:gap-8 lg:text-[16px]">
          <li className="underline-animation"><Link to="/" >HOME</Link></li>
         
          <li
            className="relative underline-animation"
            onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
            onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
            ref={solutionsRef}
          >
            <Link>SOLUTIONS</Link>
            {isSolutionsDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
                {Category.map((cat) => (
                  <li key={cat._id} className="py-2 px-4 hover:bg-gray-700" onClick={() => handleCategoryClick(cat?._id)}>
                    {cat?.name}
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="underline-animation"><Link to='/our_products'>OUR PRODUCTS</Link></li>

          <li
            className="relative underline-animation"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
            ref={servicesRef}
          >
            <Link>SERVICES</Link>
            {isServicesDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg">
                {Brands.map((brand) => (
                  // <li key={brand?._id} className="py-2 px-4 hover:bg-gray-700">
                  //   <Link to={`/services/${brand?._id}`}>{brand?.name}</Link>
                  // </li>

                  <li key={brand?._id} className="py-2 px-4 hover:bg-gray-700" onClick={() => handleBrandClick(brand?._id)}>
                  {brand?.name}
                </li>
                ))}
              </ul>
            )}
          </li>
          <li className="underline-animation"><Link >BLOG</Link></li>
          <li className="underline-animation"><Link >CONTACT US</Link></li>
        </ul>       
      </div>
    </nav>
  );
};

export default Navbar;

