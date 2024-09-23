import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start p-16">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Athqins.</h2>
          <address className="not-italic mt-4">
            90 Fifth Avenue, 3rd Floor <br />
            San Francisco, CA 1980 <br />
            (123) 456-7890
          </address>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="hover:text-gray-400" aria-label="Instagram">
              <InstagramIcon style={{width:'35px', height:'30px'}}/>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Facebook">
                <FacebookIcon style={{width:'35px', height:'30px'}}/>
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="Twitter">
                <TwitterIcon style={{width:'35px', height:'30px'}}/>
            </a>
          </div>
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
        <div>
          <h3 className="text-xl font-bold">Explore</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to='/our_products' className="hover:text-gray-400">ICU Solutions</Link></li>
            <li><Link to='/our_products' className="hover:text-gray-400">Operating Room Solutions</Link></li>
            <li><Link to='/our_products' className="hover:text-gray-400">Cardiology Solutions</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-10 text-center border-t border-gray-700 pt-6">
        <a href="#" className="hover:text-gray-400 text-sm" >Terms & Conditions and Privacy Policy</a>
        <p className="text-sm mt-2">© Bloombiz Creatives. All Rights Reserved. 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
