import React from 'react';
import './Footer.css';
import darkcafeBeer from '../assets/images/webcafe-beer-v1.png';

const footerLinks = [
  {
    title: 'Social Media',
    links: [
      { name: 'Youtube', url: 'https://youtube.com/@Corbin_Brown' },
      { name: 'X', url: 'https://x.com' },
      { name: 'Digital Nomad', url: 'https://www.digitalnomad.com' },
    ]
  },
  {
    title: 'Investments',
    links: [
      { name: 'AI Marketplace', url: 'https://webcafesoftware.com' },
      { name: 'Bumpups', url: 'https://bumpups.com' },
      { name: 'Skool', url: 'https://skool.com' },
    ]
  },
  {
    title: 'Education',
    links: [
      { name: 'Content Catalog', url: 'https://youtube.com/@Corbin_Brown' },
      { name: 'Take This Website', url: 'https://www.youtube.com/watch?v=-tnPCI5RdNA' },
    ]
  },
  {
    title: 'Paid Promotion',
    links: [
      { name: 'Contact', url: 'https://www.webcafesoftware.com/contact' },
    ]
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {footerLinks.map((section, index) => (
            <div key={section.title} className="footer-column">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <div className="footer-logo-container">
            <img src={darkcafeBeer} alt="WebCafe Beer Logo" className="footer-logo" aria-label="WebCafe Beer Logo" />
            <span className="footer-company-name">WebCafe Holding Company</span>
          </div>
          <p>More ways to shop: <a href="#">Find a WebCafe Store</a> or other retailer near you. Or call 1-800-WEB-CAFE.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
          <p className="footer-country">South Africa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
