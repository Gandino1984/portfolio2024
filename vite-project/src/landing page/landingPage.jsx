import React from 'react';

import './landingPage.css';


const LandingPage = () => {
  return (
    <div className="landing-page">

      <video autoPlay loop muted className="background-video">
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="content-overlay">
        <h1>German Andino</h1>
        <p>Multimedia Producer, Artist & Web Developer</p>
        <button className="cta-button">View Portfolio</button>
      </div>

    </div>
  );
};

export default LandingPage;