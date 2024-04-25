// FooterComponent.jsx
import React from "react";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
        <img src="/images/logo1.png" alt="TBN Indonesia Logo" className="logo" />
          <h3>Lets Connect there</h3>
          <p>
            Join our thriving community to receive timely updates on the most
            recent developments in the realm of social enterprise, including
            news, events, and more!
          </p>
          <button className="join-button">Join With Us</button>
        </div>
        <div className="footer-column">
          
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-column">
          <nav className="footer-nav">
            <ul>
              <li>Homepage</li>
              <li>Who We Are</li>
              <li>What We Do</li>
              <li>What’s Happening</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="contact-info">
            <p>+62823 1000 1908</p>
            <p>info@tbnindonesia.org</p>
          </div>
        </div>
        <div className="footer-column">
          <div className="email-subscribe">
            <p>Get the latest information</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright© 2024 TBN Indonesia. All Rights Reserved.{" "}
          <a href="#">User Terms & Conditions</a> |{" "}
          <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
