import React, { useEffect } from 'react';
import config from '../../config.json';
import Footer from '../../components/Footer/Footer';
import Header from './components/Header/Header';
import Technology from './components/Technology/Technology';
import Benefits from './components/Benefits/Benefits';
import Details from './components/Details/Details';
import Features from './components/Features/Features';
import { useTranslation } from 'react-i18next';
import Models from './components/Models/Models';
import classes from './Solutions.module.css'
function Solutions() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t('Header:solution')} - ${config.title}`;
  }, [t]);

  return (
    <div className={classes.solutionsContainer}>
      <Header />
      <Technology />
      <Benefits />
      <Details />
      <Features />
      <Models />
      {/* Add your content here */}
      <Footer />
    </div>
  );
}

export default Solutions;
