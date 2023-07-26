import React from 'react';
import classes from './Benefits.module.css';
import { useTranslation } from 'react-i18next';
// import benefitsCover from './../../../../assets/Solutions/benefitsCover.jpeg';

function Benefits() {
  const { t } = useTranslation();

  const benefitsDetails = [
    {
      heading: t('Solutions:headingBox1'),
      items: [
        t('Solutions:item1Box1'),
        t('Solutions:item2Box1'),
        t('Solutions:item3Box1'),
        t('Solutions:item4Box1'),
        t('Solutions:item5Box1'),
        t('Solutions:item6Box1'),
      ],
    },
    {
      heading: t('Solutions:headingBox2'),
      items: [
        t('Solutions:item1Box2'),
        t('Solutions:item2Box2'),
        t('Solutions:item3Box2'),
        t('Solutions:item4Box2'),
      ],
    },
    {
      heading: t('Solutions:headingBox3'),
      items: [
        t('Solutions:item1Box3'),
        t('Solutions:item2Box3'),
        t('Solutions:item3Box3'),
        t('Solutions:item4Box3'),
      ],
    },
    {
      heading: t('Solutions:headingBox4'),
      items: [
        t('Solutions:item1Box4'),
        t('Solutions:item2Box4'),
        t('Solutions:item3Box4'),
      ],
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.backgroundImgWrapper}>
        <h2 className={classes.heading}>{t('Solutions:BenefitsHeading')}</h2>
        <div className={classes.contentSection}>
          {benefitsDetails.map((value, index) => (
            <div key={index} className={classes.benefitsCard}>
              <h3 className={classes.cardHeading}>{value.heading}</h3>
              <ul className={classes.cardList}>
                {value.items.map((item, itemIndex) => (
                  <li key={itemIndex} className={classes.cardListItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;
