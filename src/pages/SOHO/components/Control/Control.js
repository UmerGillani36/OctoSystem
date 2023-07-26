import React from 'react'
import classes from './Control.module.css';
import mac from '../../../../assets/SOHO/mac.png';
import iphone3 from '../../../../assets/SOHO/iphone3.png';
import { useTranslation } from 'react-i18next';
const Control = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <div className={classes.macContainer}>
            <img src={mac} loading='lazy' alt='Mac' className={classes.mac} />
          </div>
          <img className={classes.iphone3} src={iphone3} loading='lazy' alt='iphone3' />
        </div>
        <div className={classes.content}>
          <h1 className={classes.heading}>{t('SOHO:control_heading')}</h1>
          <p className={classes.body}>{t('SOHO:control_content')}</p>
        </div>
      </div>
    </div>
  )
}

export default Control