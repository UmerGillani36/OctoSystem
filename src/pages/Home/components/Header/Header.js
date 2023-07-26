import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Header.module.css';
import headerGif from '../../../../assets/headerGif.mp4';
const Header = (props) => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <div className={classes.backgroundGifWrapper}>
        <video className={classes.gif} src={headerGif} autoPlay loop muted />
      </div>
      <div className={classes.redLightOverlay}>
        <img
          loading='lazy'
          className={classes.redLightImage}
          src={
            'https://client.creativesaura.com/octo/wp-content/uploads/2020/03/overlayimage.png'
          }
          alt={'red light overlay'}
        />
      </div>
      <div className={classes.col1}>
        <div className={classes.roboWall}>
          <img
            loading='lazy'
            src={
              'https://client.creativesaura.com/octo/wp-content/uploads/2020/03/ai_rotbot.png'
            }
            alt={'robo wall'}
          />
        </div>
        <div className={classes.content}>
          <h1 className={classes.headingType}>
            {t('Header:title')}
          </h1>
          <span className={classes.bodyType}>{t('Header:description')}</span>
        </div>
      </div>
      <div className={classes.col2}>
        <div className={classes.robotOverlay}>
          <img
            loading='lazy'
            className={classes.robotImage}
            src={
              'https://client.creativesaura.com/octo/wp-content/uploads/2020/02/slide-video.png'
            }
            alt={'Robot overlay'}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
