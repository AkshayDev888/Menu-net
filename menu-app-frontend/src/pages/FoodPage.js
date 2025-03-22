import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css"; // Import the CSS file

const FoodPage = () => {
  return (
    <div>
      <header className="top-header">
        <div className="logo">
          <img src="/logo.png" alt="Deep Net Soft Logo" />
        </div>
        <nav className="nav-menu">
          <Link to="/">HOME</Link>
          <Link to="/food" className="active">FOOD</Link>
          <Link to="/drinks">DRINKS</Link>
          <Link to="/contact">CONTACT US</Link>
        </nav>
      </header>

      <section className="menu-items">
        <h2>Food Menu</h2>
        <div className="food-list">
          <div className="food-item">
            <h3>Burger<span>$10</span></h3>
            <p>Juicy grilled burger with fresh toppings.</p>
          </div>
          <div className="food-item">
            <h3>Pizza<span>$12</span></h3>
            <p>Wood-fired pizza with a variety of toppings.</p>
          </div>
          <div className="food-item">
            <h3>Salad<span>$8</span></h3>
            <p>Fresh greens with delicious dressing.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Deepnetsoft Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FoodPage;
