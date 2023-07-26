import React from 'react'
import classes from './Approval.module.css';
import image from '../../../../assets/SOHO/rtt.png';
import { useTranslation } from 'react-i18next';
const Approval = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <img src={image} loading='lazy' alt='featured ' className={classes.image} />
        </div>
        <div className={classes.content}>
          <h1 className={classes.heading}>{t('SOHO:approval_heading')}</h1>
          <p className={classes.body}>{t('SOHO:approval_content')}</p>
        </div>
      </div>
    </div>
  )
}

export default Approval