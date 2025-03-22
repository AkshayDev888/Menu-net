import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css"; // Reusing the existing styles
import logo from "../assets/logo.png"; // Import the logo

const ContactPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="top-header">
        <div className="logo">
          <img src={logo} alt="Deep Net Soft Logo" />
        </div>
        <nav className="nav-menu">
          <Link to="/">HOME</Link>
          <Link to="/menu">MENU</Link>
          <Link to="/contact" className="active">CONTACT US</Link>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>📞 Phone: +91 9567433340</p>
        <p>✉ Email: info@deepnetsoft.com</p>
        <p>📍 Address: First Floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-box">
          <h3>CONNECT WITH US</h3>
          <p>📞 +91 9567433340</p>
          <p>✉ info@deepnetsoft.com</p>
        </div>
        <div className="footer-box center-logo">
          <img src={logo} alt="Deep Net Soft Logo" />
        </div>
        <div className="footer-box">
          <h3>FIND US</h3>
          <p>First Floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
        </div>
        <p className="copyright">© 2024 Deepnetsoft Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
