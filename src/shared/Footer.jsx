import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import Logo from "../assets/Atqins.png";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useEffect, useState } from 'react';
import { IoLogoWhatsapp } from "react-icons/io";




const Footer = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start p-16">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <img src={Logo} alt="" className='h-[35px] w-[200px] object-contain' />
          <address className="not-italic mt-4">
            18/1580-L, First Floor, Kedhar Tower,<br />
            Puthiyapalam, Chalappuram PO,<br />
            Calicut - 673002.<br />
            Ph: 0495 4019680<br />
            Mob: 9847134222
          </address>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="hover:text-gray-400" aria-label="Instagram">
              <InstagramIcon style={{ width: '35px', height: '30px' }} />
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Facebook">
              <FacebookIcon style={{ width: '35px', height: '30px' }} />
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Twitter">
              <TwitterIcon style={{ width: '35px', height: '30px' }} />
            </a>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Ernakulam</h3>
          <address className="not-italic mt-4">
            43/892B(69/546B), First Floor,<br />
            KTRA-037, Kannachanthode Road, <br />
            Ayyapankavu, Ernakulam - 682018<br />
            Ph: 7025367574, <br />
            Mob: 8157877570
          </address>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Karnataka</h3>
          <address className="not-italic mt-4">
            HMS EDWARD REGENCY, 14,<br />
            Edward Rd, Vasanth Nagar,<br />
            Bengaluru, Karnataka - 560001<br />
            Ph: 96332 64222, <br />
            Mob: 9847134222
          </address>
        </div>


        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to='/' className="hover:text-gray-400">Home</Link></li>
            <li><Link to='/products/solutions' className="hover:text-gray-400">Solutions</Link></li>
            <li><Link to='/our_products' className="hover:text-gray-400">Our Products</Link></li>
            <li><Link to='/products/services' className="hover:text-gray-400">Services</Link></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Actions</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to='/blog' className="hover:text-gray-400">Blog</Link></li>
            <li><Link to='/contact-us' className="hover:text-gray-400">Contact Us</Link></li>
          </ul>
        </div>

      </div>
      <div className="container mx-auto mt-10 text-center border-t border-gray-700 pt-6">
        <a href="#" className="hover:text-gray-400 text-sm" >Terms & Conditions and Privacy Policy</a>
        <p className="text-sm mt-2">© Bloombiz Creatives. All Rights Reserved. 2024</p>
      </div>

      <div className={`w-full flex justify-end col-span-4 z-10 ${isSticky ? 'fixed bottom-36' : ''}`}>
        <a
          href="https://wa.me/918891136222"
          target="_blank"
          rel="noopener noreferrer"
          className='w-[64px] rounded-full bg-white h-16 cursor-pointer flex items-center justify-center hover:transform hover:scale-105 mr-6 animate-upndown'
        >
          <IoLogoWhatsapp className='text-green-500' style={{ fontSize: '50px' }} />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
