// NavbarComponent.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarComponent.css';
import logo from './logo.png';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" style={{ backgroundColor: '#000', borderRadius: '20px' }}>
      <div className="container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="TBN Indonesia" className="logo-img" />
        </Link>
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
          <span className={isMenuOpen ? "open" : ""}></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home Page</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-link" onClick={toggleMenu}>Who We Are</Link>
          </li>
          <li className="nav-item">
            <Link to="/kelas" className="nav-link" onClick={toggleMenu}>What We Do</Link>
          </li>
          <li className="nav-item">
            <Link to="/syarat-ketentuan" className="nav-link" onClick={toggleMenu}>Syarat & Ketentuan</Link>
          </li>
          <li className="nav-item">
            <form className="search-form">
              <input type="text" placeholder="Search" className="search-input" />
              <button type="submit" className="search-button">
                <i className="fas fa-search">Cari</i>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;
