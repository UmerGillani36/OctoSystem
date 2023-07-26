import React from 'react';
import classes from './Header.module.css';
import bgimage from '../../../../assets/about_bg.jpeg';
import { useTranslation } from 'react-i18next';
const Header = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div>
      <div className={classes.backgroundImgWrapper}>
        <img alt="background" className={classes.img} src={bgimage} />
      </div>
      <div className={classes.col1}>
      <div className={classes.content}>
        <h1 className={classes.headingType}>{t('About:header_heading')}</h1>
        <span className={classes.bodyType}>{t('About:header_content')}</span>
      </div>
      </div>
    </div>
  );
};

export default Header;
