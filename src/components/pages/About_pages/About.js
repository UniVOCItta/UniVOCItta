import React , {useRef, useState, useEffect} from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// Bootstrap
import { Row, Col } from 'react-bootstrap';
// Imgs
import team from '../../../assets/imgs/team.jpg';
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
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //     slidesToSlide: 3
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 5
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 3
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 3
  //   }
  // };

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
           {/* Team */}
            <h2 id='team'>{t('about.team')}</h2>
                <p>Siamo un bel team.</p>
                {/* Contributors' names
                <ul>
                  <li>Valeria Zotti</li>
                  <li>Antonella Luporini</li>
                  <li>Ana Pano Alaman</li>
                  <li>Monica Perotto</li>
                  <li>Monica Turci</li>
                  <li>Carmelo Caruso</li>
                  <li>Valentina Cozzi</li>
                  <li>Tirocinanti: ...</li>
                </ul>
                */}
            {/*Slider            
            <Carousel 
            responsive={responsive}
            infinite={true}
            >
              <div id="traveller-card" className='card'>
                <img id='fixed' className='product--image'
                src={locationIcon}></img>
                <h4 className='slider-h2'>Name</h4>
                <p className='slider-p'>A Nationality</p>
                <p className='slider-p'>Small description.</p>
                <p>
                  <HashLink to='https://en.wikipedia.org/wiki/Laura_Bassi'><button className='slider-button'>aa</button></HashLink>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={locationIcon}></img>
                <h4 className='slider-h2'>Charles Dickens</h4>
                <p className='slider-p'>English</p>
                <p className='slider-p'>Writer and social critic</p>
                <p>
                  <HashLink to='https://en.wikipedia.org/wiki/Charles_Dickens'><button className='slider-button'>aa</button></HashLink>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={locationIcon}></img>
                <h4 className='slider-h2'>A Name</h4>
                <p className='slider-p'>A Nationality</p>
                <p className='slider-p'>Small description</p>
                <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                <p>
                  <button className='slider-button'>sss</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={locationIcon}></img>
                <h4 className='slider-h2'>Lady Miller</h4>
                <p className='slider-p'>English</p>
                <p className='slider-p'>Poet, travel writer, heiress and salon hostess.</p>
                <p>
                  <HashLink to='https://en.wikipedia.org/wiki/Anna,_Lady_Miller'><button className='slider-button'>eeee</button></HashLink>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={locationIcon}></img>
                <h4 className='slider-h2'>A Name</h4>
                <p className='slider-p'>A Nationality</p>
                <p className='slider-p'>Small description.</p>
                <p>
                  <button className='slider-button'>ss</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={locationIcon}></img>
                <h4 className='slider-h2'>A Name</h4>
                <p className='slider-p'>A Nationality</p>
                <p className='slider-p'>Small description.</p>
                <p>
                  <button className='slider-button'>ddd</button>
                </p>
              </div>
              <div className='card'>
                <img className='product--image'
                src={locationIcon}></img>
                <h4 className='slider-h2'>A Name</h4>
                <p className='slider-p'>A Nationality</p>
                <p className='slider-p'>Small description.</p>
                <p>
                  <button className='slider-button'>dddd</button>
                </p>
              </div>
            </Carousel>
            */}
            <div id ="figurine" className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid" alt='Immagine placeholder'/>
                    <h4 className="card-title mb-3">Tizio</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} class="img-fluid" alt='Immagine placeholder'/>
                    <h4 className="card-title mb-3">Caio</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid" alt='Immagine placeholder'/>
                    <h4 className="card-title mb-3">Sempronio</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div id ="figurine" className="row g-4 justify-content-center">
              {/*
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid" alt='Immagine placeholder'/>
                    <h4 className="card-title mb-3">Nina</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid" alt='Immagine placeholder'/>
                    <h4 className="card-title mb-3">Pinta</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card bg-light">
                  <div className="card-body text-center">
                    <img src={team} className="img-fluid" alt='Immagine placeholder'/>
                    <h4 className="card-title mb-3">Maria</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                      </ul>
                    <Link className='fa-brands' to='#'><FaIcons.FaFacebook/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaGithub/></Link>
                    <Link className='fa-brands' to='#'><FaIcons.FaEnvelope/></Link>
                  </div>
                </div>
              </div>
            */}
            </div>
            <br/>
            {/* Tirocinanti 
            <h3><strong>Trainees</strong></h3>
              <h4>English</h4>
                <ul>
                    <li>Zhanhong Huang</li>
                    <li>Francesca Masso</li>
                    <li>Lorem ipsum</li>
                </ul>
              <h4>French</h4>
                <ul>
                    <li>Ludovica Da Lozzo</li>
                    <li>Alessia Orlandi</li>
                    <li>Lorem ipsum</li>
                </ul>
              <h4>Spanish</h4>
                <ul>
                    <li>Kimberly Pastorelli</li>
                    <li>Lorem ipsum</li>
                    <li>Lorem ipsum</li>
                </ul>
              <h4>Russian</h4>
                <ul>
                    <li>Anastasiia Hulevych</li>
                    <li>Elisa Mastrorilli</li>
                    <li>Alena Nagovitcyna</li>
                </ul>
            */}
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