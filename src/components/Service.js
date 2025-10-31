import React from 'react';

function Service() {
  return (
    <div className="container my-5" id='Services'>
      <h2 className="text-center mb-4 fw-bold">Our Services</h2>
      <div className="row">
        {[
          {
            title: "Trendy Men's Fashion",
            text: "Explore the latest men's styles and outfits handpicked to suit every occasion.",
          },
          {
            title: "Fast & Free Delivery",
            text: "Get your orders delivered quickly and safely right to your doorstep.",
          },
          {
            title: "24/7 Customer Support",
            text: "Our team is always ready to assist you with any questions or concerns.",
          },
        ].map((service, index) => (
          <div className="col-md-4" key={index}>
            <div
              className="card shadow-sm mb-4 border-0 text-center p-3"
              style={{
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text">{service.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
