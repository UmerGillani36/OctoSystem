import React from 'react';
import styles from './Card.module.css';

const Card = ({ logo, heading, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Card Logo" className={styles.logo} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.heading}>{heading}</h3>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};

export default Card;
