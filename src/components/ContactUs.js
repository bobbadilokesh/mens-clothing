import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Contact Us</h2>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-4">
            <h4 className="fw-bold mb-3 text-dark">📩 Send Us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark w-100 fw-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-6">
          <div className="card shadow-sm border-0 p-4 bg-light h-100">
            <h4 className="fw-bold mb-3 text-dark">📞 Get in Touch</h4>
            <p className="text-secondary">
              Have questions or need help with your order? We’d love to hear from you!
            </p>
            <ul className="list-unstyled text-secondary">
              <li>
                <strong>Email:</strong> support@menswearstore.in
              </li>
              <li>
                <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                <strong>Address:</strong> Men’s Wear Pvt. Ltd., MG Road, Bangalore, India
              </li>
            </ul>

            <hr />

            <h5 className="fw-bold text-dark">🕒 Working Hours</h5>
            <p className="text-secondary mb-1">Monday - Saturday: 9 AM - 8 PM</p>
            <p className="text-secondary">Sunday: Closed</p>

            <div className="mt-3">
              <a href="#" className="text-dark me-3 fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-dark me-3 fs-4"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-dark me-3 fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-dark fs-4"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
