import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { category } = useParams();

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
        {category} Collection
      </h2>
      {/* Add your product details content here */}
      <div className="row">
        <div className="col-12">
          <p className="text-center">Products for {category} category will be displayed here</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;