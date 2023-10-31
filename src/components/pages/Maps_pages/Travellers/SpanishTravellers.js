import React from 'react';
import '../../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import figueroa from "../../../../assets/imgs/travellers/Alvaro_Figueroa.png";
import moratin from "../../../../assets/imgs/travellers/Leandro_Fern…ndez_Mozart.jpg";
import cervantes from "../../../../assets/imgs/travellers/miguel_cervantes.jpg";
import portrait_placeholder from "../../../../assets/imgs/travellers/Portrait_placeholder.png";
import burgos from "../../../../assets/imgs/travellers/es/Cármen_de_Burgos_y_Seguí.jpg";
import alarcòn from "../../../../assets/imgs/travellers/es/Pedro_Antonio_de_Alarcón.jpg";
import galdos from "../../../../assets/imgs/travellers/es/Benito_Pérez_Galdós.jpg";
import baroja from "../../../../assets/imgs/travellers/es/Pío_Baroja.jpg";
// Multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// ScrollToTop
import ScrollToTop from '../../../ScrollToTop';
// Translation
import { useTranslation } from "react-i18next";

function SpanishTravellers() {
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
        <Breadcrumb.Item active>{t('maps.travellers_es')}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='travellers'>{t('maps.travellers_es')}</h1>
        <p>{t('maps.travellers_es_text')}</p>
        {/*Slider*/}
          <Carousel 
          responsive={responsive}
          infinite={true}
          >
            <div id="traveller-card" className='card'>
              <img id='fixed' className='product--image'
              src={burgos} alt='Not stated. Unknown authorUnknown author, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons'></img>
              <h4 className='slider-h2'>Burgos, Carmen de</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Journalist, writer, translator and women's rights activist.</p>
              <p>
                <HashLink to='../maps/travellers/es/burgos'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={alarcòn} alt='Alarcón, Pedro A. de'></img>
              <h4 className='slider-h2'>Alarcón, Pedro A. de</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Novelist, known best for his novel El sombrero de tres picos.</p>
              <p>
                <HashLink to='../maps/travellers/es/alarcon'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={galdos} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Pérez Galdós, Benito</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Realism novelist.</p>
              <p>
                <HashLink to='../maps/travellers/es/galdos'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={moratin} alt='Moratìn'></img>
              <h4 className='slider-h2'>Leandro Moratìn</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Dramatist, translator and neoclassical poet.</p>
              <p>
                <HashLink to='../maps/travellers/es/moratin'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={portrait_placeholder} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>de Villalón, Cristóbal</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Writer and essayst</p>
              <p>
                <HashLink to='../maps/travellers/es/villalon'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={cervantes} alt='Cervantes'></img>
              <h4 className='slider-h2'>Miguel de Cervantes</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Early Modern writer widely regarded as the greatest writer in the Spanish language and one of the world's pre-eminent novelists.</p>
              <p>
                <HashLink to='../maps/travellers/es/cervantes'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={baroja} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Pío Baroja</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Writer, one of the key novelists of the Generation of '98.</p>
              <p>
                <HashLink to='../maps/travellers/es/baroja'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
          </Carousel>
    </div>
    </>
  )
}

export default SpanishTravellers;