import React from 'react';
import '../../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import dickens from "../../../../assets/imgs/travellers/en/Dickens.jpg";
import vernon_lee from "../../../../assets/imgs/travellers/en/Vernone_Lee-Violet_Page.jpg";
import portrait_placeholder from "../../../../assets/imgs/travellers/Portrait_placeholder.png";
import trollope from '../../../../assets/imgs/travellers/en/Frances_Trollope.jpg';
import addison from '../../../../assets/imgs/travellers/en/Josep_Addison.jpg';
import burton from '../../../../assets/imgs/travellers/en/Richard_Frances_Burton.jpg';
import byron from '../../../../assets/imgs/travellers/en/Lord_Byron.jpg';
import starke from '../../../../assets/imgs/travellers/en/Mariana_Starke.webp';
import browning from '../../../../assets/imgs/travellers/en/Robert_Browning.jpg';
// Multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// ScrollToTop
import ScrollToTop from '../../../ScrollToTop';
// Translation
import { useTranslation } from "react-i18next";

function EnglishTravellers() {
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
        <Breadcrumb.Item active>{t('maps.travellers_en')}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='travellers'>{t('maps.travellers_en')}</h1>
        <p>{t('maps.travellers_en_text')}</p>
        {/*Slider*/}
          <Carousel 
          responsive={responsive}
          infinite={true}
          >
            <div id="traveller-card" className='card'>
              <img id='fixed' className='product--image'
              src={trollope}></img>
              <h4 className='slider-h2'>Frances Trollope</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Trollope_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/en/trollope'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={dickens}></img>
              <h4 className='slider-h2'>Charles Dickens</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Dickens_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/en/dickens'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={vernon_lee}></img>
              <h4 className='slider-h2'>Vernon Lee</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Lee_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/en/lee'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={addison}></img>
              <h4 className='slider-h2'>Joseph Addison</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Burton_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/en/addison'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={burton}></img>
              <h4 className='slider-h2'>Richard Burton</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Burton_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/en/burton'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={byron}></img>
              <h4 className='slider-h2'>Lord Byron</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Byron_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/en/byron'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={starke}></img>
              <h4 className='slider-h2'>Mariana Starke</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Starke_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/en/starke'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={browning}></img>
              <h4 className='slider-h2'>Robert Browning</h4>
              <p className='slider-p'>{t('travellers.en_nationality')}</p>
              <p className='slider-p'>{t('travellers.en_Browning_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/en/browning'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
          </Carousel>
    </div>
    </>
  )
}

export default EnglishTravellers;