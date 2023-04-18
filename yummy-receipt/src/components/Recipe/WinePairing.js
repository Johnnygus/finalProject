import React from 'react';
import './WinePairing.css';

const WinePairing = ({ winePairing }) => {
  return (
    winePairing && winePairing.pairingText && (
      <div className="wine-pairing">
        <h3>Wine Pairing</h3>
        <p>{winePairing.pairingText}</p>
        {winePairing.productMatches &&
          winePairing.productMatches.map((wine, index) => (
            <div key={index} className="wine-item">
              <h4>{wine.title}</h4>
              <img
                src={wine.imageUrl}
                alt={wine.title}
                className="wine-image"
              />
              <p>{wine.description}</p>
            </div>
          ))}
      </div>
    )
  );
};

export default WinePairing;
