import React, { useState } from 'react';
import classes from './Scroll.module.css';

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowButton(scrollTop > 100); // Show the button when scrolling down more than 100px
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${classes.scrollButton} ${showButton ? classes.showButton : ''}`}
      onClick={scrollToTop}
    >
      <span className={classes.arrow}></span>
    </button>
  );
};

export default Scroll;
