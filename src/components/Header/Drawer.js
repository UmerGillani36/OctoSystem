import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';
import classes from './Drawer.module.css';
import Nav from 'react-bootstrap/Nav';

const Header = ({ logo }) => {
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const headerClassName =
    location.pathname === '/' ? 'home-header' : 'other-header';

  const [selected, setSelected] = useState('');

  const selectedLang = (val) => {
    i18n.changeLanguage(val);
  };

  const [isChanged, setIsChanged] = useState(false);

  const handleClick = () => {
    setIsChanged(!isChanged);
  };


  return (
    <header className={headerClassName}>
        <div>
      <div className={`${classes.container} ${isChanged ? `${classes.change}` : ''}`} onClick={handleClick}>
        <div className={classes.bar1}></div>

        <div className={classes.bar1}></div>
        <div className={classes.bar1}></div>
        <Nav className={classes.nav}>
          <ul className={classes.navLinks}>
            <li>
              <NavLink to="/">{t('Header:home')}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{t('Header:about')}</NavLink>
            </li>
            <li>
              <NavLink to="/solutions">{t('Header:solution')}</NavLink>
            </li>
            <li>
              <NavLink to="/soho">{t('Header:soho')}</NavLink>
            </li>
            <li>
              <NavLink to="/partnership">{t('Header:partnership')}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t('Header:contact')}</NavLink>
            </li>
          </ul>
          <div className={classes.navLinks}>
            <ReactFlagsSelect
              countries={['US', 'BR']}
              customLabels={{ US: 'English', BR: 'Portuguese' }}
              showSelectedLabel={true}
              placeholder="Select Language"
              selectedSize={14}
              optionsSize={14}
              selectButtonClassName={classes.select}
              className={classes.selectContainer}
              selected={selected}
              onSelect={(code) => {
                setSelected(code);
                if (code === 'BR') {
                  selectedLang('br');
                } else {
                  selectedLang('en');
                }
              }}
              
            />
          </div>
        </Nav>
      </div>
    </div>
    </header>
  );
};

export default Header;
