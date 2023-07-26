import React from 'react'
import classes from './Setup.module.css';
import oct from '../../../../assets/SOHO/oct.png';
import bar from '../../../../assets/SOHO/bar-cc.png';
import { icons } from '../../../../resources/icons';
import { useTranslation } from 'react-i18next';

const Setup = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.col1}>
                    <h2 className={classes.heading}>{t('SOHO:setup_top')}</h2>
                    <div className={classes.imageContainer}>
                        <img src={bar} loading='lazy' alt='bar' className={classes.image} />
                    </div>
                </div>
                <div className={classes.col2}>
                    <div className={classes.imageContainer}>
                        <img src={oct} loading='lazy' alt='oct' className={classes.image} />
                        <div className={classes.grid}>
                            <div className={classes.card}>
                                <div className={classes.icon}>{icons.wifiIcon}</div>
                                <h1 className={classes.heading}>{t('SOHO:setup_wifi1')}<span className={classes.blue}>{t('SOHO:setup_wifi2')}</span></h1>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.icon}>{icons.cloudIcon}</div>
                                <h1 className={classes.heading}><span className={classes.blue}>{t('SOHO:setup_cloud')}</span></h1>
                            </div>
                            <div className={classes.card}>
                                <div className={classes.icon}>{icons.chartBarIcon}</div>
                                <h1 className={classes.heading}>{t('SOHO:setup_4g1')}<span className={classes.blue}>{t('SOHO:setup_4g2')}</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setup