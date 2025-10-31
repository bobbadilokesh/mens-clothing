import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">

          {/* Brand Info */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Men’s Wear</h5>
            <p>
              Your one-stop destination for stylish and affordable men's fashion.
              From casuals to formals, we bring you the latest trends that define your look.
            </p>
          </div>

          {/* Shop Categories */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Shop Categories</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/shirts" className="text-light text-decoration-none">Shirts</Link></li>
              <li><Link to="/tshirts" className="text-light text-decoration-none">T-Shirts</Link></li>
              <li><Link to="/bottoms" className="text-light text-decoration-none">Bottoms</Link></li>
              <li><Link to="/jackets" className="text-light text-decoration-none">Jackets</Link></li>
              <li><Link to="/sweatshirts" className="text-light text-decoration-none">Sweatshirts</Link></li>
              <li><Link to="/trousers" className="text-light text-decoration-none">Trousers</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Follow Us</h5>
            <p>Stay connected for the latest drops & offers</p>
            <a  className="text-light me-3"><i className="bi bi-facebook"></i></a>
            <a  className="text-light me-3"><i className="bi bi-instagram"></i></a>
            <a  className="text-light me-3"><i className="bi bi-twitter"></i></a>
            <a  className="text-light me-3"><i className="bi bi-youtube"></i></a>
          </div>

          {/* Customer Support */}
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold">Customer Support</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/faq" className="text-light text-decoration-none">FAQs</Link></li>
              <li><Link to="/shipping" className="text-light text-decoration-none">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-light text-decoration-none">Return Policy</Link></li>
              <li><Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-secondary">
        © 2025 MensWear | Designed for Modern Men
      </div>
    </footer>
  );
}

export default Footer;
