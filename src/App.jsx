import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Home from './Pages/home';
import OurProducts from './Pages/OurProducts';
import ProductDetails from './Pages/ProductDetails';
import Products from './Our Products/Products';
import Services from './Our Products/Services';
import ProductOverview from './ProductDetails/ProductOverview';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/our_products' element={<OurProducts/>} />
      <Route path='/product_details/:id' element={<ProductDetails/>} />
      <Route path='/products/solutions' element={<Products/>} />
      <Route path='/products/services' element={<Services/>} />
      <Route path='/products/details/:id' element={<ProductOverview/>} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
