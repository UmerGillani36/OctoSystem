import React, { useEffect } from 'react';
import config from '../../config.json';
import Footer from '../../components/Footer/Footer';
import Header from './components/Header/Header';
import classes from './About.module.css';
import Body from './components/Body/Body';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t('Header:about')} - ${config.title}`;
  }, [t]);

  return (
    <div className={classes.aboutContainer}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default About;
