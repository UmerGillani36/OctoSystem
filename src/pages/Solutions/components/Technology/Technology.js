import React from 'react';
import classes from './Technology.module.css';
import { useTranslation } from 'react-i18next';
import nlpImage from './../../../../assets/NLP1.png';
import iconBg from './../../../../assets/Solutions/icon_BG.png';

function Technology() {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.imageSection}>
        <h2 className={classes.technologyHeading}>
          {t('Solutions:TechnologyHeading')}
        </h2>
        <div className={classes.imageBox}>
          <img src={nlpImage} alt='nlp pic' />
        </div>
      </div>
      <div className={classes.contentSection}>
        <div className={classes.sectionOne}>
          <div className={classes.icon}>
            <img src={iconBg} alt='bg' />
            {t('Solutions:TechnologySection1Icon')}
          </div>
          <div className={classes.title}>
            {t('Solutions:TechnologySection1Title')}
          </div>
          <div className={classes.body}>
            {t('Solutions:TechnologySection1Body')}
          </div>
        </div>
        <div className={classes.sectionTwo}>
          <div className={classes.icon}>
            <img src={iconBg} alt='bg' />
            {t('Solutions:TechnologySection2Icon')}
          </div>
          <div className={classes.title}>
            {' '}
            {t('Solutions:TechnologySection2Title')}
          </div>
          <div className={classes.body}>
            {' '}
            {t('Solutions:TechnologySection2Body')}
          </div>
        </div>
        <div className={classes.sectionThree}>
          <div className={classes.icon}>
            <img src={iconBg} alt='bg' />
            {t('Solutions:TechnologySection3Icon')}
          </div>
          <div className={classes.title}>
            {' '}
            {t('Solutions:TechnologySection3Title')}
          </div>
          <div className={classes.body}>
            {' '}
            {t('Solutions:TechnologySection3Body')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
