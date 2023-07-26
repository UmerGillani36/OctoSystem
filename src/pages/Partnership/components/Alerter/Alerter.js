import React from 'react';
import styles from './Alerter.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Alerter = () => {
  const { t } = useTranslation();
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h2 className={styles.heading}>{t('Partnership:alerterHeading')}</h2>
            <p className={styles.subheading}>{t('Partnership:alerterContent')}</p>
          </div>
          <Link to="/contact" className={styles.contactButton}>{t('Partnership:alerterContact')}</Link>
        </div>
      </footer>
    </div>
  );
};

export default Alerter;
