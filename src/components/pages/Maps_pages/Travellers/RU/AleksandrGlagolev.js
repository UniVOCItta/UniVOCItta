import React from 'react';
import glagolev from "../../../../../assets/imgs/travellers/ru/Alexandr_Glagolev.jpg";
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
          <HashLink smooth to="/maps/travellers/russian_travellers" id='crumb'>
           Russian Travellers
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Andrej Gavrilovič Glagolev</Breadcrumb.Item>
    </Breadcrumb>
      <h1>Andrej Gavrilovič Glagolev</h1>
      <img src={glagolev} className='traveller-page'></img>
      <div className='traveller-description'>
        <p><strong>Nationality</strong>: {t('travellers.ru_nationality')}</p>
        <p><strong>Lifetime</strong>: 1793-1844</p>
        <p><strong>Occupation</strong>: {t('travellers.ru_Glagolev_occupation')}</p>
        {/*<p><strong>Visited Bologna in</strong>: 0000/something century</p>*/}
        <p dangerouslySetInnerHTML={{ __html: t('travellers.ru_Glagolev_text')}}></p>
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