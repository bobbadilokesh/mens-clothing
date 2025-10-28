import React, { useState, useContext } from 'react';
import { CartContext } from '../cartcontent/CartContent';
import trousers1 from '../trousers/trousers1.jpg';
import trousers2 from '../trousers/trousers2.jpg';
import trousers3 from '../trousers/trousers3.jpg';
import trousers4 from '../trousers/trousers4.jpg';
import trousers5 from '../trousers/trousers5.jpg';
import trousers6 from '../trousers/trousers6.jpg';
import trousers7 from '../trousers/trousers7.jpg';
import trousers8 from '../trousers/trousers8.jpg';
import trousers9 from '../trousers/trousers9.jpg';
import trousers10 from '../trousers/trousers10.jpg';
import trousers11 from '../trousers/trousers11.jpg';
import trousers12 from '../trousers/trousers12.jpg';

function Trouser() {
  const { addToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const trousers = [
    { id: 1, name: "Slim Fit Trousers", price: 1299, image: trousers1 },
    { id: 2, name: "Classic Fit Trousers", price: 1399, image: trousers2 },
    { id: 3, name: "Formal Black Trousers", price: 1499, image: trousers3 },
    { id: 4, name: "Regular Fit Trousers", price: 1599, image: trousers4 },
    { id: 5, name: "Casual Beige Trousers", price: 1399, image: trousers5 },
    { id: 6, name: "Navy Blue Trousers", price: 1499, image: trousers6 },
    { id: 7, name: "Tapered Fit Trousers", price: 1599, image: trousers7 },
    { id: 8, name: "Flat Front Trousers", price: 1299, image: trousers8 },
    { id: 9, name: "Cotton Formal Trousers", price: 1399, image: trousers9 },
    { id: 10, name: "Textured Fit Trousers", price: 1499, image: trousers10 },
    { id: 11, name: "Slim Stretch Trousers", price: 1599, image: trousers11 },
    { id: 12, name: "Comfort Fit Trousers", price: 1699, image: trousers12 },
  ];

  const handleView = (item) => {
    setSelectedItem(item);
    setQuantity(1);
    setSelectedSize('');
  };

  const handleBack = () => setSelectedItem(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    addToCart({
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      image: selectedItem.image,
      size: selectedSize,
      quantity,
    });

    alert(`Added ${quantity} × ${selectedItem.name} (${selectedSize}) to cart!`);
  };

  if (selectedItem) {
    return (
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2>{selectedItem.name}</h2>
            <p className="fs-5 text-muted mb-3">₹{selectedItem.price}</p>

            {/* Quantity Selection */}
            <div className="mb-3">
              <button
                className="btn btn-outline-dark me-2"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="fs-5 mx-2">{quantity}</span>
              <button
                className="btn btn-outline-dark"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <p>Select Size:</p>
              {['28', '30', '32', '34', '36'].map(size => (
                <button
                  key={size}
                  className={`btn me-2 ${selectedSize === size ? 'btn-dark' : 'btn-outline-dark'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <button className="btn btn-success me-3" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-secondary" onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">Men’s Trousers Collection</h2>
      <div className="row justify-content-center">
        {trousers.map((item) => (
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
            <div
              className="card text-center shadow-sm border-0 h-100"
              onClick={() => handleView(item)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h6>{item.name}</h6>
                  <p>₹{item.price}</p>
                </div>
                <button
                  className="btn btn-dark mt-2 py-2 px-4 fw-semibold"
                  style={{ fontSize: '16px', width: '100%' }}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trouser;
