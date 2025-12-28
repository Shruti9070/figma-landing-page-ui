import Button from '../components/Button';
import './About.css';

export default function About() {
  const team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Sarah Williams', role: 'Head of Design', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Michael Chen', role: 'Lead Developer', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Emma Davis', role: 'Marketing Director', image: 'https://i.pravatar.cc/150?img=4' },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries in digital art and blockchain technology.',
    },
    {
      title: 'Community',
      description: 'Building a supportive ecosystem for creators and collectors.',
    },
    {
      title: 'Transparency',
      description: 'Maintaining open and honest communication at all times.',
    },
    {
      title: 'Excellence',
      description: 'Delivering the highest quality platform and user experience.',
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <h1>About <span className="gradient-text">NFT Marketplace</span></h1>
            <p className="about-hero__subtitle">
              Empowering creators and collectors in the digital art revolution
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission section">
        <div className="container">
          <div className="about-mission__grid">
            <div className="about-mission__text">
              <h2>Our Mission</h2>
              <p>
                We're on a mission to democratize digital art ownership and empower creators worldwide. 
                Our platform bridges the gap between traditional art and the blockchain revolution, 
                making NFTs accessible to everyone.
              </p>
              <p>
                Since our launch, we've facilitated over $50M in transactions and supported thousands 
                of artists in monetizing their digital creations. We believe in a future where creators 
                have full control over their work and collectors can easily discover and invest in 
                exceptional digital art.
              </p>
              <Button variant="primary" size="large">Join Our Community</Button>
            </div>
            <div className="about-mission__image">
              <div className="placeholder-box gradient-bg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="about-values__grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team section">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>The passionate people behind the platform</p>
          </div>
          <div className="about-team__grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card__image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats section">
        <div className="container">
          <div className="about-stats__grid">
            <div className="stat-item">
              <h2 className="gradient-text">2021</h2>
              <p>Year Founded</p>
            </div>
            <div className="stat-item">
              <h2 className="gradient-text">100K+</h2>
              <p>Active Users</p>
            </div>
            <div className="stat-item">
              <h2 className="gradient-text">50K+</h2>
              <p>Creators</p>
            </div>
            <div className="stat-item">
              <h2 className="gradient-text">$50M+</h2>
              <p>Total Volume</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}