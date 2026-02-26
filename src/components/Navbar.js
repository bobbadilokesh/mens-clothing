import React, { useState, useContext } from "react";
import {
  FaUserCircle,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../cartcontent/CartContent";
import AuthModal from "./AuthModal";

function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const { cartItems } = useContext(CartContext);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // 🔥 Correct Scroll with Navbar Offset
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const sectionPosition =
        section.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.reload(); // we will improve this later
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3 sticky-top shadow-sm">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          {/* Brand */}
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler d-lg-none me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <button
              onClick={() => handleScroll("home")}
              className="navbar-brand btn btn-link text-decoration-none m-0 p-0"
              style={{
                fontWeight: 700,
                fontSize: "1.8rem",
                color: "#FFD700",
              }}
            >
              Men’s Clothing
            </button>
          </div>

          {/* Menu */}
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-center"
            id="navbarMenu"
          >
            <ul className="navbar-nav d-flex flex-row gap-4">
              <li className="nav-item">
                <button
                  className="nav-link text-light bg-transparent border-0 fs-5"
                  onClick={() => handleScroll("home")}
                >
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link text-light bg-transparent border-0 fs-5"
                  onClick={() => handleScroll("categories")}
                >
                  Categories
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link text-light bg-transparent border-0 fs-5"
                  onClick={() => handleScroll("newarrivals")}
                >
                  New Arrivals
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link text-light bg-transparent border-0 fs-5"
                  onClick={() => handleScroll("services")}
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="d-flex align-items-center ms-auto">

            {/* Auth */}
            {currentUser ? (
              <>
                <span className="text-light fs-5 me-2">
                  Hi, {currentUser.username}
                </span>

                <button
                  onClick={handleLogout}
                  className="btn text-light border-0 bg-transparent me-3"
                  title="Logout"
                >
                  <FaSignOutAlt size={20} />
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="btn text-light border-0 bg-transparent me-3"
              >
                <FaUserCircle size={24} />
              </button>
            )}

            {/* Cart */}
            <div className="position-relative">
              <button
                onClick={() => navigate("/cart")}
                className="btn text-light border-0 bg-transparent"
              >
                <FaShoppingCart size={24} />
              </button>

              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{
                    fontSize: "0.7rem",
                    padding: "5px 7px",
                  }}
                >
                  {cartCount}
                </span>
              )}
            </div>

          </div>
        </div>
      </nav>

      {showLogin && (
        <AuthModal closeModal={() => setShowLogin(false)} />
      )}
    </>
  );
}

export default Navbar;