import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './CompanyDetails.module.css';
import { icons } from '../../../../resources/icons';

const Card = ({ icon, heading, body }) => {
  return (
    <div className={classes.card}>
      <div className={classes.col1}>
        <span className={classes.cardIcon}>{icon}</span>
      </div>
      <div className={classes.col2}>
        <h3 className={classes.cardHeading}>{heading}</h3>
        <p className={classes.cardBody}>{body}</p>
      </div>
    </div>
  );
};
const Fact = ({ heading, status, icon }) => {
  return (
    <div className={classes.factContent}>
      <span className={classes.factHeading}>
        {heading}
        {icon && <span className={classes.factIcon}>{icon}</span>}
      </span>
      <span className={classes.factStatus}>{status}</span>
    </div>
  );
};
const CompanyDetails = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.contentDetails}>
          <h2 className={classes.typeHeading}>{t('CompanyDetails:heading')}</h2>
          <p className={classes.typeBody}>{t('CompanyDetails:description')}</p>
          <Card
            icon={icons.cardIconOne}
            heading={t('CompanyDetails:headingOne')}
            body={t('CompanyDetails:bodyOne')}
          />
          <Card
            icon={icons.cardIconTwo}
            heading={t('CompanyDetails:headingTwo')}
            body={t('CompanyDetails:bodyTwo')}
          />
        </div>
        <div className={classes.contentImage}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100%'
            // height="542"
            viewBox='0 0 712 542'
          >
            <defs>
              <style>
                {`.cls-1 {
            fill-rule: evenodd;
          }`}
              </style>
            </defs>
            <clipPath id='clipShape2'>
              <path className='item__clippath' d=''></path>
              <path fill='' d=''>
                <animate
                  repeatCount='indefinite'
                  attributeName='d'
                  dur='3s'
                  values='M405,0C562.4,0,854.441,272.758,630,365,456.674,436.234,481.068,563.915,325,539-158.454,461.819,7,5.4,129,57,273.968,118.313,247.6,0,405,0Z;M405,0C570.256,4.24,832.675,201.341,647.272,374.324,540.822,473.644,481.068,563.915,325,539-158.454,461.819,7,105.4,129,57,275.308-1.045,247.651-4.039,405,0Z;M405,0C562.4,0,854.441,272.758,630,365,456.674,436.234,481.068,563.915,325,539-158.454,461.819,7,5.4,129,57,273.968,118.313,247.6,0,405,0Z'
                ></animate>
              </path>
            </clipPath>
            <g className='item__deco'>
              <use xlinkHref='#deco2'></use>
            </g>
            <g clipPath='url(#clipShape2)'>
              <image
              alt='anime'
                loading='lazy'
                className='item__img'
                xlinkHref='https://client.creativesaura.com/octo/wp-content/uploads/2020/11/imagecoverpng.jpg'
                x='0'
                y='-99'
                height='800px'
                width='800px'
              ></image>
            </g>
          </svg>
        </div>
      </div>
      <div className={classes.facts}>
        <Fact
          heading={'250'}
          status={t('CompanyDetails:status1')}
          icon={false}
        />
        <Fact heading={'400'} status={t('CompanyDetails:status2')} icon={'+'} />
        <Fact heading={'100'} status={t('CompanyDetails:status3')} icon={'%'} />
      </div>
    </div>
  );
};

export default CompanyDetails;
