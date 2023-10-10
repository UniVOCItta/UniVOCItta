import React from 'react';
import '../../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// Imgs
import muratov from "../../../../assets/imgs/travellers/dmitry_muratov.jfif";
import nikitenko from "../../../../assets/imgs/travellers/Alexandre_Nikitenko.jpg";
import pokvrosky from "../../../../assets/imgs/travellers/Nikolai_Pokrovsky.jpg";
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
              src={portrait_placeholder} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>A Name</h4>
              <p className='slider-p'>A Nationality</p>
              <p className='slider-p'>Small description</p>
              <p>
                <HashLink to='https://en.wikipedia.org/wiki/Laura_Bassi'><button className='slider-button'>{t('footer.more')}</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={muratov} alt='Muratov'></img>
              <h4 className='slider-h2'>Dmitry Andreyevich Muratov</h4>
              <p className='slider-p'>Russian</p>
              <p className='slider-p'>Journalist, television presenter and the editor-in-chief of the Russian newspaper Novaya Gazeta.</p>
              <p>
                <HashLink to='https://ru.wikipedia.org/wiki/%D0%9C%D1%83%D1%80%D0%B0%D1%82%D0%BE%D0%B2,_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87'><button className='slider-button'>{t('footer.more')}</button></HashLink>
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
              src={nikitenko} alt='Nikitenko'></img>
              <h4 className='slider-h2'>Aleksandr Nikitenko</h4>
              <p className='slider-p'>??Russian</p>
              <p className='slider-p'>Prominent literary historian.</p>
              <p>
                <HashLink to='https://ru.wikipedia.org/wiki/%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D0%B5%D0%BD%D0%BA%D0%BE,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%92%D0%B0%D1%81%D0%B8%D0%BB%D1%8C%D0%B5%D0%B2%D0%B8%D1%87'><button className='slider-button'>{t('footer.more')}</button></HashLink>
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
              src={pokvrosky} alt='Pokrovsky'></img>
              <h4 className='slider-h2'>Nikolai Nikolayevich Pokrovsky</h4>
              <p className='slider-p'>Russian</p>
              <p className='slider-p'>Politician and the last foreign minister of the Russian Empire.</p>
              <p>
                <HashLink to='https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BA%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B8%D1%87_(%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C)'><button className='slider-button'>{t('footer.more')}</button></HashLink>
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
          </Carousel>
    </div>
    </>
  )
}

export default RussianTravellers;