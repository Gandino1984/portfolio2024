import React from 'react';
import { animated } from 'react-spring';
import './LandingPage.css';
import TopBar from './TopBar.jsx';
import MiddleSection from './MiddleSection.jsx';
import BottomBar from './BottomBar.jsx';
import { useLandingPageLogic } from './landingPageLogic';

const LandingPage = () => {
  const {
    isHovering,
    isOverlayVisible,
    showContactForm,
    isHoveringGaboBtn,
    isHoveringPeabodyBtn,
    isHoveringDesalambreBtn,
    showFeaturedProjects,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    toggleContactForm,
    closeContactForm,
    handleMouseEnterGaboBtn,
    handleMouseLeaveGaboBtn,
    handleMouseEnterPeabodyBtn,
    handleMouseLeavePeabodyBtn,
    handleMouseEnterDesalambreBtn,
    handleMouseLeaveDesalambreBtn,
    handleLinkedinButtonClick,
    overlayProps
  } = useLandingPageLogic();

  return (
    <div className="landing-page">    
        <video autoPlay loop muted className="background-video">
          <source src="/src/assets/video/elHeroeSenegalesExtract.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <TopBar 
          onFluidButtonClick={handleClick}
          onFluidButtonEnter={handleMouseEnter}
          onFluidButtonLeave={handleMouseLeave}
          onContactButtonClick={toggleContactForm}
          onLinkedinButtonClick={handleLinkedinButtonClick}
        />

        <animated.div className="landing-page-wrapper" style={overlayProps}>
              <MiddleSection 
                isHoveringDesalambreBtn={isHoveringDesalambreBtn}
                isHoveringPeabodyBtn={isHoveringPeabodyBtn}
                isHoveringGaboBtn={isHoveringGaboBtn}
                showContactForm={showContactForm}
                showFeaturedProjects={showFeaturedProjects}
                onCloseContactForm={closeContactForm}
              />

              <BottomBar 
                onDesalambreEnter={handleMouseEnterDesalambreBtn}
                onDesalambreLeave={handleMouseLeaveDesalambreBtn}
                onPeabodyEnter={handleMouseEnterPeabodyBtn}
                onPeabodyLeave={handleMouseLeavePeabodyBtn}
                onGaboEnter={handleMouseEnterGaboBtn}
                onGaboLeave={handleMouseLeaveGaboBtn}
              />
        </animated.div>
    </div>
  );
};

export default LandingPage;