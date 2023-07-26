import React from 'react';
import styles from './Details.module.css';
import detail1 from '../../../../assets/Partnership/Details/detail1.webp'
import detail2 from '../../../../assets/Partnership/Details/detail2.webp'
import detail3 from '../../../../assets/Partnership/Details/detail3.webp'

import { useTranslation } from 'react-i18next';

const Details = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.mainContainer}>
            <div className={styles.detailsContainer}>
                <div className={styles.leftSection}>
                    <h1 className={styles.heading}>{t('Partnership:detail1_heading')}</h1>
                    <p className={styles.typeBody}>{t('Partnership:detail1_content')}</p>
                </div>
                <div className={styles.rightSection}>
                    <img src={detail1} alt="Y1" />
                </div>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.leftSection}>
                <img src={detail2} alt="Y2" />
                </div>
                <div className={styles.rightSection}>
                <h1 className={styles.heading}>{t('Partnership:detail2_heading')}</h1>
                    <p className={styles.typeBody}>{t('Partnership:detail2_content')}</p>
                </div>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.leftSection}>
                    <h1 className={styles.heading}>{t('Partnership:detail3_heading')}</h1>
                    <p className={styles.typeBody}>{t('Partnership:detail3_content')}</p>
                </div>
                <div className={styles.rightSection}>
                    <img src={detail3} alt="Y3" />
                </div>
            </div>
        </div>
    );
};

export default Details;
