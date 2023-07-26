import React from 'react'
import classes from './AccessControl.module.css';
import { useTranslation } from 'react-i18next';  

const Card=({heading, description})=>{
    return (
        <div className={classes.card}>
            <h1 className={classes.cardHeading}>{heading}</h1>
            <p className={classes.cardBody}>{description}</p>
        </div>
    )
}
const AccessControl = () => {
    const { t } = useTranslation();
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>{t('SOHO:access_control_h1')}</h1>
            <h2 className={classes.subHeading}>{t('SOHO:access_control_h2')}</h2>
            <div className={classes.grid}>
                <Card heading={t('SOHO:access_control_card1_heading')} description={t('SOHO:access_control_card1_content')}/>
                <Card heading={t('SOHO:access_control_card2_heading')} description={t('SOHO:access_control_card2_content')}/>
                <Card heading={t('SOHO:access_control_card3_heading')} description={t('SOHO:access_control_card3_content')}/>
            </div>
        </div>
    </div>
  )
}

export default AccessControl