import React from 'react';
import './Hero.css';

const Hero = () => {
  const title = "German Andino";

  return (
    <div className="hero-wrapper">
      <h1>
        {title.split('').map((letter, index) => (
          <span key={index} className="animated-letter">{letter}</span>
        ))}
      </h1>
      <span className="hero-subtitle">Productor Multimedia, Artista y Desarrollador Web</span>
    </div>
  );
};

export default Hero;