import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-dark text-light text-center text-lg-start mt-5">
                <div className="container p-4">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold">Men’s Wear</h5>
                            <p>
                                Your one-stop destination for stylish and affordable men's fashion.
                                From casuals to formals, we bring you the latest trends that define your look.
                            </p>
                        </div>


                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold">Shop Categories</h5>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#shirts" className="text-light text-decoration-none">Shirts</a></li>
                                <li><a href="#tshirts" className="text-light text-decoration-none">T-Shirts</a></li>
                                <li><a href="#jeans" className="text-light text-decoration-none">Jeans & Trousers</a></li>
                                <li><a href="#jackets" className="text-light text-decoration-none">Jackets</a></li>
                                <li><a href="#accessories" className="text-light text-decoration-none">Accessories</a></li>
                            </ul>
                        </div>


                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold">Follow Us</h5>
                            <p>Stay connected for the latest drops & offers</p>
                            <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-light me-3"><i className="bi bi-youtube"></i></a>
                        </div>


                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase fw-bold">Customer Support</h5>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#faq" className="text-light text-decoration-none">FAQs</a></li>
                                <li><a href="#shipping" className="text-light text-decoration-none">Shipping Info</a></li>
                                <li><a href="#returns" className="text-light text-decoration-none">Return Policy</a></li>
                                <li><a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a></li>
                                <li><a href="#contact" className="text-light text-decoration-none">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3 bg-secondary">
                    © 2025 MensWear | Designed for Modern Men
                </div>
            </footer>

        </div>
    )
}

export default Footer
