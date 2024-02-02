import React from 'react';
import '../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// Bootstrap
import { Breadcrumb, Button} from 'react-bootstrap';
// Imgs
import dickens from "../../../assets/imgs/travellers/Dickens.jpg";
import cervantes from "../../../assets/imgs/travellers/miguel_cervantes.jpg";
import madame from "../../../assets/imgs/travellers/fr/Mme_de_Staël.jpg";
import stendhal from "../../../assets/imgs/travellers/fr/Stendhal.jpg";
import lee from "../../../assets/imgs/travellers/en/Vernone_Lee-Violet_Page.jpg";
import tolstoj from "../../../assets/imgs/travellers/ru/Tolstoy_Petr_Andreevic.jpg";
// Icons
import * as FaIcons from 'react-icons/fa';
// Multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// ScrollToTop
import ScrollToTop from '../../ScrollToTop';
// Translation
import { useTranslation } from "react-i18next";

function Travellers() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  // Translation
  const { t } = useTranslation();

  return (
    <>
    <ScrollToTop/>
    <div className='container-fluid'>
      <Breadcrumb>
        <Breadcrumb.Item><HashLink smooth to='/' id='crumb'>Home</HashLink></Breadcrumb.Item>
        <Breadcrumb.Item>
          <HashLink smooth to="/maps" id='crumb'>
          {t('maps.maps')}
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{t('maps.travellers_button')}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='travellers'>{t('maps.travellers_button')}</h1>
        <p>{t('maps.travellers_text')}</p>
          <div className='travellers-buttons'>
            <Link to='/maps/Travellers/English_travellers'><Button className='english_travellers' variant="outline-dark">{t('maps.travellers_en')}<FaIcons.FaUsers/></Button></Link>
            <Link to='/maps/Travellers/french_travellers'><Button className='french_travellers' variant="outline-dark">{t('maps.travellers_fr')}<FaIcons.FaUsers/></Button></Link>
            <Link to='/maps/Travellers/spanish_travellers'><Button className='spanish_travellers' variant="outline-dark">{t('maps.travellers_es')}<FaIcons.FaUsers/></Button></Link>
            <Link to='/maps/Travellers/russian_travellers'><Button className='russian_travellers' variant="outline-dark">{t('maps.travellers_ru')}<FaIcons.FaUsers/></Button></Link>
          </div>
        {/*Slider*/}
        <h2>Highlights</h2>
          <Carousel 
          responsive={responsive}
          infinite={true}
          >
            <div className='card'>
              <img className='product--image'
              src={dickens} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Charles Dickens</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Dickens_text_carousel')}</p>
              <p>
                <HashLink to='/maps/travellers/en/dickens'><button className='slider-button'>More</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={madame} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Madame De Staël</h4>
              <p className='slider-p'>{t('travellers.fr_nationality')}</p>
              <p className='slider-p'>{t('travellers.fr_Stael_text_carousel')}</p>
              <p>
                <HashLink to='/maps/travellers/fr/destael'><button className='slider-button'>More</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={tolstoj} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Pëtr Andreevič Tolstoj</h4>
              <p className='slider-p'>{t('travellers.ru_nationality')}</p>
              <p className='slider-p'>{t('travellers.ru_Tolstoj_text_carousel')}</p>
              <p>
                <HashLink to='/maps/travellers/ru/tolstoj'><button className='slider-button'>More</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={lee} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Vernon Lee</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Lee_text_carousel')}</p>
              <p>
                <HashLink to='/maps/travellers/en/lee'><button className='slider-button'>More</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={cervantes} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Miguel de Cervantes</h4>
              <p className='slider-p'>{t('travellers.es_nationality')}</p>
              <p className='slider-p'>{t('travellers.es_Cervantes_text_carousel')}</p>
              <p>
                <HashLink to='/maps/travellers/es/cervantes'><button className='slider-button'>More</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={stendhal} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Stendhal</h4>
              <p className='slider-p'>{t('travellers.fr_nationality')}</p>
              <p className='slider-p'>{t('travellers.fr_Stendhal_text_carousel')}</p>
              <p>
                <HashLink to='/maps/travellers/fr/stendhal'><button className='slider-button'>More</button></HashLink>
              </p>
            </div>
          </Carousel>
          {/*
          <HashLink to='travellerpage'>Link to traveller page</HashLink>
          <HashLink to='en/dickens'>Link to Dickens</HashLink>
          */}
    </div>
    </>
  )
}

export default Travellers;