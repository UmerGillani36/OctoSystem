import React from 'react';
import classes from './Card.module.css';

const Card = ({ heading, content }) => {
  return (
    <div className={classes.card}>
      <h3 className={classes.cardHeading}>{heading}</h3>
      <p className={classes.cardContent}>{content}</p>
    </div>
  );
}

export default Card;
