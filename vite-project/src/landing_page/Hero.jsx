import React from 'react';
import './Hero.css';

const Hero = () => {
  const title = "German Andino";

  return (
    <div className="hero-wrapper">
      <h1>
        
        <span className="hero-title">{title}</span>
        
      </h1>
      <span className="hero-subtitle">Productor Multimedia, Artista y Desarrollador Web</span>
    </div>
  );
};

export default Hero;