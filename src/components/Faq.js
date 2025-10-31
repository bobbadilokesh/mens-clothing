import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What sizes do you offer for men’s clothing?",
      answer:
        "We offer sizes ranging from S to XXL in most categories. Some premium or fitted collections may also include XS or 3XL. Each product page includes a detailed size chart for your reference.",
    },
    {
      question: "How can I find my perfect fit?",
      answer:
        "Check our size guide on each product page. You can measure your chest, waist, and shoulders, then compare with our chart to find your ideal fit. If you're unsure, we recommend choosing one size larger for comfort.",
    },
    {
      question: "Do you offer free shipping?",
      answer:
        "Yes! We provide free standard delivery on all orders above ₹999 across India. Orders below ₹999 will include a small delivery charge depending on your location.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Absolutely. You can return or exchange any unworn, unwashed item within 7 days of delivery. Please ensure tags are intact. Visit our Return Policy page for detailed steps.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Most orders are delivered within 3–6 business days. Remote areas may take an additional 1–2 days. You’ll receive a tracking link once your order is shipped.",
    },
    {
      question: "Are your products original and high quality?",
      answer:
        "Yes, all our products are 100% original and quality-checked by our in-house team before dispatch. We source directly from verified manufacturers and trusted fashion labels.",
    },
    {
      question: "Do you offer discounts or sales?",
      answer:
        "We regularly offer seasonal sales and discounts. Follow us on Instagram or sign up for our newsletter to get notified about the latest offers and exclusive drops.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="card mb-3 shadow-sm border-0"
            onClick={() => toggleFAQ(index)}
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: activeIndex === index ? "scale(1.02)" : "scale(1)",
            }}
          >
            <div
              className="card-header bg-dark text-light fw-semibold"
              style={{
                borderRadius: "6px",
                padding: "15px 20px",
                fontSize: "1.1rem",
              }}
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="card-body bg-light text-start">
                <p className="mb-0 text-secondary">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
