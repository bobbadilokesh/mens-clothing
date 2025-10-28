import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import newarrival5 from "../newarrival/newarrival5.webp";
import newarrival6 from "../newarrival/newarrival6.jpg";
import newarrival7 from "../newarrival/newarrival7.jpg";
import newarrival8 from "../newarrival/newarrival8.jpg";

function Newarrivals() {
  const navigate = useNavigate();

  const [arrivals] = useState([
    { id: 1, name: "Printed Casual Shirt", price: 799, image: newarrival5 },
    { id: 2, name: "Denim Full Sleeve", price: 999, image: newarrival6 },
    { id: 3, name: "Cotton Checked Shirt", price: 699, image: newarrival7 },
    { id: 4, name: "Formal Light Blue Shirt", price: 899, image: newarrival8 },
  ]);

  const [hoveredCard, setHoveredCard] = useState(null);

  const cardImageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  };

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
        New Arrivals
      </h2>

      <div className="row">
        {arrivals.map((item) => (
          <div
            key={item.id}
            className="col-lg-3 col-md-6 col-sm-6 mb-4"
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div
              className="card shadow-sm text-center p-3 border-0"
              style={{
                transition: "all 0.3s ease",
                transform:
                  hoveredCard === item.id ? "translateY(-5px)" : "translateY(0)",
                boxShadow:
                  hoveredCard === item.id
                    ? "0 6px 20px rgba(0, 0, 0, 0.2)"
                    : "0 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={item.image}
                className="card-img-top rounded"
                alt={item.name}
                style={{
                  ...cardImageStyle,
                  transform:
                    hoveredCard === item.id ? "scale(1.07)" : "scale(1)",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text fw-bold text-secondary">
                  ₹{item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 p-2">
        <button
          className="btn btn-danger px-4 py-2 fw-semibold"
          onClick={() => navigate("/allproducts")}
        >
          View All Products
        </button>
      </div>
    </div>
  );
}

export default Newarrivals;
