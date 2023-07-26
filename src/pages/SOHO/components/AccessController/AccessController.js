import React from 'react'
import classes from './AccessController.module.css';
import sideImage from '../../../../assets/SOHO/side.png'
import { useTranslation } from 'react-i18next';
const AccessController = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.heading}>{t('SOHO:access_controller_heading')}</h1>
          <p className={classes.body}>{t('SOHO:access_controller_content')}</p>
        </div>
        <div className={classes.imageContainer}>
          <img src={sideImage} loading='lazy' alt='side featured' className={classes.image} />
        </div>
      </div>
    </div>
  )
}

export default AccessController