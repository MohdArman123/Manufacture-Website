import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h1>E. ALAM FABRICATOR</h1>
        </Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleMenu}>
          ✖️
        </button>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
          <li><Link to="/customization" onClick={toggleMenu}>Customization</Link></li>
          <li><Link to="/team" onClick={toggleMenu}>Team</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;