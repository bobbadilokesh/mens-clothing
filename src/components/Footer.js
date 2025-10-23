import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="bg-dark text-light text-center text-lg-start mt-5">
                <div class="container p-4">
                    <div class="row">

                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase fw-bold">Men’s Wear</h5>
                            <p>
                                Your one-stop destination for stylish and affordable men's fashion.
                                From casuals to formals, we bring you the latest trends that define your look.
                            </p>
                        </div>


                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase fw-bold">Shop Categories</h5>
                            <ul class="list-unstyled mb-0">
                                <li><a href="#shirts" class="text-light text-decoration-none">Shirts</a></li>
                                <li><a href="#tshirts" class="text-light text-decoration-none">T-Shirts</a></li>
                                <li><a href="#jeans" class="text-light text-decoration-none">Jeans & Trousers</a></li>
                                <li><a href="#jackets" class="text-light text-decoration-none">Jackets</a></li>
                                <li><a href="#accessories" class="text-light text-decoration-none">Accessories</a></li>
                            </ul>
                        </div>


                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase fw-bold">Follow Us</h5>
                            <p>Stay connected for the latest drops & offers</p>
                            <a href="#" class="text-light me-3"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="text-light me-3"><i class="bi bi-instagram"></i></a>
                            <a href="#" class="text-light me-3"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="text-light me-3"><i class="bi bi-youtube"></i></a>
                        </div>


                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase fw-bold">Customer Support</h5>
                            <ul class="list-unstyled mb-0">
                                <li><a href="#faq" class="text-light text-decoration-none">FAQs</a></li>
                                <li><a href="#shipping" class="text-light text-decoration-none">Shipping Info</a></li>
                                <li><a href="#returns" class="text-light text-decoration-none">Return Policy</a></li>
                                <li><a href="#privacy" class="text-light text-decoration-none">Privacy Policy</a></li>
                                <li><a href="#contact" class="text-light text-decoration-none">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="text-center p-3 bg-secondary">
                    © 2025 MensWear | Designed for Modern Men
                </div>
            </footer>

        </div>
    )
}

export default Footer
