import React, {useState} from 'react';
//Bootstrap
import { Button } from 'react-bootstrap';
// CSS 
import './Body.css';
// Router-dom 
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// Icons
import * as FaIcons from 'react-icons/fa';
// Imgs 
import placeholder from '../assets/imgs/placeholder.png';
import museum from '../assets/imgs/pinacoteca_Gueraldo_Anna_Chiara.jpg';
import docufilm from '../assets/imgs/bassi_docufilm.jpg';
import food from '../assets/imgs/routes/tortellini_Angelo_Muratore.jpg';
import porticoes from '../assets/imgs/Portici_Bologna_02.jpg';
import unibo from '../assets/imgs/routes/archiginnasio_Wwikiwalter.jpg';
import appennino from '../assets/imgs/appennino.jpg'
import madame from '../assets/imgs/travellers/fr/Mme_de_Staël.jpg';
import dickens from "../assets/imgs/travellers/Dickens.jpg";
import tolstoj from "../assets/imgs/travellers/ru/Tolstoy_Petr_Andreevic.jpg"
import cervantes from "../assets/imgs/travellers/es/miguel_cervantes.jpg";
import lee from "../assets/imgs/travellers/en/Vernone_Lee-Violet_Page.jpg";
// Carousel 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Translation
import { useTranslation } from "react-i18next";
// Reusable elements
import Map from './pages/Maps_pages/Map';


function Body() {
  // Responsiveness of the imgs slider
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  // Translation 
  const { t } = useTranslation();

   const [selectedLanguageButton, setSelectedLanguageButton] = useState(null);
  const handleButtonClick = (language) => {
    setSelectedLanguageButton(language === selectedLanguageButton ? null : language);
  };
  const handleClearSelection = () => {
    setSelectedLanguageButton(null);
  };
  
  return (
    <>
    <div className='container-fluid' id='section-container-white'>
    <h1 id='left' className='section'>UniVOCIttà: voci digitali sull'unicità del patrimonio bolognese</h1>
      <p>{t('body.univocitta_text')}</p>
      <div>
        <Link to='../project'>
          <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
        </Link>
      </div>
    </div>
    {/* Travellers Section */}
    <div className='container-fluid' id='section-container-gray'>
      <h1 id='right' href='#'>{t('body.travellers')}</h1>
        <p>{t('body.travellers_text')} </p>
          {/*Carousel Slider*/}
          <Carousel className='img-carousel'
            responsive={responsive}
            infinite={true}
            centerMode={true}
            >
              <div className='card'>
                <img className='product--image'
                src={dickens}></img>
                <h4 className='body-card-h'>Charles Dickens</h4>
                <p>
                  <button className='body-slider-button'>{t('footer.more')}</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={madame}></img>
                <h4 className='body-card-h'>Madame De Staël</h4>
                <p>
                  <button className='body-slider-button'>{t('footer.more')}</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={tolstoj}></img>
                <h4 className='body-card-h'>Pëtr Andreevič Tolstoj</h4>
                <p>
                  <button className='body-slider-button'>{t('footer.more')}</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={lee}></img>
                <h4 className='body-card-h'>Vernon Lee</h4>
                <p>
                  <button className='body-slider-button'>{t('footer.more')}</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={cervantes}></img>
                <h4 className='body-card-h'>Miguel de Cervantes</h4>
                <p>
                  <button className='body-slider-button'>{t('footer.more')}</button>
                </p>
              </div>
          </Carousel>
            <Link to='../Maps/Travellers'>
              <FaIcons.FaArrowAltCircleRight className='arrow_icon_right'/>
            </Link>
        <br/>
        <br/>
    </div>
    {/* Routes Section */}
    <div className='container-fluid' id='section-container-white'>
      <h1 id='left' href='#'>{t('body.routes')}</h1>
      <p>{t('body.routes_text')}</p>
          <div>
          {/*Carousel Slider*/}
          <Carousel className='img-carousel'
            responsive={responsive}
            infinite={true}
            >
              <div className='card'>
                <img className='product--image'
                  src={museum}
                  alt="La pinacoteca di Bologna, foto di Anna Chiara Gueraldo. 2018"
                  copyright= "Foto di Anna Chiara Gueraldo"
                ></img>
                <h4 className='body-card-h'>Museums</h4>
                <p>
                  <HashLink to='../coming'><button className='body-slider-button'>{t('footer.more')}</button></HashLink>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                  src={food}
                  alt= "Tortellini"
                  copyright= "Angelo.Muratore, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
                ></img>
                <h4 className='body-card-h'>Food</h4>
                <p>
                  <HashLink to='../coming'><button className='body-slider-button'>{t('footer.more')}</button></HashLink>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                  src={docufilm}
                  alt= "Una cattedra per Laura Bassi"
                  copyright= "Unibo"
                ></img>
                <h4 className='body-card-h'>Women</h4>
                <p>
                  <HashLink to='/maps/women'><button className='body-slider-button'>{t('footer.more')}</button></HashLink>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                  src={appennino}
                  alt= "Portici di Bologna"
                  copyright= "Lorenzo Gaudenzi, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
                ></img>
                <h4 className='body-card-h'>Appennino</h4>
                <p>
                <Link to='/maps/appennino'>
                  <button className='body-slider-button'>{t('footer.more')}</button>
                </Link>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                  src={porticoes}
                  alt= "Portici di Bologna"
                  copyright= "Lorenzo Gaudenzi, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
                ></img>
                <h4 className='body-card-h'>UNESCO</h4>
                <p>
                <Link to='../coming'>
                  <button className='body-slider-button'>{t('footer.more')}</button>
                </Link>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={unibo}
                alt= "Archiginnasio ora blu Bologna"
                copyright= "Wwikiwalter, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons"
                ></img>
                <h4 className='body-card-h'>University</h4>
                <p>
                  <HashLink to='../coming'><button className='body-slider-button'>{t('footer.more')}</button></HashLink>
                </p>
              </div>
          </Carousel>
          </div>
          <div>
            <HashLink to='/maps/routes'>
              <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
            </HashLink>
          </div>
    </div>
  {/* Corpus Section */}
  <div className='container-fluid' id='section-container-gray'>
      <h1 id='right' href='#'>{t('body.corpus')}</h1>
        <p>{t('body.corpus_text')}</p>
        <p>{t('body.corpus_text_2')}</p>
        <div className='corpus-buttons'>
          <Link to='../corpus'><Button className='corpus-button-body' variant="outline-dark" onClick={() => handleButtonClick("English")}>{t('en')}</Button></Link>
          <Button className='corpus-button-body' variant="outline-dark" onClick={() => handleButtonClick("French")}>{t('fr')}</Button>
          <Button className='corpus-button-body' variant="outline-dark">{t('es')}</Button>
          <Button className='corpus-button-body' variant="outline-dark">{t('ru')}</Button>
        </div>
        <Link to='../corpus'>
          <FaIcons.FaArrowAltCircleRight className='arrow_icon_right'/>
        </Link>
       <br/>
       <br/>
    </div>
  {/* Places Section */}
    <div className='container-fluid' id='section-container-white'>
      <h1 id='left' href='#'>{t('body.places')}</h1>
        <p>{t('body.places_text')}</p>
            {/*Map*/}
            <Map/>
            <Link to='../maps/places'>
              <FaIcons.FaArrowAltCircleRight className='arrow_icon'/>
            </Link>
    </div>
    </>
  );
}

export default Body;