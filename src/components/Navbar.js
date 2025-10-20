import React from 'react';
import logo from '../images/logo.jpg';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    {/* Left - Logo */}
                    <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            alt="L2 Mens Clothing"
                            style={{ width: "120px", height: "auto" }}
                        />
                    </a>

                    {/* Center - Home / About */}
                    <div className="mx-auto">
                        <ul className="navbar-nav d-flex flex-row gap-4">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    New Arrivals
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Shirts
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    T-Shirts
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Bottoms
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right - Login / Signup */}
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary">Login</button>
                        <button className="btn btn-primary">Signup</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
