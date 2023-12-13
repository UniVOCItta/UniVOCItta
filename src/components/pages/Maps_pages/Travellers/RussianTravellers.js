import React from 'react';
import '../../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import muratov from "../../../../assets/imgs/travellers/ru/muratov.jpg";
import grec from "../../../../assets/imgs/travellers/ru/Nikolay_Grech.jpg";
import herzen from "../../../../assets/imgs/travellers/ru/Herzen.jpg";
import fonzivin from "../../../../assets/imgs/travellers/ru/Denis_Fonvizin2.jpg";
import tolstoj from "../../../../assets/imgs/travellers/ru/Tolstoy_Petr_Andreevic.jpg";
import portrait_placeholder from "../../../../assets/imgs/travellers/Portrait_placeholder.png";
// Multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// ScrollToTop
import ScrollToTop from '../../../ScrollToTop';
// Translation
import { useTranslation } from "react-i18next";

function RussianTravellers() {
  const { t } = useTranslation();
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
        <Breadcrumb.Item>
          <HashLink smooth to="/maps/travellers" id='crumb'>
          {t('maps.travellers_button')}
          </HashLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{t('maps.travellers_ru')}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='travellers'>{t('maps.travellers_ru')}</h1>
        <p>{t('maps.travellers_ru_text')}</p>
        {/*Slider*/}
          <Carousel 
          responsive={responsive}
          infinite={true}
          >
            <div id="traveller-card" className='card'>
              <img id='fixed' className='product--image'
              src={tolstoj} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Pëtr Andreevič Tolstoj</h4>
              <p className='slider-p'>{t('travellers.ru_nationality')}</p>
              <p className='slider-p'>{t('travellers.ru_Tolstoj_text_carousel')}.</p>
              <p>
                <HashLink to='../maps/travellers/ru/tolstoj'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={muratov} alt='Muratov'></img>
              <h4 className='slider-h2'>Pavel Pavlovič Muratov</h4>
              <p className='slider-p'>{t('travellers.ru_nationality')}</p>
              <p className='slider-p'>{t('travellers.ru_Muratov_text_carousel')}.</p>
              <p>
                <HashLink to='../maps/travellers/ru/muratov'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={fonzivin} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Denis Ivanovič Fonvizin</h4>
              <p className='slider-p'>{t('travellers.ru_nationality')}</p>
              <p className='slider-p'>{t('travellers.ru_Fonzivin_text_carousel')}.</p>
              <p>
                <HashLink to='../maps/travellers/ru/fonzivin'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={portrait_placeholder} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Andrej Gavrilovič Glagolev</h4>
              <p className='slider-p'>{t('travellers.ru_nationality')}</p>
              <p className='slider-p'>{t('travellers.ru_Glagolev_text_carousel')}</p>
              <p>
                <HashLink to='../maps/travellers/ru/glagolev'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={grec} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Nikolaj Ivanovič Greč</h4>
              <p className='slider-p'>{t('travellers.ru_nationality')}</p>
              <p className='slider-p'>{t('travellers.ru_Grec_text_carousel')}</p>
              <p>
                <HashLink to='../maps/travellers/ru/grec'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={herzen} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Aleksandr Herzen</h4>
              <p className='slider-p'>{t('travellers.ru_nationality')}</p>
              <p className='slider-p'>{t('travellers.ru_Herzen_text_carousel')}</p>
              <p>
                <HashLink to='../maps/travellers/ru/grec'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
          </Carousel>
    </div>
    </>
  )
}

export default RussianTravellers;