import React, { useEffect } from 'react';
import config from '../../config.json';
import Footer from '../../components/Footer/Footer';
import classes from './Partnership.module.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Details from './components/Details/Details';
import Alerter from './components/Alerter/Alerter';
import { useTranslation } from 'react-i18next';

function Partnership() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t('Header:partnership')} - ${config.title}`;
  }, [t]);

  return (
    <div className={classes.partnershipContainer}>
      <Header />
      <Body />
      <div className={classes.detailContainer}>
        <Details />
      </div>
      <Alerter />
      <Footer />
    </div>
  );
}

export default Partnership;
