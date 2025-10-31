import React from "react";

function ReturnPolicy() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Return & Exchange Policy</h2>

      <div className="card shadow-sm border-0 p-4">
        <h4 className="fw-bold mb-3 text-dark">🔁 Easy Returns, Hassle-Free</h4>
        <p className="text-secondary">
          We want you to love what you wear! If you are not completely satisfied
          with your purchase, you can easily return or exchange it within{" "}
          <strong>7 days</strong> of delivery.
        </p>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">📦 Return Eligibility</h4>
        <ul className="text-secondary">
          <li>✔ Items must be unused, unworn, and unwashed.</li>
          <li>✔ All original tags, labels, and packaging must be intact.</li>
          <li>✔ Returns are accepted only for items purchased directly from our store.</li>
          <li>❌ Items like innerwear, accessories, or sale products cannot be returned.</li>
        </ul>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">🔄 Exchange Policy</h4>
        <p className="text-secondary">
          You can exchange an item for a different size or color (if available).
          If the requested size or color is out of stock, we’ll issue a refund instead.
        </p>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">💰 Refund Process</h4>
        <p className="text-secondary">
          Refunds are processed within <strong>5–7 business days</strong> after the
          returned item passes quality checks.
          <br />
          Refunds will be credited to your original mode of payment.
        </p>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">🚚 How to Initiate a Return</h4>
        <ol className="text-secondary">
          <li>Go to the <strong>My Orders</strong> section on your account page.</li>
          <li>Click on the item you want to return.</li>
          <li>Select a reason and choose refund or exchange.</li>
          <li>Our delivery agent will pick up the product from your doorstep.</li>
        </ol>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">⚠ Important Notes</h4>
        <ul className="text-secondary">
          <li>Return requests must be raised within 7 days of delivery.</li>
          <li>Damaged or worn-out products will not be accepted for return.</li>
          <li>Refunds will exclude shipping or COD charges (if applicable).</li>
        </ul>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">📞 Need Assistance?</h4>
        <p className="text-secondary">
          For any return or exchange-related queries, contact our support team at{" "}
          <strong>support@menswearstore.in</strong> or call{" "}
          <strong>+91 98765 43210</strong>.
        </p>
      </div>
    </div>
  );
}

export default ReturnPolicy;
