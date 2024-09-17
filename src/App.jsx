// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './shared/Navbar';
// import Footer from './shared/Footer';
// import Home from './Pages/home';
// import OurProducts from './Pages/OurProducts';
// import ProductDetails from './Pages/ProductDetails';
// import Products from './Our Products/Products';
// import Services from './Our Products/Services';
// import ProductOverview from './ProductDetails/ProductOverview';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/our_products' element={<OurProducts/>} />
//       <Route path='/product_details/:id' element={<ProductDetails/>} />
//       <Route path='/products/solutions' element={<Products/>} />
//       <Route path='/products/services' element={<Services/>} />
//       <Route path='/products/details/:id' element={<ProductOverview/>} />

//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

// Lazy load components
const Home = lazy(() => import('./Pages/home'));
const OurProducts = lazy(() => import('./Pages/OurProducts'));
const ProductDetails = lazy(() => import('./Pages/ProductDetails'));
const Products = lazy(() => import('./Our Products/Products'));
const Services = lazy(() => import('./Our Products/Services'));
const ProductOverview = lazy(() => import('./ProductDetails/ProductOverview'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/our_products' element={<OurProducts />} />
          <Route path='/product_details/:id' element={<ProductDetails />} />
          <Route path='/products/solutions' element={<Products />} />
          <Route path='/products/services' element={<Services />} />
          <Route path='/products/details/:id' element={<ProductOverview />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
