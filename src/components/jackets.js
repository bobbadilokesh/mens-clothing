import React, { useState, useContext } from 'react';
import { CartContext } from '../cartcontent/CartContent';
import jackets1 from '../jackets/jackets1.jpg';
import jackets2 from '../jackets/jackets2.jpg';
import jackets3 from '../jackets/jackets3.jpg';
import jackets4 from '../jackets/jackets4.jpg';
import jackets5 from '../jackets/jackets5.jpg';
import jackets6 from '../jackets/jackets6.jpg';
import jackets7 from '../jackets/jackets7.jpg';
import jackets8 from '../jackets/jackets8.jpg';
import jackets9 from '../jackets/jackets9.jpg';
import jackets10 from '../jackets/jackets10.jpg';
import jackets11 from '../jackets/jackets11.jpg';
import jackets12 from '../jackets/jackets12.jpg';

function Jackets() {
  const { addToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const jackets = [
    { id: 1, name: "Denim Jacket", price: 1799, image: jackets1 },
    { id: 2, name: "Leather Jacket", price: 2499, image: jackets2 },
    { id: 3, name: "Bomber Jacket", price: 1999, image: jackets3 },
    { id: 4, name: "Puffer Jacket", price: 2299, image: jackets4 },
    { id: 5, name: "Windbreaker", price: 1699, image: jackets5 },
    { id: 6, name: "Blazer Jacket", price: 2599, image: jackets6 },
    { id: 7, name: "Hooded Jacket", price: 1899, image: jackets7 },
    { id: 8, name: "Varsity Jacket", price: 1999, image: jackets8 },
    { id: 9, name: "Winter Coat", price: 2799, image: jackets9 },
    { id: 10, name: "Trench Coat", price: 2999, image: jackets10 },
    { id: 11, name: "Suede Jacket", price: 2199, image: jackets11 },
    { id: 12, name: "Quilted Jacket", price: 2099, image: jackets12 },
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

            {/* Quantity Section */}
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
              {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
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
      <h2 className="text-center mb-4 fw-bold">Men’s Jackets Collection</h2>
      <div className="row justify-content-center">
        {jackets.map((item) => (
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

export default Jackets;
