import React from 'react';
import classes from './Details.module.css';
import { useTranslation } from 'react-i18next';
import detailsCover from './../../../../assets/Solutions/details.png';

function Details() {
  const { t } = useTranslation();

  const details = [
    {
      detailsHeading: t('Solutions:detailsHeading1'),
      detailsDescription: t('Solutions:detailsDescription1'),
    },
    {
      detailsHeading: t('Solutions:detailsHeading2'),
      detailsDescription: t('Solutions:detailsDescription2'),
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.col1}>
        <img src={detailsCover} alt="section" className={classes.bgImage} />
      </div>
      <div className={classes.col2}>
        {details.map((value, index) => (
          <div key={index} className={classes.detailsBox}>
            <h3 className={classes.detailsHeading}>{value.detailsHeading}</h3>
            <div className={classes.detailsDescription}>
              {value.detailsDescription}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
