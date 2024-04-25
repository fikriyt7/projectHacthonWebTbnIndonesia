// src/pages/Partners.jsx
import React from 'react';
import './Partners.css'; // Impor file CSS untuk styling

const kelasPage = () => {
  // Daftar logo partner
  const partnerLogos = [
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
    'partner1.png',
   ,
    // tambahkan logo lainnya sesuai kebutuhan
  ];

  return (
    <div className="partners-container">
      <h1>Our Partners</h1>
      <div className="partners-grid">
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner ${index + 1}`} className="partner-logo" />
        ))}
      </div>
    </div>
  );
};

export default kelasPage;
