import React, { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import config from '../../config.json';
import Header from './components/Header/Header';
import { useTranslation } from 'react-i18next';
import Portfolio from './components/Portfolio/Portfolio';
import AccessControl from './components/AccessControl/AccessControl';
import AccessController from './components/AccessController/AccessController';
import Control from './components/Control/Control';
import FeaturedTable from './components/Tables/FeaturedTable/FeaturedTable';
import PricingTable from './components/Tables/PricingTable/PricingTable';
import Approval from './components/Approval/Approval';
import CustomizeSolution from './components/CustomizeSolution/CustomizeSolution';
import DetailedPortfolio from './components/DetailedPortfolio/DetailedPortfolio';
import Setup from './components/Setup/Setup';
import About from './components/About/About';
import classes from './SOHO.module.css'
function SOHO() {

  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t('Header:soho')} - ${config.title}`;
  }, [t]);

  return (
    <div className={classes.sohoContainer}>
      <Header />
      <Portfolio/>
      <AccessControl/>
      <AccessController/>
      <Control/>
      <FeaturedTable/>
      <PricingTable/>
      <Approval/>
      <CustomizeSolution/>
      <Setup/>
      <DetailedPortfolio/>
      <About/>
      <Footer />
    </div>
  );
}

export default SOHO;
