import React from 'react';

function Service() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Our Services</h2>
      <div className="row">
       
        <div className="col-md-4">
          <div className="card shadow-sm mb-4 border-0">
            {/* <img
              src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba2"
              className="card-img-top"
              alt="Fashion Collection"
            /> */}
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Trendy Men's Fashion</h5>
              <p className="card-text">
                Explore the latest men's styles and outfits handpicked to suit every occasion.
              </p>
            </div>
          </div>
        </div>

       
        <div className="col-md-4">
          <div className="card shadow-sm mb-4 border-0">
            {/* <img
              src="https://images.unsplash.com/photo-1521335629791-ce4aec67dd47"
              className="card-img-top"
              alt="Delivery Service"
            /> */}
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Fast & Free Delivery</h5>
              <p className="card-text">
                Get your orders delivered quickly and safely right to your doorstep.
              </p>
            </div>
          </div>
        </div>

      
        <div className="col-md-4">
          <div className="card shadow-sm mb-4 border-0">
            {/* <img
              src="https://images.unsplash.com/photo-1592878904946-b3cd8b9a0a7e"
              className="card-img-top"
              alt="Customer Support"
            /> */}
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">24/7 Customer Support</h5>
              <p className="card-text">
                Our team is always ready to assist you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

