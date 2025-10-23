import React from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Left: Hamburger (small screens) + Logo */}
        <div className="d-flex align-items-center">
          {/* Hamburger: only visible on small screens */}
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

          {/* Logo */}
          <a
            className="navbar-brand m-0"
            href="#"
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

        {/* Center: Menu links */}
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-center"
          id="navbarMenu"
        >
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="#">Services</a>
            </li>
          </ul>
        </div>

        {/* Right: User + Cart Icons */}
        <div className="d-flex align-items-center ms-auto">
          <a href="#" className="text-light fs-4 me-3">
            <FaUserCircle />
          </a>
          <a href="#" className="text-light fs-4">
            <FaShoppingCart />
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
