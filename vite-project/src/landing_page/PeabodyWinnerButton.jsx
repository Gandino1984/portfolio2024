// PeabodyWinnerButton.js
import './PeabodyWinnerButton.css';

const PeabodyWinnerButton = ({ onMouseEnter, onMouseLeave }) => {
  const handleClick = () => {
    window.open('https://peabodyawards.com/award-profile/nprs-latino-usa-gangs-murder-and-migration-in-honduras/', '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="peabody-winner-button"
      aria-label="Peabody Winner"
    />
  );
};

export default PeabodyWinnerButton;



