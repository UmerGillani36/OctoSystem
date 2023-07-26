import React from 'react';
import { icons } from '../../../../resources/icons';
import classes from './AddressDetails.module.css';
import { useTranslation } from 'react-i18next';
const AddressDetails = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>{t('Contact:address_detail_h1')}</h1>
        <p>{t('Contact:address_detail_p1')}</p>
        <div className={classes.addressContainer}>
          <div className={classes.card}>
            <div className={classes.iconContainer}>
              <span>{icons.locationIcon}</span>
            </div>
            <h1>{t('Contact:address_detail_EUH')}</h1>
            <address>{t('Contact:address_detail_EUP')}</address>
          </div>
          <div className={classes.card}>
            <div className={classes.iconContainer}>
              <span>{icons.locationIcon}</span>
            </div>
            <h1>{t('Contact:address_detail_BRH')}</h1>
            <address>{t('Contact:address_detail_BRP')}</address>
          </div>
          <div className={classes.card}>
            <div className={classes.iconContainer}>
              <span>{icons.envelopeIcon}</span>
            </div>
            <h1>{t('Contact:address_detail_email_t')}</h1>
            <address>{t('Contact:address_detail_email')}</address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
