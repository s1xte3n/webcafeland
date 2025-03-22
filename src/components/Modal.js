// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal, videoUrl }) => {
  if (!isOpen) return null;

  return (
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
  );
};

export default Modal;
