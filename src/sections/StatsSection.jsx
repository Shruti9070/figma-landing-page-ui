import './StatsSection.css';

export default function StatsSection() {
  const stats = [
    { value: '250K+', label: 'Total NFTs' },
    { value: '100K+', label: 'Active Users' },
    { value: '$50M+', label: 'Trading Volume' },
    { value: '50K+', label: 'Creators' },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <div key={index} className="stats__item">
              <h2 className="gradient-text">{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}