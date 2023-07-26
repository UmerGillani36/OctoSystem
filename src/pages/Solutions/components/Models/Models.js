import React from 'react';
import classes from './Models.module.css';
import { useTranslation } from 'react-i18next';
import icon1 from './../../../../assets/Solutions/octo-icon1.png';
import icon2 from './../../../../assets/Solutions/octo-icon2.png';
import image1 from './../../../../assets/Solutions/octo-control.jpeg';
import image2 from './../../../../assets/Solutions/octo-gateway.jpeg';
import image3 from './../../../../assets/Solutions/octo-appliance.jpeg';
import image4 from './../../../../assets/Solutions/octo-reader.jpeg';
import image5 from './../../../../assets/Solutions/octo-comm.jpeg';
import image6 from './../../../../assets/Solutions/octo-sensor.jpeg';

function Models() {
  const { t } = useTranslation();

  const features = [
    {
      heading: t('Solutions:modelBox1'),
      icon: icon1,
      image: image1,
      items: [
        t('Solutions:MnC_item1Box1'),
        t('Solutions:MnC_item2Box1'),
        t('Solutions:MnC_item3Box1'),
        t('Solutions:MnC_item4Box1'),
        t('Solutions:MnC_item5Box1'),
        t('Solutions:MnC_item6Box1'),
      ],
    },
    {
      heading: t('Solutions:modelBox2'),
      icon: icon1,
      image: image2,
      items: [
        t('Solutions:MnC_item1Box2'),
        t('Solutions:MnC_item2Box2'),
        t('Solutions:MnC_item3Box2'),
        t('Solutions:MnC_item4Box2'),
        t('Solutions:MnC_item5Box2'),
        t('Solutions:MnC_item6Box2'),
      ],
    },
    {
      heading: t('Solutions:modelBox3'),
      icon: icon1,
      image: image3,
      items: [
        t('Solutions:MnC_item1Box3'),
        t('Solutions:MnC_item2Box3'),
        t('Solutions:MnC_item3Box3'),
        t('Solutions:MnC_item4Box3'),
        t('Solutions:MnC_item5Box3'),
        t('Solutions:MnC_item6Box3'),
      ],
    },
    {
      heading: t('Solutions:modelBox4'),
      icon: icon2,
      image: image4,
      items: [
        t('Solutions:MnC_item1Box4'),
        t('Solutions:MnC_item2Box4'),
        t('Solutions:MnC_item3Box4'),
        t('Solutions:MnC_item4Box4'),
        t('Solutions:MnC_item5Box4'),
        t('Solutions:MnC_item6Box4'),
      ],
    },
    {
      heading: t('Solutions:modelBox5'),
      icon: icon2,
      image: image5,
      items: [
        t('Solutions:MnC_item1Box5'),
        t('Solutions:MnC_item2Box5'),
        t('Solutions:MnC_item3Box5'),
        t('Solutions:MnC_item4Box5'),
        t('Solutions:MnC_item5Box5'),
        t('Solutions:MnC_item6Box5'),
      ],
    },
    {
      heading: t('Solutions:modelBox6'),
      icon: icon2,
      image: image6,
      items: [
        t('Solutions:MnC_item1Box6'),
        t('Solutions:MnC_item2Box6'),
        t('Solutions:MnC_item3Box6'),
        t('Solutions:MnC_item4Box6'),
        t('Solutions:MnC_item5Box6'),
        t('Solutions:MnC_item6Box6'),
      ],
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.backgroundImgWrapper}>
        <h2 className={classes.heading}>{t('Solutions:modelsHeading')}</h2>
        <h2 className={classes.subHeading}>{t('Solutions:modelsSubHeading')}</h2>
        <div className={classes.contentSection}>
          {features.map((value, index) => (
            <div key={index} className={classes.featuresCard}>
              <div className={classes.cardIcon}>
                <img src={value.icon} loading='lazy' alt="icon" className={classes.iconImage} />
              </div>
              <h3 className={classes.cardHeading}>{value.heading}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Models;
