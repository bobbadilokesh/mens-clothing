import React, { useState, useContext } from 'react';
import { CartContext } from '../cartcontent/CartContent'; // ✅ correct folder name
import shirt1 from '../shirts/shirts1.jpg';
import shirt2 from '../shirts/shirts2.jpg';
import shirt3 from '../shirts/shirts3.jpg';
import shirt4 from '../shirts/shirts4.jpg';
import shirt5 from '../shirts/shirts5.jpg';
import shirt6 from '../shirts/shirts6.jpg';
import shirt7 from '../shirts/shirts7.jpg';
import shirt8 from '../shirts/shirts8.jpg';
import shirt9 from '../shirts/shirts9.jpg';
import shirt10 from '../shirts/shirts10.jpg';
import shirt11 from '../shirts/shirts11.jpg';
import shirt12 from '../shirts/shirts12.jpg';
import shirt13 from '../shirts/shirts13.jpg';
import shirt14 from '../shirts/shirts14.jpg';

function Shirts() {
  const { addToCart } = useContext(CartContext);
  const [selectedShirt, setSelectedShirt] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const shirts = [
    { id: 1, name: "Classic Fit Shirt", price: 999, image: shirt1 },
    { id: 2, name: "Slim Fit Shirt", price: 1099, image: shirt2 },
    { id: 3, name: "Formal White Shirt", price: 1199, image: shirt3 },
    { id: 4, name: "Casual Checkered Shirt", price: 899, image: shirt4 },
    { id: 5, name: "Denim Shirt", price: 1299, image: shirt5 },
    { id: 6, name: "Linen Blend Shirt", price: 1399, image: shirt6 },
    { id: 7, name: "Oxford Shirt", price: 1499, image: shirt7 },
    { id: 8, name: "Flannel Shirt", price: 1199, image: shirt8 },
    { id: 9, name: "Hawaiian Shirt", price: 999, image: shirt9 },
    { id: 10, name: "Denim Chambray Shirt", price: 1299, image: shirt10 },
    { id: 11, name: "Poplin Shirt", price: 1099, image: shirt11 },
    { id: 12, name: "Twill Shirt", price: 1399, image: shirt12 },
    { id: 13, name: "Corduroy Shirt", price: 1499, image: shirt13 },
    { id: 14, name: "Performance Shirt", price: 1599, image: shirt14 },
  ];

  const handleView = (shirt) => {
    setSelectedShirt(shirt);
    setQuantity(1);
    setSelectedSize('');
  };

  const handleBack = () => setSelectedShirt(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    addToCart({
      id: selectedShirt.id,
      name: selectedShirt.name,
      price: selectedShirt.price,
      image: selectedShirt.image,
      size: selectedSize,
      quantity,
    });

    alert(`Added ${quantity} × ${selectedShirt.name} (${selectedSize}) to cart!`);
  };

  if (selectedShirt) {
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
            src={selectedShirt.image}
            alt={selectedShirt.name}
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
          <h2>{selectedShirt.name}</h2>
          <p className="fs-5 text-muted mb-3">₹{selectedShirt.price}</p>

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
            <p>Select Size:</p>
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
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
      <h2 className="text-center mb-4 fw-bold">Men’s Shirts Collection</h2>
      <div className="row justify-content-center">
        {shirts.map((item) => (
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
            <div
              className="card text-center shadow-sm border-0 h-100"
              onClick={() => handleView(item)}
              style={{
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.03)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
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
                  <h6 className="fw-semibold">{item.name}</h6>
                  <p className="text-muted">₹{item.price}</p>
                </div>
                <button className="btn btn-dark btn-sm mt-auto">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shirts;
