import React from 'react';
import '../../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import voltaire from "../../../../assets/imgs/travellers/voltaire.jpg";
import remusat from "../../../../assets/imgs/travellers/Remusat_Charles.jpg";
import faure from "../../../../assets/imgs/travellers/Faure_Gabriel.jfif";
import portrait_placeholder from "../../../../assets/imgs/travellers/Portrait_placeholder.png";
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
              src={portrait_placeholder} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>A Name</h4>
              <p className='slider-p'>Italian</p>
              <p className='slider-p'>Physicist and academic.</p>
              <p>
                <HashLink to='https://en.wikipedia.org/wiki/Laura_Bassi'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={faure} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Fauré Gabriel</h4>
              <p className='slider-p'>French</p>
              <p className='slider-p'>Poet, novelist and essayist and social critic</p>
              <p>
                <HashLink to='https://fr.wikipedia.org/wiki/Gabriel_Faur%C3%A9'><button className='slider-button'>{t('footer.more')}</button></HashLink>
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
              src={remusat} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Charles Rémusat</h4>
              <p className='slider-p'>French</p>
              <p className='slider-p'>Politician and writer.</p>
              <p>
                <HashLink to='https://fr.wikipedia.org/wiki/Charles_de_R%C3%A9musat'><button className='slider-button'>{t('footer.more')}</button></HashLink>
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
              src={voltaire} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Voltaire</h4>
              <p className='slider-p'>French</p>
              <p className='slider-p'>Enlightenment writer, historian, and philosopher.</p>
              <p>
                <HashLink to='https://fr.wikipedia.org/wiki/Voltaire'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={portrait_placeholder} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>A Name </h4>
              <p className='slider-p'>A Nationality</p>
              <p className='slider-p'>Small description.</p>
              <p>
                <button className='slider-button'>{t('footer.more')}</button>
              </p>
            </div>
          </Carousel>
    </div>
    </>
  )
}

export default FrenchTravellers;