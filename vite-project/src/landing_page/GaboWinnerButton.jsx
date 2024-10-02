import React from 'react';
import './GaboWinnerButton.css';

const GaboWinnerButton = ({ onMouseEnter, onMouseLeave }) => {
  const handleClick = () => {
    window.open('https://premioggm.org/trabajo/edicion/2017/innovacion/el-habito-de-la-mordaza/', '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="gabo-festival-button"
      aria-label="Gabo Festival Innovation Award"
    />
  );
};

export default GaboWinnerButton;