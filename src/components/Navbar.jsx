import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__content">
          <Link to="/" className="navbar__logo">
            <span className="gradient-text">NFT</span> Marketplace
          </Link>

          <button 
            className="navbar__toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/features" onClick={() => setIsMenuOpen(false)}>Features</Link></li>
          </ul>

          <div className="navbar__actions">
            <Button variant="outline" size="small">Sign In</Button>
            <Button variant="primary" size="small">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}