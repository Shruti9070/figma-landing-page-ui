import './Card.css';

export default function Card({ 
  image, 
  title, 
  creator, 
  price, 
  countdown,
  className = '' 
}) {
  return (
    <div className={`nft-card card-glow ${className}`}>
      <div className="nft-card__image">
        <img src={image} alt={title} />
        {countdown && (
          <div className="nft-card__countdown">{countdown}</div>
        )}
      </div>
      <div className="nft-card__content">
        <h4 className="nft-card__title">{title}</h4>
        {creator && (
          <p className="nft-card__creator">{creator}</p>
        )}
        {price && (
          <div className="nft-card__footer">
            <span className="nft-card__price">{price} ETH</span>
            <button className="nft-card__bid">Place Bid</button>
          </div>
        )}
      </div>
    </div>
  );
}