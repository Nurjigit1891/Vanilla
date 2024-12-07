import React from 'react';
import './Footer.scss';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';
import fImage1 from '../../assets/footer1.png';
import fImage2 from '../../assets/footer2.png';
import fImage3 from '../../assets/footer3.png';
import fImage4 from '../../assets/footer4.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content">
          <div className="top">
            <div className="left">
              <div className="iconAndText">
                <LocalCafeIcon className='cofeeIcon' />
                <p>{t('footer.brand')}</p>
              </div>
              <p>{t('footer.slogan')}</p>
              <div className="icons">
                <InstagramIcon />
                <CallIcon />
                <WhatsAppIcon />
              </div>
            </div>
            <div className="center">
              <p>{t('footer.pages.title')}</p>
              <p>{t('footer.pages.home')}</p>
              <p>{t('footer.pages.about')}</p>
              <p>{t('footer.pages.menu')}</p>
              <p>{t('footer.pages.contact')}</p>
              <p>{t('footer.pages.book')}</p>
            </div>
            <div className="right">
              <p>{t('footer.instagramTitle')}</p>
              <div className="images">
                <img src={fImage1} alt="Instagram 1" />
                <img src={fImage2} alt="Instagram 2" />
                <img src={fImage3} alt="Instagram 3" />
                <img src={fImage4} alt="Instagram 4" />
              </div>
            </div>
          </div>
          <div className="bottom">
            <p>Copyright © 2024 Hashtag Developer. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
