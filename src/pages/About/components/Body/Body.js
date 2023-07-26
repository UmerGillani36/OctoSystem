import React from 'react';
import Card from '../Card/Card';
import styles from './Body.module.css';
import card1 from '../../../../assets/About/vector.svg';
import card2 from '../../../../assets/About/vector2.svg';
import card3 from '../../../../assets/About/vector3.svg';
import card4 from '../../../../assets/About/vector4.svg';
import side_image from '../../../../assets/About/right.jpg';
import { useTranslation } from 'react-i18next';

const Body = () => {
  const { t } = useTranslation();
  const cardsData = [
    {
      logo: card1,
      heading: t('About:card1heading'),
      content: t('About:card1content'),
    },
    {
      logo: card2,
      heading: t('About:card2heading'),
      content: t('About:card2content'),
    },
    {
      logo: card3,
      heading: t('About:card3heading'),
      content: t('About:card3content'),
    },
    {
      logo: card4,
      heading: t('About:card4heading'),
      content: t('About:card4content'),
    },
  ];

  return (
    <div className={styles.headingContainer}>
      <div className={styles.wrapper}>
      <div className={styles.info}>
        <h1 className={styles.heading}>{t('About:body_heading')}</h1>
        <span className={styles.content}>{t('About:body_content')}</span>
      </div>

      <div className={styles.container}>
        <div className={`${styles.cardsContainer} ${styles.center}`}>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              logo={card.logo}
              heading={card.heading}
              content={card.content}
            />
          ))}
        </div>
        <div className={`${styles.imageContainer} ${styles.center}`}>
          <img
            src={side_image}
            alt='Background'
            className={styles.backgroundImage}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Body;
