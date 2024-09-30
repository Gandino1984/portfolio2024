import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import './LinkedinButton.css';

const LinkedinButton = ({ onClick }) => {
  const [{ scale }, setScale] = useSpring(() => ({ scale: 1 }));

  const handleMouseEnter = () => {
    setScale({ scale: 1.1, config: config.wobbly });
  };

  const handleMouseLeave = () => {
    setScale({ scale: 1, config: config.gentle });
  };

  return (
    <animated.button
      className="linkedin-button"
      style={{
        transform: scale.to(s => `scale(${s})`),
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ion-icon name="logo-linkedin"></ion-icon>
    </animated.button>
  );
};

export default LinkedinButton;