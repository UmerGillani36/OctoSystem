import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Demo.module.css';
import { useNavigate } from 'react-router-dom';
const Demo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.elementorWidgetContainer}>
        <h2 className={classes.elementorHeadingTitle}>{t('Demo:heading')}</h2>
        <div className={classes.elementorButtonContainer}>
          <span className={classes.elementorButtonLink}>
            <span className={classes.elementorButtonWrapper}>
              <span className={classes.elementorButtonText} onClick={()=> navigate('/contact')}>
                {t('Demo:button')}
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Demo;
