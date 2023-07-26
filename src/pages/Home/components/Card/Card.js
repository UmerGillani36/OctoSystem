import React from 'react';
import classes from './Card.module.css';
const Card = ({ url, logo, title }) => {
  return (
    <div className={classes.card} style={{ background: `url(${url})` }}>
      <div className={classes.cardContent}>
        <img loading='lazy' src={logo} className={classes.cardLogo} alt="Card Logo" />
        <h3 className={classes.cardTitle}>{title}</h3>
      </div>
    </div>
  );
};
export default Card;
