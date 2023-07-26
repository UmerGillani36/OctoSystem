import React from 'react';
import classes from './Header.module.css';
import bgimage from '../../../../assets/Partnership/collaborations.webp';
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
          <span className={classes.bodyType}>{t('Partnership:hh1')}</span>
          <h1 className={classes.headingType}>{t('Partnership:hh2')}</h1>
          <span className={classes.bodyType}>{t('Partnership:hh3')}</span>
        </div>
      </div>
    </div>
  );
};

 
export default Header;
