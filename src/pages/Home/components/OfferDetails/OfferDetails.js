import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../Card/Card';
import classes from './OfferDetails.module.css';
import card1_url from '../../../../assets/Home/offerdetails_card1_url.jpg';
import card1_logo from '../../../../assets/Home/offerdetails_card1_logo.jpg';
import card2_url from '../../../../assets/Home/offerdetails_card2_url.webp';
import card2_logo from '../../../../assets/Home/offerdetails_card2_logo.jpg';
import card3_url from '../../../../assets/Home/offerdetails_card3_url.webp';
import card3_logo from '../../../../assets/Home/offerdetails_card3_logo.png';
import card4_url from '../../../../assets/Home/offerdetails_card4_url.webp';
import card4_logo from '../../../../assets/Home/offerdetails_card4_logo.png';

const OfferDetails = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.offerContainer}>
      <div className={classes.offerContent}>
        <div className={classes.firstRow}>
          <h2 className={classes.typeHeading}>
            {t('Offer:heading1')}
            <br />
            {t('Offer:heading2')}
          </h2>
          <p className={classes.typeBody}>{t('Offer:description')}</p>
        </div>
        <div className={classes.secondRow}>
        <Card url={card1_url} logo={card1_logo} title={t('Offer:card1')} />
        <Card url={card2_url} logo={card2_logo} title={t('Offer:card2')} />
        <Card url={card3_url} logo={card3_logo} title={t('Offer:card3')} />
        <Card url={card4_url} logo={card4_logo} title={t('Offer:card4')} />
        </div>
      </div>
    </div>
  );
};
export default OfferDetails;
