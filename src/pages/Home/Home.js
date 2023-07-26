import React, { useEffect } from 'react';
import config from '../../config.json';
import classes from './Home.module.css';
import Demo from './components/Demo/Demo';
import OfferDetails from './components/OfferDetails/OfferDetails';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import Footer from '../../components/Footer/Footer';
import SatisfactionDetails from './components/SatisfactionDetails/SatisfactionDetails';
import Header from './components/Header/Header';
import { useTranslation } from 'react-i18next';
function Home() {

  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t('Header:home')} - ${config.title}`;
  }, [t]);

  return (
    <div className={classes.homeContainer}>
      <Header/>
      <OfferDetails />
      <CompanyDetails />
      <Demo />
      <SatisfactionDetails />
      <div className={classes.navigationContainer}>
        <div className={classes.navigationCard}>
          <img
            className={classes.navigationImage}
            src={
              'https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041864.jpg'
            }
            alt={'Featured'}
          />
        </div>
        <div className={classes.navigationCard}>
          <img
            className={classes.navigationImage}
            src={
              'https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg'
            }
            alt={'Featured'}
          />
        </div>
        <div className={classes.navigationCard}>
          <img
            className={classes.navigationImage}
            src={
              'https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041842.jpg'
            }
            alt={'Featured'}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
