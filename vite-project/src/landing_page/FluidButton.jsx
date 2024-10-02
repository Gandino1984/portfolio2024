import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './FluidButton.css';

const FluidButton = ({ icon, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonSpring = useSpring({
    transform: isActive ? 'scale(1.2)' : 'scale(1)',
    backgroundColor: isActive ? 'var(--purple)' : (isHovered ? 'black' : 'var(--gray)'),
    borderColor: isHovered && !isActive ? 'var(--purple)' : 'transparent',
    borderWidth: '2px',
    borderStyle: 'solid',
    config: config.wobbly
  });

  const iconSpring = useSpring({
    color: isActive ? 'white' : (isHovered ? 'var(--purple)' : 'inherit'),
  });

  return (
    <animated.button 
      className={`fluid-button ${isActive ? 'active' : ''}`}
      style={buttonSpring}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="fluid button"
    >
      <animated.div style={iconSpring}>
        <ion-icon name={icon}></ion-icon>
      </animated.div>
    </animated.button>
  );
};

export default FluidButton;