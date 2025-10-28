import React, { useContext } from "react";
import { CartContext } from "../cartcontent/CartContent";

function Cart() {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useContext(CartContext);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center fs-5">Your cart is empty!</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-4">
                <div className="card shadow-sm">
                  <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "250px", objectFit: "cover" }} />
                  <div className="card-body text-center">
                    <h6>{item.name}</h6>
                    <p>Size: {item.size}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>Price: ₹{item.price * item.quantity}</p>
                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id, item.size)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <h4>Total: ₹{totalPrice}</h4>
            <button className="btn btn-outline-danger mt-2" onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
