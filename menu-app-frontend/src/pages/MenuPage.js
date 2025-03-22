import React from "react";
import { Link } from "react-router-dom";
import "./menu.css"; // Import CSS file
import logo from "../assets/logo.png"; // Import the logo

const MenuPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="top-header">
        <div className="logo">
          <img src={logo} alt="Deep Net Soft Logo" />
        </div>
        <nav className="nav-menu">
          <Link to="/">HOME</Link>
          <Link to="/menu" className="active">MENU</Link>
          
          <Link to="/contact">CONTACT US</Link>
        </nav>
      </header>

      {/* Menu Tabs with React Router Navigation */}
      <section className="menu-tabs">
        <Link to="/food">
          <button>FOOD</button>
        </Link>
        <Link to="/drinks">
          <button className="active">DRINKS</button>
        </Link>
      </section>

      {/* Menu Items */}
      <section className="menu-items">
        <h2>BRUNCH COCKTAILS</h2>
        <div className="cocktail-list">
          <div className="cocktail">
            <h3>
              CINNAMON TOAST CRUNCH <span>$16</span>
            </h3>
            <p>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon</p>
          </div>
          <div className="cocktail">
            <h3>
              BAR 42 MARY <span>$14</span>
            </h3>
            <p>Titos, tomato juice, Worcestershire, celery salt, black pepper, tabasco, fully loaded</p>
          </div>
          <div className="cocktail">
            <h3>
              MOET SPRITZ <span>$20</span>
            </h3>
            <p>Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper</p>
          </div>
        </div>
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

export default MenuPage;
