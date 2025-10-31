import React, { useState } from "react";

function Login({ closeModal }) {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setIsOtpSent(true);
    alert("OTP sent successfully!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }
    alert("Login successful!");
    closeModal();
  };

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 border-0">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold">Login with Mobile</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={isOtpSent ? handleSubmit : handleSendOtp}>
              {/* Mobile Input */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control p-2"
                  placeholder="Enter 10-digit number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  maxLength={10}
                  required
                />
              </div>

              {/* OTP Input (appears after sending OTP) */}
              {isOtpSent && (
                <div className="mb-3">
                  <label className="form-label fw-semibold">Enter OTP</label>
                  <input
                    type="text"
                    className="form-control p-2"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    required
                  />
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                className="btn btn-danger w-100 fw-semibold py-2 mt-2"
              >
                {isOtpSent ? "Submit" : "Send OTP"}
              </button>
            </form>

            <p
              className="text-center text-muted mt-3"
              style={{ fontSize: "0.9rem" }}
            >
              By continuing, you agree to our{" "}
              <a href="/privacy" className="text-danger text-decoration-none">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
