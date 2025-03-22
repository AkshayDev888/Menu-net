import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css"; // Import the CSS file

const DrinksPage = () => {
  return (
    <div>
      <header className="top-header">
        <div className="logo">
          <img src="/logo.png" alt="Deep Net Soft Logo" />
        </div>
        <nav className="nav-menu">
          <Link to="/">HOME</Link>
          <Link to="/food">FOOD</Link>
          <Link to="/drinks" className="active">DRINKS</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>
      </header>

      <section className="menu-items">
        <h2>Drinks Menu</h2>
        <div className="cocktail-list">
          <div className="cocktail">
            <h3>Mojito<span>$8</span></h3>
            <p>Refreshing lime and mint cocktail.</p>
          </div>
          <div className="cocktail">
            <h3>Margarita<span>$10</span></h3>
            <p>Classic tequila-based cocktail.</p>
          </div>
          <div className="cocktail">
            <h3>Espresso Martini<span>$12</span></h3>
            <p>Vodka and coffee-flavored cocktail.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Deepnetsoft Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DrinksPage;
