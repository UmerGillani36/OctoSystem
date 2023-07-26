import React from 'react';
import classes from './Portfolio.module.css';
import icon1 from '../../../../assets/SOHO/icons/icon-01.png';
import icon2 from '../../../../assets/SOHO/icons/icon-02.png';
import icon3 from '../../../../assets/SOHO/icons/icon-03.png';
import icon4 from '../../../../assets/SOHO/icons/icon-04.png';
import icon5 from '../../../../assets/SOHO/icons/icon-05.png';
import icon6 from '../../../../assets/SOHO/icons/icon-06.png';
import icon7 from '../../../../assets/SOHO/icons/icon-07.png';
import icon8 from '../../../../assets/SOHO/icons/icon-08.png';
import { useTranslation } from 'react-i18next';

const Card = ({ icon, title }) => {
  return (
    <div className={classes.card}>
      <div className={classes.iconContainer}>
        <img src={icon} loading='lazy' alt={title} className={classes.icon} />
      </div>
      <h1 className={classes.cardHeading}>{title}</h1>
    </div>
  )
}

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.portfolio}>
      <div className={classes.wrapper}>
        <h4 className={classes.h4}>{t('SOHO:portfolio_small_heading')}</h4>
        <h1 className={classes.h1}>{t('SOHO:portfolio_heading')}</h1>
        <p className={classes.p}>
          {t('SOHO:portfolio_content')}
        </p>
        <div className={classes.grid}>
          <Card icon={icon1} title={t('SOHO:portfolio_card1')} />
          <Card icon={icon2} title={t('SOHO:portfolio_card2')} />
          <Card icon={icon3} title={t('SOHO:portfolio_card3')} />
          <Card icon={icon4} title={t('SOHO:portfolio_card4')} />
          <Card icon={icon5} title={t('SOHO:portfolio_card5')} />
          <Card icon={icon6} title={t('SOHO:portfolio_card6')} />
          <Card icon={icon7} title={t('SOHO:portfolio_card7')} />
          <Card icon={icon8} title={t('SOHO:portfolio_card8')} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
