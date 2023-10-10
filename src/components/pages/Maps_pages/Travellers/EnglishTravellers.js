import React from 'react';
import '../../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import dickens from "../../../../assets/imgs/travellers/en/Dickens.jpg";
import lady_miller from "../../../../assets/imgs/travellers/en/lady_miller.PNG";
import js_smith from "../../../../assets/imgs/travellers/en/James_Edward_Smith.jpg";
import john_evelyn from "../../../../assets/imgs/travellers/en/John_Evelyn.jpg";
import lady_morgan from "../../../../assets/imgs/travellers/en/LadyMorgan.jpg";
import vernon_lee from "../../../../assets/imgs/travellers/en/Vernone_Lee-Violet_Page.jpg";
import portrait_placeholder from "../../../../assets/imgs/travellers/Portrait_placeholder.png";
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
              src={lady_morgan}></img>
              <h4 className='slider-h2'>Sydney, Lady Morgan</h4>
              <p className='slider-p'>Irish</p>
              <p className='slider-p'>Novelist, best known for The Wild Irish Girl (1806), a romantic novel.</p>
              <p>
                <HashLink to='https://it.wikipedia.org/wiki/Lady_Morgan'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={dickens}></img>
              <h4 className='slider-h2'>Charles Dickens</h4>
              <p className='slider-p'>English</p>
              <p className='slider-p'>Writer and social critic, the greatest novelist of the Victorian era.</p>
              <p>
                <HashLink to='https://en.wikipedia.org/wiki/Charles_Dickens'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={vernon_lee}></img>
              <h4 className='slider-h2'>Vernon Lee</h4>
              <p className='slider-p'>English</p>
              <p className='slider-p'>Pseudonym of the British writer Violet Paget.</p>
              <p>
                <HashLink to='https://en.wikipedia.org/wiki/Vernon_Lee'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={lady_miller}></img>
              <h4 className='slider-h2'>Lady Miller</h4>
              <p className='slider-p'>English</p>
              <p className='slider-p'>Poet, travel writer, heiress and salon hostess.</p>
              <p>
                <HashLink to='https://en.wikipedia.org/wiki/Anna,_Lady_Miller'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={js_smith}></img>
              <h4 className='slider-h2'>James Edward Smith</h4>
              <p className='slider-p'>English</p>
              <p className='slider-p'>Botanist and founder of the Linnean Society.</p>
              <p>
                <HashLink to='https://en.wikipedia.org/wiki/James_Edward_Smith_(botanist)'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={john_evelyn}></img>
              <h4 className='slider-h2'>John Evelyn</h4>
              <p className='slider-p'>English</p>
              <p className='slider-p'>Writer, landowner, gardener, courtier and minor government official.</p>
              <p>
                <HashLink to='https://en.wikipedia.org/wiki/John_Evelyn'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={portrait_placeholder}></img>
              <h4 className='slider-h2'>A Name</h4>
              <p className='slider-p'>A Nationality</p>
              <p className='slider-p'>Small description.</p>
              <p>
                <HashLink to='#'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
          </Carousel>
    </div>
    </>
  )
}

export default EnglishTravellers;