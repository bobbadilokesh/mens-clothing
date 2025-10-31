import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './cartcontent/CartContent';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import Shirts from './components/Shirts';
import Newarrivals from './components/Newarrivals';
import Footer from './components/Footer';
import Tshirts from './components/Tshirts';
import Bottoms from './components/Bottoms';
import Cart from './components/Cart';
import Jackets from './components/jackets';
import Sweatshirts from './components/Sweatshirts';
import Trouser from './components/Trouser';
import AllProducts from './components/AllProducts';
import Service from './components/Service';
import Faq from './components/Faq';
import Shipping from './components/Shipping'; 
import ReturnPolicy from './components/ReturnPolicy';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Category />
                  <Newarrivals />
                  <Service />
                </>
              }
            />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/tshirts" element={<Tshirts />} />
            <Route path="/bottoms" element={<Bottoms />} />
            <Route path="/jackets" element={<Jackets />} />
            <Route path="/sweatshirts" element={<Sweatshirts />} />
            <Route path="/trousers" element={<Trouser />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<ReturnPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
