import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import ScrollToTop from './shared/ScrollToTop';

// Lazy load components
const Home = lazy(() => import('./Pages/Home'));
const OurProducts = lazy(() => import('./Pages/OurProducts'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const Products = lazy(() => import('./OurProducts/Products'));
const Services = lazy(() => import('./OurProducts/Services'));
const ProductOverview = lazy(() => import('./ProductDetails/ProductOverview'));
const ContactUs = lazy(() => import('./Pages/ContactUs'));
const Blog = lazy(() => import('./Pages/Blog'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Suspense fallback={<></>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/our_products' element={<OurProducts />} />
          <Route path='/product_details/:id' element={<ProductDetails />} />
          <Route path='/products/solutions' element={<Products />} />
          <Route path='/products/services' element={<Services />} />
          <Route path='/products/details/:id' element={<ProductOverview />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
