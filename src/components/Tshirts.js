import React, { useState, useContext } from 'react';
import { CartContext } from '../cartcontent/CartContent';
import tshirt1 from '../tshirts/tshirt1.jpg';
import tshirt2 from '../tshirts/tshirt2.jpg';
import tshirt3 from '../tshirts/tshirt3.jpg';
import tshirt4 from '../tshirts/tshirt4.jpg';
import tshirt5 from '../tshirts/tshirt5.jpg';
import tshirt6 from '../tshirts/tshirt6.jpg';
import tshirt8 from '../tshirts/tshirt8.jpg';
import tshirt9 from '../tshirts/tshirt9.jpg';
import tshirt12 from '../tshirts/tshirt12.jpg';
import tshirt13 from '../tshirts/tshirt13.jpg';
import tshirt14 from '../tshirts/tshirt14.jpg';
import tshirt15 from '../tshirts/tshirt15.jpg';

function Tshirts() {
  const { addToCart } = useContext(CartContext);
  const [selectedTshirt, setSelectedTshirt] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const tshirts = [
    { id: 1, name: 'Classic Cotton T-shirt', price: 799, image: tshirt1 },
    { id: 2, name: 'Casual Blue T-shirt', price: 699, image: tshirt2 },
    { id: 3, name: 'Printed Summer Tee', price: 899, image: tshirt3 },
    { id: 4, name: 'White Crew Neck', price: 749, image: tshirt4 },
    { id: 5, name: 'Stylish Graphic Tee', price: 999, image: tshirt5 },
    { id: 6, name: 'Plain Black T-shirt', price: 849, image: tshirt6 },
    { id: 8, name: 'Striped Cotton Tee', price: 699, image: tshirt8 },
    { id: 9, name: 'Trendy White Print', price: 999, image: tshirt9 },
    { id: 12, name: 'Graphic Street Tee', price: 899, image: tshirt13 },
    { id: 13, name: 'Sporty Fit T-shirt', price: 1099, image: tshirt14 },
    { id: 14, name: 'Vintage Style Tee', price: 1199, image: tshirt15 },
    { id: 15, name: 'Comfort Fit T-shirt', price: 799, image: tshirt12 },
  ];

  const handleView = (tshirt) => {
    setSelectedTshirt(tshirt);
    setQuantity(1);
    setSelectedSize('');
  };

  const handleBack = () => setSelectedTshirt(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }

    addToCart({
      id: selectedTshirt.id,
      name: selectedTshirt.name,
      price: selectedTshirt.price,
      image: selectedTshirt.image,
      size: selectedSize,
      quantity,
    });

    alert(`Added ${quantity} × ${selectedTshirt.name} (${selectedSize}) to cart!`);
  };
if (selectedTshirt) {
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
        {/* Image Section */}
        <div className="col-md-5 text-center mb-4 d-flex justify-content-center">
          <img
            src={selectedTshirt.image}
            alt={selectedTshirt.name}
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

        {/* Details Section */}
        <div className="col-md-5">
          <h2>{selectedTshirt.name}</h2>
          <p className="fs-5 text-muted mb-3">₹{selectedTshirt.price}</p>

          {/* Quantity Control */}
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

          {/* Action Buttons */}
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
      <h2 className="text-center mb-4 fw-bold">Men’s T-Shirts Collection</h2>
      <div className="row justify-content-center">
        {tshirts.map((item) => (
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

export default Tshirts;
