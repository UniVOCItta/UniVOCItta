import React , {useRef, useState, useEffect} from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// Bootstrap
import { Row, Col } from 'react-bootstrap';
// Imgs
import team from '../../../assets/imgs/team.jpg';
import zotti from '../../../assets/imgs/team/zotti.jpg';
import pano from '../../../assets/imgs/team/pano.jpeg'
import cozzi from '../../../assets/imgs/team/cozzi.jpg';
import caruso from '../../../assets/imgs/team/caruso.jpeg' ; 
import perotto from '../../../assets/imgs/team/perotto.png' ; 
import vitali from '../../../assets/imgs/team/vitali.png';
import gramellini from '../../../assets/imgs/team/gramellini.jpg'; 
import uni from '../../../assets/imgs/via_cartoleria_UNIBO.jpg';
import locationIcon from '../../../assets/imgs/maps-icon.png';
// import placeholder from '../../../assets/imgs/placeholder.png';
import unibo_logo from '../../../assets/imgs/logos/unibo_logo.jpg';
import lilec_logo from '../../../assets/imgs/logos/lilec_logo.jpg';
import lab_logo from '../../../assets/imgs/logos/lab_logo.png'
// Icons
import * as FaIcons from 'react-icons/fa';
// import * as FiIcons from 'react-icons/fi';
// Reusable elements
//import EmailForm from './EmailForm';
// Map (leafltet)
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "leaflet-fullscreen/dist/Leaflet.fullscreen.js";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
// Multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Bootstrap
// import { Carousel, Button } from 'react-bootstrap';
// Translation
import { useTranslation } from "react-i18next";



function LeafletgeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      marker: {
        locationIcon /*NON FUNZIONA */
      }
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
} 

const markerIcon = new L.Icon({
    iconUrl: require ('../../../assets/imgs/maps-icons/maps-icon-maroon.png'),
    iconSize: [40,40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
})

export default function About() {
  const [center, setCenter] = useState({lat: 44.489684, lng: 11.349136});
  const ZOOM_LEVEL = 17;
  const mapRef = useRef()

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
        {/* IMG BACKGROUND */}
        <img id='img-background' src={uni} alt='Via Cartoleria, 5 - Dipartimento LILEC' copyright='©Università di Bologna' className='img-fluid'/>
        {/*}
        <div className='img-content'>
          <h1 className='img-title'>ABOUT US</h1>
          <Link to='#'><Button className='corpus-button' variant="dark">Button</Button></Link>
        </div>
        */}
        <div className='container-fluid'>
        {/* ABOUT US */}
        <h1 className='about'>{t('about.about')}</h1>
            <p>{t('about.text')}</p>
            {/*Prova Carosello*/}
            {/* 
            <Carousel className='carousel'>
              <Carousel.Item interval={500}>
                <div className="carousel-image-overlay"></div>
                <img
                  className="d-block w-100"
                  src={cozzi}
                  alt="Bologna seen from Asinelli tower"
                  copyright= "Goldmund100 (Luca Volpi), CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
                />
                <Carousel.Caption>
                  <h3>{t('routes.city_centre')}</h3>
                  <p className='carousel-p'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  <Link to='/maps/city_centre'><Button className='corpus-button' variant="dark">{t('body.go_button')}</Button></Link>
                </Carousel.Caption>
              </Carousel.Item>
          \</Carousel>
          */}
           {/* Team */}
            <h2 id='team'>{t('about.team')}</h2>        
            <Carousel 
            responsive={responsive}
            infinite={true}
            >
              <div id="collaborator-card" className='card'>
                <img id='fixed' className='product--image'
                src={zotti}></img>
                <h4 className='slider-h2'>Valeria Zotti</h4>
                <p className='slider-p'>Professoressa associata di lingua e linguistica francese presso il Dipartimento di Lingue, Letterature e Culture Moderne.</p>
                <p>
                  <HashLink to='https://www.unibo.it/sitoweb/valeria.zotti'><button className='slider-button'>{t('maps.more')}</button></HashLink>
                </p>
              </div>
              <div id="collaborator-card" className='card'>
                <img id='fixed' className='product--image' 
                src={pano}></img>
                <h4 className='slider-h2'>Ana Pano Alamán</h4>
                <p className='slider-p'>Professoressa associata di lingua e linguistica spagnola presso il Dipartimento di Lingue, Letterature e Culture Moderne.</p>
                <p>
                  <HashLink to='https://www.unibo.it/sitoweb/valeria.zotti'><button className='slider-button'>{t('maps.more')}</button></HashLink>
                </p>
              </div>
              <div id="collaborator-card" className='card'>
                <img id='fixed' className='product--image'
                src={perotto}></img>
                <h4 className='slider-h2'>Monica Perotto</h4>
                <p className='slider-p'>Professoressa associata di lingua e linguistica russa presso il Dipartimento di Lingue, Letterature e Culture Moderne.</p>
                <p>
                  <HashLink to='https://www.unibo.it/sitoweb/valeria.zotti'><button className='slider-button'>{t('maps.more')}</button></HashLink>
                </p>
              </div>
              <div id="collaborator-card" className='card'>
                <img id='fixed' className='product--image'
                src={team}></img>
                <h4 className='slider-h2'>Monica Turci</h4>
                <p className='slider-p'>Professoressa associata di lingua e linguistica inglese presso il Dipartimento di Lingue, Letterature e Culture Moderne.</p>
                <p>
                  <HashLink to='https://www.unibo.it/sitoweb/valeria.zotti'><button className='slider-button'>{t('maps.more')}</button></HashLink>
                </p>
              </div>
              <div id="collaborator-card" className='card'>
                <img id='fixed' className='product--image'
                src={vitali}></img>
                <h4 className='slider-h2'>Fabio Vitali</h4>
                <p className='slider-p'>Professore ordinario di informatica presso il Dipartimento di Informatica - Scienza e Ingegneria.</p>
                <p>
                  <HashLink to='https://www.unibo.it/sitoweb/valeria.zotti'><button className='slider-button'>{t('maps.more')}</button></HashLink>
                </p>
              </div>
              <div id="collaborator-card" className="card justify-content-center">
                <img id='fixed' className='product--image'
                src={cozzi}></img>
                <h4 className='slider-h2'>Valentina Cozzi</h4>
                <p className='slider-p'>Dottoressa in Digital Humanities e Digital Knowledge presso il Dipartimento di Filologia Classica e Italianistica.</p>
                <p>
                  <HashLink to='https://github.com/valentinacozzi'><button className='slider-button'>{t('maps.more')}</button></HashLink>
                </p>
              </div>
              <div id="collaborator-card" className='card'>
                <img id='fixed' className='product--image'
                src={gramellini}></img>
                <h4 className='slider-h2'>Rita Gramellini</h4>
                <p className='slider-p'>Dottoranda in lingua e linguistica francese presso il Dipartimento di Lingue, Letterature e Culture Moderne.</p>
                <p>
                  <HashLink to='https://www.unibo.it/sitoweb/valeria.zotti'><button className='slider-button'>{t('maps.more')}</button></HashLink>
                </p>
              </div>
              <div id="collaborator-card" className='card'>
                <img id='fixed' className='product--image'
                src={caruso}></img>
                <h4 className='slider-h2'>Carmelo Caruso</h4>
                <p className='slider-p'>Tecnico dell’area elaborazione dati presso il Dipartimento di Lingue, Letterature e Culture Moderne.</p>
                <p>
                  <HashLink to='https://www.unibo.it/sitoweb/valeria.zotti'><button className='slider-button'>{t('maps.more')}</button></HashLink>
                </p>
              </div>
            </Carousel>
            <br/>
            {/* Institutions and Partners */}
            <h2 id='partners'>{t('about.institution')}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Row>
                  <Col>
                  <img src={unibo_logo}></img>
                  </Col>
                  <Col>
                  <img src={lilec_logo}></img>
                  </Col>
                  <Col>
                  <img src={lab_logo}></img>
                  </Col>
                </Row>
            
            {/* Contacts */}
            <h2 id='contacts'>{t('about.contact')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('about.contact_text') }}></p>
                {/*<EmailForm/>*/}
                <h3>{t('about.reach_us')}</h3>
                <p>{t('about.reach_us_text')}</p>
                  <MapContainer fullscreenControl={true} searchControl={true} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                    <TileLayer
                    url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=x00TtaN04P23Op2E8DqF"
                    //NON FUNZIONA PIU' (API key differente) url="https://api.maptiler.com/maps/stage/256/{z}/{x}/{y}.png?key=0OrvEnHAAWTy5CyHcrD8"
                    attribution='<a className="map_a" href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a className="map_a" href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    maxZoom={20}
                    />
                      <Marker position={[44.489684, 11.349136]} icon={markerIcon}>
                          <Popup>
                              <p>{t('about.reach_us_text')}</p>
                              <p>Via Cartoleria 5, Bologna</p>
                          </Popup>
                      </Marker>
                    <LeafletgeoSearch/>
                </MapContainer>
        </div>
        </>
    )
}