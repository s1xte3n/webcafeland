import React, { useState } from 'react';
import './TopFold.css';
import webcafeBeer from '../assets/images/webcafe-beer-v1.png';
import { FaRegPlayCircle } from 'react-icons/fa';

const TopFold = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  // List of random YouTube video IDs
  const videoList = [
    'dQw4w9WgXcQ', // Example video ID (You can replace this with your own list)
    'u9PnxQ9pS9o',
    '3JZ_D3ELwOQ',
    'tVj0ZTS4WF4',
    '0xKq5qf0dxM',
  ];

  // Function to open the modal and select a random video
  const openModal = () => {
    const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];
    setVideoUrl(`https://www.youtube.com/embed/${randomVideo}?autoplay=1`);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl('');
  };

  return (
    <div className='topfold-container'>
      <div className="topfold">
        {/* Navigation */}
        <nav className="navbar">
          <div className="logo-container">
            <img src={webcafeBeer} alt="WebCafe Beer Logo" className="logo" />
          </div>
          <div className="nav-buttons">
            {/* Replaced "Sign In" with "Content Catalog" */}
            <a href="https://youtube.com/@Corbin_Brown" target="_blank" rel="noopener noreferrer">
              <button className="content-catalog-btn btn">Content Catalog</button>
            </a>
            {/* Replaced "Download" with "Take This Website" */}
            <a href="https://www.youtube.com/watch?v=-tnPCI5RdNA" target="_blank" rel="noopener noreferrer">
              <button className="take-website-btn btn">Take This Website</button>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="hero-section">
          <h1 className='hero-title'>
            {'{automate '}<strong>everything.</strong>{'}'}
          </h1>
          <p className="hero-subtitle">
            Built to make you extraordinarily productive, WebCafe is the best way to code with AI.
          </p>
          <div className="cta-buttons">
            <button className='watchdemo-btn' onClick={openModal}>
              <FaRegPlayCircle className="play-icon" />
              <div className='demo-text'>
                <span><b>Watch Demo</b></span>
                <span className='demo-duration'>1 minute</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>Close</button>
            <iframe
              title="YouTube Video"
              src={videoUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopFold;
