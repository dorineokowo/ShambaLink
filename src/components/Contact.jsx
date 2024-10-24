import React from "react";
import "./Home.css";

const Contact = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <h1>Welcome to ShambaLink</h1>
        <p>Connecting farmers with opportunities and markets.</p>
        <button className="cta-btn">Explore Opportunities</button>
      </div>

      <div className="signup-login-section">
        <h2>Get Started</h2>
        <div className="signup-login-buttons">
          <button className="signup-btn">Sign Up</button>
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
