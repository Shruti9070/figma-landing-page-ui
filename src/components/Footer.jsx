import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__logo">
              <span className="gradient-text">NFT</span> Marketplace
            </h3>
            <p className="footer__description">
              Discover rare collections of art & NFTs from talented creators around the world.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Twitter">𝕏</a>
              <a href="#" aria-label="Discord">Discord</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>

          <div className="footer__section">
            <h4>Marketplace</h4>
            <ul>
              <li><Link to="/">Explore</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><a href="#">Collections</a></li>
              <li><a href="#">Activity</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2025 NFT Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}