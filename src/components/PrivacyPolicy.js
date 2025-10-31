import React from "react";

function PrivacyPolicy() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Privacy Policy</h2>

      <div className="card shadow-sm border-0 p-4">
        <h4 className="fw-bold mb-3 text-dark">🔒 Your Privacy Matters</h4>
        <p className="text-secondary">
          At <strong>Men’s Wear</strong>, we value your privacy and are committed
          to protecting your personal information. This Privacy Policy explains
          how we collect, use, and safeguard your data when you visit or make a
          purchase from our website.
        </p>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">📋 Information We Collect</h4>
        <ul className="text-secondary">
          <li>Personal details such as name, email address, phone number, and shipping address.</li>
          <li>Payment details (processed securely through trusted payment gateways).</li>
          <li>Device and browsing information, including cookies and IP address.</li>
          <li>Feedback, reviews, or messages you send to our customer support team.</li>
        </ul>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">💡 How We Use Your Information</h4>
        <ul className="text-secondary">
          <li>To process and deliver your orders.</li>
          <li>To communicate updates, offers, and promotions (only with your consent).</li>
          <li>To improve our products, services, and website experience.</li>
          <li>To ensure secure transactions and prevent fraudulent activities.</li>
        </ul>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">🔐 Data Security</h4>
        <p className="text-secondary">
          We use industry-standard encryption and secure servers to protect your
          personal and payment data. Your payment details are never stored on our
          servers; they are processed directly by certified payment providers.
        </p>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">🍪 Cookies</h4>
        <p className="text-secondary">
          Our website uses cookies to enhance your browsing experience. You can
          choose to disable cookies in your browser settings, but some features
          of our site may not function properly without them.
        </p>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">👥 Third-Party Services</h4>
        <p className="text-secondary">
          We may share limited information with trusted third-party partners such
          as logistics and payment providers to fulfill your orders. We do not
          sell or rent your personal data to anyone.
        </p>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">📧 Your Rights</h4>
        <ul className="text-secondary">
          <li>Request access to the data we store about you.</li>
          <li>Request correction or deletion of your personal data.</li>
          <li>Unsubscribe from promotional emails anytime.</li>
        </ul>

        <hr className="my-4" />

        <h4 className="fw-bold mb-3 text-dark">📞 Contact Us</h4>
        <p className="text-secondary">
          For any privacy-related concerns, reach out to us at{" "}
          <strong>privacy@menswearstore.in</strong> or call{" "}
          <strong>+91 98765 43210</strong>.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
