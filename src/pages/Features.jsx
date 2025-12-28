import Button from '../components/Button';
import './Features.css';

export default function Features() {
  const features = [
    {
      title: 'Easy NFT Creation',
      description: 'Mint your digital art as NFTs in just a few clicks. No coding required.',
      icon: '🎨',
    },
    {
      title: 'Secure Marketplace',
      description: 'Built on blockchain technology ensuring transparent and secure transactions.',
      icon: '🔒',
    },
    {
      title: 'Low Transaction Fees',
      description: 'Competitive fees to maximize your earnings as a creator or investor.',
      icon: '💸',
    },
    {
      title: 'Global Community',
      description: 'Connect with creators and collectors from around the world.',
      icon: '🌍',
    },
    {
      title: 'Multiple Wallets',
      description: 'Support for MetaMask, WalletConnect, Coinbase Wallet, and more.',
      icon: '👛',
    },
    {
      title: 'Advanced Analytics',
      description: 'Track your portfolio performance with detailed insights and metrics.',
      icon: '📈',
    },
  ];

  const benefits = [
    {
      title: 'For Creators',
      points: [
        'Mint and sell your digital art',
        'Set your own royalties',
        'Build your fanbase',
        'Get paid instantly',
      ],
    },
    {
      title: 'For Collectors',
      points: [
        'Discover unique digital art',
        'Invest in emerging artists',
        'Own verifiable digital assets',
        'Trade on secondary market',
      ],
    },
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <div className="container">
          <div className="features-hero__content">
            <h1>Platform <span className="gradient-text">Features</span></h1>
            <p className="features-hero__subtitle">
              Everything you need to create, sell, and collect NFTs
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid-section section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card-glow">
                <div className="feature-card__icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section">
        <div className="container">
          <div className="section-title">
            <h2>Benefits for Everyone</h2>
            <p>Whether you're a creator or collector, we've got you covered</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3 className="gradient-text">{benefit.title}</h3>
                <ul>
                  {benefit.points.map((point, i) => (
                    <li key={i}>
                      <span className="checkmark">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works section">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
            <p>Get started in four simple steps</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h4>Connect Wallet</h4>
              <p>Link your digital wallet to get started</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h4>Create or Browse</h4>
              <p>Mint your NFT or explore the marketplace</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h4>List for Sale</h4>
              <p>Set your price and list your NFT</p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h4>Earn & Trade</h4>
              <p>Receive payments instantly and trade freely</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta section">
        <div className="container">
          <div className="features-cta__content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of creators and collectors today</p>
            <div className="features-cta__actions">
              <Button variant="primary" size="large">Create Account</Button>
              <Button variant="outline" size="large">Explore Marketplace</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}