import React from 'react'
import './Header.scss'
import call from '../../assets/call.png'
import email from '../../assets/email.png'
// import instagramIcon from '../../assets/instagramIcon.svg'
// import facebookIcon from '../../assets/facebookIcon.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './HeaderMobile.scss'
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';

const Header = () => {
  return (
    <div
      className='header'>
        <div className="container">
          <div className="header_content">
            <div className="left">
              <div className="call_group">
                <img src={call} alt="иконка трубки" />
                <p>
                  +996(707)-78-00-48</p>
              </div>
              <div className="email_group">
                <img src={email} alt="Почтп" />
                <p>
                  vanillaSky@gmail.com
                </p>
              </div>
            </div>

            <div className="right">
              <div className="social">
                <InstagramIcon className='socialIcon' />
                <WhatsAppIcon className='socialIcon'/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
