import React from "react";

const Coins = ({ coinData }) => {
  return (
    <div className="coin-grid">
      {coinData.map((coin, index) => (
        <div className="coin-grid-item" key={coin.name}>
          <h2 className="coin-title">
            {index + 1}. {coin.name}
          </h2>
          <h4 className="coin-symbol">{coin.symbol}</h4>
          <div className="coin-logo">
            <img src={coin.image} alt={coin.name} />
          </div>
          <p className="coin-price">Current Price: {coin.current_price} USD</p>
        </div>
      ))}
    </div>
  );
};

export default Coins;