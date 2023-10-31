import React from 'react';
import byron from "../../../../../assets/imgs/travellers/en/Lord_Byron.jpg";
import portrait from "../../../../../assets/imgs/travellers/Portrait_placeholder.png";
// Router-dom
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Translation
import { useTranslation } from "react-i18next";

function TravellerPage() {

  const { t } = useTranslation(); 

  return (
    <>
    <div className='container-fluid'>
    <Breadcrumb>
        <Breadcrumb.Item><HashLink smooth to='/' id='crumb'>Home</HashLink></Breadcrumb.Item>
        <Breadcrumb.Item>
          <HashLink smooth to="/maps" id='crumb'>
          Maps
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <HashLink smooth to="/maps/travellers" id='crumb'>
          Travellers
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <HashLink smooth to="/maps/travellers/english_travellers" id='crumb'>
           English Travellers
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Lord Byron</Breadcrumb.Item>
    </Breadcrumb>
      <h1>Lord Byron</h1>
      <img src={byron} className='traveller-page'></img>
      <div className='traveller-description'>
        <p><strong>Nationality</strong>: {t('travellers.en_nationality')}</p>
        <p><strong>Lifetime</strong>: 1788-1824</p>
        <p><strong>Occupation</strong>: {t('travellers.en_Starke_occupation')}</p>
        <p><strong>Visited Bologna in</strong>: 0000/something century</p>
        <p dangerouslySetInnerHTML={{ __html: t('travellers.en_Byron_text')}}></p>
        <h4>Fragments</h4>
        <ul className='traveller-fragments'>
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</li>
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</li>
          <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default TravellerPage;