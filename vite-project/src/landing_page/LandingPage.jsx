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
    fluidButtonClicked,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    openContactForm,
    closeContactForm,
    handleBottomBarButtonEnter,
    handleBottomBarButtonLeave,
    handleLinkedinButtonClick,
    handleHomeButtonClick,
    handleDocumentButtonClick,
    overlayProps,
    activeTopBarButton
  } = useLandingPageLogic();

  return (
    <div className="landing-page">    
        <video autoPlay loop muted className="background-video">
          <source src="/src/assets/video/elHeroeSenegalesExtract.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <animated.div className="landing-page-wrapper" style={overlayProps}>
            <TopBar 
              onHomeButtonClick={handleHomeButtonClick}
              onFluidButtonClick={handleClick}
              onContactButtonClick={openContactForm}
              onLinkedinButtonClick={handleLinkedinButtonClick}
              activeButton={activeTopBarButton}
              onDocumentButtonClick={handleDocumentButtonClick}
            />
            <MiddleSection 
              isHoveringDesalambreBtn={isHoveringDesalambreBtn}
              isHoveringPeabodyBtn={isHoveringPeabodyBtn}
              isHoveringGaboBtn={isHoveringGaboBtn}
              showContactForm={showContactForm}
              showFeaturedProjects={showFeaturedProjects && !fluidButtonClicked}
              onCloseContactForm={closeContactForm}
            />
            <BottomBar 
              onDesalambreEnter={() => handleBottomBarButtonEnter('desalambre')}
              onDesalambreLeave={handleBottomBarButtonLeave}
              onPeabodyEnter={() => handleBottomBarButtonEnter('peabody')}
              onPeabodyLeave={handleBottomBarButtonLeave}
              onGaboEnter={() => handleBottomBarButtonEnter('gabo')}
              onGaboLeave={handleBottomBarButtonLeave}
            />
        </animated.div>
    </div>
  );
};

export default LandingPage;