import React from 'react';
import '../../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import figueroa from "../../../../assets/imgs/travellers/Alvaro_Figueroa.png";
import moratin from "../../../../assets/imgs/travellers/Leandro_Fernàndez_Moratìn.jpg";
import cervantes from "../../../../assets/imgs/travellers/miguel_cervantes.jpg";
import portrait_placeholder from "../../../../assets/imgs/travellers/Portrait_placeholder.png";
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
              src={portrait_placeholder} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Laura Bassi</h4>
              <p className='slider-p'>Italian</p>
              <p className='slider-p'>Physicist and academic.</p>
              <p>
                <HashLink to='https://en.wikipedia.org/wiki/Laura_Bassi'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={figueroa} alt='Figueroa'></img>
              <h4 className='slider-h2'>Alvaro Figueroa</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Politician and businessman.</p>
              <p>
                <HashLink to='https://es.wikipedia.org/wiki/Conde_de_Romanones'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={portrait_placeholder} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>A Name</h4>
              <p className='slider-p'>A Nationality</p>
              <p className='slider-p'>Small descriptio.</p>
              <p>
                <button className='slider-button'>{t('footer.more')}</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={moratin} alt='Moratìn'></img>
              <h4 className='slider-h2'>Leandro Moratìn</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Dramatist, translator and neoclassical poet.</p>
              <p>
                <HashLink to='https://es.wikipedia.org/wiki/Leandro_Fern%C3%A1ndez_de_Morat%C3%ADn'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={portrait_placeholder} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>A Name</h4>
              <p className='slider-p'>A Nationality</p>
              <p className='slider-p'>Small description.</p>
              <p>
                <button className='slider-button'>{t('footer.more')}</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={cervantes} alt='Cervantes'></img>
              <h4 className='slider-h2'>Miguel de Cervantes</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Early Modern writer widely regarded as the greatest writer in the Spanish language and one of the world's pre-eminent novelists.</p>
              <p>
                <HashLink to='https://es.wikipedia.org/wiki/Miguel_de_Cervantes'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={portrait_placeholder} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>A Name</h4>
              <p className='slider-p'>A Nationality</p>
              <p className='slider-p'>Small description.</p>
              <p>
                <button className='slider-button'>More</button>
              </p>
            </div>
          </Carousel>
    </div>
    </>
  )
}

export default SpanishTravellers;