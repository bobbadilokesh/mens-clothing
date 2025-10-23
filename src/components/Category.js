import React, { useState } from 'react';
import shirt from '../images/shirt.jpg';
import tshirt from '../images/t-shirt.jpg';
import bottoms from '../images/bottoms.webp';
import jackets from '../images/jackets.webp';
import sweatshirt from '../images/sweatshirt.webp';
import trousers from '../images/trousers.webp';

function Category() {
  const [categories] = useState([
    { id: 1, image: shirt, title: "Shirts" },
    { id: 2, image: tshirt, title: "T-Shirts" },
    { id: 3, image: bottoms, title: "Bottoms" },
    { id: 4, image: jackets, title: "Jackets" },
    { id: 5, image: sweatshirt, title: "Sweatshirts" },
    { id: 6, image: trousers, title: "Trousers" },
  ]);

  return (
    <div className="container mt-5">
      <h2
        className="text-center mb-4"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          letterSpacing: "1px",
        }}
      >
        Categories
      </h2>
      <div className="row g-4 justify-content-start">
        {categories.map((item) => (
          <div
            key={item.id}
            className="col-6 col-md-4 col-lg-2"
          >
            <div
              className="card h-100 category-card"
              style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="card-img-top"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body p-2 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <h6 className="card-title">{item.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hover effect */}
      <style jsx>{`
        .category-card:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Category;
