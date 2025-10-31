import React from "react";

function Shipping() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Shipping Information</h2>

      <div className="card shadow-sm border-0 p-4">
        <h4 className="fw-bold mb-3 text-dark">📦 Delivery Options</h4>
        <p className="text-secondary">
          We offer **fast, reliable, and trackable delivery** across India.
          Our logistics partners ensure your orders reach you safely and on time.
        </p>

        <ul className="list-unstyled">
          <li className="mb-2">
            🚚 <strong>Standard Delivery:</strong> 3–6 business days (Free for orders above ₹999)
          </li>
          <li className="mb-2">
            ⚡ <strong>Express Delivery:</strong> 1–3 business days (₹149 extra)
          </li>
          <li className="mb-2">
            🌍 <strong>Remote Area Delivery:</strong> 5–9 business days
          </li>
        </ul>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">📍 Order Tracking</h4>
        <p className="text-secondary">
          Once your order is dispatched, you will receive a **tracking link via email and SMS**.
          You can use it to monitor your delivery status in real-time.
        </p>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">💰 Shipping Charges</h4>
        <ul className="list-unstyled">
          <li>✅ Free shipping on all orders above ₹999</li>
          <li>💵 ₹75 shipping fee for orders below ₹999</li>
          <li>🚀 ₹149 for Express Delivery (optional)</li>
        </ul>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">🌐 Delivery Coverage</h4>
        <p className="text-secondary">
          We currently deliver across **all major cities and towns in India**.
          Some remote areas may have limited delivery options, which will be notified during checkout.
        </p>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">📞 Need Help?</h4>
        <p className="text-secondary">
          If your order is delayed or you have delivery-related questions,
          please contact our **support team** at{" "}
          <strong>support@menswearstore.in</strong> or call us at{" "}
          <strong>+91 98765 43210</strong>.
        </p>
      </div>
    </div>
  );
}

export default Shipping;
