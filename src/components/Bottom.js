import React from 'react';
import './Bottom.css';
// Link
import { Link } from 'react-router-dom';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// Imgs
import logo from '../assets/imgs/logo_white.png';
// Translation
import { useTranslation } from "react-i18next";


function Bottom() {
  // Translation 
  const { t } = useTranslation();
  return (
    <>
      <div className='bottom-container'>
        <div className='bottom-row'>
          <Link to='/' className='bottom-link'>
            <AiIcons.AiFillHome className='bottom-icon' id='home' />
            <span className='bottom-text'>Home</span>
          </Link>
          <Link to='/corpus' className='bottom-link'>
            <FaIcons.FaBook className='bottom-icon' id='book' />
            <span className='bottom-text'>{t('permanent_bar.corpus')}</span>
          </Link>
          <Link to='/' className='bottom-link'>
            <img className='logo-bottom' src={logo} alt='Logo' />
          </Link>
          <Link to='/maps' className='bottom-link'>
            <FaIcons.FaMapMarkerAlt className='bottom-icon' id='pin' />
            <span className='bottom-text'>{t('permanent_bar.maps')}</span>
          </Link>
          <Link to='/signin/profile' className='bottom-link'>
            <FaIcons.FaUserAlt className='bottom-icon' id='user' />
            <span className='bottom-text'>{t('permanent_bar.profile')}</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Bottom;