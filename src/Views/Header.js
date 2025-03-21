import React from 'react';
import './Header.css';
import webcafeBeer from '../assets/images/webcafe-beer-v1.png';
import webcafeLogo from '../assets/images/logo512.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="nav">
          <div className="logo-container">
            <img src={webcafeLogo} alt="WebCafe Logo" className="logo" />
            <span className="slogan">automate <b>everything</b></span>
          </div>
        </div>
        <div className="hero">
          <div className="hero-text">
            <h1 className="highlight">Holding <span className="secondary">Company.</span></h1>
            <h1 className="highlight">AI SaaS <span className="secondary">Investor.</span></h1>
            <h1 className="highlight">Webcafe <span className="secondary">ai.</span></h1>
            <p className="offer">Exclusive offer: Get 3 extra months <span className="secondary">FREE</span></p>
            <button className="cta-button">Start Your Risk-Free Trial →</button>
            <p className="guarantee">30-DAY MONEY-BACK GUARANTEE</p>
          </div>
          <div className="hero-image">
            <img src={webcafeBeer} alt="Illustration of a person using VPN" className="image-shadow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
