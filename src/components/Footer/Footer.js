import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Footer.module.css';
import Logo from '../../octo38.jpg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerContent}>
        <div className={classes.footerLeft}>
          <p className={classes.headingType}>{t('Footer:heading')}</p>
        </div>
        <div className={classes.footerRight}>
          <p className={classes.linkHeading}>{t('Footer:linkText')}</p>
          <ul>
            <li>
              <a href='/'>{t('Footer:home')}</a>
            </li>
            <li>
              <a href='/about'>{t('Footer:about')}</a>
            </li>
            <li>
              <a href='/solutions'>{t('Footer:solution')}</a>
            </li>
            <li>
              <a href='/soho'>{t('Footer:soho')}</a>
            </li>
            <li>
              <a href='/partnership'>{t('Footer:partnership')}</a>
            </li>
            <li>
              <a href='/contact'>{t('Footer:contact')}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.footerBottom}>
        <p className={classes.footerBottomContent}>
          <span className={classes.companyEmail}></span>{' '}
          <img src={Logo} alt='Logo' className={classes.footerLogo} />
        </p>
        <p className={classes.copyRight}>
          {t('Footer:copyright')} &copy; {new Date().getFullYear()}{' '}
          {t('Footer:rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
