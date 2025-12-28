import Button from '../components/Button';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">
              Discover Rare
              <span className="gradient-text"> Collections</span>
              <br />
              Of Art & NFTs
            </h1>
            <p className="hero__description">
              Explore the world's leading NFT marketplace. Buy, sell, and discover exclusive digital assets from talented creators worldwide.
            </p>
            <div className="hero__actions">
              <Button variant="primary" size="large">Explore Now</Button>
              <Button variant="outline" size="large">Create NFT</Button>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__featured-card">
              <div className="hero__card-image">
                <div className="placeholder-image gradient-bg"></div>
              </div>
              <div className="hero__card-info">
                <h3>Bidash Art Work</h3>
                <p>Digital Art Collection</p>
                <div className="hero__card-stats">
                  <span>2.5 ETH</span>
                  <span>∎ 24h left</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}