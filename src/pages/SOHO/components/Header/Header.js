import React from 'react';
import classes from './Header.module.css';
import bgimage from '../../../../assets/SOHO/soho_bg.webp';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div>
      <div className={classes.backgroundImgWrapper}>
        <img alt="background" className={classes.img} src={bgimage} loading='lazy' />
      </div>
      <div className={classes.col1}>
        <div className={classes.content}>
          <h1 className={classes.headingType}>{t('SOHO:header_heading')}</h1>
          <span className={classes.bodyType}>{t('SOHO:header_content_1')}</span>
          <span className={classes.bodyType}>
            {t('SOHO:header_content_2')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
