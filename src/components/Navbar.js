import React, { useState } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Login from "./Login"; 

function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
        
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler d-lg-none me-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMenu"
              aria-controls="navbarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <a
              className="navbar-brand m-0"
              href="#home"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#FFD700",
              }}
            >
              Men’s Clothing
            </a>
          </div>

       
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-center"
            id="navbarMenu"
          >
            <ul className="navbar-nav d-flex flex-row gap-4">
              <li className="nav-item">
                <a className="nav-link text-light" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#Categories">
                 Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#NewArrivals">
                 New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#Services">
                  Services
                </a>
              </li>
            </ul>
          </div>

        
          <div className="d-flex align-items-center ms-auto">
            <button
              onClick={() => setShowLogin(true)}
              className="btn text-light fs-4 border-0 bg-transparent me-3"
            >
              <FaUserCircle />
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="btn text-light fs-4 border-0 bg-transparent"
            >
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </nav>

   
      {showLogin && <Login closeModal={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
