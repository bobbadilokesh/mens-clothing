import React, { useState, useContext } from "react";
import { CartContext } from "../cartcontent/CartContent";


import shirts1 from "../shirts/shirts1.jpg";
import shirts2 from "../shirts/shirts2.jpg";
import tshirt1 from "../tshirts/tshirt1.jpg";
import tshirt2 from "../tshirts/tshirt2.jpg";
import jackets1 from "../jackets/jackets1.jpg";
import jackets2 from "../jackets/jackets2.jpg";
import sweatshirt1 from "../sweatshirt/sweatshirt1.jpg";
import sweatshirt2 from "../sweatshirt/sweatshirt2.jpg";
import trouser1 from "../trousers/trousers1.jpg";
import trouser2 from "../trousers/trousers2.jpg";

function Allproducts() {
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const products = [
    { id: 1, name: "Slim Fit Shirt", price: 799, image: shirts1 },
    { id: 2, name: "Casual Cotton Shirt", price: 899, image: shirts2 },
    { id: 3, name: "Round Neck T-shirt", price: 499, image: tshirt1 },
    { id: 4, name: "Graphic T-shirt", price: 599, image: tshirt2 },
    { id: 5, name: "Leather Jacket", price: 2499, image: jackets1 },
    { id: 6, name: "Denim Jacket", price: 1999, image: jackets2 },
    { id: 7, name: "Crew Neck Sweatshirt", price: 1199, image: sweatshirt1 },
    { id: 8, name: "Zipper Sweatshirt", price: 1499, image: sweatshirt2 },
    { id: 9, name: "Slim Fit Trouser", price: 999, image: trouser1 },
    { id: 10, name: "Casual Trouser", price: 1099, image: trouser2 },
  ];

  const handleView = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setSelectedSize("");
  };

  const handleBack = () => setSelectedProduct(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    addToCart({
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.image,
      size: selectedSize,
      quantity,
    });

    alert(`Added ${quantity} × ${selectedProduct.name} (${selectedSize}) to cart!`);
  };

 
  if (selectedProduct) {
    return (
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <h2>{selectedProduct.name}</h2>
            <p className="fs-5 text-muted mb-3">₹{selectedProduct.price}</p>

    
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
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={`btn me-2 ${
                    selectedSize === size ? "btn-dark" : "btn-outline-dark"
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
      <h2 className="text-center mb-4 fw-bold">All Products</h2>
      <div className="row justify-content-center">
        {products.map((item) => (
          <div
            className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
            key={item.id}
          >
            <div
              className="card text-center shadow-sm border-0 h-100"
              onClick={() => handleView(item)}
              style={{
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ height: "250px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
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

export default Allproducts;
