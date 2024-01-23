import React from 'react';
import '../../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import portrait_placeholder from "../../../../assets/imgs/travellers/Portrait_placeholder.png";
import taine from "../../../../assets/imgs/travellers/fr/Hippolyte_Taine.jpg";
import de_staël from "../../../../assets/imgs/travellers/fr/Mme_de_Staël.jpg";
import bazin from "../../../../assets/imgs/travellers/fr/Rene_Bazin.jpg";
import lande from "../../../../assets/imgs/travellers/fr/Jérôme_de_La_Lande.jpg";
import montaigne from "../../../../assets/imgs/travellers/fr/Michel_de_Montaigne.jpg";
import goncourt_brothers from "../../../../assets/imgs/travellers/fr/Goncourt_brothers.jpg";
import stendhal from "../../../../assets/imgs/travellers/fr/Stendhal.jpg";
// Multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// ScrollToTop
import ScrollToTop from '../../../ScrollToTop';
// Translation
import { useTranslation } from "react-i18next";

function FrenchTravellers() {
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
        <Breadcrumb.Item active>{t('maps.travellers_fr')}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='travellers'>{t('maps.travellers_fr')}</h1>
        <p>{t('maps.travellers_fr_text')}</p>
        {/*Slider*/}
          <Carousel 
          responsive={responsive}
          infinite={true}
          >
            <div id="traveller-card" className='card'>
              <img id='fixed' className='product--image'
              src={goncourt_brothers} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>J. & E. de Goncourt</h4>
              <p className='slider-p'>{t('travellers.fr_nationality')}</p>
              <p className='slider-p'>{t('travellers.fr_Goncourt_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/fr/goncourt'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={montaigne} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Michel de Montaigne</h4>
              <p className='slider-p'>{t('travellers.fr_nationality')}</p>
              <p className='slider-p'>{t('travellers.fr_Montaigne_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/fr/montaigne'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={lande} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Jêrome de La Lande</h4>
              <p className='slider-p'>{t('travellers.fr_nationality')}</p>
              <p className='slider-p'>{t('travellers.fr_Lande_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/fr/lande'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={bazin} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>René Bazin</h4>
              <p className='slider-p'>{t('travellers.fr_nationality')}</p>
              <p className='slider-p'>{t('travellers.fr_Bazin_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/fr/bazin'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={de_staël} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Madame De Staël</h4>
              <p className='slider-p'>{t('travellers.fr_nationality')}</p>
              <p className='slider-p'>{t('travellers.fr_Stael_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/fr/destael'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={taine} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Hippolyte Taine</h4>
              <p className='slider-p'>{t('travellers.fr_nationality')}</p>
              <p className='slider-p'>{t('travellers.fr_Taine_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/fr/taine'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={stendhal} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Stendhal</h4>
              <p className='slider-p'>{t('travellers.fr_nationality')}</p>
              <p className='slider-p'>{t('travellers.fr_Stendhal_text_carousel')}</p>
              <p>
                <HashLink to='./maps/travellers/fr/stendhal'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
          </Carousel>
    </div>
    </>
  )
}

export default FrenchTravellers;