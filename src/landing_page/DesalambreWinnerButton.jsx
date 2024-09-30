import React from 'react';
import './DesalambreWinnerButton.css';

const DesalambreWinnerButton = ({ onMouseEnter, onMouseLeave }) => {
  const handleClick = () => {
    window.open('https://www.revista5w.com/newsroom/tierra-sin-ellas-premio-desalambre-2019-8001', '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="desalambre-festival-button"
      aria-label="Desalambre Festival Innovation Award"
    />
  );
};

export default DesalambreWinnerButton;