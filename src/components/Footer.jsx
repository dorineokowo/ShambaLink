import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About ShambaLink</h3>
          <p>
            ShambaLink connects local farmers with agricultural information and
            opportunities in their area. We provide a platform to showcase and
            sell products and services.
          </p>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: info@shambalink.com</p>
          <p>Phone: +254 123 456 789</p>
          <p>Address: 123 Farmer St., Siaya County</p>
        </div>

        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>
            Sign up to receive the latest news and updates about agricultural
            opportunities and more.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} ShambaLink. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
