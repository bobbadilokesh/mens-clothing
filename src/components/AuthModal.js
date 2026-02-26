import React, { useState } from "react";

function AuthModal({ closeModal }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!username || !email || password.length < 6) {
      setError("Fill all fields. Password must be 6+ characters.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      setError("User already exists.");
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    setError("Signup successful! Please login.");
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    closeModal();
    window.location.reload();
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 border-0">

          <h4 className="text-center fw-bold mb-3">
            {isLogin ? "Login" : "Sign Up"}
          </h4>

          <form onSubmit={isLogin ? handleLogin : handleSignup}>
            {!isLogin && (
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && (
              <div className="text-danger small mb-2">{error}</div>
            )}

            <button className="btn btn-dark w-100">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          <p className="text-center mt-3">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              className="text-primary cursor-pointer"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>

          <button
            className="btn-close position-absolute top-0 end-0 m-3"
            onClick={closeModal}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;