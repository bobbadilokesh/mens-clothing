import React, { useState, useContext } from 'react';
import { CartContext } from '../cartcontent/CartContent';
import jean1 from '../bottoms/jean1.jpg';
import jean2 from '../bottoms/jean2.jpg';
import jean3 from '../bottoms/jean3.jpg';
import jean4 from '../bottoms/jean4.jpg';
import jean5 from '../bottoms/jean5.jpg';
import jean6 from '../bottoms/jean6.jpg';
import jean7 from '../bottoms/jean7.jpg';
import jean8 from '../bottoms/jean8.jpg';
import jean9 from '../bottoms/jean9.jpg';
import jean10 from '../bottoms/jean10.jpg';
import jean11 from '../bottoms/jean11.jpg';
import jean12 from '../bottoms/jean12.jpg';
import jean13 from '../bottoms/jean13.jpg';
import jean14 from '../bottoms/jean14.jpg';
import jean15 from '../bottoms/jean15.jpg';

function Bottoms() {
  const { addToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const bottoms = [
    { id: 1, name: "Slim Fit Jeans", price: 1299, image: jean1 },
    { id: 2, name: "Regular Fit Chinos", price: 1199, image: jean2 },
    { id: 3, name: "Cargo Pants", price: 1399, image: jean3 },
    { id: 4, name: "Denim Joggers", price: 1499, image: jean4 },
    { id: 5, name: "Tapered Fit Jeans", price: 1299, image: jean5 },
    { id: 6, name: "Stretchable Chinos", price: 1199, image: jean6 },
    { id: 7, name: "Ripped Jeans", price: 1399, image: jean7 },
    { id: 8, name: "Classic Fit Trousers", price: 1499, image: jean8 },
    { id: 9, name: "Slim Fit Cargo Pants", price: 1299, image: jean9 },
    { id: 10, name: "Denim Shorts", price: 1199, image: jean10 },
    { id: 11, name: "Chino Shorts", price: 1399, image: jean11 },
    { id: 12, name: "Jogger Pants", price: 1499, image: jean12 },
    { id: 13, name: "Relaxed Fit Jeans", price: 1299, image: jean13 },
    { id: 14, name: "Slim Fit Trousers", price: 1199, image: jean14 },
    { id: 15, name: "Denim Overalls", price: 1399, image: jean15 },
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
    <div
      className="container d-flex justify-content-center mt-5"
      style={{
        minHeight: '80vh',
      }}
    >
      <div
        className="row align-items-center justify-content-center"
        style={{
          maxWidth: '1100px',
          width: '100%',
          columnGap: '60px',
        }}
      >
     
        <div className="col-md-5 text-center mb-4 d-flex justify-content-center">
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="img-fluid rounded shadow"
            style={{
              width: '450px',
              maxWidth: '480px',
              height: '480px',
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </div>

       
        <div className="col-md-5">
          <h2>{selectedItem.name}</h2>
          <p className="fs-5 text-muted mb-3">₹{selectedItem.price}</p>

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

          <div className="mb-4">
            <p>Select Waist Size:</p>
            {['28', '30', '32', '34', '36'].map((size) => (
              <button
                key={size}
                className={`btn me-2 ${
                  selectedSize === size ? 'btn-dark' : 'btn-outline-dark'
                }`}
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
      <h2 className="text-center mb-4 fw-bold">Men’s Bottoms Collection</h2>
      <div className="row justify-content-center">
        {bottoms.map((item) => (
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
                {/* 🔥 Bigger View Button */}
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

export default Bottoms;
