import Card from '../components/Card';
import './FeaturesSection.css';

export default function FeaturesSection() {
  const trendingNFTs = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400',
      title: 'Abstract Dreams #1',
      creator: 'by @artist_name',
      price: '2.5',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400',
      title: 'Cyber Punk Girl',
      creator: 'by @cyber_artist',
      price: '3.2',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400',
      title: 'Neon City',
      creator: 'by @neo_creator',
      price: '1.8',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=400',
      title: 'Digital Waves',
      creator: 'by @wave_master',
      price: '4.1',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=400',
      title: 'Space Explorer',
      creator: 'by @space_art',
      price: '2.9',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=400',
      title: 'Future Vision',
      creator: 'by @visionary',
      price: '3.7',
    },
  ];

  return (
    <section className="features section">
      <div className="container">
        <div className="section-title">
          <h2>Trending This Week</h2>
          <p>Discover the hottest NFTs from top creators</p>
        </div>
        <div className="features__grid">
          {trendingNFTs.map((nft) => (
            <Card key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </section>
  );
}