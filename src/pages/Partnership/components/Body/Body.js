import React from 'react';
import Card from '../Card/Card';
import { useTranslation } from 'react-i18next';
import classes from './Body.module.css';

const Body = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <h1 className={classes.heading}>{t('Partnership:heading')}</h1>
      <h2 className={classes.subHeading}>{t('Partnership:subheading')}</h2>

      <div className={classes.grid}>
        <Card heading={t('Partnership:card1_heading')} content={t('Partnership:card1_content')} />
        <Card heading={t('Partnership:card2_heading')} content={t('Partnership:card2_content')} />
        <Card heading={t('Partnership:card3_heading')} content={t('Partnership:card3_content')} />
         <Card heading={t('Partnership:card4_heading')} content={t('Partnership:card4_content')} />
        <Card heading={t('Partnership:card5_heading')} content={t('Partnership:card5_content')} />
        <Card heading={t('Partnership:card6_heading')} content={t('Partnership:card6_content')} />
      </div>
      </div>
    </div>
  );
};

export default Body;
