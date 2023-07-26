import React from 'react';
import classes from './Features.module.css';
import { useTranslation } from 'react-i18next';
import icon1 from './../../../../assets/Solutions/icon-01.png';
import icon2 from './../../../../assets/Solutions/icon-02.png';
import icon3 from './../../../../assets/Solutions/icon-03.png';
import icon4 from './../../../../assets/Solutions/icon-04.png';
import icon5 from './../../../../assets/Solutions/icon-05.png';
import icon6 from './../../../../assets/Solutions/icon-06.png';
import icon7 from './../../../../assets/Solutions/icon-07.png';
import icon8 from './../../../../assets/Solutions/icon-08.png';
import icon9 from './../../../../assets/Solutions/icon-09.png';
import icon10 from './../../../../assets/Solutions/icon-10.png';
import icon11 from './../../../../assets/Solutions/icon-11.png';
import icon12 from './../../../../assets/Solutions/icon-12.png';

function Features() {
  const { t } = useTranslation();

  const features = [
    {
      heading: t('Solutions:featuresTitle1'),
      icon: icon1,
    },
    {
      heading: t('Solutions:featuresTitle2'),
      icon: icon2,
    },
    {
      heading: t('Solutions:featuresTitle3'),
      icon: icon3,
    },
    {
      heading: t('Solutions:featuresTitle4'),
      icon: icon4,
    },
    {
      heading: t('Solutions:featuresTitle5'),
      icon: icon5,
    },
    {
      heading: t('Solutions:featuresTitle6'),
      icon: icon6,
    },
    {
      heading: t('Solutions:featuresTitle7'),
      icon: icon7,
    },
    {
      heading: t('Solutions:featuresTitle8'),
      icon: icon8,
    },
    {
      heading: t('Solutions:featuresTitle9'),
      icon: icon9,
    },
    {
      heading: t('Solutions:featuresTitle10'),
      icon: icon10,
    },
    {
      heading: t('Solutions:featuresTitle11'),
      icon: icon11,
    },
    {
      heading: t('Solutions:featuresTitle12'),
      icon: icon12,
    },
  ];


  return (
    <div className={classes.container}>
      <div className={classes.backgroundImgWrapper}>
        <h2 className={classes.heading}>{t('Solutions:featuresHeading')}</h2>
        <div className={classes.contentSection}>
          {features.map((value, index) => (
            <div key={index} className={classes.featuresCard}>
              <div className={classes.cardIcon}>
                <img
                  loading='lazy'
                  src={value.icon}
                  alt="icon"
                  className={classes.iconImage}
                />
              </div>
              <h3 className={classes.cardHeading}>{value.heading}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
