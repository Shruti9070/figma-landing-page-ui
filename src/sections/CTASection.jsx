import Button from '../components/Button';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__content">
          <div className="cta__text">
            <h2>Join The Community</h2>
            <p>
              Connect with thousands of creators and collectors. Start your NFT journey today and be part of the digital revolution.
            </p>
          </div>
          <div className="cta__actions">
            <Button variant="primary" size="large">Get Started</Button>
            <Button variant="outline" size="large">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}