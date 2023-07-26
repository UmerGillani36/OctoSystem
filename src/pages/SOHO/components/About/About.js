import React from 'react'
import classes from './About.module.css';
import oct from '../../../../assets/SOHO/oct.png'
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h5 className={classes.typeHeading}>{t('SOHO:about_small_heading')}</h5>
          <h1 className={classes.heading}>{t('SOHO:about_heading')}</h1>
          <p className={classes.body}>{t('SOHO:about_line1')}</p>
          <p className={classes.body}>{t('SOHO:about_line2')}</p>
          <p className={classes.body}>{t('SOHO:about_line3')}</p>
          <p className={classes.body}>{t('SOHO:about_line4')}</p>
        </div>
        <div className={classes.imageContainer}>
          <img src={oct} loading='lazy' alt='featured' className={classes.image} />
        </div>
      </div>
    </div>
  )
}

export default About