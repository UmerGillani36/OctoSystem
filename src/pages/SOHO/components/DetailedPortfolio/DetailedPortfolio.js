import React from 'react'
import classes from './DetailedPortfolio.module.css';
import icon2 from '../../../../assets/SOHO/icons/icon-02.png';
import icon3 from '../../../../assets/SOHO/icons/icon-03.png';
import icon6 from '../../../../assets/SOHO/icons/icon-06.png';
import icon7 from '../../../../assets/SOHO/icons/icon-07.png';
import batteryIcon from '../../../../assets/SOHO/icons/batteryIcon.png';
import mobIcon from '../../../../assets/SOHO/icons/mobIcon.png';
import iphone3 from '../../../../assets/SOHO/iphone3.png';
import mac from '../../../../assets/SOHO/mac.png';
import { useTranslation } from 'react-i18next';

const Card = ({ icon, title, description }) => {
  return (
    <div className={classes.card}>
      <div className={classes.iconContainer}>
        <img src={icon} loading='lazy' alt={title} className={classes.icon} />
      </div>
      <h1 className={classes.cardHeading}>{title}</h1>
      <p className={classes.body}>{description}</p>
    </div>
  )
}
const DetailedPortfolio = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.portfolio}>
      <div className={classes.wrapper}>
        <h4 className={classes.h4}>{t('SOHO:detailed_portfolio_small_heading')}</h4>
        <h1 className={classes.h1}>{t('SOHO:detailed_portfolio_heading')} </h1>
        <p className={classes.p}>
          {t('SOHO:detailed_portfolio_content')}
        </p>
        <div className={classes.grid}>
          <Card icon={icon6} title={t('SOHO:detailed_portfolio_card1_heading')} description={t('SOHO:detailed_portfolio_card1_content')} />
          <Card icon={mobIcon} title={t('SOHO:detailed_portfolio_card2_heading')} description={t('SOHO:detailed_portfolio_card2_content')} />
          <Card icon={icon2} title={t('SOHO:detailed_portfolio_card3_heading')} description={t('SOHO:detailed_portfolio_card3_content')} />
          <Card icon={icon3} title={t('SOHO:detailed_portfolio_card4_heading')} description={t('SOHO:detailed_portfolio_card4_content')} />
          <Card icon={batteryIcon} title={t('SOHO:detailed_portfolio_card5_heading')} description={t('SOHO:detailed_portfolio_card5_content')} />
          <Card icon={icon7} title={t('SOHO:detailed_portfolio_card6_heading')} description={t('SOHO:detailed_portfolio_card6_content')} />
        </div>
        <div className={classes.detailsWrapper}>
          <div className={classes.content}>
            <span className={classes.list}>{t('SOHO:detailed_portfolio_line1')}</span>
            <span className={classes.list}>{t('SOHO:detailed_portfolio_line2')}</span>
            <span className={classes.list}>{t('SOHO:detailed_portfolio_line3')}</span>
            <span className={classes.list}>{t('SOHO:detailed_portfolio_line4')}</span>
            <span className={classes.list}>{t('SOHO:detailed_portfolio_line5')}</span>
          </div>
          <div className={classes.imageContainer}>
            <div className={classes.macContainer}>
              <img src={mac} loading='lazy' alt='Mac' className={classes.mac} />
            </div>
            <img className={classes.iphone3} src={iphone3} loading='lazy' alt='iphone3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedPortfolio