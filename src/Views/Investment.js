import React from 'react';
import './Investment.css';
import webcafeMarket from '../assets/images/market-prev.jpg';

const investments = [
  {
    title: 'AI Marketplace',
    description: 'Pre-built Services',
    link: 'https://webcafesoftware.com',
    image: webcafeMarket,
    isFeatured: false
  },
  {
    title: 'Bumpups',
    description: 'For Creators, Editors & Podcasters',
    link: 'https://bumpups.com',
    image: webcafeMarket,
    isFeatured: true // Featured card
  },
  {
    title: 'Skool',
    description: 'AI For Business',
    link: 'https://skool.com',
    image: webcafeMarket,
    isFeatured: false
  }
];

const Investment = () => {
  return (
    <div className="investment-container">
      <h2 className="investment-heading">
        The <strong>Latest</strong>. <span>Explore What's New</span>
      </h2>
      <div className="investment-cards">
        {investments.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`investment-card ${item.isFeatured ? 'featured' : ''}`}
          >
            <img src={item.image} alt={item.title} className="investment-image" />
            <div className="investment-info">
              <h3 className="investment-title">{item.title}</h3>
              <p className="investment-description">{item.description}</p>
              <span className="investment-link">{item.link.replace('https://', '')}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Investment;
