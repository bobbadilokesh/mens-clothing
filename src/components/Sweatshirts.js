import React, { useState, useContext } from 'react';
import { CartContext } from '../cartcontent/CartContent';
import sweatshirt1 from '../sweatshirt/sweatshirt1.jpg';
import sweatshirt2 from '../sweatshirt/sweatshirt2.jpg';
import sweatshirt3 from '../sweatshirt/sweatshirt3.jpg';
import sweatshirt4 from '../sweatshirt/sweatshirt4.jpg';
import sweatshirt5 from '../sweatshirt/sweatshirt5.jpg';
import sweatshirt6 from '../sweatshirt/sweatshirt6.jpg';
import sweatshirt7 from '../sweatshirt/sweatshirt7.jpg';
import sweatshirt8 from '../sweatshirt/sweatshirt8.jpg';
import sweatshirt9 from '../sweatshirt/sweatshirt9.jpg';
import sweatshirt10 from '../sweatshirt/sweatshirt10.jpg';
import sweatshirt11 from '../sweatshirt/sweatshirt11.jpg';
import sweatshirt12 from '../sweatshirt/sweatshirt12.jpg';
import sweatshirt13 from '../sweatshirt/sweatshirt13.jpg';
import sweatshirt14 from '../sweatshirt/sweatshirt14.jpg';
import sweatshirt15 from '../sweatshirt/sweatshirt15.jpg';

function Sweatshirts() {
  const { addToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const sweatshirts = [
    { id: 1, name: "Classic Crew Sweatshirt", price: 1299, image: sweatshirt1 },
    { id: 2, name: "Hooded Sweatshirt", price: 1399, image: sweatshirt2 },
    { id: 3, name: "Graphic Print Sweatshirt", price: 1499, image: sweatshirt3 },
    { id: 4, name: "Zipper Sweatshirt", price: 1599, image: sweatshirt4 },
    { id: 5, name: "Pullover Sweatshirt", price: 1299, image: sweatshirt5 },
    { id: 6, name: "Cotton Blend Sweatshirt", price: 1399, image: sweatshirt6 },
    { id: 7, name: "Fleece Sweatshirt", price: 1499, image: sweatshirt7 },
    { id: 8, name: "Oversized Sweatshirt", price: 1599, image: sweatshirt8 },
    { id: 9, name: "Minimal Logo Sweatshirt", price: 1299, image: sweatshirt9 },
    { id: 10, name: "Striped Sweatshirt", price: 1399, image: sweatshirt10 },
    { id: 11, name: "Half Zip Sweatshirt", price: 1499, image: sweatshirt11 },
    { id: 12, name: "Round Neck Sweatshirt", price: 1599, image: sweatshirt12 },
    { id: 13, name: "Solid Color Sweatshirt", price: 1399, image: sweatshirt13 },
    { id: 14, name: "Soft Touch Sweatshirt", price: 1499, image: sweatshirt14 },
    { id: 15, name: "Urban Fit Sweatshirt", price: 1599, image: sweatshirt15 },
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
      <h2 className="text-center mb-4 fw-bold">Men’s Sweatshirts Collection</h2>
      <div className="row justify-content-center">
        {sweatshirts.map((item) => (
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

export default Sweatshirts;
