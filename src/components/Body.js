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
import museum from '../assets/imgs/routes/pinacoteca_Gueraldo_Anna_Chiara.jpg';
import docufilm from '../assets/imgs/bassi_docufilm.jpg';
import food from '../assets/imgs/routes/tortellini_Angelo_Muratore.jpg';
import porticoes from '../assets/imgs/Portici_Bologna_02.jpg';
import unibo from '../assets/imgs/routes/archiginnasio_Wwikiwalter.jpg';
import appennino from '../assets/imgs/appennino.jpg';
import city_centre from '../assets/imgs/routes/bologna_free.jpg';
import san_luca from '../assets/imgs/routes/san_luca_wikipedia_Nebbius.jpg';
import madame from '../assets/imgs/travellers/fr/Mme_de_Staël.jpg';
import dickens from "../assets/imgs/travellers/en/Dickens.jpg";
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
import CarouselCard from './CarouselCard';



function Body() {
  // Translation 
  const { t } = useTranslation();

  const carousel_data={
    travellers:[
      {src:dickens,alt:'',copyright:'',title:'Charles Dickens',link:'../maps/travellers/en/dickens',linkText:t('footer.more')},
      {src:madame,alt:'',copyright:'',title:'Madame De Staël',link:'../maps/travellers/fr/destael',linkText:t('footer.more')},
      {src:tolstoj,alt:'',copyright:'',title:'Pëtr Andreevič Tolstoj',link:'../maps/travellers/ru/tolstoj',linkText:t('footer.more')},
      {src:lee,alt:'',copyright:'',title:'Vernon Lee',link:'../maps/travellers/en/lee',linkText:t('footer.more')},
      {src:cervantes,alt:'',copyright:'',title:'Miguel de Cervantes',link:'../maps/travellers/es/cervantes',linkText:t('footer.more')},
    ],
    routes:[
      /*{src:museum,alt:'La pinacoteca di Bologna, foto di Anna Chiara Gueraldo. 2018',copyright:'Foto di Anna Chiara Gueraldo',title:'Museums',link:'../coming',linkText:t('footer.more')},*/
      {src:city_centre,alt:'Centro di Bologna',copyright:'fre',title:'City Centre',link:'/maps/city_centre',linkText:t('footer.more')},
      {src:food,alt:'Tortellini',copyright:'Angelo.Muratore, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',title:'Food',link:'/maps/food',linkText:t('footer.more')},
      {src:docufilm,alt:'Una cattedra per Laura Bassi',copyright:'Unibo',title:'Women',link:'/maps/women',linkText:t('footer.more')},
      {src:appennino,alt:'Appennino',copyright:'Lorenzo Gaudenzi, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',title:'Appennino',link:'/maps/appennino',linkText:t('footer.more')},
      {src:san_luca,alt:'Santuario della Madonna di San Luca',copyright:'Angelo.Muratore, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',title:'Saragozza - San Luca',link:'/maps/san_luca',linkText:t('footer.more')},
      {src:porticoes,alt:'Portici di Bologna',copyright:'Lorenzo Gaudenzi, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',title:'UNESCO',link:'../coming',linkText:t('footer.more')},
      {src:unibo,alt:'Archiginnasio ora blu Bologna',copyright:'Wwikiwalter, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons',title:'University',link:'../coming',linkText:t('footer.more')},
    ]
  }

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
  


   const [selectedLanguageButton, setSelectedLanguageButton] = useState(null);
  const handleButtonClick = (language) => {
    setSelectedLanguageButton(language === selectedLanguageButton ? null : language);
  };
  // const handleClearSelection = () => {
  //   setSelectedLanguageButton(null);
  // };
  
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
          <Carousel
            responsive={responsive}
            infinite={true}
            /*centerMode={true}  - IMMAGINE "SPEZZATE" AI LATI */
            >
              {carousel_data.travellers.map((el,i)=>{
                return <CarouselCard 
                  k={"travellers_"+i} 
                  src={el.src}
                  alt={el.alt}
                  copyright={el.copyright}
                  title={el.title} 
                  link={el.link}
                  linkText={el.linkText}
                />
              })}
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
          <Carousel
            responsive={responsive}
            infinite={true}
            >
             {carousel_data.routes.map((el,i)=>{
                return <CarouselCard 
                  k={"routes_"+i} 
                  src={el.src}
                  alt={el.alt}
                  copyright={el.copyright}
                  title={el.title} 
                  link={el.link}
                  linkText={el.linkText}
                />
              })}
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