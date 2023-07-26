import React from 'react';
import classes from './CustomizeSolution.module.css';
import logo from '../../../../assets/SOHO/logo-ppp.webp'
import image from '../../../../assets/SOHO/securityShield.webp'
import secondRowImage from '../../../../assets/SOHO/rgd.png'
import { useTranslation } from 'react-i18next';

const CustomizeSolution = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.firstRow}>
                    <div className={classes.content}>
                        <h1 className={classes.heading}>{t('SOHO:customize_solution_heading')}</h1>
                        <p className={classes.body}>{t('SOHO:customize_solution_content')}</p>
                        <div className={classes.logoContainer}>
                            <img src={logo} loading='lazy' alt='logo' className={classes.logo} />
                            <h2 className={classes.subHeading}>{t('SOHO:customize_solution_logo_alt')}</h2>
                        </div>
                    </div>
                    <div className={classes.imageContainer}>
                        <img src={image} loading='lazy' alt='featured' className={classes.image} />
                    </div>
                </div>
                <div className={classes.secondRow}>
                    <img src={secondRowImage} loading='lazy' alt='featured second' className={classes.secondRowImage} />
                </div>
            </div>
        </div>
    )
}

export default CustomizeSolution