import React from 'react';
import classes from './Header.module.css';
import bgimage from '../../../../assets/Solutions/sol_bg.jpeg';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.overlay}></div>
      <div className={classes.backgroundImgWrapper}>
        <img alt="background" className={classes.img} src={bgimage} />
      </div>

      {/* <div className={classes.col1}> */}
      <div className={classes.content}>
        <h1 className={classes.headingType}>{t('Solutions:heading')}</h1>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Header;
