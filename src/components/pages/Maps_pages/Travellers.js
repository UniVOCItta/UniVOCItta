import React from 'react';
import '../../../App.css';
// Router-dom
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
// Bootstrap
import { Breadcrumb, Button} from 'react-bootstrap';
// Imgs
import bassi from '../../../assets/imgs/travellers/Laura_Bassi.jpg';
import dickens from "../../../assets/imgs/travellers/Dickens.jpg";
import figueroa from "../../../assets/imgs/travellers/Alvaro_Figueroa.png"
import lady from "../../../assets/imgs/travellers/lady_miller.PNG";
import moratin from "../../../assets/imgs/travellers/Leandro_Fernàndez_Moratìn.jpg";
import cervantes from "../../../assets/imgs/travellers/miguel_cervantes.jpg";
import voltaire from "../../../assets/imgs/travellers/voltaire.jpg";
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
            <Link to='../maps/Travellers/English_travellers'><Button className='english_travellers' variant="outline-dark">{t('maps.travellers_en')}<FaIcons.FaUsers/></Button></Link>
            <Link to='../maps/Travellers/french_travellers'><Button className='french_travellers' variant="outline-dark">{t('maps.travellers_fr')}<FaIcons.FaUsers/></Button></Link>
            <Link to='../maps/Travellers/spanish_travellers'><Button className='spanish_travellers' variant="outline-dark">{t('maps.travellers_es')}<FaIcons.FaUsers/></Button></Link>
            <Link to='../maps/Travellers/russian_travellers'><Button className='russian_travellers' variant="outline-dark">{t('maps.travellers_ru')}<FaIcons.FaUsers/></Button></Link>
          </div>
        {/*Slider*/}
        <h2>Highlights</h2>
          <Carousel 
          responsive={responsive}
          infinite={true}
          >
            <div id="traveller-card" className='card'>
              <img id='fixed' className='product--image'
              src={bassi} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Laura Bassi</h4>
              <p className='slider-p'>Italian</p>
              <p className='slider-p'>Physicist and academic.</p>
              <p>
                <HashLink to='https://en.wikipedia.org/wiki/Laura_Bassi'><button className='slider-button'>More</button></HashLink>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={dickens} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Charles Dickens</h4>
              <p className='slider-p'>English</p>
              <p className='slider-p'>Writer and social critic</p>
              <p>
                <button className='slider-button'>More</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={figueroa} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Alvaro Figueroa</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Politician and businessman.</p>
              <p>
                <button className='slider-button'>More</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={lady} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Lady Miller</h4>
              <p className='slider-p'>English</p>
              <p className='slider-p'>Poet, travel writer, heiress and salon hostess.</p>
              <p>
                <button className='slider-button'>More</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={moratin} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Leandro Moratìn</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Dramatist, translator and neoclassical poet.</p>
              <p>
                <button className='slider-button'>More</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={cervantes} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Miguel de Cervantes</h4>
              <p className='slider-p'>Spanish</p>
              <p className='slider-p'>Early Modern writer widely regarded as the greatest writer in the Spanish language and one of the world's pre-eminent novelists.</p>
              <p>
                <button className='slider-button'>More</button>
              </p>
            </div>
            <div className='card'>
              <img className='product--image'
              src={voltaire} alt='Portrait placeholder'></img>
              <h4 className='slider-h2'>Voltaire</h4>
              <p className='slider-p'>French</p>
              <p className='slider-p'>Enlightenment writer, historian, and philosopher.</p>
              <p>
                <button className='slider-button'>More</button>
              </p>
            </div>
          </Carousel>
          <HashLink to='maps/travellerpage'>Link to traveller page</HashLink>
    </div>
    </>
  )
}

export default Travellers;