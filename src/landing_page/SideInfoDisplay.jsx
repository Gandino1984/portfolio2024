import React from 'react';
import './SideInfoDisplay.css';
import ContactForm from "./ContactForm.jsx";
import LinkedinLink from "./LinkedinLink.jsx";
import HoverInfoDesalambreBtn from './HoverInfoDesalambreBtn.jsx';
import HoverInfoGaboBtn from './HoverInfoGaboBtn.jsx';
import HoverInfoPeabodyBtn from './HoverInfoPeabodyBtn.jsx';
import FeaturedProjectsSlider from './FeaturedProjectsSlider.jsx';

const SideInfoDisplay = ({ 
  isHoveringDesalambreBtn, 
  isHoveringPeabodyBtn, 
  isHoveringGaboBtn, 
  showContactForm,
  showFeaturedProjects, 
  onCloseContactForm 
}) => {
  return (
    <div className="sidebar-wrapper">
      {/* <p className='form-title'>Ponte en contacto</p>   */}
      {isHoveringDesalambreBtn && <HoverInfoDesalambreBtn />}
      {isHoveringPeabodyBtn && <HoverInfoPeabodyBtn />}
      {isHoveringGaboBtn && <HoverInfoGaboBtn />}  

      {!isHoveringDesalambreBtn && !isHoveringPeabodyBtn && !isHoveringGaboBtn && (
        <>
          {showContactForm && (
            <>
              <ContactForm onClose={onCloseContactForm} />
              <LinkedinLink />
            </>
          )}
          {!showContactForm && showFeaturedProjects && <FeaturedProjectsSlider />}
        </>
      )}
    </div>
  );
};

export default SideInfoDisplay;