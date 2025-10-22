import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';  
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Category from './components/Category';
import Footer from './components/Footer';
import Newarrivals from './components/Newarrivals';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Category />
              <Newarrivals />
            </>
          } />
          <Route path="/category/:category" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
