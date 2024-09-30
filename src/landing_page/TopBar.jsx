import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './TopBar.css';
import FluidButton from "./FluidButton.jsx";
import ContactButton from "./ContactButton.jsx";
import LinkedinButton from './LinkedinButton.jsx';

const TopBar = ({ onFluidButtonClick, onFluidButtonEnter, onFluidButtonLeave, onContactButtonClick, onLinkedinButtonClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [order, setOrder] = useState([0, 1, 2]);

  const buttonProps = order.map((_, index) => 
    useSpring({
      left: `${index * 60}px`,
      config: config.gentle
    })
  );

  const buttons = [
    { Component: FluidButton, onClick: onFluidButtonClick, onMouseEnter: onFluidButtonEnter, onMouseLeave: onFluidButtonLeave },
    { Component: ContactButton, onClick: onContactButtonClick },
    { Component: LinkedinButton, onClick: onLinkedinButtonClick }
  ];

  const handleClick = (clickedIndex) => {
    if (clickedIndex !== activeIndex) {
      const newOrder = [...order];
      const clickedPosition = newOrder.indexOf(clickedIndex);
      
      // Move clicked button to the front
      newOrder.splice(clickedPosition, 1);
      newOrder.unshift(clickedIndex);
      
      setOrder(newOrder);
      setActiveIndex(clickedIndex);
    }
    buttons[clickedIndex].onClick();
  };

  return (
    <div className='top-buttons-wrapper'>
      {order.map((buttonIndex, position) => {
        const ButtonComponent = buttons[buttonIndex].Component;
        return (
          <animated.div
            key={buttonIndex}
            style={buttonProps[position]}
            className={`button-container ${buttonIndex === activeIndex ? 'active' : ''}`}
          >
            <ButtonComponent
              className="top-bar-button"
              onClick={() => handleClick(buttonIndex)}
              onMouseEnter={buttons[buttonIndex].onMouseEnter}
              onMouseLeave={buttons[buttonIndex].onMouseLeave}
            />
          </animated.div>
        );
      })}
    </div>
  );
};

export default TopBar;