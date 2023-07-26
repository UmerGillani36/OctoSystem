import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import classes from './SatisfactionDetails.module.css';
import dq from './../../../../assets/double-quotes.png';
const SatisfactionDetails = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { t } = useTranslation();

  const sliderContent = [
    {
      title: t('SatisfactionDetails:title1'),
      description: t('SatisfactionDetails:description1'),
      designation: t('SatisfactionDetails:designation1'),
    },
    {
      title: t('SatisfactionDetails:title2'),
      description: t('SatisfactionDetails:description2'),
      designation: t('SatisfactionDetails:designation2'),
    },
    {
      title: t('SatisfactionDetails:title3'),
      description: t('SatisfactionDetails:description3'),
      designation: t('SatisfactionDetails:designation3'),
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.col1}>
        <h2 className={classes.headingType}>
          {t('SatisfactionDetails:heading')}
        </h2>
        <div className={classes.imageWrapper}>
          <img
            className={classes.featuredImage}
            src={
              'https://octosystems.com.br/wp-content/uploads/elementor/thumbs/img-aimobie-oj3vd06mvhytqzjmq4ypkl4ud3heq6b94t4bj1751k-q18hp9xdqizaxvbhszhlf3hwxtuiwkz030embl91ry.png'
            }
            alt={'Featured'}
          />
        </div>
      </div>
      <div className={classes.col2}>
      <Slider {...settings}>
  {sliderContent.map((value, index) => (
    <div key={index}>
      <div className={classes.slide}>
        <h3 className={classes.slideTitle}>{value.title}</h3>
        <div className={classes.slideIcon}>
          <img
            className={classes.slideIconImage}
            src={dq}
            alt="double-quotes"
          />
        </div>
        <p className={classes.slideDescription}>{value.description}</p>
        <span className={classes.slideDesignation}>{value.designation}</span>
      </div>
    </div>
  ))}
</Slider>
      </div>
    </div>
  );
};

export default SatisfactionDetails;
