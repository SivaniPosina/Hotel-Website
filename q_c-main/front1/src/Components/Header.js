// Header.js
import React from 'react';
import { useCart } from '../CartContext';

const Header = () => {
  const { state } = useCart();

  return (
    <header className="horizontal-header">
      {/* Your existing header content */}
      {/* ... */}
    
        <div className="logo">
          <img src="l1.jpg" alt="Logo" />
          <span>Quick Crave</span>
        </div>
        <nav className="nav-links">
          {/* Navigation links */}
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/restaurantlist">Restaurants</a></li>
            <li><a href="/feedback">Feedback</a></li>
           
        

          </ul>
        </nav>
      <div className="buttons">
        <div>
          <ul>
            {state.items.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;