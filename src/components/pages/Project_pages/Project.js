import React from 'react';
import '../../../App.css';
// Reac Router
import { Link } from 'react-router-dom';
// Bootstrap
import { Button } from 'react-bootstrap';
// Media
import bologna_video from '../../../assets/videos/bologna_video.mp4';
// Translation
import { useTranslation } from 'react-i18next';
// User Auth
//import { UserAuth } from '../../../context/AuthContext';

export default function Project() {
  const { t } = useTranslation();

  return (
    <>
      <div className='video-container'>
        <video src={bologna_video} alt='Video by <a href="https://pixabay.com/users/caelan-12802865/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=video&amp;utm_content=51131">Caelan Kelley</a> ' autoPlay loop muted />
        <div className='video-content'>
          {/*
          <h1 className='video-title'>Title</h1>
          <Link to='/corpus'>
            <Button className='corpus-button' variant='dark'>
              {t('project.button')}
            </Button>
          </Link>
          */}
        </div>
      </div>
      <div className='container-fluid'>
        <h1 id='univocitta'>{t('project.univocittà')}</h1>
        <p>{t('project.project_text')}</p>
        <h2 id='aim'>{t('project.aim')}</h2>
        <p>{t('project.aim_text')} </p>
        <ul>
          <li>{t('project.aim_li_1')}</li>
          <li>{t('project.aim_li_2')}</li>
          <li>{t('project.aim_li_3')}</li>
        </ul>
      </div>
    </>
  );
}