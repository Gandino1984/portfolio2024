import React from 'react';
import { useSpring, animated, config } from 'react-spring';

const FluidButton = ({ onClick, onMouseEnter, onMouseLeave }) => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const [{ scale }, setScale] = useSpring(() => ({ scale: 1 }));

  const calcWave = (x, y) => {
    const buttonSize = 80; // Increased from 50 to 80
    return [(x - buttonSize / 2) / 15, (y - buttonSize / 2) / 15];
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    set({ xy: calcWave(e.clientX - rect.left, e.clientY - rect.top) });
  };

  const handleMouseEnter = (e) => {
    setScale({ scale: 1.1, config: config.wobbly });
    onMouseEnter(e);
  };

  const handleMouseLeave = (e) => {
    set({ xy: [0, 0] });
    setScale({ scale: 1, config: config.gentle });
    onMouseLeave(e);
  };

  return (
    <animated.button
      className="fluid-button"
      style={{
        transform: xy.to((x, y) => `translate3d(${x}px, ${y}px, 0) scale(${scale.to(s => s)})`),
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <animated.div
        className="fluid"
        style={{
          transform: xy.to((x, y) => `translate3d(${-x}px, ${-y}px, 0)`),
        }}
      />
      <ion-icon name="eye-outline" style={{ fontSize: '32px' }}></ion-icon>
    </animated.button>
  );
};

export default FluidButton;