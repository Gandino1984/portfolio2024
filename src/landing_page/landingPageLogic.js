import { useState, useCallback, useEffect, useRef } from 'react';
import { useSpring, config } from 'react-spring';

export const useLandingPageLogic = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [wasContactFormVisible, setWasContactFormVisible] = useState(false);
  const [isHoveringGaboBtn, setIsHoveringGaboBtn] = useState(false);
  const [isHoveringPeabodyBtn, setIsHoveringPeabodyBtn] = useState(false);
  const [isHoveringDesalambreBtn, setIsHoveringDesalambreBtn] = useState(false);
  const [showFeaturedProjects, setShowFeaturedProjects] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsOverlayVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animate = (time) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = (time - startTimeRef.current) * 0.001;
      
      document.querySelectorAll('.animated-letter').forEach((el, index) => {
        const x = Math.sin(elapsed + index * 0.4) * 10;
        const y = Math.cos(elapsed + index * 0.8) * 20;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      if (isHovering) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (isHovering) {
      startTimeRef.current = null;
      document.querySelectorAll('.animated-letter').forEach((el) => {
        el.style.transition = 'transform 0.4s ease-in';
      });
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.querySelectorAll('.animated-letter').forEach((el) => {
        el.style.transition = 'transform 0.4s ease-out';
        el.style.transform = 'translate3d(0px, 0px, 0)';
      });
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);
  
  //fix
  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);
  const handleClick = useCallback(() => setIsOverlayVisible(false), []);

  const toggleContactForm = () => {
    setShowContactForm(prev => {
      setWasContactFormVisible(!prev);
      setShowFeaturedProjects(prev);
      return !prev;
    });
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    setWasContactFormVisible(false);
    setShowFeaturedProjects(true);
  };

  const handleBottomBarButtonEnter = () => {
    if (showContactForm) {
      setWasContactFormVisible(true);
      setShowContactForm(false);
    }
    setShowFeaturedProjects(false);
  };

  const handleBottomBarButtonLeave = () => {
    if (wasContactFormVisible) {
      setShowContactForm(true);
      setWasContactFormVisible(false);
    } else {
      setShowFeaturedProjects(true);
    }
  };

  const handleMouseEnterGaboBtn = () => {
    setIsHoveringGaboBtn(true);
    handleBottomBarButtonEnter();
  };

  const handleMouseLeaveGaboBtn = () => {
    setIsHoveringGaboBtn(false);
    handleBottomBarButtonLeave();
  };

  const handleMouseEnterPeabodyBtn = () => {
    setIsHoveringPeabodyBtn(true);
    handleBottomBarButtonEnter();
  };

  const handleMouseLeavePeabodyBtn = () => {
    setIsHoveringPeabodyBtn(false);
    handleBottomBarButtonLeave();
  };

  const handleMouseEnterDesalambreBtn = () => {
    setIsHoveringDesalambreBtn(true);
    handleBottomBarButtonEnter();
  };

  const handleMouseLeaveDesalambreBtn = () => {
    setIsHoveringDesalambreBtn(false);
    handleBottomBarButtonLeave();
  };

  const overlayProps = useSpring({
    backgroundColor: isOverlayVisible ? 'rgba(0, 0, 0, 0.80)' : 'rgba(0, 0, 0, 1)',
    config: { ...config.molasses, duration: 800 }
  });

  const handleLinkedinButtonClick = () => {
    window.open('https://www.linkedin.com/in/germanandino/', '_blank');
  };

  return {
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
  };
};