import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import Home from './Pages/home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
